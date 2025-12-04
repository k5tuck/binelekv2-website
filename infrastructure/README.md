# Binelek AWS Infrastructure

This directory contains the complete AWS infrastructure for deploying the Binelek platform using Terraform and GitHub Actions.

## Architecture Overview

```
Frontend (React)          Backend (Node.js/Python)
      │                           │
      ▼                           ▼
┌──────────────┐          ┌──────────────┐
│  CloudFront  │          │     ALB      │
│     CDN      │          │              │
└──────┬───────┘          └──────┬───────┘
       │                         │
       ▼                         ▼
┌──────────────┐          ┌──────────────┐
│      S3      │          │ ECS Fargate  │
│   (Static)   │          │   Cluster    │
└──────────────┘          └──────┬───────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
        ┌──────────┐      ┌──────────┐      ┌──────────┐
        │   RDS    │      │  Redis   │      │   SQS    │
        │ Postgres │      │          │      │          │
        └──────────┘      └──────────┘      └──────────┘
```

## Directory Structure

```
infrastructure/
├── terraform/
│   ├── modules/           # Reusable Terraform modules
│   │   ├── vpc/           # VPC, subnets, NAT gateway
│   │   ├── rds/           # PostgreSQL database
│   │   ├── elasticache/   # Redis cache
│   │   ├── ecs/           # Fargate cluster & services
│   │   ├── s3-cloudfront/ # Frontend hosting
│   │   ├── route53/       # DNS
│   │   ├── acm/           # SSL certificates
│   │   ├── sqs-sns/       # Message queues
│   │   ├── secrets/       # Secrets Manager
│   │   ├── ecr/           # Container registry
│   │   └── alb/           # Load balancer
│   ├── environments/
│   │   ├── staging/       # Staging config
│   │   └── production/    # Production config
│   ├── main.tf            # Main configuration
│   ├── variables.tf       # Input variables
│   ├── outputs.tf         # Output values
│   └── versions.tf        # Provider versions
├── github-actions/        # CI/CD workflow templates
├── scripts/               # Helper scripts
└── docs/                  # Documentation
```

## Prerequisites

1. **AWS Account** with AdministratorAccess
2. **AWS CLI** configured with credentials
3. **Terraform** >= 1.5.0
4. **Domain** (binelek.io) - can be registered through Route 53

## Quick Start

### 1. Initial Setup

Run the setup script to create the Terraform state bucket:

```bash
./scripts/initial-setup.sh
```

### 2. Configure Secrets

Set your API keys as environment variables or pass them to Terraform:

```bash
export TF_VAR_pinecone_api_key="your-pinecone-key"
export TF_VAR_openai_api_key="your-openai-key"
export TF_VAR_anthropic_api_key="your-anthropic-key"
```

### 3. Deploy Infrastructure

```bash
cd terraform

# Initialize Terraform
terraform init -backend-config="key=staging/terraform.tfstate"

# Review the plan
terraform plan -var-file="environments/staging/terraform.tfvars"

# Apply infrastructure
terraform apply -var-file="environments/staging/terraform.tfvars"
```

### 4. Update DNS

After deployment, update your domain registrar with the Route 53 nameservers:

```bash
terraform output name_servers
```

## GitHub Actions Setup

Copy the workflow files to your repository's `.github/workflows/` directory:

1. `deploy-infrastructure.yml` - Deploys AWS infrastructure
2. `deploy-frontend.yml` - Deploys frontend to S3/CloudFront
3. `deploy-backend.yml` - Deploys backend to ECS
4. `run-migrations.yml` - Runs database migrations

### Required Secrets

Add these secrets to your GitHub repository:

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `PINECONE_API_KEY` | Pinecone API key |
| `OPENAI_API_KEY` | OpenAI API key |
| `ANTHROPIC_API_KEY` | Anthropic API key |
| `STAGING_CLOUDFRONT_DISTRIBUTION_ID` | Staging CloudFront ID |
| `PRODUCTION_CLOUDFRONT_DISTRIBUTION_ID` | Production CloudFront ID |

## Environments

| Environment | Frontend URL | API URL |
|-------------|--------------|---------|
| Staging | https://staging.binelek.io | https://api-staging.binelek.io |
| Production | https://app.binelek.io | https://api.binelek.io |

## Cost Estimation

| Service | Staging | Production |
|---------|---------|------------|
| ECS Fargate | ~$40/mo | ~$80/mo |
| RDS PostgreSQL | ~$15/mo | ~$25/mo |
| ElastiCache Redis | ~$15/mo | ~$15/mo |
| ALB | ~$10/mo | ~$20/mo |
| NAT Gateway | ~$35/mo | ~$35/mo |
| CloudFront/S3 | ~$5/mo | ~$10/mo |
| **Total** | **~$120/mo** | **~$185/mo** |

## Troubleshooting

### ECS Tasks Not Starting

1. Check CloudWatch logs: `/ecs/binelek-{env}/{service}`
2. Verify security groups allow outbound internet access
3. Check secrets are properly configured in Secrets Manager

### Database Connection Failed

1. Verify security group allows port 5432 from ECS
2. Check RDS is in the same VPC as ECS
3. Verify credentials in Secrets Manager

### CloudFront 403 Errors

1. Check S3 bucket policy allows CloudFront OAC
2. Verify CloudFront distribution is enabled
3. Check origin access control is configured

### SSL Certificate Pending

1. Verify DNS validation records in Route 53
2. Wait up to 30 minutes for DNS propagation
3. Check ACM certificate status in AWS Console

## Support

For issues, please check the [project documentation](./docs/AWS_INFRASTRUCTURE_PROJECT.md).
