# =============================================================================
# General Variables
# =============================================================================

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (staging, production)"
  type        = string
  validation {
    condition     = contains(["staging", "production"], var.environment)
    error_message = "Environment must be 'staging' or 'production'."
  }
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "binelek"
}

# =============================================================================
# Domain Variables
# =============================================================================

variable "domain_name" {
  description = "Root domain name"
  type        = string
  default     = "binelek.io"
}

variable "frontend_subdomain" {
  description = "Frontend subdomain (app for prod, staging for staging)"
  type        = string
}

variable "api_subdomain" {
  description = "API subdomain (api for prod, api-staging for staging)"
  type        = string
}

# =============================================================================
# VPC Variables
# =============================================================================

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "Availability zones"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
}

# =============================================================================
# RDS Variables
# =============================================================================

variable "db_instance_class" {
  description = "RDS instance class"
  type        = string
  default     = "db.t3.micro"
}

variable "db_allocated_storage" {
  description = "RDS allocated storage in GB"
  type        = number
  default     = 20
}

variable "db_name" {
  description = "Database name"
  type        = string
  default     = "binelek"
}

variable "db_username" {
  description = "Database master username"
  type        = string
  default     = "binelek_admin"
}

# =============================================================================
# ElastiCache Variables
# =============================================================================

variable "redis_node_type" {
  description = "ElastiCache Redis node type"
  type        = string
  default     = "cache.t3.micro"
}

variable "redis_num_cache_nodes" {
  description = "Number of Redis cache nodes"
  type        = number
  default     = 1
}

# =============================================================================
# ECS Variables
# =============================================================================

variable "ecs_services" {
  description = "ECS service configurations"
  type = map(object({
    cpu           = number
    memory        = number
    port          = number
    desired_count = number
    health_path   = string
  }))
  default = {
    api-gateway = {
      cpu           = 512
      memory        = 1024
      port          = 3000
      desired_count = 1
      health_path   = "/health"
    }
    ai-orchestrator = {
      cpu           = 512
      memory        = 1024
      port          = 8100
      desired_count = 1
      health_path   = "/health"
    }
    connectors = {
      cpu           = 256
      memory        = 512
      port          = 8101
      desired_count = 1
      health_path   = "/health"
    }
    marketplace = {
      cpu           = 256
      memory        = 512
      port          = 8102
      desired_count = 1
      health_path   = "/health"
    }
    ollama = {
      cpu           = 1024
      memory        = 4096
      port          = 11434
      desired_count = 1
      health_path   = "/"
    }
  }
}

# =============================================================================
# External Service API Keys (stored in Secrets Manager)
# =============================================================================

variable "pinecone_api_key" {
  description = "Pinecone API key"
  type        = string
  sensitive   = true
  default     = ""
}

variable "openai_api_key" {
  description = "OpenAI API key"
  type        = string
  sensitive   = true
  default     = ""
}

variable "anthropic_api_key" {
  description = "Anthropic API key"
  type        = string
  sensitive   = true
  default     = ""
}
