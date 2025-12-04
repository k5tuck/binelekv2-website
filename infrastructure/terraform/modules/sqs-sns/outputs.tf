output "task_queue_url" {
  description = "Task queue URL"
  value       = aws_sqs_queue.tasks.url
}

output "task_queue_arn" {
  description = "Task queue ARN"
  value       = aws_sqs_queue.tasks.arn
}

output "sync_queue_url" {
  description = "Sync queue URL"
  value       = aws_sqs_queue.sync.url
}

output "sync_queue_arn" {
  description = "Sync queue ARN"
  value       = aws_sqs_queue.sync.arn
}

output "notifications_topic_arn" {
  description = "Notifications topic ARN"
  value       = aws_sns_topic.notifications.arn
}

output "events_topic_arn" {
  description = "Events topic ARN"
  value       = aws_sns_topic.events.arn
}

output "alerts_topic_arn" {
  description = "Alerts topic ARN"
  value       = aws_sns_topic.alerts.arn
}
