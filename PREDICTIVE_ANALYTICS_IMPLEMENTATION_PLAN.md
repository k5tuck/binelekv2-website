# Predictive Analytics Module Implementation Plan

## Overview

This document provides a step-by-step implementation plan for replacing the Security Scanner module with a Predictive Analytics module across the entire Binelek platform.

---

## Module Concept Definition

### Predictive Analytics Module

**Purpose:** Help SMBs forecast business trends, predict customer behavior, and make data-driven decisions using AI-powered analytics.

**Core Features:**

1. **Prediction Accuracy Score (0-100)**
   - Composite score showing overall prediction reliability
   - Based on historical accuracy of past predictions

2. **Trend Detection**
   - Automatic identification of revenue patterns
   - Seasonal trend analysis
   - Growth/decline trajectory detection

3. **Forecast Reports**
   - Revenue forecasting (30/60/90 days)
   - Customer churn prediction
   - Demand forecasting
   - Cash flow projections

4. **Anomaly Detection**
   - Unusual transaction patterns
   - Outlier identification in metrics
   - Early warning alerts

### Visual Identity

| Element | Current (Security) | New (Predictive Analytics) |
|---------|-------------------|---------------------------|
| Icon | Shield | TrendingUp, LineChart, or Activity |
| Color | Emerald/Teal (`from-emerald-500 to-teal-500`) | Indigo/Violet (`from-indigo-500 to-violet-500`) |
| Emoji | 🛡️ | 📊 or 🔮 |

---

## Phase 1: Marketing Website Implementation

### Step 1.1: Rename Security Page Directory

```bash
# Rename directory
mv src/app/product/security src/app/product/predictive-analytics
```

