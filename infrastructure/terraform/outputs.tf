# =============================================================================
# Outputs
# =============================================================================

# VPC Outputs
output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}

output "private_subnet_ids" {
  description = "Private subnet IDs"
  value       = module.vpc.private_subnet_ids
}

output "public_subnet_ids" {
  description = "Public subnet IDs"
  value       = module.vpc.public_subnet_ids
}

# RDS Outputs
output "db_endpoint" {
  description = "RDS endpoint"
  value       = module.rds.db_endpoint
}

output "db_port" {
  description = "RDS port"
  value       = module.rds.db_port
}

# ElastiCache Outputs
output "redis_endpoint" {
  description = "Redis endpoint"
  value       = module.elasticache.redis_endpoint
}

# ECS Outputs
output "ecs_cluster_name" {
  description = "ECS cluster name"
  value       = module.ecs.cluster_name
}

output "ecs_service_names" {
  description = "ECS service names"
  value       = module.ecs.service_names
}

# ALB Outputs
output "alb_dns_name" {
  description = "ALB DNS name"
  value       = module.alb.dns_name
}

# CloudFront Outputs
output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = module.s3_cloudfront.distribution_id
}

output "cloudfront_domain_name" {
  description = "CloudFront domain name"
  value       = module.s3_cloudfront.domain_name
}

output "frontend_bucket_name" {
  description = "Frontend S3 bucket name"
  value       = module.s3_cloudfront.bucket_name
}

# ECR Outputs
output "ecr_repository_urls" {
  description = "ECR repository URLs"
  value       = module.ecr.repository_urls
}

# SQS Outputs
output "task_queue_url" {
  description = "Task queue URL"
  value       = module.sqs_sns.task_queue_url
}

output "sync_queue_url" {
  description = "Sync queue URL"
  value       = module.sqs_sns.sync_queue_url
}

# Domain Outputs
output "frontend_url" {
  description = "Frontend URL"
  value       = "https://${var.frontend_subdomain}.${var.domain_name}"
}

output "api_url" {
  description = "API URL"
  value       = "https://${var.api_subdomain}.${var.domain_name}"
}
