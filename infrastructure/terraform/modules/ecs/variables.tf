variable "name_prefix" {
  description = "Prefix for resource names"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "aws_region" {
  description = "AWS region"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "private_subnet_ids" {
  description = "Private subnet IDs"
  type        = list(string)
}

variable "alb_security_group_id" {
  description = "ALB security group ID"
  type        = string
}

variable "alb_target_group_arns" {
  description = "Map of service names to ALB target group ARNs"
  type        = map(string)
}

variable "ecr_repository_urls" {
  description = "Map of service names to ECR repository URLs"
  type        = map(string)
}

variable "ecs_services" {
  description = "ECS service configurations"
  type = map(object({
    cpu           = number
    memory        = number
    port          = number
    desired_count = number
    health_path   = string
  }))
}

variable "db_host" {
  description = "Database host"
  type        = string
}

variable "db_port" {
  description = "Database port"
  type        = number
}

variable "db_name" {
  description = "Database name"
  type        = string
}

variable "db_username" {
  description = "Database username"
  type        = string
}

variable "redis_host" {
  description = "Redis host"
  type        = string
}

variable "redis_port" {
  description = "Redis port"
  type        = number
}

variable "task_queue_url" {
  description = "SQS task queue URL"
  type        = string
}

variable "sync_queue_url" {
  description = "SQS sync queue URL"
  type        = string
}

variable "secrets_arns" {
  description = "Map of secret names to ARNs"
  type        = map(string)
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default     = {}
}
