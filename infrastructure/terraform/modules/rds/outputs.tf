output "db_endpoint" {
  description = "RDS endpoint"
  value       = aws_db_instance.main.address
}

output "db_port" {
  description = "RDS port"
  value       = aws_db_instance.main.port
}

output "db_name" {
  description = "Database name"
  value       = aws_db_instance.main.db_name
}

output "db_username" {
  description = "Database username"
  value       = aws_db_instance.main.username
}

output "db_password" {
  description = "Database password"
  value       = random_password.db_password.result
  sensitive   = true
}

output "db_arn" {
  description = "RDS ARN"
  value       = aws_db_instance.main.arn
}

output "security_group_id" {
  description = "RDS security group ID"
  value       = aws_security_group.rds.id
}
