# Predictive Analytics - New Module Implementation Plan

## Overview

This document provides a step-by-step implementation plan for **ADDING** Predictive Analytics as a **5th module** to the Binelek platform, alongside the existing four modules:

1. Ops Copilot
2. Mini Foundry
3. Cybersecurity Scanner *(unchanged)*
4. Marketplace Intel
5. **Predictive Analytics** *(NEW)*

---

## Module Concept Definition

### Predictive Analytics Module

**Purpose:** Help SMBs across various industries forecast business trends, predict outcomes, and make data-driven decisions using AI-powered analytics.

### Core Features

| Feature | Description |
|---------|-------------|
| **Prediction Accuracy Score (0-100)** | Composite score showing overall prediction reliability |
| **Trend Detection** | Automatic identification of patterns in business data |
| **Forecast Reports** | Revenue, demand, and custom metric predictions (30/60/90 days) |
| **Anomaly Detection** | Unusual pattern alerts and early warning system |
| **Industry Templates** | Pre-built prediction models for specific verticals |

### Industry-Specific Capabilities

The module will support multiple SMB verticals with tailored predictions:

#### General Business / Retail
- New product launch timing recommendations
- Revenue and sales forecasting
- Customer churn prediction
- Inventory demand forecasting

#### Agriculture / Farming
- Optimal planting date predictions
- Yield forecasting based on conditions
- Commodity price-at-harvest predictions
- Weather impact analysis

#### Legal Services
- Case success probability scoring
- Workload capacity forecasting
- Case duration predictions
- ROI analysis for case selection

#### Food Service / Restaurants
- Menu item success predictions
- Ingredient cost forecasting
- Seasonal demand patterns
- New menu item recommendations

### Visual Identity

| Element | Value |
|---------|-------|
| Icon | `TrendingUp`, `LineChart`, or `Activity` (Lucide) |
| Color | Indigo/Violet (`from-indigo-500 to-violet-500`) |
| Emoji | 📊 or 🔮 |

---

## Phase 1: Marketing Website

### Files to CREATE

| File | Purpose |
|------|---------|
| `src/app/product/predictive-analytics/page.tsx` | New product page |

### Files to MODIFY

| File | Change |
|------|--------|
| `src/components/Header.tsx` | Add nav link to productLinks array |
| `src/components/Footer.tsx` | Add footer link |
| `src/app/page.tsx` | Add 5th module card |
| `messages/en.json` | Add ~40 new translation keys |
| `messages/de.json` | Add ~40 new translation keys |
| `messages/fr.json` | Add ~40 new translation keys |
| `messages/es.json` | Add ~40 new translation keys |

### Step 1.1: Create Product Page

**File:** `src/app/product/predictive-analytics/page.tsx`

