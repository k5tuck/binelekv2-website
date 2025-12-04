output "frontend_certificate_arn" {
  description = "Frontend certificate ARN"
  value       = aws_acm_certificate_validation.frontend.certificate_arn
}

output "api_certificate_arn" {
  description = "API certificate ARN"
  value       = aws_acm_certificate_validation.api.certificate_arn
}
