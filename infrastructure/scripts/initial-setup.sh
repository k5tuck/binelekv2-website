#!/bin/bash

# =============================================================================
# Binelek AWS Infrastructure - Initial Setup Script
# =============================================================================

set -e

echo "=================================================="
echo "  Binelek AWS Infrastructure Setup"
echo "=================================================="
echo ""

# Check for required tools
check_tool() {
    if ! command -v $1 &> /dev/null; then
        echo "Error: $1 is not installed. Please install it first."
        exit 1
    fi
}

echo "Checking required tools..."
check_tool "aws"
check_tool "terraform"
echo "✓ All required tools installed"
echo ""

# Check AWS credentials
echo "Checking AWS credentials..."
if ! aws sts get-caller-identity &> /dev/null; then
    echo "Error: AWS credentials not configured. Run 'aws configure' first."
    exit 1
fi

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
echo "✓ AWS Account: $ACCOUNT_ID"
echo ""

# Get environment
read -p "Environment (staging/production) [staging]: " ENVIRONMENT
ENVIRONMENT=${ENVIRONMENT:-staging}

if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
    echo "Error: Invalid environment. Must be 'staging' or 'production'."
    exit 1
fi

echo ""
echo "Setting up $ENVIRONMENT environment..."
echo ""

# Create Terraform state bucket
STATE_BUCKET="binelek-terraform-state-$ACCOUNT_ID"
echo "Creating Terraform state bucket: $STATE_BUCKET"

if aws s3api head-bucket --bucket "$STATE_BUCKET" 2>/dev/null; then
    echo "✓ State bucket already exists"
else
    aws s3api create-bucket \
        --bucket "$STATE_BUCKET" \
        --region us-east-1

    aws s3api put-bucket-versioning \
        --bucket "$STATE_BUCKET" \
        --versioning-configuration Status=Enabled

    aws s3api put-bucket-encryption \
        --bucket "$STATE_BUCKET" \
        --server-side-encryption-configuration '{
            "Rules": [{"ApplyServerSideEncryptionByDefault": {"SSEAlgorithm": "AES256"}}]
        }'

    echo "✓ State bucket created"
fi

# Create DynamoDB table for state locking
LOCK_TABLE="binelek-terraform-locks"
echo ""
echo "Creating DynamoDB lock table: $LOCK_TABLE"

if aws dynamodb describe-table --table-name "$LOCK_TABLE" &>/dev/null; then
    echo "✓ Lock table already exists"
else
    aws dynamodb create-table \
        --table-name "$LOCK_TABLE" \
        --attribute-definitions AttributeName=LockID,AttributeType=S \
        --key-schema AttributeName=LockID,KeyType=HASH \
        --billing-mode PAY_PER_REQUEST \
        --region us-east-1

    echo "✓ Lock table created"
fi

echo ""
echo "=================================================="
echo "  Setup Complete!"
echo "=================================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Update infrastructure/terraform/versions.tf to use the S3 backend:"
echo "   - bucket = \"$STATE_BUCKET\""
echo "   - dynamodb_table = \"$LOCK_TABLE\""
echo ""
echo "2. Navigate to the terraform directory:"
echo "   cd infrastructure/terraform"
echo ""
echo "3. Initialize Terraform:"
echo "   terraform init -backend-config=\"key=$ENVIRONMENT/terraform.tfstate\""
echo ""
echo "4. Review the plan:"
echo "   terraform plan -var-file=\"environments/$ENVIRONMENT/terraform.tfvars\""
echo ""
echo "5. Apply the infrastructure:"
echo "   terraform apply -var-file=\"environments/$ENVIRONMENT/terraform.tfvars\""
echo ""
echo "6. After Route 53 is created, update your domain registrar"
echo "   with the nameservers from the Terraform output."
echo ""