```tsx
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function PredictiveAnalyticsPage() {
  const t = useTranslations("product.predictiveAnalytics");
  const tCommon = useTranslations("common");

  const capabilities = [
    { icon: "🎯", title: t("predictionScore"), desc: t("predictionScoreDesc") },
    { icon: "📈", title: t("trendDetection"), desc: t("trendDetectionDesc") },
    { icon: "📊", title: t("forecastReporting"), desc: t("forecastReportingDesc") },
    { icon: "🔔", title: t("anomalyDetection"), desc: t("anomalyDetectionDesc") },
  ];

  const industries = [
    { icon: "🏪", name: t("industryRetail"), examples: t("industryRetailExamples") },
    { icon: "🌾", name: t("industryAgriculture"), examples: t("industryAgricultureExamples") },
    { icon: "⚖️", name: t("industryLegal"), examples: t("industryLegalExamples") },
    { icon: "🍽️", name: t("industryRestaurant"), examples: t("industryRestaurantExamples") },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <span className="text-xl">📊</span>
              {t("badge")}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              {t("heroSubtitle")}
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {tCommon("getEarlyAccess")}
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t("capabilitiesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Templates */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {t("industriesTitle")}
            </h2>
            <p className="text-gray-600 text-center mb-12">
              {t("industriesSubtitle")}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((ind) => (
                <div key={ind.name} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{ind.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{ind.name}</h3>
                      <p className="text-gray-600 text-sm">{ind.examples}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("dashboardTitle")}
            </h2>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl shadow-lg p-8">
              {/* Prediction Score Circle */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                    <circle
                      cx="50" cy="50" r="45" fill="none" stroke="#6366F1" strokeWidth="10"
                      strokeDasharray="283" strokeDashoffset="28" strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">90</span>
                    <span className="text-xs text-gray-500">{t("accuracyLabel")}</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">247</div>
                  <div className="text-sm text-gray-600">{t("statPredictions")}</div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">12</div>
                  <div className="text-sm text-gray-600">{t("statInsights")}</div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-600">94%</div>
                  <div className="text-sm text-gray-600">{t("statAccuracy")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Predictions by Industry */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {t("examplesTitle")}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {t("examplesSubtitle")}
            </p>

            <div className="space-y-4">
              {/* Retail Example */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🏪</span>
                  <span className="font-bold text-gray-900">{t("exampleRetailTitle")}</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs ml-auto">
                    {t("highConfidence")}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{t("exampleRetailDesc")}</p>
              </div>

              {/* Agriculture Example */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-emerald-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🌾</span>
                  <span className="font-bold text-gray-900">{t("exampleFarmTitle")}</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs ml-auto">
                    {t("mediumConfidence")}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{t("exampleFarmDesc")}</p>
              </div>

              {/* Legal Example */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">⚖️</span>
                  <span className="font-bold text-gray-900">{t("exampleLegalTitle")}</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs ml-auto">
                    {t("highConfidence")}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{t("exampleLegalDesc")}</p>
              </div>

              {/* Restaurant Example */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🍽️</span>
                  <span className="font-bold text-gray-900">{t("exampleRestaurantTitle")}</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs ml-auto">
                    {t("highConfidence")}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{t("exampleRestaurantDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Integrations */}
      <section className="py-16 bg-white">
        <div className="container-marketing text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t("integrationsTitle")}
          </h2>
          <p className="text-gray-600 mb-8">{t("integrationsSubtitle")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Shopify", "QuickBooks", "Stripe", "Square", "Xero", "HubSpot", "Salesforce", "Toast POS", "Weather APIs", "Market Data"].map((name) => (
              <div key={name} className="px-4 py-2 bg-gray-50 rounded-lg shadow-sm text-gray-700 text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-violet-700">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {t("valueTitle")}
            </h2>
            <p className="text-xl opacity-90 font-serif">
              {t("valueDesc")}
            </p>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
```

### Step 1.2: Translation Keys (English)

Add to `messages/en.json`:

