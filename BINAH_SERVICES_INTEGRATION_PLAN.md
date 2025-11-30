# Binah Services Integration Plan

## Overview

This document outlines the plan to integrate services from the Binelek microservices ecosystem into the SMB AI Platform to enable the three-phase ontology implementation for Predictive Analytics.

---

## Current Architecture vs Target Architecture

### Current State (SMB Platform v2)

```
┌─────────────────────────────────────────────────────────────────┐
│                    SMB PLATFORM v2 (Current)                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │   Frontend      │    │    Gateway      │                    │
│  │   (React/TS)    │───▶│  (Node/Fastify) │                    │
│  └─────────────────┘    └────────┬────────┘                    │
│                                  │                              │
│                                  ▼                              │
│                    ┌─────────────────────────┐                  │
│                    │    AI Orchestrator      │                  │
│                    │    (Python/FastAPI)     │                  │
│                    └───────────┬─────────────┘                  │
│                                │                                │
│              ┌─────────────────┼─────────────────┐              │
│              ▼                 ▼                 ▼              │
│     ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│     │  PostgreSQL  │  │    Qdrant    │  │    Redis     │       │
│     │  (Primary)   │  │  (Vectors)   │  │   (Cache)    │       │
│     └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Target State (Integrated with Binah Services)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         SMB PLATFORM v2 + BINAH SERVICES                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐             │
│  │   Frontend      │    │   binah-api     │    │   binah-auth    │             │
│  │   (React/TS)    │───▶│   (Gateway)     │───▶│   (Auth/JWT)    │             │
│  └─────────────────┘    │   Port 8092     │    │   Port 8093     │             │
│                         └────────┬────────┘    └─────────────────┘             │
│                                  │                                              │
│         ┌────────────────────────┼────────────────────────┐                    │
│         │                        │                        │                    │
│         ▼                        ▼                        ▼                    │
│  ┌──────────────┐    ┌─────────────────────┐    ┌──────────────────┐          │
│  │ binah-ontology│    │   AI Orchestrator   │    │  binah-context   │          │
│  │ (Neo4j KG)   │◀──▶│   (Python/FastAPI)  │◀──▶│  (Embeddings)    │          │
│  │ Port 8091    │    │   (Existing)        │    │  Port 8096       │          │
│  └──────┬───────┘    └──────────┬──────────┘    └────────┬─────────┘          │
│         │                       │                        │                     │
│         │            ┌──────────┴──────────┐             │                     │
│         │            ▼                     ▼             │                     │
│         │    ┌──────────────┐    ┌──────────────┐        │                     │
│         │    │  binah-ml    │    │binah-pipeline│        │                     │
│         │    │ (ML Models)  │    │(ETL/Connectors)       │                     │
│         │    │ Port 8102    │    │ Port 8094    │        │                     │
│         │    └──────┬───────┘    └──────┬───────┘        │                     │
│         │           │                   │                │                     │
│         ▼           ▼                   ▼                ▼                     │
│  ┌─────────────────────────────────────────────────────────────┐              │
│  │                     DATA LAYER                               │              │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │              │
│  │  │PostgreSQL│  │  Neo4j   │  │  Qdrant  │  │  Kafka   │    │              │
│  │  │(Primary) │  │  (KG)    │  │(Vectors) │  │(Events)  │    │              │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │              │
│  └─────────────────────────────────────────────────────────────┘              │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: JSON-LD Ontology in PostgreSQL

### Objective
Store prediction template metadata as JSON-LD in PostgreSQL for immediate use while building toward full KG integration.

### Implementation Steps

#### 1.1 Database Schema Extension

**File:** `database/migrations/XXX_add_prediction_ontology.sql`

```sql
-- Prediction Templates with JSON-LD metadata
CREATE TABLE prediction_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Core fields
    name VARCHAR(255) NOT NULL,
    industry_vertical VARCHAR(100) NOT NULL,
    sub_vertical VARCHAR(100),
    prediction_type VARCHAR(100) NOT NULL,
    description TEXT,

    -- JSON-LD ontology metadata
    ontology_context JSONB NOT NULL DEFAULT '{
        "@context": "https://binelek.com/ontology/v1",
        "@type": "PredictionTemplate"
    }',

    -- Relationships (JSON arrays for now, Neo4j later)
    required_data_sources JSONB DEFAULT '[]',
    outputs_to JSONB DEFAULT '[]',           -- Chained predictions
    depends_on JSONB DEFAULT '[]',           -- Upstream predictions

    -- ML Configuration
    model_type VARCHAR(50),                  -- xgboost, random_forest, prophet, etc.
    model_config JSONB DEFAULT '{}',
    confidence_threshold NUMERIC(5,2) DEFAULT 0.70,

    -- Metadata
    is_active BOOLEAN DEFAULT true,
    version INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Industry Verticals Taxonomy
