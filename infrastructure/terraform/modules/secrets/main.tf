# =============================================================================
# Secrets Manager Module
# =============================================================================

# =============================================================================
# Database Password
# =============================================================================

resource "aws_secretsmanager_secret" "db_password" {
  name        = "${var.name_prefix}/db-password"
  description = "Database password for ${var.name_prefix}"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}/db-password"
  })
}

resource "aws_secretsmanager_secret_version" "db_password" {
  secret_id     = aws_secretsmanager_secret.db_password.id
  secret_string = var.db_password
}

# =============================================================================
# JWT Secret
# =============================================================================

resource "random_password" "jwt_secret" {
  length  = 64
  special = false
}

resource "aws_secretsmanager_secret" "jwt_secret" {
  name        = "${var.name_prefix}/jwt-secret"
  description = "JWT secret for ${var.name_prefix}"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}/jwt-secret"
  })
}

resource "aws_secretsmanager_secret_version" "jwt_secret" {
  secret_id     = aws_secretsmanager_secret.jwt_secret.id
  secret_string = random_password.jwt_secret.result
}

# =============================================================================
# Encryption Key
# =============================================================================

resource "random_password" "encryption_key" {
  length  = 32
  special = false
}

resource "aws_secretsmanager_secret" "encryption_key" {
  name        = "${var.name_prefix}/encryption-key"
  description = "Encryption key for ${var.name_prefix}"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}/encryption-key"
  })
}

resource "aws_secretsmanager_secret_version" "encryption_key" {
  secret_id     = aws_secretsmanager_secret.encryption_key.id
  secret_string = random_password.encryption_key.result
}

# =============================================================================
# Pinecone API Key
# =============================================================================

resource "aws_secretsmanager_secret" "pinecone_api_key" {
  name        = "${var.name_prefix}/pinecone-api-key"
  description = "Pinecone API key for ${var.name_prefix}"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}/pinecone-api-key"
  })
}

resource "aws_secretsmanager_secret_version" "pinecone_api_key" {
  count         = var.pinecone_api_key != "" ? 1 : 0
  secret_id     = aws_secretsmanager_secret.pinecone_api_key.id
  secret_string = var.pinecone_api_key
}

# =============================================================================
# OpenAI API Key
# =============================================================================

resource "aws_secretsmanager_secret" "openai_api_key" {
  name        = "${var.name_prefix}/openai-api-key"
  description = "OpenAI API key for ${var.name_prefix}"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}/openai-api-key"
  })
}

resource "aws_secretsmanager_secret_version" "openai_api_key" {
  count         = var.openai_api_key != "" ? 1 : 0
  secret_id     = aws_secretsmanager_secret.openai_api_key.id
  secret_string = var.openai_api_key
}

# =============================================================================
# Anthropic API Key
# =============================================================================

resource "aws_secretsmanager_secret" "anthropic_api_key" {
  name        = "${var.name_prefix}/anthropic-api-key"
  description = "Anthropic API key for ${var.name_prefix}"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}/anthropic-api-key"
  })
}

resource "aws_secretsmanager_secret_version" "anthropic_api_key" {
  count         = var.anthropic_api_key != "" ? 1 : 0
  secret_id     = aws_secretsmanager_secret.anthropic_api_key.id
  secret_string = var.anthropic_api_key
}