```json
{
  "nav": {
    "predictiveAnalytics": "Predictive Analytics"
  },
  "home": {
    "modulePredictiveAnalytics": "Predictive Analytics",
    "modulePredictiveAnalyticsTagline": "See tomorrow today",
    "modulePredictiveAnalyticsDesc": "AI-powered forecasting for any industry. Turn your data into actionable predictions.",
    "featurePredictionScoring": "Prediction accuracy",
    "featureTrendDetection": "Trend detection",
    "featureForecastReporting": "Forecast reports",
    "featureAnomalyAlerts": "Anomaly alerts"
  },
  "product": {
    "predictiveAnalytics": {
      "badge": "Predictive Analytics",
      "heroTitle": "Know what's coming before it happens",
      "heroSubtitle": "AI-powered predictions tailored to your industry. From farms to law firms, make confident decisions backed by data.",
      "capabilitiesTitle": "Powerful prediction capabilities",
      "predictionScore": "Prediction Score",
      "predictionScoreDesc": "A 0-100 composite score showing how reliable your forecasts are based on historical accuracy.",
      "trendDetection": "Trend Detection",
      "trendDetectionDesc": "Automatic identification of patterns, seasonality, and growth trajectories in your data.",
      "forecastReporting": "Forecast Reports",
      "forecastReportingDesc": "Revenue, demand, and custom metric predictions for 30, 60, or 90 days ahead.",
      "anomalyDetection": "Anomaly Detection",
      "anomalyDetectionDesc": "Get alerted to unusual patterns before they become problems. Early warning for your business.",
      "industriesTitle": "Built for your industry",
      "industriesSubtitle": "Pre-built prediction templates designed for specific business types, ready to use on day one.",
      "industryRetail": "Retail & E-commerce",
      "industryRetailExamples": "Product launch timing, demand forecasting, inventory optimization, customer churn prediction",
      "industryAgriculture": "Agriculture & Farming",
      "industryAgricultureExamples": "Optimal planting dates, yield forecasting, commodity price predictions, weather impact analysis",
      "industryLegal": "Legal Services",
      "industryLegalExamples": "Case success probability, workload forecasting, case duration estimates, ROI analysis",
      "industryRestaurant": "Food Service & Restaurants",
      "industryRestaurantExamples": "Menu item success predictions, ingredient cost forecasting, seasonal demand, new item recommendations",
      "dashboardTitle": "Your predictions at a glance",
      "accuracyLabel": "accuracy",
      "statPredictions": "Predictions",
      "statInsights": "Active Insights",
      "statAccuracy": "Accuracy Rate",
      "examplesTitle": "Real predictions for real businesses",
      "examplesSubtitle": "See the kind of actionable insights you'll receive.",
      "exampleRetailTitle": "Launch new product line next month",
      "exampleRetailDesc": "Based on competitor gaps and rising search trends, March 15-22 shows optimal launch window with 23% higher success probability.",
      "exampleFarmTitle": "Plant corn by April 12th",
      "exampleFarmDesc": "Weather patterns and soil temperature trends suggest April 8-12 as optimal planting window for maximum yield potential.",
      "exampleLegalTitle": "High-value case recommended",
      "exampleLegalDesc": "New client case shows 78% win probability based on jurisdiction history and case specifics. Estimated value: $45K.",
      "exampleRestaurantTitle": "Add spicy chicken sandwich",
      "exampleRestaurantDesc": "Local search trends up 340% for spicy chicken. Competitors within 5mi don't offer it. Predicted margin: 62%.",
      "highConfidence": "92% confidence",
      "mediumConfidence": "76% confidence",
      "integrationsTitle": "Connects to your existing tools",
      "integrationsSubtitle": "Pull data from the systems you already use.",
      "valueTitle": "Enterprise-grade analytics made simple",
      "valueDesc": "You don't need a data science team to see the future. Binelek brings predictive power to every business."
    }
  },
  "demo": {
    "interestPredictiveAnalytics": "Predictive Analytics"
  }
}
```

### Step 1.3: Update Header.tsx

Add to productLinks array:

```tsx
{ nameKey: "predictiveAnalytics", href: "/product/predictive-analytics" },
```

### Step 1.4: Update Footer.tsx

Add to productLinks array:

```tsx
{ nameKey: "predictiveAnalytics", href: "/product/predictive-analytics" },
```

### Step 1.5: Update Homepage

Add 5th module to the modules array and moduleIcons:

```tsx
// Add to moduleIcons array
{ Icon: TrendingUp, color: "from-indigo-500 to-violet-500", href: "/product/predictive-analytics" },

// Add to modules array
{
  name: t("modulePredictiveAnalytics"),
  tagline: t("modulePredictiveAnalyticsTagline"),
  description: t("modulePredictiveAnalyticsDesc"),
  features: [
    t("featurePredictionScoring"),
    t("featureTrendDetection"),
    t("featureForecastReporting"),
    t("featureAnomalyAlerts"),
  ],
  ...moduleIcons[4], // 5th module (0-indexed)
}
```

---

## Phase 2: Backend Platform

### New Files to CREATE

| File | Purpose |
|------|---------|
| `database/migrations/XXX_add_predictive_analytics.sql` | New tables |
| `services/ai-orchestrator/app/models/predictive_analytics.py` | SQLAlchemy models |
| `services/ai-orchestrator/app/services/predictive_analytics_service.py` | Business logic |
| `services/ai-orchestrator/app/routers/predictive_analytics.py` | API endpoints |

