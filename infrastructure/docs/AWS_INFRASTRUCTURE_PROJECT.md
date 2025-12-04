# Binelek AWS Infrastructure Project

## Project Overview

This document tracks the AWS infrastructure deployment for the Binelek SMB AI Platform.

| Property | Value |
|----------|-------|
| **Domain** | binelek.io |
| **Region** | us-east-1 |
| **Environments** | Production, Staging |
| **Estimated Monthly Cost** | $150-250 (basic setup) |

---

## Architecture Summary

```
                              ┌─────────────────────────────────────┐
                              │          Route 53 (DNS)             │
                              │         binelek.io                  │
                              └──────────────┬──────────────────────┘
                                             │
                    ┌────────────────────────┼────────────────────────┐
                    │                        │                        │
                    ▼                        ▼                        ▼
        ┌───────────────────┐    ┌───────────────────┐    ┌───────────────────┐
        │    CloudFront     │    │    CloudFront     │    │        ALB        │
        │  app.binelek.io   │    │ staging.binelek.io│    │  api.binelek.io   │
        │    (Frontend)     │    │    (Frontend)     │    │    (Backend)      │
        └─────────┬─────────┘    └─────────┬─────────┘    └─────────┬─────────┘
                  │                        │                        │
                  ▼                        ▼                        ▼
        ┌───────────────────┐    ┌───────────────────┐    ┌───────────────────┐
        │   S3 Bucket       │    │   S3 Bucket       │    │   ECS Fargate     │
        │   (Prod Static)   │    │  (Staging Static) │    │   Cluster         │
        └───────────────────┘    └───────────────────┘    └─────────┬─────────┘
                                                                    │
                              ┌─────────────────────────────────────┤
                              │                                     │
                    ┌─────────┴─────────┐                 ┌─────────┴─────────┐
                    │   ECS Services    │                 │   ECS Services    │
                    │   (Production)    │                 │   (Staging)       │
                    │                   │                 │                   │
                    │ • API Gateway     │                 │ • API Gateway     │
                    │ • AI Orchestrator │                 │ • AI Orchestrator │
                    │ • Connectors      │                 │ • Connectors      │
                    │ • Marketplace     │                 │ • Marketplace     │
                    │ • Ollama (LLM)    │                 │ • Ollama (LLM)    │
                    └─────────┬─────────┘                 └─────────┬─────────┘
                              │                                     │
          ┌───────────────────┼───────────────────┐    ┌───────────┴───────────┐
          │                   │                   │    │                       │
          ▼                   ▼                   ▼    ▼                       ▼
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│  RDS PostgreSQL  │ │   ElastiCache    │ │   SQS Queues     │ │  Secrets Manager │
│  (Production)    │ │   Redis (Prod)   │ │   SNS Topics     │ │                  │
└──────────────────┘ └──────────────────┘ └──────────────────┘ └──────────────────┘
         │
         ▼
┌──────────────────┐
│  RDS PostgreSQL  │
│  (Staging)       │
└──────────────────┘
```

---

## Infrastructure Components

### 1. Networking (VPC)
- **VPC CIDR**: 10.0.0.0/16
- **Public Subnets**: 10.0.1.0/24, 10.0.2.0/24 (for ALB, NAT Gateway)
- **Private Subnets**: 10.0.10.0/24, 10.0.11.0/24 (for ECS, RDS, ElastiCache)
- **Availability Zones**: us-east-1a, us-east-1b

### 2. Frontend (S3 + CloudFront)
| Environment | S3 Bucket | CloudFront Domain |
|-------------|-----------|-------------------|
| Production | binelek-frontend-prod | app.binelek.io |
| Staging | binelek-frontend-staging | staging.binelek.io |

### 3. Backend (ECS Fargate)
| Service | Port | CPU | Memory |
|---------|------|-----|--------|
| API Gateway | 3000 | 512 | 1024 |
| AI Orchestrator | 8100 | 512 | 1024 |
| Connectors Service | 8101 | 256 | 512 |
| Marketplace Scraper | 8102 | 256 | 512 |
| Ollama (LLM) | 11434 | 1024 | 4096 |

### 4. Database (RDS PostgreSQL)
| Environment | Instance Type | Storage | Multi-AZ |
|-------------|---------------|---------|----------|
| Production | db.t3.small | 20 GB | No (basic) |
| Staging | db.t3.micro | 20 GB | No |

### 5. Cache (ElastiCache Redis)
| Environment | Node Type | Nodes |
|-------------|-----------|-------|
| Production | cache.t3.micro | 1 |
| Staging | cache.t3.micro | 1 |

### 6. Message Queue (SQS/SNS)
| Queue/Topic | Purpose |
|-------------|---------|
| binelek-tasks-queue | Task processing |
| binelek-sync-queue | Data sync jobs |
| binelek-notifications-topic | Email/push notifications |
| binelek-events-topic | Event broadcasting |