### Step 1.2: Update page.tsx (Complete Rewrite)

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

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <span className="text-xl">📊</span>
              Predictive Analytics
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("atAGlance")}
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Prediction Score Circle */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                    <circle
                      cx="50" cy="50" r="45" fill="none" stroke="#6366F1" strokeWidth="10"
                      strokeDasharray="283" strokeDashoffset="42" strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">92</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">156</div>
                  <div className="text-sm text-gray-600">{t("predictionsGenerated")}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">8</div>
                  <div className="text-sm text-gray-600">{t("pendingInsights")}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">94%</div>
                  <div className="text-sm text-gray-600">{t("forecastAccuracy")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Prediction */}
      <section className="py-16 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {t("samplePrediction")}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {t("samplePredictionDesc")}
            </p>

            <div className="bg-indigo-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-gray-900">{t("revenueSpike")}</span>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">
                      {t("highConfidence")}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {t("revenueSpikeDesc")}
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>{t("recommendation")}:</strong> {t("revenueSpikeRecommendation")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Integrations */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t("dataIntegrations")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Shopify", "QuickBooks", "Stripe", "HubSpot", "Square", "Xero"].map((name) => (
              <div key={name} className="px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("differentiationTitle")}
            </h2>
            <p className="text-xl text-gray-600 font-serif">
              {t("differentiationDesc")}
            </p>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
```

### Step 1.3: Update Translation Files

**English (messages/en.json) - New Keys:**

```json
{
  "nav": {
    "predictiveAnalytics": "Predictive Analytics",
    "predictiveAnalyticsScanner": "Predictive Analytics"
  },
  "home": {
    "benefitPredictiveInsights": "Predictive Insights",
    "benefitPredictiveInsightsDesc": "AI-powered forecasting built in. Know what's coming before it happens.",
    "modulePredictiveAnalytics": "Predictive Analytics",
    "modulePredictiveAnalyticsTagline": "See tomorrow today",
    "modulePredictiveAnalyticsDesc": "AI-powered forecasting made simple. Turn your data into actionable predictions.",
    "featurePredictiveScoring": "Prediction accuracy",
    "featureTrendDetection": "Trend detection",
    "featureForecastReporting": "Forecast reports",
    "featureAnomalyMonitoring": "Anomaly alerts"
  },
  "product": {
    "predictiveAnalytics": {
      "heroTitle": "See tomorrow's trends today",
      "heroSubtitle": "Turn your business data into actionable predictions. Know what's coming before it happens.",
      "predictionScore": "Prediction Score",
      "predictionScoreDesc": "A 0-100 composite score showing prediction accuracy. Trust your forecasts.",
      "trendDetection": "Trend Detection",
      "trendDetectionDesc": "Automatic identification of patterns in your data. Spot opportunities early.",
      "forecastReporting": "Forecast Reports",
      "forecastReportingDesc": "Revenue, demand, and churn predictions. Plan with confidence.",
      "anomalyDetection": "Anomaly Detection",
      "anomalyDetectionDesc": "Unusual pattern alerts. Catch issues before they become problems.",
      "atAGlance": "Your predictions at a glance",
      "predictionsGenerated": "Predictions Generated",
      "pendingInsights": "Pending Insights",
      "forecastAccuracy": "Forecast Accuracy",
      "dashboardPreview": "Predictive analytics dashboard preview",
      "samplePrediction": "Sample prediction insight",
      "samplePredictionDesc": "See exactly what kind of insights you'll receive.",
      "revenueSpike": "Revenue spike predicted next week",
      "highConfidence": "92% confidence",
      "revenueSpikeDesc": "Based on historical patterns and current trends, we predict a 23% revenue increase between March 15-22.",
      "recommendation": "Recommendation",
      "revenueSpikeRecommendation": "Ensure inventory levels are adequate and consider staffing adjustments for the expected demand.",
      "dataIntegrations": "Powered by your existing data",
      "differentiationTitle": "Enterprise analytics made simple for growing businesses",
      "differentiationDesc": "Predictive analytics is included in every plan. Because knowing what's coming shouldn't require a data science team."
    }
  },
  "whyBinelek": {
    "predictiveAnalyticsIncludedTitle": "Predictive Analytics Included, Not Extra",
    "predictiveAnalyticsIncludedDesc": "Most platforms treat analytics as an afterthought. Binelek gives you AI-powered predictions automatically, because planning ahead shouldn't be optional."
  },
  "demo": {
    "interestPredictiveAnalytics": "Predictive Analytics"
  },
  "resources": {
    "videos": {
      "videoPredictiveAnalytics": "Predictive Analytics",
      "videoPredictiveAnalyticsDesc": "Understanding your prediction accuracy score"
    },
    "faq": {
      "categoryPredictiveAnalytics": "Predictive Analytics"
    }
  },
  "comingSoon": {
    "feature3": "AI-powered predictive analytics",
    "predictiveAnalytics": "Predictive",
    "predictiveAnalyticsDesc": "AI Forecasting"
  }
}
```

### Step 1.4: Update Header.tsx

```tsx
// Line 13 - Update productLinks array
{ nameKey: "predictiveAnalyticsScanner", href: "/product/predictive-analytics" },
```

### Step 1.5: Update Footer.tsx

```tsx
// Line 12 - Update productLinks array
{ nameKey: "predictiveAnalytics", href: "/product/predictive-analytics" },
```

### Step 1.6: Update Homepage (page.tsx)

```tsx
// Update icon import
import { TrendingUp, Zap, Database, Search, ... } from "lucide-react";

// Update moduleIcons array
{ Icon: TrendingUp, color: "from-indigo-500 to-violet-500", href: "/product/predictive-analytics" },

// Update modules array
{
  name: t("modulePredictiveAnalytics"),
  tagline: t("modulePredictiveAnalyticsTagline"),
  description: t("modulePredictiveAnalyticsDesc"),
  features: [
    t("featurePredictiveScoring"),
    t("featureTrendDetection"),
    t("featureForecastReporting"),
    t("featureAnomalyMonitoring"),
  ],
  ...moduleIcons[2],
}
```

---

## Phase 2: Backend Implementation

### Step 2.1: Database Migration

**File:** `database/migrations/001_security_to_predictive_analytics.sql`

```sql
-- Rename tables
ALTER TABLE security_issues RENAME TO predictions;
ALTER TABLE security_devices RENAME TO data_sources;

-- Update predictions table columns
ALTER TABLE predictions RENAME COLUMN severity TO confidence_level;
ALTER TABLE predictions RENAME COLUMN category TO prediction_type;
ALTER TABLE predictions ADD COLUMN predicted_value JSONB;
ALTER TABLE predictions ADD COLUMN actual_value JSONB;
ALTER TABLE predictions ADD COLUMN prediction_date TIMESTAMP;

-- Update data_sources table columns
ALTER TABLE data_sources RENAME COLUMN device_type TO source_type;
ALTER TABLE data_sources RENAME COLUMN security_score TO data_quality_score;
ALTER TABLE data_sources ADD COLUMN last_sync_at TIMESTAMP;

-- Update enum values for prediction_type
UPDATE predictions SET prediction_type = 'revenue' WHERE prediction_type = 'vulnerability';
UPDATE predictions SET prediction_type = 'churn' WHERE prediction_type = 'compliance';
UPDATE predictions SET prediction_type = 'demand' WHERE prediction_type = 'access';
UPDATE predictions SET prediction_type = 'trend' WHERE prediction_type = 'encryption';

-- Update source_type values
UPDATE data_sources SET source_type = 'erp' WHERE source_type = 'server';
UPDATE data_sources SET source_type = 'crm' WHERE source_type = 'endpoint';
UPDATE data_sources SET source_type = 'ecommerce' WHERE source_type = 'network';
UPDATE data_sources SET source_type = 'custom' WHERE source_type = 'iot';
```

### Step 2.2: Python Models

**File:** `services/ai-orchestrator/app/models/predictive_analytics.py`

```python
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Text, Numeric, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.database import Base
import uuid
from datetime import datetime

class Prediction(Base):
    """Predictive Analytics prediction/insight"""
    __tablename__ = "predictions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"), nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    prediction_type = Column(String(50), nullable=False)  # revenue, churn, demand, trend
    confidence_level = Column(String(20), default="medium")  # high, medium, low
    confidence_score = Column(Numeric(5, 2))
    predicted_value = Column(JSON)
    actual_value = Column(JSON)
    prediction_date = Column(DateTime)
    status = Column(String(20), default="active")  # active, verified, expired
    source = Column(String(100))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    tenant = relationship("Tenant", back_populates="predictions")


