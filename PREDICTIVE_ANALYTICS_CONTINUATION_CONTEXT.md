# Predictive Analytics Module - Continuation Context

## Purpose of This Document

This document provides complete context for continuing development of the **Predictive Analytics module** for the Binelek SMB AI Platform. It contains all decisions made, architecture defined, and files created so that a future session can continue seamlessly.

---

## Project Overview

### What We're Building

A **Predictive Analytics module** as the **5th module** in the Binelek SMB AI Platform, providing AI-powered business forecasting across **85 industries** with **518 prediction templates**.

### Platform Modules (After Implementation)

| # | Module | Status |
|---|--------|--------|
| 1 | Ops Copilot | Existing |
| 2 | Mini Foundry | Existing |
| 3 | Cybersecurity Scanner | Existing (unchanged) |
| 4 | Marketplace Intel | Existing |
| 5 | **Predictive Analytics** | **NEW** |

---

## Three-Phase Ontology Implementation

| Phase | Technology | Purpose |
|-------|------------|---------|
| **Phase 1** | JSON-LD in PostgreSQL | Immediate use, store template metadata |
| **Phase 2** | Neo4j Knowledge Graph | Rich relationship queries, prediction chaining |
| **Phase 3** | Qdrant Embeddings | Semantic search, natural language template matching |

---

## Binah Services to Integrate

We are integrating 4 existing microservices from the binelek-* repositories. These are deployed as separate services (NOT copied into the SMB platform) and communicate via HTTP/REST + Kafka.

### Service Purposes

| Service | Port | Repository | Purpose |
|---------|------|------------|---------|
| **binah-ontology** | 8088 | binelek-core | Knowledge Graph engine using Neo4j. Manages entities (Industry, Template, DataSource) and relationships. Publishes Kafka events on entity changes. Supports Cypher queries for prediction chaining. |
| **binah-context** | 8089 | binelek-data | Semantic intelligence layer. Generates embeddings (Ollama/OpenAI), stores in Qdrant, provides semantic search. Enables NL queries like "When should I plant?" → "Optimal Planting Window". |
| **binah-ml** | 8098 | binelek-ai | ML model training and inference. MLflow for model registry. Currently has 4 models (cost forecast, risk, ROI, anomaly). Will extend to ~10 prediction model types. |
| **binah-pipeline** | 8094 | binelek-data | ETL engine with 14 data connectors (Shopify, QuickBooks, weather APIs, etc.). Hangfire scheduled jobs. Fetches data required for predictions. |

### Services NOT Needed

| Service | Reason |
|---------|--------|
| binah-search | Overlaps with binah-context semantic search |
| binah-regen | Dev-time code generator, not runtime |
| binah-discovery | Not needed for Predictive Analytics |
| binah-auth | SMB platform has existing auth (evaluate later for unification) |
| binah-api | SMB platform has existing gateway (evaluate later) |

---

## Repository Structure

### Existing Repositories

| Repository | Purpose | Tech Stack |
|------------|---------|------------|
| `binelekv2-website` | Marketing website | Next.js 14, TypeScript |
| `binelekv2-smb-platform-backend` | Backend platform | Python/FastAPI, PostgreSQL |
| `binelekv2-smb-platform-frontend` | Frontend app | React, TypeScript |
| `binelek-core` | Core microservices | C#/.NET 8 |
| `binelek-data` | Data services | C#/.NET 8 + Python |
| `binelek-ai` | AI/ML services | Python |
| `binelek-infra` | Infrastructure as Code | Terraform, Helm, Docker |

### Key Paths in binelek-* Repos