### 7. External Services
| Service | Purpose | Configuration |
|---------|---------|---------------|
| Pinecone | Vector database | API key in Secrets Manager |
| OpenAI/Anthropic | External LLM APIs | API keys in Secrets Manager |

---

## Domains & SSL Certificates

| Domain | Purpose | Certificate |
|--------|---------|-------------|
| binelek.io | Root (redirect to app) | ACM |
| app.binelek.io | Production frontend | ACM |
| api.binelek.io | Production backend | ACM |
| staging.binelek.io | Staging frontend | ACM |
| api-staging.binelek.io | Staging backend | ACM |

---

## GitHub Actions Workflows

### 1. Frontend Deployment (`deploy-frontend.yml`)
- Triggers: Push to `main` (prod), push to `develop` (staging)
- Steps: Build React → Upload to S3 → Invalidate CloudFront

### 2. Backend Deployment (`deploy-backend.yml`)
- Triggers: Push to `main` (prod), push to `develop` (staging)
- Steps: Build Docker → Push to ECR → Update ECS Services

### 3. Infrastructure (`terraform.yml`)
- Triggers: Push to `infrastructure/**`
- Steps: Terraform plan → Manual approval → Terraform apply

### 4. Database Migrations (`migrations.yml`)
- Triggers: Push to `migrations/**`
- Steps: Run migrations via ECS task

---

## Estimated Monthly Costs (Basic Setup)

| Service | Production | Staging | Total |
|---------|------------|---------|-------|
| ECS Fargate | $80 | $40 | $120 |
| RDS PostgreSQL | $25 | $15 | $40 |
| ElastiCache Redis | $15 | $15 | $30 |
| ALB | $20 | $10 | $30 |
| CloudFront | $5 | $2 | $7 |
| S3 | $1 | $1 | $2 |
| Route 53 | $1 | - | $1 |
| NAT Gateway | $35 | - | $35 |
| Secrets Manager | $2 | - | $2 |
| **Total** | **$184** | **$83** | **~$267** |

*Note: Costs are estimates and may vary based on usage.*

---

## Setup Checklist

### Prerequisites (User Actions Required)
- [ ] Create AWS Account
- [ ] Create IAM user with AdministratorAccess
- [ ] Generate AWS Access Keys (for GitHub Actions)
- [ ] Register/transfer binelek.io domain to Route 53
- [ ] Create Pinecone account and get API key
- [ ] Have OpenAI/Anthropic API keys ready

### GitHub Repository Setup
- [ ] Add AWS_ACCESS_KEY_ID secret to GitHub
- [ ] Add AWS_SECRET_ACCESS_KEY secret to GitHub
- [ ] Add PINECONE_API_KEY secret to GitHub
- [ ] Add OPENAI_API_KEY secret to GitHub
- [ ] Add ANTHROPIC_API_KEY secret to GitHub

### Terraform Deployment Order
1. [ ] Run `terraform init` in staging environment
2. [ ] Run `terraform apply` for VPC module
3. [ ] Run `terraform apply` for RDS module (creates database)
4. [ ] Run `terraform apply` for all remaining modules
5. [ ] Run database migrations
6. [ ] Verify staging environment works
7. [ ] Repeat for production environment

---

## File Structure

```
infrastructure/
├── terraform/
│   ├── modules/
│   │   ├── vpc/           # VPC, subnets, security groups
│   │   ├── rds/           # PostgreSQL database
│   │   ├── elasticache/   # Redis cache
│   │   ├── ecs/           # Fargate cluster and services
│   │   ├── s3-cloudfront/ # Frontend hosting
│   │   ├── route53/       # DNS configuration
│   │   ├── acm/           # SSL certificates
│   │   ├── sqs-sns/       # Message queues
│   │   ├── secrets/       # Secrets Manager
│   │   ├── ecr/           # Container registry
│   │   └── alb/           # Load balancer
│   └── environments/
│       ├── staging/       # Staging tfvars
│       └── production/    # Production tfvars
├── github-actions/        # CI/CD workflows
├── scripts/               # Helper scripts
└── docs/                  # Documentation
```

---

## Troubleshooting

### Common Issues

1. **ECS tasks not starting**: Check CloudWatch logs, verify security groups allow outbound internet access
2. **Database connection failed**: Verify security group allows port 5432 from ECS security group
3. **CloudFront 403 errors**: Check S3 bucket policy and CloudFront OAC configuration
4. **SSL certificate pending**: Verify DNS validation records are created in Route 53

---

## Contacts & Resources

- **AWS Console**: https://console.aws.amazon.com
- **Terraform Registry**: https://registry.terraform.io
- **Pinecone Console**: https://app.pinecone.io

---

*Last Updated: December 2024*