### Files to MODIFY

| File | Change |
|------|--------|
| `services/ai-orchestrator/app/main.py` | Register new router |
| `gateway/src/routes/modules.ts` | Add predictive-analytics routes |
| `gateway/src/routes/modules-direct.ts` | Add direct routes |

### Step 2.1: Database Migration

**File:** `database/migrations/XXX_add_predictive_analytics.sql`

```sql
-- Predictive Analytics Module Tables

-- Predictions table
CREATE TABLE predictions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    prediction_type VARCHAR(50) NOT NULL,  -- revenue, demand, churn, custom, agricultural, legal, menu
    industry_vertical VARCHAR(50),          -- retail, agriculture, legal, restaurant, general
    confidence_level VARCHAR(20) DEFAULT 'medium',
    confidence_score NUMERIC(5, 2),
    predicted_value JSONB,
    actual_value JSONB,
    prediction_date TIMESTAMP,
    valid_until TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active',    -- active, verified, expired, dismissed
    recommendation TEXT,
    source VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Data sources for predictions
CREATE TABLE prediction_data_sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    source_type VARCHAR(50) NOT NULL,       -- erp, crm, pos, weather, market, custom
    provider VARCHAR(100),                   -- shopify, quickbooks, weather_api, etc.
    connection_status VARCHAR(20) DEFAULT 'pending',
    last_sync_at TIMESTAMP,
    data_quality_score INTEGER,
    config JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Industry templates
CREATE TABLE prediction_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    industry_vertical VARCHAR(50) NOT NULL,
    prediction_type VARCHAR(50) NOT NULL,
    description TEXT,
    required_data_sources JSONB,
    default_config JSONB,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_predictions_tenant ON predictions(tenant_id);
CREATE INDEX idx_predictions_type ON predictions(prediction_type);
CREATE INDEX idx_predictions_status ON predictions(status);
CREATE INDEX idx_predictions_industry ON predictions(industry_vertical);
CREATE INDEX idx_data_sources_tenant ON prediction_data_sources(tenant_id);

-- Insert default templates
INSERT INTO prediction_templates (name, industry_vertical, prediction_type, description, required_data_sources) VALUES
('Revenue Forecast', 'general', 'revenue', 'Predict revenue for next 30/60/90 days', '["erp", "pos"]'),
('Customer Churn', 'general', 'churn', 'Identify customers likely to churn', '["crm"]'),
('Product Launch Timing', 'retail', 'launch', 'Optimal timing for new product launches', '["pos", "market"]'),
('Crop Planting Window', 'agriculture', 'planting', 'Optimal dates for planting crops', '["weather", "market"]'),
('Yield Forecast', 'agriculture', 'yield', 'Predicted crop yield based on conditions', '["weather", "custom"]'),
('Case Success Probability', 'legal', 'case_success', 'Win probability for potential cases', '["custom"]'),
('Menu Item Success', 'restaurant', 'menu', 'Predicted success of new menu items', '["pos", "market"]'),
('Demand Forecast', 'general', 'demand', 'Product/service demand predictions', '["pos", "erp"]');
```

### Step 2.2: Python Models

**File:** `services/ai-orchestrator/app/models/predictive_analytics.py`

