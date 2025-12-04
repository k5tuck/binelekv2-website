variable "name_prefix" {
  description = "Prefix for resource names"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "public_subnet_ids" {
  description = "Public subnet IDs"
  type        = list(string)
}

variable "certificate_arn" {
  description = "ACM certificate ARN"
  type        = string
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

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default     = {}
}
