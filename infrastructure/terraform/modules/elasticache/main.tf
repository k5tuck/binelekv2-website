# =============================================================================
# ElastiCache Redis Module
# =============================================================================

# =============================================================================
# Subnet Group
# =============================================================================

resource "aws_elasticache_subnet_group" "main" {
  name        = "${var.name_prefix}-redis-subnet-group"
  description = "Redis subnet group for ${var.name_prefix}"
  subnet_ids  = var.private_subnet_ids

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-redis-subnet-group"
  })
}

# =============================================================================
# Security Group
# =============================================================================

resource "aws_security_group" "redis" {
  name        = "${var.name_prefix}-redis-sg"
  description = "Security group for ElastiCache Redis"
  vpc_id      = var.vpc_id

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-redis-sg"
  })
}

resource "aws_security_group_rule" "redis_ingress" {
  count = length(var.allowed_security_groups)

  type                     = "ingress"
  from_port                = 6379
  to_port                  = 6379
  protocol                 = "tcp"
  source_security_group_id = var.allowed_security_groups[count.index]
  security_group_id        = aws_security_group.redis.id
}

resource "aws_security_group_rule" "redis_egress" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.redis.id
}

# =============================================================================
# Parameter Group
# =============================================================================

resource "aws_elasticache_parameter_group" "main" {
  name        = "${var.name_prefix}-redis-params"
  family      = "redis7"
  description = "Redis parameter group for ${var.name_prefix}"

  parameter {
    name  = "maxmemory-policy"
    value = "allkeys-lru"
  }

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-redis-params"
  })
}

# =============================================================================
# ElastiCache Cluster
# =============================================================================

resource "aws_elasticache_cluster" "main" {
  cluster_id           = "${var.name_prefix}-redis"
  engine               = "redis"
  engine_version       = "7.1"
  node_type            = var.node_type
  num_cache_nodes      = var.num_cache_nodes
  port                 = 6379
  parameter_group_name = aws_elasticache_parameter_group.main.name
  subnet_group_name    = aws_elasticache_subnet_group.main.name
  security_group_ids   = [aws_security_group.redis.id]

  # Maintenance
  maintenance_window       = "sun:05:00-sun:06:00"
  snapshot_retention_limit = var.environment == "production" ? 7 : 0
  snapshot_window          = var.environment == "production" ? "03:00-04:00" : null

  # Other
  apply_immediately = var.environment != "production"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-redis"
  })
}

# =============================================================================
# CloudWatch Alarms
# =============================================================================

resource "aws_cloudwatch_metric_alarm" "redis_cpu_high" {
  alarm_name          = "${var.name_prefix}-redis-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ElastiCache"
  period              = 300
  statistic           = "Average"
  threshold           = 75
  alarm_description   = "Redis CPU utilization is too high"

  dimensions = {
    CacheClusterId = aws_elasticache_cluster.main.cluster_id
  }

  tags = var.tags
}

resource "aws_cloudwatch_metric_alarm" "redis_memory_high" {
  alarm_name          = "${var.name_prefix}-redis-memory-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "DatabaseMemoryUsagePercentage"
  namespace           = "AWS/ElastiCache"
  period              = 300
  statistic           = "Average"
  threshold           = 80
  alarm_description   = "Redis memory usage is too high"

  dimensions = {
    CacheClusterId = aws_elasticache_cluster.main.cluster_id
  }

  tags = var.tags
}