```python
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Text, Numeric, Boolean
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from app.database import Base
import uuid
from datetime import datetime


class Prediction(Base):
    """A prediction/forecast generated by the analytics engine"""
    __tablename__ = "predictions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"), nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    prediction_type = Column(String(50), nullable=False)
    industry_vertical = Column(String(50))
    confidence_level = Column(String(20), default="medium")
    confidence_score = Column(Numeric(5, 2))
    predicted_value = Column(JSONB)
    actual_value = Column(JSONB)
    prediction_date = Column(DateTime)
    valid_until = Column(DateTime)
    status = Column(String(20), default="active")
    recommendation = Column(Text)
    source = Column(String(100))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    tenant = relationship("Tenant", back_populates="predictions")


class PredictionDataSource(Base):
    """External data source connected for predictions"""
    __tablename__ = "prediction_data_sources"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"), nullable=False)
    name = Column(String(255), nullable=False)
    source_type = Column(String(50), nullable=False)
    provider = Column(String(100))
    connection_status = Column(String(20), default="pending")
    last_sync_at = Column(DateTime)
    data_quality_score = Column(Integer)
    config = Column(JSONB)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    tenant = relationship("Tenant", back_populates="prediction_data_sources")


class PredictionTemplate(Base):
    """Pre-built prediction templates for industries"""
    __tablename__ = "prediction_templates"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    industry_vertical = Column(String(50), nullable=False)
    prediction_type = Column(String(50), nullable=False)
    description = Column(Text)
    required_data_sources = Column(JSONB)
    default_config = Column(JSONB)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
```

### Step 2.3: API Router

**File:** `services/ai-orchestrator/app/routers/predictive_analytics.py`

```python
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime
from enum import Enum

router = APIRouter(prefix="/predictive-analytics", tags=["Predictive Analytics"])


# Enums
class PredictionType(str, Enum):
    revenue = "revenue"
    demand = "demand"
    churn = "churn"
    launch = "launch"
    planting = "planting"
    yield_forecast = "yield"
    case_success = "case_success"
    menu = "menu"
    custom = "custom"


class IndustryVertical(str, Enum):
    general = "general"
    retail = "retail"
    agriculture = "agriculture"
    legal = "legal"
    restaurant = "restaurant"


# Pydantic models
class PredictionOverview(BaseModel):
    accuracy_score: int
    total_predictions: int
    active_predictions: int
    verified_predictions: int
    pending_insights: int
    predictions_by_type: dict
    predictions_by_industry: dict


class PredictionResponse(BaseModel):
    id: str
    title: str
    description: Optional[str]
    prediction_type: str
    industry_vertical: Optional[str]
    confidence_level: str
    confidence_score: Optional[float]
    predicted_value: Optional[dict]
    prediction_date: Optional[datetime]
    valid_until: Optional[datetime]
    status: str
    recommendation: Optional[str]


class PredictionCreate(BaseModel):
    title: str
    description: Optional[str]
    prediction_type: PredictionType
    industry_vertical: Optional[IndustryVertical]
    predicted_value: dict
    prediction_date: datetime
    valid_until: Optional[datetime]
    recommendation: Optional[str]


class DataSourceResponse(BaseModel):
    id: str
    name: str
    source_type: str
    provider: Optional[str]
    connection_status: str
    last_sync_at: Optional[datetime]
    data_quality_score: Optional[int]


class TemplateResponse(BaseModel):
    id: str
    name: str
    industry_vertical: str
    prediction_type: str
    description: Optional[str]
    required_data_sources: list


# Endpoints
@router.get("/overview", response_model=PredictionOverview)
async def get_prediction_overview(
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Get predictive analytics overview with accuracy metrics"""
    pass


@router.get("/predictions", response_model=List[PredictionResponse])
async def get_predictions(
    prediction_type: Optional[PredictionType] = None,
    industry: Optional[IndustryVertical] = None,
    status: Optional[str] = None,
    limit: int = Query(20, le=100),
    offset: int = 0,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """List predictions with optional filters"""
    pass


@router.get("/predictions/{prediction_id}", response_model=PredictionResponse)
async def get_prediction(
    prediction_id: str,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Get a specific prediction by ID"""
    pass


@router.post("/predictions", response_model=PredictionResponse)
async def create_prediction(
    prediction: PredictionCreate,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Create a new prediction manually"""
    pass


@router.patch("/predictions/{prediction_id}/verify")
async def verify_prediction(
    prediction_id: str,
    actual_value: dict,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Mark a prediction as verified with actual outcome"""
    pass


@router.patch("/predictions/{prediction_id}/dismiss")
async def dismiss_prediction(
    prediction_id: str,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Dismiss a prediction"""
    pass


@router.get("/accuracy")
async def get_accuracy_metrics(
    industry: Optional[IndustryVertical] = None,
    prediction_type: Optional[PredictionType] = None,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Get detailed prediction accuracy metrics"""
    pass


@router.get("/data-sources", response_model=List[DataSourceResponse])
async def get_data_sources(
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """List connected data sources"""
    pass


@router.post("/data-sources")
async def connect_data_source(
    source_type: str,
    provider: str,
    config: dict,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Connect a new data source"""
    pass


@router.delete("/data-sources/{source_id}")
async def disconnect_data_source(
    source_id: str,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Disconnect a data source"""
    pass


@router.get("/templates", response_model=List[TemplateResponse])
async def get_templates(
    industry: Optional[IndustryVertical] = None,
    db: Session = Depends(get_db)
):
    """List available prediction templates"""
    pass


@router.post("/generate")
async def generate_predictions(
    template_id: Optional[str] = None,
    prediction_type: Optional[PredictionType] = None,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Trigger AI prediction generation"""
    pass


@router.post("/generate/batch")
async def generate_batch_predictions(
    template_ids: List[str],
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Generate predictions from multiple templates"""
    pass
```

