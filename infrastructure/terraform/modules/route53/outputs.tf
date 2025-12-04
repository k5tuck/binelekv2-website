output "zone_id" {
  description = "Route 53 zone ID"
  value       = aws_route53_zone.main.zone_id
}

output "zone_name" {
  description = "Route 53 zone name"
  value       = aws_route53_zone.main.name
}

output "name_servers" {
  description = "Route 53 nameservers"
  value       = aws_route53_zone.main.name_servers
}
