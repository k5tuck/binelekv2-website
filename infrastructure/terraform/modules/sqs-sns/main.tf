# =============================================================================
# SQS/SNS Module
# =============================================================================

# =============================================================================
# SQS Queues
# =============================================================================

# Task Queue (for background task processing)
resource "aws_sqs_queue" "tasks" {
  name                       = "${var.name_prefix}-tasks"
  visibility_timeout_seconds = 300
  message_retention_seconds  = 1209600 # 14 days
  receive_wait_time_seconds  = 20      # Long polling

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.tasks_dlq.arn
    maxReceiveCount     = 3
  })

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-tasks"
  })
}

resource "aws_sqs_queue" "tasks_dlq" {
  name                      = "${var.name_prefix}-tasks-dlq"
  message_retention_seconds = 1209600 # 14 days

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-tasks-dlq"
  })
}

# Sync Queue (for data synchronization jobs)
resource "aws_sqs_queue" "sync" {
  name                       = "${var.name_prefix}-sync"
  visibility_timeout_seconds = 600
  message_retention_seconds  = 1209600
  receive_wait_time_seconds  = 20

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.sync_dlq.arn
    maxReceiveCount     = 3
  })

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-sync"
  })
}

resource "aws_sqs_queue" "sync_dlq" {
  name                      = "${var.name_prefix}-sync-dlq"
  message_retention_seconds = 1209600

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-sync-dlq"
  })
}

# =============================================================================
# SNS Topics
# =============================================================================

# Notifications Topic (for email/push notifications)
resource "aws_sns_topic" "notifications" {
  name = "${var.name_prefix}-notifications"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-notifications"
  })
}

# Events Topic (for event broadcasting)
resource "aws_sns_topic" "events" {
  name = "${var.name_prefix}-events"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-events"
  })
}

# Alerts Topic (for system alerts)
resource "aws_sns_topic" "alerts" {
  name = "${var.name_prefix}-alerts"

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-alerts"
  })
}

# =============================================================================
# CloudWatch Alarms for DLQ
# =============================================================================

resource "aws_cloudwatch_metric_alarm" "tasks_dlq" {
  alarm_name          = "${var.name_prefix}-tasks-dlq-messages"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "ApproximateNumberOfMessagesVisible"
  namespace           = "AWS/SQS"
  period              = 300
  statistic           = "Sum"
  threshold           = 0
  alarm_description   = "Messages in tasks DLQ"
  treat_missing_data  = "notBreaching"

  dimensions = {
    QueueName = aws_sqs_queue.tasks_dlq.name
  }

  alarm_actions = [aws_sns_topic.alerts.arn]

  tags = var.tags
}

resource "aws_cloudwatch_metric_alarm" "sync_dlq" {
  alarm_name          = "${var.name_prefix}-sync-dlq-messages"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "ApproximateNumberOfMessagesVisible"
  namespace           = "AWS/SQS"
  period              = 300
  statistic           = "Sum"
  threshold           = 0
  alarm_description   = "Messages in sync DLQ"
  treat_missing_data  = "notBreaching"

  dimensions = {
    QueueName = aws_sqs_queue.sync_dlq.name
  }

  alarm_actions = [aws_sns_topic.alerts.arn]

  tags = var.tags
}