---

## Phase 3: Frontend Application

### New Files to CREATE

| File | Purpose |
|------|---------|
| `src/pages/modules/PredictiveAnalytics.tsx` | Main module page |
| `src/services/predictiveAnalytics.ts` | API client |
| `src/components/predictive-analytics/PredictionCard.tsx` | Prediction display card |
| `src/components/predictive-analytics/AccuracyGauge.tsx` | Accuracy score visual |

### Files to MODIFY

| File | Change |
|------|--------|
| `src/App.tsx` | Add route `/predictive-analytics` |
| `src/components/layout/Sidebar.tsx` | Add navigation item |
| `src/types/index.ts` | Add Prediction, DataSource interfaces |
| `src/hooks/useRealtime.ts` | Add usePredictiveAnalyticsRealtime hook |
| `src/services/modules.ts` | Add module config |

### Step 3.1: Types

Add to `src/types/index.ts`:

```typescript
// Predictive Analytics Types
export interface Prediction {
  id: string;
  title: string;
  description?: string;
  predictionType: 'revenue' | 'demand' | 'churn' | 'launch' | 'planting' | 'yield' | 'case_success' | 'menu' | 'custom';
  industryVertical?: 'general' | 'retail' | 'agriculture' | 'legal' | 'restaurant';
  confidenceLevel: 'high' | 'medium' | 'low';
  confidenceScore?: number;
  predictedValue?: Record<string, any>;
  actualValue?: Record<string, any>;
  predictionDate?: string;
  validUntil?: string;
  status: 'active' | 'verified' | 'expired' | 'dismissed';
  recommendation?: string;
  createdAt: string;
}

export interface PredictionDataSource {
  id: string;
  name: string;
  sourceType: 'erp' | 'crm' | 'pos' | 'weather' | 'market' | 'custom';
  provider?: string;
  connectionStatus: 'active' | 'pending' | 'error';
  lastSyncAt?: string;
  dataQualityScore?: number;
}

export interface PredictionTemplate {
  id: string;
  name: string;
  industryVertical: string;
  predictionType: string;
  description?: string;
  requiredDataSources: string[];
}

export interface PredictiveAnalyticsOverview {
  accuracyScore: number;
  totalPredictions: number;
  activePredictions: number;
  verifiedPredictions: number;
  pendingInsights: number;
  predictionsByType: Record<string, number>;
  predictionsByIndustry: Record<string, number>;
}
```

### Step 3.2: API Service

**File:** `src/services/predictiveAnalytics.ts`

