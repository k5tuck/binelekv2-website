output "dns_name" {
  description = "ALB DNS name"
  value       = aws_lb.main.dns_name
}

output "zone_id" {
  description = "ALB zone ID"
  value       = aws_lb.main.zone_id
}

output "arn" {
  description = "ALB ARN"
  value       = aws_lb.main.arn
}

output "security_group_id" {
  description = "ALB security group ID"
  value       = aws_security_group.alb.id
}

output "target_group_arns" {
  description = "Map of service names to target group ARNs"
  value       = { for k, v in aws_lb_target_group.services : k => v.arn }
}

output "https_listener_arn" {
  description = "HTTPS listener ARN"
  value       = aws_lb_listener.https.arn
}