CREATE TABLE industry_verticals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    icon VARCHAR(50),
    color VARCHAR(50),
    parent_id UUID REFERENCES industry_verticals(id),
    ontology_uri VARCHAR(500),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Data Source Types
CREATE TABLE data_source_types (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    category VARCHAR(50),                    -- erp, crm, pos, weather, market, custom
    provider VARCHAR(100),                   -- shopify, quickbooks, openweather, etc.
    ontology_uri VARCHAR(500),
    schema_definition JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Template-DataSource Mapping
CREATE TABLE template_data_sources (
    template_id UUID REFERENCES prediction_templates(id) ON DELETE CASCADE,
    data_source_type_id UUID REFERENCES data_source_types(id) ON DELETE CASCADE,
    is_required BOOLEAN DEFAULT true,
    priority INTEGER DEFAULT 1,
    PRIMARY KEY (template_id, data_source_type_id)
);

-- Indexes
CREATE INDEX idx_templates_industry ON prediction_templates(industry_vertical);
CREATE INDEX idx_templates_type ON prediction_templates(prediction_type);
CREATE INDEX idx_templates_ontology ON prediction_templates USING GIN(ontology_context);
CREATE INDEX idx_verticals_parent ON industry_verticals(parent_id);
```

#### 1.2 Seed Data: Industry Verticals

```sql
-- Insert industry verticals taxonomy
INSERT INTO industry_verticals (name, display_name, icon, color) VALUES
-- Top-level categories
('retail', 'Retail & E-Commerce', '🏪', 'blue'),
('agriculture', 'Agriculture & Farming', '🌾', 'green'),
('professional_services', 'Professional Services', '⚖️', 'purple'),
('food_service', 'Food Service & Hospitality', '🍽️', 'orange'),
('home_services', 'Home Services', '🏠', 'cyan'),
('automotive', 'Automotive', '🚗', 'red'),
('beauty_wellness', 'Beauty & Wellness', '💅', 'pink'),
('education', 'Education & Training', '🎓', 'indigo'),
('pet_services', 'Pet Services', '🐕', 'amber'),
('manufacturing', 'Manufacturing & Trades', '🏭', 'gray'),
('transportation', 'Transportation & Logistics', '🚚', 'teal'),
('real_estate', 'Real Estate', '🏠', 'emerald'),
('financial_services', 'Financial Services', '💰', 'yellow'),
('creative_media', 'Creative & Media', '🎨', 'violet'),
('entertainment', 'Entertainment & Events', '🎭', 'rose'),
('technology', 'Technology & IT', '🌐', 'sky'),
('healthcare', 'Healthcare Adjacent', '🏥', 'red'),
('environmental', 'Environmental', '🌍', 'lime'),
('specialty_retail', 'Specialty Retail', '🎯', 'fuchsia');

-- Insert sub-verticals (example for agriculture)
INSERT INTO industry_verticals (name, display_name, icon, parent_id)
SELECT 'crop_farming', 'Crop Farming', '🚜', id FROM industry_verticals WHERE name = 'agriculture';

INSERT INTO industry_verticals (name, display_name, icon, parent_id)
SELECT 'livestock_dairy', 'Livestock & Dairy', '🐄', id FROM industry_verticals WHERE name = 'agriculture';

INSERT INTO industry_verticals (name, display_name, icon, parent_id)
SELECT 'vineyards_wineries', 'Vineyards & Wineries', '🍷', id FROM industry_verticals WHERE name = 'agriculture';

INSERT INTO industry_verticals (name, display_name, icon, parent_id)
SELECT 'aquaculture', 'Aquaculture & Fisheries', '🐟', id FROM industry_verticals WHERE name = 'agriculture';
```

#### 1.3 Python Models (AI Orchestrator)

**File:** `services/ai-orchestrator/app/models/prediction_ontology.py`

```python
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Text, Numeric, Boolean
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from app.database import Base
import uuid
from datetime import datetime


class PredictionTemplate(Base):
    """Prediction template with JSON-LD ontology metadata"""
    __tablename__ = "prediction_templates"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    industry_vertical = Column(String(100), nullable=False)
    sub_vertical = Column(String(100))
    prediction_type = Column(String(100), nullable=False)
    description = Column(Text)

    # JSON-LD ontology
    ontology_context = Column(JSONB, default={
        "@context": "https://binelek.com/ontology/v1",
        "@type": "PredictionTemplate"
    })

    # Relationships as JSON (Phase 1)
    required_data_sources = Column(JSONB, default=[])
    outputs_to = Column(JSONB, default=[])
    depends_on = Column(JSONB, default=[])

    # ML Config
    model_type = Column(String(50))
    model_config = Column(JSONB, default={})
    confidence_threshold = Column(Numeric(5, 2), default=0.70)

    # Metadata
    is_active = Column(Boolean, default=True)
    version = Column(Integer, default=1)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # SQLAlchemy relationships
    data_sources = relationship("TemplateDataSource", back_populates="template")


class IndustryVertical(Base):
    """Industry taxonomy with hierarchical structure"""
    __tablename__ = "industry_verticals"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False, unique=True)
    display_name = Column(String(255), nullable=False)
    icon = Column(String(50))
    color = Column(String(50))
    parent_id = Column(UUID(as_uuid=True), ForeignKey("industry_verticals.id"))
    ontology_uri = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow)

    # Self-referential relationship
    children = relationship("IndustryVertical", back_populates="parent")
    parent = relationship("IndustryVertical", back_populates="children", remote_side=[id])


