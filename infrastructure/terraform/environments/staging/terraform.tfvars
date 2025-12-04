# =============================================================================
# Staging Environment Configuration
# =============================================================================

environment = "staging"
aws_region  = "us-east-1"

# Domain
domain_name        = "binelek.io"
frontend_subdomain = "staging"
api_subdomain      = "api-staging"

# VPC
vpc_cidr           = "10.0.0.0/16"
availability_zones = ["us-east-1a", "us-east-1b"]

# RDS (smaller for staging)
db_instance_class    = "db.t3.micro"
db_allocated_storage = 20
db_name              = "binelek"
db_username          = "binelek_admin"

# ElastiCache
redis_node_type       = "cache.t3.micro"
redis_num_cache_nodes = 1

# ECS Services (reduced resources for staging)
ecs_services = {
  api-gateway = {
    cpu           = 256
    memory        = 512
    port          = 3000
    desired_count = 1
    health_path   = "/health"
  }
  ai-orchestrator = {
    cpu           = 256
    memory        = 512
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
    cpu           = 512
    memory        = 2048
    port          = 11434
    desired_count = 1
    health_path   = "/"
  }
  support-portal = {
    cpu           = 256
    memory        = 512
    port          = 3001
    desired_count = 1
    health_path   = "/health"
  }
  qdrant = {
    cpu           = 512
    memory        = 1024
    port          = 6333
    desired_count = 1
    health_path   = "/healthz"
  }
}
