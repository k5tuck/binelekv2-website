# =============================================================================
# Production Environment Configuration
# =============================================================================

environment = "production"
aws_region  = "us-east-1"

# Domain
domain_name        = "binelek.io"
frontend_subdomain = "app"
api_subdomain      = "api"

# VPC
vpc_cidr           = "10.1.0.0/16"
availability_zones = ["us-east-1a", "us-east-1b"]

# RDS (larger for production)
db_instance_class    = "db.t3.small"
db_allocated_storage = 20
db_name              = "binelek"
db_username          = "binelek_admin"

# ElastiCache
redis_node_type       = "cache.t3.micro"
redis_num_cache_nodes = 1

# ECS Services (full resources for production)
ecs_services = {
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