class DataSourceType(Base):
    """Data source taxonomy"""
    __tablename__ = "data_source_types"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False, unique=True)
    display_name = Column(String(255), nullable=False)
    category = Column(String(50))
    provider = Column(String(100))
    ontology_uri = Column(String(500))
    schema_definition = Column(JSONB)
    created_at = Column(DateTime, default=datetime.utcnow)


class TemplateDataSource(Base):
    """Many-to-many: templates to data sources"""
    __tablename__ = "template_data_sources"

    template_id = Column(UUID(as_uuid=True), ForeignKey("prediction_templates.id"), primary_key=True)
    data_source_type_id = Column(UUID(as_uuid=True), ForeignKey("data_source_types.id"), primary_key=True)
    is_required = Column(Boolean, default=True)
    priority = Column(Integer, default=1)

    template = relationship("PredictionTemplate", back_populates="data_sources")
    data_source_type = relationship("DataSourceType")
```

---

## Phase 2: Neo4j Knowledge Graph Integration

### Objective
Integrate `binah-ontology` service to enable rich graph queries, relationship traversal, and prediction chaining.

### 2.1 Service Integration Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    KNOWLEDGE GRAPH LAYER                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    binah-ontology                          │ │
│  │                    (Port 8091)                             │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │                                                           │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │ │
│  │  │ Controllers │  │  Services   │  │ Repositories│       │ │
│  │  │             │  │             │  │             │       │ │
│  │  │ /entities   │  │ EntitySvc   │  │ Neo4jRepo   │       │ │
│  │  │ /relations  │  │ RelationSvc │  │             │       │ │
│  │  │ /query      │  │ QuerySvc    │  │             │       │ │
│  │  └─────────────┘  └─────────────┘  └──────┬──────┘       │ │
│  │                                           │               │ │
│  │  ┌─────────────┐  ┌─────────────┐         │               │ │
│  │  │  Consumers  │  │   Events    │         │               │ │
│  │  │             │  │             │         │               │ │
│  │  │ Kafka Sub   │  │ EntityCreated        │               │ │
│  │  │             │  │ RelationAdded│        │               │ │
│  │  └──────┬──────┘  └──────┬──────┘         │               │ │
│  │         │                │                │               │ │
│  └─────────┼────────────────┼────────────────┼───────────────┘ │
│            │                │                │                 │
│            ▼                ▼                ▼                 │
│  ┌─────────────────┐  ┌─────────────┐  ┌─────────────────┐    │
│  │     Kafka       │  │    Redis    │  │     Neo4j       │    │
│  │   (Events)      │  │   (Cache)   │  │   (Graph DB)    │    │
│  └─────────────────┘  └─────────────┘  └─────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Neo4j Schema Design

**Graph Node Types:**

```cypher
// Industry Vertical Node
CREATE (v:IndustryVertical {
    id: $id,
    name: "agriculture",
    displayName: "Agriculture & Farming",
    icon: "🌾",
    color: "green"
})

// Sub-Vertical Node
CREATE (sv:SubVertical {
    id: $id,
    name: "crop_farming",
    displayName: "Crop Farming",
    icon: "🚜"
})

// Prediction Template Node
CREATE (pt:PredictionTemplate {
    id: $id,
    name: "Optimal Planting Window",
    predictionType: "timing",
    modelType: "xgboost",
    confidenceThreshold: 0.85
})

// Data Source Type Node
CREATE (ds:DataSourceType {
    id: $id,
    name: "weather_api",
    displayName: "Weather API",
    category: "weather",
    provider: "openweather"
})

// Tenant Node (for multi-tenancy)
CREATE (t:Tenant {
    id: $tenantId,
    name: "Acme Farms",
    industry: "agriculture"
})
```

**Graph Relationships:**

```cypher
// Industry → Sub-Vertical
(v:IndustryVertical)-[:HAS_SUBVERTICAL]->(sv:SubVertical)

// Sub-Vertical → Prediction Template
(sv:SubVertical)-[:HAS_TEMPLATE]->(pt:PredictionTemplate)

// Prediction Template → Data Source (required)
(pt:PredictionTemplate)-[:REQUIRES_DATA {priority: 1}]->(ds:DataSourceType)

// Prediction Chaining
(pt1:PredictionTemplate)-[:FEEDS_INTO {confidence_weight: 0.8}]->(pt2:PredictionTemplate)