```
binelek-core/
└── services/
    └── binah-ontology/        # Neo4j KG service
        ├── Controllers/
        ├── Entities/
        ├── Services/
        ├── Repositories/
        └── Consumers/         # Kafka consumers

binelek-data/
└── services/
    ├── binah-context/         # Embeddings + Qdrant
    │   ├── Engine/
    │   ├── Services/
    │   └── Adapters/
    └── binah-pipeline/        # ETL + Connectors
        └── (14 connectors)

binelek-ai/
├── services/
│   └── binah-ml/              # ML models
│       └── app/
└── domains/                   # 20+ industry YAML configs
    ├── agriculture/
    ├── healthcare/
    ├── legal/
    └── ...
```

---

## Documentation Files Created

All files are in `/home/user/binelekv2-website/`:

| File | Purpose |
|------|---------|
| `PREDICTIVE_ANALYTICS_NEW_MODULE_PLAN.md` | Complete module spec with 518 templates across 85 industries |
| `BINAH_SERVICES_INTEGRATION_PLAN.md` | Technical integration plan for binah services |
| `SECURITY_TO_PREDICTIVE_ANALYTICS_AUDIT.md` | Original audit (historical - we're ADDING not replacing) |
| `PREDICTIVE_ANALYTICS_IMPLEMENTATION_PLAN.md` | Original impl plan (historical - superseded) |

---

## Architecture Decisions

### 1. Microservice Integration (NOT Code Copy)

**Decision:** Deploy binah-* services alongside SMB platform, communicate via APIs.

**Rationale:**
- Different tech stacks (C#/.NET vs Python)
- Services already have proper APIs, Docker configs
- Microservice architecture = easier scaling, updates
- Maintains separation of concerns

### 2. Module Addition (NOT Replacement)

**Decision:** Add Predictive Analytics as 5th module, keep Cybersecurity Scanner.

**Rationale:**
- No disruption to existing functionality
- Simpler implementation (23 files vs 50+)
- Can develop/test independently

### 3. Three-Phase Ontology

**Decision:** Implement ontology in 3 phases for incremental value.

**Rationale:**
- Phase 1 (JSON-LD) provides immediate value
- Phase 2 (Neo4j) adds relationship power
- Phase 3 (Qdrant) enables NL interface

---

## Target Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         SMB PLATFORM v2 + BINAH SERVICES                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────┐                                                           │
│  │   Frontend      │                                                           │
│  │   (React/TS)    │                                                           │
│  └────────┬────────┘                                                           │
│           │                                                                     │
│           ▼                                                                     │
│  ┌─────────────────┐         ┌──────────────────────────────────────────┐     │
│  │   Gateway       │         │          BINAH SERVICES                  │     │
│  │ (Node/Fastify)  │         │                                          │     │
│  └────────┬────────┘         │  ┌─────────────┐    ┌─────────────┐     │     │
│           │                  │  │binah-ontology│    │binah-context│     │     │
│           ▼                  │  │ (Neo4j KG)  │    │ (Embeddings)│     │     │
│  ┌─────────────────┐         │  │  Port 8091  │    │  Port 8096  │     │     │
│  │ AI Orchestrator │◄───────►│  └─────────────┘    └─────────────┘     │     │
│  │ (Python/FastAPI)│         │                                          │     │
│  └────────┬────────┘         │  ┌─────────────┐    ┌─────────────┐     │     │
│           │                  │  │  binah-ml   │    │binah-pipeline│    │     │
│           │                  │  │ (ML Models) │    │(ETL/Connectors)   │     │
│           │                  │  │  Port 8102  │    │  Port 8094  │     │     │
│           │                  │  └─────────────┘    └─────────────┘     │     │
│           │                  └──────────────────────────────────────────┘     │
│           │                                                                     │
│           ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐      │
│  │                         DATA LAYER                                   │      │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │      │
│  │  │PostgreSQL│  │  Neo4j   │  │  Qdrant  │  │  Kafka   │            │      │
│  │  │(Primary) │  │  (KG)    │  │(Vectors) │  │(Events)  │            │      │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │      │
│  └─────────────────────────────────────────────────────────────────────┘      │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Industry Templates Summary

**Total: 518 templates across 85 SMB verticals**

| Category | Industries | Templates |
|----------|------------|-----------|
| Retail & E-Commerce | 4 | 24 |
| Agriculture & Farming | 4 | 28 |
| Professional Services | 7 | 42 |
| Food Service & Hospitality | 5 | 38 |
| Home Services | 7 | 42 |
| Automotive | 4 | 26 |
| Beauty & Wellness | 5 | 32 |
| Education & Training | 4 | 20 |
| Pet Services | 4 | 18 |
| Manufacturing & Trades | 5 | 24 |
| Transportation & Logistics | 4 | 24 |
| Real Estate | 4 | 24 |
| Financial Services | 4 | 20 |
| Creative & Media | 5 | 26 |
| Entertainment & Events | 4 | 18 |
| Technology & IT | 4 | 22 |
| Healthcare Adjacent | 4 | 18 |
| Environmental | 3 | 14 |
| Specialty Retail | 4 | 18 |

Full template details are in `PREDICTIVE_ANALYTICS_NEW_MODULE_PLAN.md`.

---

## Implementation Timeline

| Sprint | Weeks | Focus |
|--------|-------|-------|
| 1 | 1-2 | Infrastructure: Deploy Neo4j, Qdrant, Kafka. Phase 1 JSON-LD schema. |
| 2 | 3-4 | Knowledge Graph: Integrate binah-ontology, migrate templates to Neo4j. |
| 3 | 5-6 | Semantic Search: Integrate binah-context, embed templates in Qdrant. |
| 4 | 7-8 | ML Integration: Integrate binah-ml, map prediction types to models. |
| 5 | 9-10 | Data Pipeline: Integrate binah-pipeline, connect data sources. |
| 6 | 11-12 | Frontend: Build Predictive Analytics UI, testing, documentation. |

---

## Key API Endpoints (Planned)

### Predictive Analytics API

```
# Template Management
GET  /api/modules/predictive-analytics/templates
GET  /api/modules/predictive-analytics/templates/{id}
GET  /api/modules/predictive-analytics/templates/industry/{industry}

# Predictions
GET  /api/modules/predictive-analytics/predictions
POST /api/modules/predictive-analytics/predictions
GET  /api/modules/predictive-analytics/predictions/{id}
PATCH /api/modules/predictive-analytics/predictions/{id}/verify

# Natural Language Interface
POST /api/modules/predictive-analytics/ask
     Body: { "query": "When should I plant my corn?" }
     Returns: Matched template + prediction + recommendation

# Data Sources
GET  /api/modules/predictive-analytics/data-sources
POST /api/modules/predictive-analytics/data-sources/connect

# Accuracy Metrics
GET  /api/modules/predictive-analytics/accuracy
```

---

## Service Client Interfaces (Planned)

### OntologyClient (binah-ontology)
```python
- get_templates_for_industry(industry, sub_vertical)
- get_prediction_chain(template_id, depth)
- get_required_data_sources(template_id)
- get_tenant_available_templates(tenant_id)
- create_entity(entity_type, properties)
- create_relationship(from_id, to_id, type, properties)
```

### SemanticSearchService (binah-context)
```python
- match_template_from_query(query, industry_filter, limit)
- find_similar_templates(template_id, limit)
- suggest_templates_for_tenant(tenant_id, description, data_sources)
- embed_and_store_template(template)
- enrich_prediction(prediction, context_sources)
```

### MLServiceClient (binah-ml)
```python
- train_model(tenant_id, model_type, training_data, config)
- predict(tenant_id, model_type, input_features)
- get_model_metrics(tenant_id, model_type)
- explain_prediction(prediction_id)
```

### PipelineClient (binah-pipeline)
```python
- fetch_data_for_prediction(tenant_id, data_sources, date_range)
- get_connector_status(tenant_id)
- trigger_sync(tenant_id, connector_type)
```

---

## Infrastructure Requirements

### New Services to Deploy

| Service | Image/Build | Ports |
|---------|-------------|-------|
| Neo4j | neo4j:5.15-community | 7474, 7687 |
| Qdrant | qdrant/qdrant:latest | 6333 |
| Kafka | confluentinc/cp-kafka:7.5.0 | 9092 |
| Zookeeper | confluentinc/cp-zookeeper:7.5.0 | 2181 |
| Ollama | ollama/ollama:latest | 11434 |
| MLflow | ghcr.io/mlflow/mlflow:v2.10.0 | 5000 |
| binah-ontology | Build from binelek-core | 8088 |
| binah-context | Build from binelek-data | 8089 |
| binah-ml | Build from binelek-ai | 8098 |
| binah-pipeline | Build from binelek-data | 8094 |

---

## Progress Completed

### Session 2 (Nov 30, 2024)
- [x] Cloned all 4 binelek repositories (core, data, ai, infra)
- [x] Explored binah-ontology structure - discovered actual ports (8088, 8089, 8098, 8094)
- [x] Cloned binelekv2-smb-platform-backend repository
- [x] Created `docker-compose.services.yml` with all binah services + infrastructure
- [x] Created database migration `05_binah_services_databases.sql` with:
  - Additional databases (binah_ontology, binah_context, binah_pipeline, binah_ml, mlflow)
  - Prediction templates table with JSON-LD ontology
  - Industry verticals taxonomy (19 top-level industries seeded)
  - Data source types (19 types seeded)
  - Sample prediction templates (15 templates across 5 industries)
- [x] Updated `.env.example` with binah service environment variables
- [x] Updated README.md with Predictive Analytics documentation
- [x] Pushed changes to `claude/setup-predictive-analytics-01HKYzdHbkyneWkpqC4A4cDX` branch

### Files Created/Modified in SMB Backend
| File | Status |
|------|--------|
| `docker-compose.services.yml` | Created |
| `database/init/05_binah_services_databases.sql` | Created |
| `.env.example` | Modified |
| `README.md` | Modified |

---

## Next Steps

1. ~~Clone the binelek-* repositories~~ ✅ DONE
2. ~~Create docker-compose.services.yml~~ ✅ DONE
3. ~~Implement Phase 1 - JSON-LD schema in PostgreSQL~~ ✅ DONE (migration created)
4. **Deploy infrastructure** - Run `docker-compose -f docker-compose.yml -f docker-compose.services.yml up -d`
5. **Build service clients** in ai-orchestrator (OntologyClient, SemanticSearchService, MLServiceClient, PipelineClient)
6. **Create API routes** for predictive analytics in gateway
7. **Begin Sprint 2** - Integrate binah-ontology client and migrate templates to Neo4j

---

## Open Questions / Decisions Needed

1. **Auth unification**: Keep separate auth or integrate binah-auth with SMB platform?
2. **Gateway**: Keep both gateways or unify?
3. **Domain configs**: Migrate binelek-ai/domains YAML to new format or use as-is?
4. **Model training**: Auto-train when tenant reaches data threshold or manual?

---

## File Checksums (for verification)

```
PREDICTIVE_ANALYTICS_NEW_MODULE_PLAN.md - 518 templates, 85 industries
BINAH_SERVICES_INTEGRATION_PLAN.md - Full technical integration spec
```

---

## Contact / Repository Links

- Marketing Website: `/home/user/binelekv2-website`
- Backend Platform: `/home/user/binelekv2-smb-platform-backend`
- Frontend Platform: `/home/user/binelekv2-smb-platform-frontend`
- Binah Core: `https://github.com/k5tuck/binelek-core`
- Binah Data: `https://github.com/k5tuck/binelek-data`
- Binah AI: `https://github.com/k5tuck/binelek-ai`
- Binah Infra: `https://github.com/k5tuck/binelek-infra`
