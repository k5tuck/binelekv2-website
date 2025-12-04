# =============================================================================
# Binelek Infrastructure - Main Configuration
# =============================================================================

locals {
  name_prefix = "${var.project_name}-${var.environment}"

  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

# =============================================================================
# VPC Module
# =============================================================================

module "vpc" {
  source = "./modules/vpc"

  name_prefix        = local.name_prefix
  vpc_cidr           = var.vpc_cidr
  availability_zones = var.availability_zones
  environment        = var.environment

  tags = local.common_tags
}

# =============================================================================
# ACM Certificates Module
# =============================================================================

module "acm" {
  source = "./modules/acm"

  providers = {
    aws = aws.us_east_1
  }

  domain_name         = var.domain_name
  frontend_subdomain  = var.frontend_subdomain
  api_subdomain       = var.api_subdomain
  route53_zone_id     = module.route53.zone_id
  environment         = var.environment

  tags = local.common_tags

  depends_on = [module.route53]
}

# =============================================================================
# Route 53 Module
# =============================================================================

module "route53" {
  source = "./modules/route53"

  domain_name = var.domain_name
  environment = var.environment

  tags = local.common_tags
}

# =============================================================================
# Secrets Manager Module
# =============================================================================

module "secrets" {
  source = "./modules/secrets"

  name_prefix       = local.name_prefix
  environment       = var.environment
  db_password       = module.rds.db_password
  openai_api_key    = var.openai_api_key
  anthropic_api_key = var.anthropic_api_key
  # Note: Vector search uses pgvector in PostgreSQL (no external service needed)

  tags = local.common_tags

  depends_on = [module.rds]
}

# =============================================================================
# RDS PostgreSQL Module
# =============================================================================

module "rds" {
  source = "./modules/rds"

  name_prefix         = local.name_prefix
  environment         = var.environment
  vpc_id              = module.vpc.vpc_id
  private_subnet_ids  = module.vpc.private_subnet_ids
  db_instance_class   = var.db_instance_class
  db_allocated_storage = var.db_allocated_storage
  db_name             = var.db_name
  db_username         = var.db_username
  allowed_security_groups = [module.ecs.ecs_security_group_id]

  tags = local.common_tags

  depends_on = [module.vpc]
}

# =============================================================================
# ElastiCache Redis Module
# =============================================================================

module "elasticache" {
  source = "./modules/elasticache"

  name_prefix             = local.name_prefix
  environment             = var.environment
  vpc_id                  = module.vpc.vpc_id
  private_subnet_ids      = module.vpc.private_subnet_ids
  node_type               = var.redis_node_type
  num_cache_nodes         = var.redis_num_cache_nodes
  allowed_security_groups = [module.ecs.ecs_security_group_id]

  tags = local.common_tags

  depends_on = [module.vpc]
}

# =============================================================================
# ECR Module
# =============================================================================

locals {
  # Services that use official Docker images (no ECR needed)
  official_image_services = ["qdrant", "ollama"]
  # Filter out services that use official images
  ecr_services = [for s in keys(var.ecs_services) : s if !contains(local.official_image_services, s)]
}

module "ecr" {
  source = "./modules/ecr"

  name_prefix = local.name_prefix
  environment = var.environment
  services    = local.ecr_services

  tags = local.common_tags
}

# =============================================================================
# ALB Module
# =============================================================================

module "alb" {
  source = "./modules/alb"

  name_prefix        = local.name_prefix
  environment        = var.environment
  vpc_id             = module.vpc.vpc_id
  public_subnet_ids  = module.vpc.public_subnet_ids
  certificate_arn    = module.acm.api_certificate_arn
  ecs_services       = var.ecs_services

  tags = local.common_tags

  depends_on = [module.vpc, module.acm]
}

# =============================================================================
# ECS Fargate Module
# =============================================================================

module "ecs" {
  source = "./modules/ecs"

  name_prefix           = local.name_prefix
  environment           = var.environment
  aws_region            = var.aws_region
  vpc_id                = module.vpc.vpc_id
  private_subnet_ids    = module.vpc.private_subnet_ids
  alb_security_group_id = module.alb.security_group_id
  alb_target_group_arns = module.alb.target_group_arns
  ecr_repository_urls   = module.ecr.repository_urls
  ecs_services          = var.ecs_services

  # Database configuration
  db_host     = module.rds.db_endpoint
  db_port     = module.rds.db_port
  db_name     = var.db_name
  db_username = var.db_username

  # Redis configuration
  redis_host = module.elasticache.redis_endpoint
  redis_port = module.elasticache.redis_port

  # SQS configuration
  task_queue_url = module.sqs_sns.task_queue_url
  sync_queue_url = module.sqs_sns.sync_queue_url

  # Secrets ARNs
  secrets_arns = module.secrets.secret_arns

  tags = local.common_tags

  depends_on = [
    module.vpc,
    module.rds,
    module.elasticache,
    module.alb,
    module.ecr,
    module.secrets,
    module.sqs_sns
  ]
}

# =============================================================================
# S3 + CloudFront Module (Frontend)
# =============================================================================

module "s3_cloudfront" {
  source = "./modules/s3-cloudfront"

  name_prefix        = local.name_prefix
  environment        = var.environment
  domain_name        = var.domain_name
  frontend_subdomain = var.frontend_subdomain
  certificate_arn    = module.acm.frontend_certificate_arn
  route53_zone_id    = module.route53.zone_id

  tags = local.common_tags

  depends_on = [module.acm, module.route53]
}

# =============================================================================
# SQS/SNS Module
# =============================================================================

module "sqs_sns" {
  source = "./modules/sqs-sns"

  name_prefix = local.name_prefix
  environment = var.environment

  tags = local.common_tags
}

# =============================================================================
# Route 53 DNS Records
# =============================================================================

resource "aws_route53_record" "api" {
  zone_id = module.route53.zone_id
  name    = var.api_subdomain
  type    = "A"

  alias {
    name                   = module.alb.dns_name
    zone_id                = module.alb.zone_id
    evaluate_target_health = true
  }
}