// Example: Weather → Planting → Yield → Harvest → Price
(weather:PredictionTemplate {name: "Weather Forecast"})
  -[:FEEDS_INTO]->(planting:PredictionTemplate {name: "Optimal Planting Window"})
  -[:FEEDS_INTO]->(yield:PredictionTemplate {name: "Yield Forecasting"})
  -[:FEEDS_INTO]->(harvest:PredictionTemplate {name: "Harvest Timing"})
  -[:FEEDS_INTO]->(price:PredictionTemplate {name: "Commodity Price at Harvest"})

// Tenant uses Template
(t:Tenant)-[:USES_TEMPLATE {enabled: true, customConfig: {...}}]->(pt:PredictionTemplate)

// Tenant has Data Source
(t:Tenant)-[:HAS_DATA_SOURCE {connectionStatus: "active"}]->(ds:DataSourceType)
```

### 2.3 Integration with AI Orchestrator

**File:** `services/ai-orchestrator/app/services/ontology_client.py`

```python
import httpx
from typing import List, Dict, Any, Optional
from app.config import settings


class OntologyClient:
    """Client for binah-ontology service"""

    def __init__(self):
        self.base_url = settings.ontology_service_url  # http://binah-ontology:8091
        self.client = httpx.AsyncClient(timeout=30.0)

    async def get_templates_for_industry(
        self,
        industry: str,
        sub_vertical: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """Get all prediction templates for an industry"""
        query = """
        MATCH (v:IndustryVertical {name: $industry})
        OPTIONAL MATCH (v)-[:HAS_SUBVERTICAL]->(sv:SubVertical)
        MATCH (sv)-[:HAS_TEMPLATE]->(pt:PredictionTemplate)
        WHERE sv.name = $subVertical OR $subVertical IS NULL
        RETURN pt
        """
        response = await self.client.post(
            f"{self.base_url}/api/query/cypher",
            json={"query": query, "params": {"industry": industry, "subVertical": sub_vertical}}
        )
        return response.json()

    async def get_prediction_chain(
        self,
        template_id: str,
        depth: int = 3
    ) -> List[Dict[str, Any]]:
        """Get downstream predictions that this template feeds into"""
        query = """
        MATCH path = (start:PredictionTemplate {id: $templateId})
                     -[:FEEDS_INTO*1..$depth]->(downstream:PredictionTemplate)
        RETURN path
        """
        response = await self.client.post(
            f"{self.base_url}/api/query/cypher",
            json={"query": query, "params": {"templateId": template_id, "depth": depth}}
        )
        return response.json()

    async def get_required_data_sources(
        self,
        template_id: str
    ) -> List[Dict[str, Any]]:
        """Get data sources required for a prediction template"""
        query = """
        MATCH (pt:PredictionTemplate {id: $templateId})-[r:REQUIRES_DATA]->(ds:DataSourceType)
        RETURN ds, r.priority as priority, r.isRequired as required
        ORDER BY r.priority
        """
        response = await self.client.post(
            f"{self.base_url}/api/query/cypher",
            json={"query": query, "params": {"templateId": template_id}}
        )
        return response.json()

    async def get_tenant_available_templates(
        self,
        tenant_id: str
    ) -> List[Dict[str, Any]]:
        """Get templates available to tenant based on their connected data sources"""
        query = """
        MATCH (t:Tenant {id: $tenantId})-[:HAS_DATA_SOURCE]->(ds:DataSourceType)
        WITH t, collect(ds) as connectedSources
        MATCH (pt:PredictionTemplate)-[:REQUIRES_DATA]->(req:DataSourceType)
        WITH pt, connectedSources, collect(req) as requiredSources
        WHERE all(r IN requiredSources WHERE r IN connectedSources)
        RETURN pt, size(requiredSources) as dataSourceCount
        ORDER BY dataSourceCount DESC
        """
        response = await self.client.post(
            f"{self.base_url}/api/query/cypher",
            json={"query": query, "params": {"tenantId": tenant_id}}
        )
        return response.json()

    async def create_entity(
        self,
        entity_type: str,
        properties: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Create a new entity in the knowledge graph"""
        response = await self.client.post(
            f"{self.base_url}/api/entities",
            json={"type": entity_type, "properties": properties}
        )
        return response.json()

    async def create_relationship(
        self,
        from_id: str,
        to_id: str,
        relationship_type: str,
        properties: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        """Create a relationship between two entities"""
        response = await self.client.post(
            f"{self.base_url}/api/relationships",
            json={
                "fromId": from_id,
                "toId": to_id,
                "type": relationship_type,
                "properties": properties or {}
            }
        )
        return response.json()
```

### 2.4 Kafka Event Integration

**Events to Publish (AI Orchestrator → binah-ontology):**

```python
# When tenant connects a new data source
class TenantDataSourceConnected(BaseEvent):
    tenant_id: str
    data_source_type: str
    provider: str
    connection_status: str

# When a prediction is generated
class PredictionGenerated(BaseEvent):
    tenant_id: str
    template_id: str
    prediction_id: str
    confidence_score: float
    predicted_value: dict

# When prediction is verified (actual outcome known)
class PredictionVerified(BaseEvent):
    prediction_id: str
    actual_value: dict
    accuracy_score: float
```

**Events to Consume (binah-ontology → AI Orchestrator):**

```python
# When new template is added to ontology
class TemplateCreated(BaseEvent):
    template_id: str
    industry_vertical: str
    prediction_type: str

# When prediction chain is updated
class PredictionChainUpdated(BaseEvent):
    upstream_template_id: str
    downstream_template_id: str
    confidence_weight: float
```

---

## Phase 3: Qdrant + Ontology Embeddings

### Objective
Integrate `binah-context` service to enable semantic template matching and natural language prediction queries.

### 3.1 Embedding Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    SEMANTIC LAYER                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  User Query: "When should I plant my corn?"                    │
│                           │                                     │
│                           ▼                                     │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    binah-context                           │ │
│  │                    (Port 8096)                             │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │                                                           │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │ │
│  │  │ Embedding   │  │  Semantic   │  │ Enrichment  │       │ │
│  │  │ Service     │  │  Search     │  │ Pipeline    │       │ │
│  │  │             │  │             │  │             │       │ │
│  │  │ - Ollama    │  │ - Query     │  │ - Entity    │       │ │
│  │  │ - OpenAI    │  │ - Filter    │  │ - Context   │       │ │
│  │  │ - Cohere    │  │ - Rank      │  │ - Metadata  │       │ │
│  │  └──────┬──────┘  └──────┬──────┘  └─────────────┘       │ │
│  │         │                │                                │ │
│  └─────────┼────────────────┼────────────────────────────────┘ │
│            │                │                                   │
│            ▼                ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      Qdrant                              │   │
│  │              (Vector Database)                           │   │
│  │                                                         │   │
│  │  Collections:                                           │   │
│  │  ├── prediction_templates (518 templates embedded)      │   │
│  │  ├── industry_verticals (85 industries embedded)        │   │
│  │  ├── data_source_types (providers embedded)             │   │
│  │  └── tenant_contexts (per-tenant embeddings)            │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Result: "Optimal Planting Window" template (score: 0.94)      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Qdrant Collection Schema

```python
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance

# Initialize client
client = QdrantClient(host="qdrant", port=6333)

# Prediction Templates Collection
client.create_collection(
    collection_name="prediction_templates",
    vectors_config=VectorParams(
        size=1536,  # OpenAI ada-002 or equivalent
        distance=Distance.COSINE
    )
)

# Sample payload structure
template_payload = {
    "id": "uuid",
    "name": "Optimal Planting Window",
    "industry_vertical": "agriculture",
    "sub_vertical": "crop_farming",
    "prediction_type": "timing",
    "description": "Best dates for planting each crop based on weather, soil, and market conditions",
    "required_data_sources": ["weather_api", "soil_sensors", "almanac"],
    "model_type": "xgboost",
    "keywords": ["planting", "farming", "crops", "weather", "soil", "timing", "agriculture"],

    # Embedded text (what gets vectorized)
    "embedded_text": """
    Optimal Planting Window prediction template for crop farming.
    Predicts the best dates for planting each crop.
    Uses weather APIs, soil sensors, and almanac data.
    Helps farmers know when to plant corn, wheat, soybeans, and other crops.
    Considers weather patterns, soil temperature, frost risk, and market timing.
    """
}
```

### 3.3 Integration with AI Orchestrator

**File:** `services/ai-orchestrator/app/services/semantic_search.py`

```python
import httpx
from typing import List, Dict, Any, Optional
from app.config import settings


class SemanticSearchService:
    """Client for binah-context semantic search"""

    def __init__(self):
        self.base_url = settings.context_service_url  # http://binah-context:8096
        self.client = httpx.AsyncClient(timeout=30.0)

    async def match_template_from_query(
        self,
        query: str,
        industry_filter: Optional[str] = None,
        limit: int = 5
    ) -> List[Dict[str, Any]]:
        """
        Find matching prediction templates from natural language query.

        Example:
            query: "When should I plant my corn?"
            returns: [{"template": "Optimal Planting Window", "score": 0.94}, ...]
        """
        response = await self.client.post(
            f"{self.base_url}/api/search/templates",
            json={
                "query": query,
                "filter": {"industry_vertical": industry_filter} if industry_filter else None,
                "limit": limit
            }
        )
        return response.json()

    async def find_similar_templates(
        self,
        template_id: str,
        limit: int = 5
    ) -> List[Dict[str, Any]]:
        """Find templates similar to a given template"""
        response = await self.client.post(
            f"{self.base_url}/api/search/similar",
            json={"template_id": template_id, "limit": limit}
        )
        return response.json()

    async def suggest_templates_for_tenant(
        self,
        tenant_id: str,
        tenant_description: str,
        connected_data_sources: List[str],
        limit: int = 10
    ) -> List[Dict[str, Any]]:
        """
        Suggest relevant templates based on tenant profile.

        Example:
            tenant_description: "Small organic farm growing vegetables and herbs"
            connected_data_sources: ["weather_api", "pos_system"]
            returns: [{"template": "Yield Forecasting", "relevance": 0.89}, ...]
        """
        response = await self.client.post(
            f"{self.base_url}/api/search/suggest",
            json={
                "tenant_id": tenant_id,
                "description": tenant_description,
                "data_sources": connected_data_sources,
                "limit": limit
            }
        )
        return response.json()

    async def embed_and_store_template(
        self,
        template: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Embed a new template and store in Qdrant"""
        response = await self.client.post(
            f"{self.base_url}/api/embed/template",
            json=template
        )
        return response.json()

    async def enrich_prediction(
        self,
        prediction: Dict[str, Any],
        context_sources: List[str]
    ) -> Dict[str, Any]:
        """Enrich a prediction with additional context"""
        response = await self.client.post(
            f"{self.base_url}/api/enrich/prediction",
            json={"prediction": prediction, "context_sources": context_sources}
        )
        return response.json()
```

### 3.4 Natural Language Prediction API

**File:** `services/ai-orchestrator/app/routers/predictive_analytics.py` (addition)

```python
from fastapi import APIRouter, Depends
from app.services.semantic_search import SemanticSearchService
from app.services.ontology_client import OntologyClient

router = APIRouter(prefix="/predictive-analytics", tags=["Predictive Analytics"])

@router.post("/ask")
async def natural_language_prediction(
    query: str,
    tenant_id: str = Depends(get_tenant_id),
    semantic_search: SemanticSearchService = Depends(),
    ontology: OntologyClient = Depends()
):
    """
    Natural language interface for predictions.

    Examples:
        - "When should I plant corn?"
        - "Will my restaurant be busy this weekend?"
        - "Should I take this legal case?"
        - "What products should I launch next month?"
    """
    # 1. Find matching template via semantic search
    matches = await semantic_search.match_template_from_query(query)

    if not matches:
        return {"message": "No matching prediction templates found", "suggestions": []}

    top_match = matches[0]
    template_id = top_match["template_id"]

    # 2. Check if tenant has required data sources
    required_sources = await ontology.get_required_data_sources(template_id)
    tenant_sources = await get_tenant_data_sources(tenant_id)

    missing_sources = [
        s for s in required_sources
        if s["name"] not in tenant_sources
    ]

    if missing_sources:
        return {
            "matched_template": top_match,
            "can_generate": False,
            "missing_data_sources": missing_sources,
            "message": f"Connect these data sources to enable this prediction: {[s['displayName'] for s in missing_sources]}"
        }

    # 3. Generate prediction
    prediction = await generate_prediction(tenant_id, template_id)

    # 4. Get downstream predictions (what this feeds into)
    chain = await ontology.get_prediction_chain(template_id)

    return {
        "matched_template": top_match,
        "prediction": prediction,
        "confidence": prediction["confidence_score"],
        "recommendation": prediction["recommendation"],
        "feeds_into": [p["name"] for p in chain],
        "alternative_templates": matches[1:3]  # Next best matches
    }
```

---

## Phase 4: ML Model Integration (binah-ml)

### Objective
Integrate `binah-ml` service to power prediction generation with trained models.

### 4.1 Model Type Mapping

```python
# Map prediction types to ML models
PREDICTION_MODEL_MAP = {
    # Existing models in binah-ml
    "cost_forecast": "xgboost",
    "risk_assessment": "random_forest",
    "roi_prediction": "xgboost",
    "anomaly_detection": "isolation_forest",

    # New models to add for Predictive Analytics
    "timing_prediction": "xgboost",          # When to do something
    "demand_forecast": "prophet",            # Time series forecasting
    "churn_prediction": "random_forest",     # Customer churn
    "success_probability": "logistic",       # Binary outcome prediction
    "trend_detection": "prophet",            # Trend identification
    "price_forecast": "lstm",                # Price prediction
    "capacity_planning": "xgboost",          # Resource optimization
}
```

### 4.2 Integration Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    PREDICTION FLOW                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. User Query                                                  │
│     │                                                           │
│     ▼                                                           │
│  2. binah-context: Semantic Template Match                      │
│     │                                                           │
│     ▼                                                           │
│  3. binah-ontology: Get Template Config + Data Source Mapping   │
│     │                                                           │
│     ▼                                                           │
│  4. binah-pipeline: Fetch Data from Connected Sources           │
│     │                                                           │
│     ▼                                                           │
│  5. binah-ml: Run Prediction Model                              │
│     │                                                           │
│     ▼                                                           │
│  6. binah-context: Enrich with Context                          │
│     │                                                           │
│     ▼                                                           │
│  7. Return Prediction + Recommendation                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 ML Service Client

**File:** `services/ai-orchestrator/app/services/ml_client.py`

```python
import httpx
from typing import Dict, Any, List, Optional
from app.config import settings


class MLServiceClient:
    """Client for binah-ml service"""

    def __init__(self):
        self.base_url = settings.ml_service_url  # http://binah-ml:8102
        self.client = httpx.AsyncClient(timeout=60.0)

    async def train_model(
        self,
        tenant_id: str,
        model_type: str,
        training_data: List[Dict[str, Any]],
        config: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        """Train a new model for a tenant"""
        response = await self.client.post(
            f"{self.base_url}/api/ml/train",
            json={
                "tenant_id": tenant_id,
                "model_type": model_type,
                "data": training_data,
                "config": config or {}
            },
            headers={"Authorization": f"Bearer {await get_service_token()}"}
        )
        return response.json()

    async def predict(
        self,
        tenant_id: str,
        model_type: str,
        input_features: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Generate a prediction using trained model"""
        response = await self.client.post(
            f"{self.base_url}/api/ml/predict",
            json={
                "tenant_id": tenant_id,
                "model_type": model_type,
                "features": input_features
            },
            headers={"Authorization": f"Bearer {await get_service_token()}"}
        )
        return response.json()

    async def get_model_metrics(
        self,
        tenant_id: str,
        model_type: str
    ) -> Dict[str, Any]:
        """Get accuracy metrics for a trained model"""
        response = await self.client.get(
            f"{self.base_url}/api/ml/models/{tenant_id}/{model_type}/metrics",
            headers={"Authorization": f"Bearer {await get_service_token()}"}
        )
        return response.json()

    async def explain_prediction(
        self,
        prediction_id: str
    ) -> Dict[str, Any]:
        """Get SHAP/LIME explanation for a prediction"""
        response = await self.client.get(
            f"{self.base_url}/api/ml/predictions/{prediction_id}/explain",
            headers={"Authorization": f"Bearer {await get_service_token()}"}
        )
        return response.json()
```

---

## Phase 5: Data Pipeline Integration (binah-pipeline)

### Objective
Integrate `binah-pipeline` service to fetch data from connected sources for predictions.

### 5.1 Connector Mapping

```python
# Map data source types to binah-pipeline connectors
DATA_SOURCE_CONNECTORS = {
    # ERP Systems
    "quickbooks": "quickbooks_connector",
    "xero": "xero_connector",
    "sage": "sage_connector",

    # POS Systems
    "square": "square_connector",
    "shopify_pos": "shopify_connector",
    "toast": "toast_connector",
    "clover": "clover_connector",

    # CRM Systems
    "hubspot": "hubspot_connector",
    "salesforce": "salesforce_connector",
    "zoho": "zoho_connector",

    # E-Commerce
    "shopify": "shopify_connector",
    "woocommerce": "woocommerce_connector",
    "bigcommerce": "bigcommerce_connector",

    # Weather APIs
    "openweather": "openweather_connector",
    "weather_gov": "weather_gov_connector",

    # Market Data
    "commodity_prices": "commodity_connector",
    "stock_market": "market_data_connector",

    # Custom
    "csv_upload": "csv_connector",
    "api_webhook": "webhook_connector",
}
```

### 5.2 Pipeline Client

**File:** `services/ai-orchestrator/app/services/pipeline_client.py`

```python
import httpx
from typing import Dict, Any, List
from app.config import settings


class PipelineClient:
    """Client for binah-pipeline ETL service"""

    def __init__(self):
        self.base_url = settings.pipeline_service_url  # http://binah-pipeline:8094
        self.client = httpx.AsyncClient(timeout=120.0)

    async def fetch_data_for_prediction(
        self,
        tenant_id: str,
        data_sources: List[str],
        date_range: Dict[str, str],
        aggregation: str = "daily"
    ) -> Dict[str, Any]:
        """Fetch and aggregate data from multiple sources for prediction"""
        response = await self.client.post(
            f"{self.base_url}/api/pipeline/fetch",
            json={
                "tenant_id": tenant_id,
                "sources": data_sources,
                "date_range": date_range,
                "aggregation": aggregation
            }
        )
        return response.json()

    async def get_connector_status(
        self,
        tenant_id: str
    ) -> List[Dict[str, Any]]:
        """Get status of all connected data sources for a tenant"""
        response = await self.client.get(
            f"{self.base_url}/api/connectors/status/{tenant_id}"
        )
        return response.json()

    async def trigger_sync(
        self,
        tenant_id: str,
        connector_type: str
    ) -> Dict[str, Any]:
        """Trigger a data sync for a specific connector"""
        response = await self.client.post(
            f"{self.base_url}/api/connectors/{connector_type}/sync",
            json={"tenant_id": tenant_id}
        )
        return response.json()
```

---

## Infrastructure Requirements

### Docker Compose (Local Development)

**File:** `docker-compose.services.yml`

```yaml
version: '3.8'

services:
  # Existing SMB Platform services...

  # === BINAH SERVICES ===

  binah-ontology:
    build:
      context: ../binelek-core/services/binah-ontology
      dockerfile: Dockerfile
    ports:
      - "8091:8091"
    environment:
      - NEO4J_URI=bolt://neo4j:7687
      - NEO4J_USER=neo4j
      - NEO4J_PASSWORD=${NEO4J_PASSWORD}
      - KAFKA_BOOTSTRAP_SERVERS=kafka:9092
      - REDIS_URL=redis://redis:6379
    depends_on:
      - neo4j
      - kafka
      - redis

  binah-context:
    build:
      context: ../binelek-data/services/binah-context
      dockerfile: Dockerfile
    ports:
      - "8096:8096"
    environment:
      - QDRANT_HOST=qdrant
      - QDRANT_PORT=6333
      - EMBEDDING_PROVIDER=ollama
      - OLLAMA_HOST=ollama
      - POSTGRES_URL=postgresql://user:pass@postgres:5432/binelek
    depends_on:
      - qdrant
      - ollama
      - postgres

  binah-ml:
    build:
      context: ../binelek-ai/services/binah-ml
      dockerfile: Dockerfile
    ports:
      - "8102:8102"
    environment:
      - MLFLOW_TRACKING_URI=http://mlflow:5000
      - POSTGRES_URL=postgresql://user:pass@postgres:5432/binelek
    depends_on:
      - mlflow
      - postgres

  binah-pipeline:
    build:
      context: ../binelek-data/services/binah-pipeline
      dockerfile: Dockerfile
    ports:
      - "8094:8094"
    environment:
      - POSTGRES_URL=postgresql://user:pass@postgres:5432/binelek
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

  # === DATA STORES ===

  neo4j:
    image: neo4j:5.15-community
    ports:
      - "7474:7474"  # HTTP
      - "7687:7687"  # Bolt
    environment:
      - NEO4J_AUTH=neo4j/${NEO4J_PASSWORD}
      - NEO4J_PLUGINS=["apoc"]
    volumes:
      - neo4j_data:/data

  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/qdrant/storage

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    ports:
      - "9092:9092"
    environment:
      - KAFKA_BROKER_ID=1
      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092
    depends_on:
      - zookeeper

  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    ports:
      - "2181:2181"
    environment:
      - ZOOKEEPER_CLIENT_PORT=2181

  ollama:
    image: ollama/ollama:latest
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama

  mlflow:
    image: ghcr.io/mlflow/mlflow:latest
    ports:
      - "5000:5000"
    environment:
      - MLFLOW_BACKEND_STORE_URI=postgresql://user:pass@postgres:5432/mlflow
    depends_on:
      - postgres

volumes:
  neo4j_data:
  qdrant_data:
  ollama_data:
```

---

## Implementation Timeline

### Sprint 1: Foundation (Week 1-2)
- [ ] Deploy Neo4j, Qdrant, Kafka infrastructure
- [ ] Create database migrations for Phase 1 (JSON-LD)
- [ ] Seed industry verticals and data source types
- [ ] Set up binah-ontology service connection

### Sprint 2: Knowledge Graph (Week 3-4)
- [ ] Integrate binah-ontology client
- [ ] Migrate templates to Neo4j
- [ ] Implement prediction chaining queries
- [ ] Add Kafka event publishing

### Sprint 3: Semantic Search (Week 5-6)
- [ ] Integrate binah-context client
- [ ] Embed all 518 templates in Qdrant
- [ ] Implement natural language query endpoint
- [ ] Add template suggestion API

### Sprint 4: ML Integration (Week 7-8)
- [ ] Integrate binah-ml client
- [ ] Map prediction types to models
- [ ] Implement prediction generation flow
- [ ] Add model training triggers

### Sprint 5: Data Pipeline (Week 9-10)
- [ ] Integrate binah-pipeline client
- [ ] Map data sources to connectors
- [ ] Implement data fetching for predictions
- [ ] Add connector status monitoring

### Sprint 6: Frontend & Polish (Week 11-12)
- [ ] Build Predictive Analytics UI
- [ ] Add industry template browser
- [ ] Implement prediction dashboard
- [ ] Testing and documentation

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Template match accuracy | > 90% |
| Prediction latency | < 2 seconds |
| Model accuracy (avg) | > 80% |
| Data source sync success | > 99% |
| API uptime | > 99.9% |

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Neo4j performance at scale | High | Implement caching, query optimization |
| Embedding quality | Medium | Test multiple providers, fine-tune |
| ML model drift | Medium | Implement monitoring, auto-retraining |
| Service coordination | High | Use Kafka for async, circuit breakers |
| Data source API limits | Medium | Implement rate limiting, caching |
