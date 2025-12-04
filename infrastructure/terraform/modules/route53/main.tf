# =============================================================================
# Route 53 Module
# =============================================================================

# =============================================================================
# Hosted Zone
# =============================================================================

resource "aws_route53_zone" "main" {
  name    = var.domain_name
  comment = "Managed by Terraform - ${var.environment}"

  tags = merge(var.tags, {
    Name = var.domain_name
  })
}

# =============================================================================
# Outputs for NS records (to be added to domain registrar)
# =============================================================================

output "nameservers" {
  description = "Nameservers to configure at your domain registrar"
  value       = aws_route53_zone.main.name_servers
}
