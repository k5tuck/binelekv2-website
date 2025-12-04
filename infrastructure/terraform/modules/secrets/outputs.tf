output "secret_arns" {
  description = "Map of secret names to ARNs"
  value = {
    db_password       = aws_secretsmanager_secret.db_password.arn
    jwt_secret        = aws_secretsmanager_secret.jwt_secret.arn
    encryption_key    = aws_secretsmanager_secret.encryption_key.arn
    pinecone_api_key  = aws_secretsmanager_secret.pinecone_api_key.arn
    openai_api_key    = aws_secretsmanager_secret.openai_api_key.arn
    anthropic_api_key = aws_secretsmanager_secret.anthropic_api_key.arn
  }
}

output "db_password_arn" {
  description = "Database password secret ARN"
  value       = aws_secretsmanager_secret.db_password.arn
}

output "jwt_secret_arn" {
  description = "JWT secret ARN"
  value       = aws_secretsmanager_secret.jwt_secret.arn
}