```typescript
import api from './api';
import type {
  Prediction,
  PredictionDataSource,
  PredictionTemplate,
  PredictiveAnalyticsOverview
} from '../types';

const BASE_URL = '/modules/predictive-analytics';

export const predictiveAnalyticsService = {
  // Overview
  getOverview: () =>
    api.get<PredictiveAnalyticsOverview>(`${BASE_URL}/overview`),

  // Predictions
  getPredictions: (params?: {
    predictionType?: string;
    industry?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }) => api.get<Prediction[]>(`${BASE_URL}/predictions`, { params }),

  getPrediction: (id: string) =>
    api.get<Prediction>(`${BASE_URL}/predictions/${id}`),

  createPrediction: (data: Partial<Prediction>) =>
    api.post<Prediction>(`${BASE_URL}/predictions`, data),

  verifyPrediction: (id: string, actualValue: Record<string, any>) =>
    api.patch(`${BASE_URL}/predictions/${id}/verify`, { actualValue }),

  dismissPrediction: (id: string) =>
    api.patch(`${BASE_URL}/predictions/${id}/dismiss`),

  // Accuracy
  getAccuracyMetrics: (params?: { industry?: string; predictionType?: string }) =>
    api.get(`${BASE_URL}/accuracy`, { params }),

  // Data Sources
  getDataSources: () =>
    api.get<PredictionDataSource[]>(`${BASE_URL}/data-sources`),

  connectDataSource: (sourceType: string, provider: string, config: Record<string, any>) =>
    api.post(`${BASE_URL}/data-sources`, { sourceType, provider, config }),

  disconnectDataSource: (id: string) =>
    api.delete(`${BASE_URL}/data-sources/${id}`),

  // Templates
  getTemplates: (industry?: string) =>
    api.get<PredictionTemplate[]>(`${BASE_URL}/templates`, { params: { industry } }),

  // Generation
  generatePredictions: (templateId?: string, predictionType?: string) =>
    api.post(`${BASE_URL}/generate`, { templateId, predictionType }),

  generateBatchPredictions: (templateIds: string[]) =>
    api.post(`${BASE_URL}/generate/batch`, { templateIds }),
};

export default predictiveAnalyticsService;
```

### Step 3.3: Sidebar Navigation

Add to `src/components/layout/Sidebar.tsx`:

```tsx
{
  name: 'Predictive Analytics',
  href: '/predictive-analytics',
  icon: TrendingUp,  // from lucide-react
  color: 'from-indigo-500 to-violet-500',
}
```

### Step 3.4: App Router

Add to `src/App.tsx`:

```tsx
import PredictiveAnalytics from './pages/modules/PredictiveAnalytics';

// In routes
<Route path="/predictive-analytics" element={<PredictiveAnalytics />} />
```

---

## Phase 4: Testing Checklist

### Marketing Website
- [ ] `/product/predictive-analytics` loads correctly
- [ ] All 4 languages display correct translations
- [ ] Navigation links work (Header, Footer, Mobile menu)
- [ ] Homepage shows 5 module cards
- [ ] Demo form includes Predictive Analytics option

### Backend API
- [ ] `GET /api/modules/predictive-analytics/overview` returns data
- [ ] `GET /api/modules/predictive-analytics/predictions` returns list
- [ ] `GET /api/modules/predictive-analytics/templates` returns industry templates
- [ ] `POST /api/modules/predictive-analytics/generate` triggers prediction
- [ ] Database migration runs without errors
- [ ] Module access control respects subscription tiers

### Frontend Application
- [ ] `/predictive-analytics` route loads
- [ ] Sidebar shows new module with correct icon/color
- [ ] Overview displays accuracy score
- [ ] Predictions list with filters works
- [ ] Data sources connection UI works
- [ ] Industry template selection works

### Integration
- [ ] Real-time prediction updates via WebSocket
- [ ] Cross-module data sharing works (if applicable)
- [ ] Subscription tier gating enforced

---

## Summary

| Repository | New Files | Modified Files |
|------------|-----------|----------------|
| Marketing Website | 1 | 6 |
| Backend | 4 | 3 |
| Frontend | 4 | 5 |
| **Total** | **9** | **14** |

**Total: 23 files** (vs 50+ for replacement approach)

This is a cleaner approach that:
1. Doesn't break existing Cybersecurity Scanner functionality
2. Adds new value without disruption
3. Can be developed and tested independently
4. Allows gradual rollout