class DataSource(Base):
    """Predictive Analytics data source"""
    __tablename__ = "data_sources"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"), nullable=False)
    name = Column(String(255), nullable=False)
    source_type = Column(String(50), nullable=False)  # erp, crm, ecommerce, custom
    connection_status = Column(String(20), default="active")
    last_sync_at = Column(DateTime)
    data_quality_score = Column(Integer)
    extra_data = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    tenant = relationship("Tenant", back_populates="data_sources")
```

### Step 2.3: API Router

**File:** `services/ai-orchestrator/app/routers/predictive_analytics.py`

```python
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

# Pydantic models
class PredictionOverview(BaseModel):
    accuracy_score: int
    total_predictions: int
    active_predictions: int
    verified_predictions: int
    pending_insights: int
    prediction_types: dict

class PredictionResponse(BaseModel):
    id: str
    title: str
    description: str
    prediction_type: str
    confidence_level: str
    confidence_score: float
    predicted_value: dict
    prediction_date: datetime
    status: str

# Endpoints
@router.get("/overview", response_model=PredictionOverview)
async def get_prediction_overview(
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Get predictive analytics overview"""
    # Implementation
    pass

@router.get("/predictions", response_model=List[PredictionResponse])
async def get_predictions(
    prediction_type: Optional[str] = None,
    status: Optional[str] = None,
    limit: int = Query(20, le=100),
    offset: int = 0,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """List predictions with optional filters"""
    pass

@router.post("/predictions")
async def create_prediction(
    prediction: PredictionCreate,
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Create a new prediction"""
    pass

@router.get("/accuracy")
async def get_accuracy_metrics(
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Get prediction accuracy metrics"""
    pass

@router.get("/data-sources")
async def get_data_sources(
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """List connected data sources"""
    pass

@router.post("/generate")
async def generate_predictions(
    db: Session = Depends(get_db),
    tenant_id: str = Depends(get_tenant_id)
):
    """Trigger new prediction generation"""
    pass
```

---

## Phase 3: Testing Checklist

### Marketing Website Tests
- [ ] `/product/predictive-analytics` loads correctly
- [ ] All 4 languages display correct translations
- [ ] Navigation links work (Header, Footer, Mobile)
- [ ] Homepage module card links correctly
- [ ] SEO metadata is correct
- [ ] Old `/product/security` URL redirects (301)

### Backend API Tests
- [ ] `GET /api/modules/predictive-analytics/overview` returns data
- [ ] `GET /api/modules/predictive-analytics/predictions` returns list
- [ ] `POST /api/modules/predictive-analytics/predictions` creates record
- [ ] `GET /api/modules/predictive-analytics/data-sources` returns list
- [ ] Database migration runs without errors
- [ ] Module access control works for subscription tiers

### Integration Tests
- [ ] Frontend can fetch from new API endpoints
- [ ] Real-time events publish correctly
- [ ] Dashboard metrics display correctly

---

## Rollback Plan

If issues occur during deployment:

1. **Database:** Keep backup of security tables before migration
2. **Frontend:** Deploy previous version from git
3. **API:** Revert router changes and re-deploy
4. **DNS/Routing:** Revert any URL redirect changes

---

## Success Metrics

After implementation:

1. All pages render without errors
2. API response times < 200ms
3. No broken links in navigation
4. All translations display correctly
5. SEO rankings maintained (with redirects)
