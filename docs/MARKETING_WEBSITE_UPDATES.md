# Marketing Website Updates Required

This document outlines the necessary changes to align the marketing website content with the current production-ready application.

## Executive Summary

The current marketing website plan (`marketing-website-plan.md`) describes a **4-module architecture** (Ops Copilot, Mini Foundry, Cybersecurity Scanner, Marketplace Intelligence). However, the production application has evolved to a **Hub-based architecture** with additional advanced features. This document provides a roadmap for updating the marketing content.

---

## Key Architectural Changes

### Old Architecture (in marketing plan)
```
Platform
├── Ops Copilot (Task Automation)
├── Mini Foundry (BI/Dashboards)
├── Cybersecurity Scanner (Security)
└── Marketplace Intelligence (Competitor Tracking)
```

### New Architecture (production application)
```
Platform
├── Insights Hub (Consolidated Analytics)
│   ├── Overview Tab (KPIs, Metrics)
│   ├── Story Timeline (Narrative Insights)
│   ├── Customer Segmentation (AI-powered clustering)
│   └── Predictive Analytics (Forecasting, Scenarios)
│
├── Action Hub (Execution & Planning)
│   ├── Causal Simulator (What-if Analysis)
│   ├── Initiative Planner (Strategic Planning)
│   ├── Automations (Ops Copilot features)
│   └── History Log (Audit Trail)
│
├── Data Lineage (Data Governance)
│   ├── Lineage Visualization
│   ├── Provenance Tracking
│   └── Confidence Indicators
│
└── Legacy Modules (still accessible)
    ├── Ops Copilot
    ├── Mini Foundry
    ├── Cybersecurity Scanner
    └── Marketplace Intelligence
```

---

## Required Website Content Updates

### 1. Homepage Updates

**Current Plan:**
- Hero: "Your AI-powered command center for business"
- Four Module Preview Cards

**Required Changes:**
- Update hero messaging to emphasize **Hub architecture**
- Replace four module cards with **Hub-focused value props**:
  - **Insights Hub**: "Understand your business with AI-powered analytics"
  - **Action Hub**: "Plan, simulate, and execute with confidence"
  - **Data Lineage**: "Trust your data with full visibility"

**New Hero Options:**
- "From insights to action in one platform"
- "AI-powered command center with complete visibility"
- "See everything. Understand everything. Act decisively."

---

### 2. Product Section Restructure

**Current Plan:**
```
/product
├── /product/ops-copilot
├── /product/mini-foundry
├── /product/security
└── /product/marketplace
```

**New Structure:**
```
/product
├── /product/insights-hub      (NEW - Priority)
├── /product/action-hub        (NEW - Priority)
├── /product/data-lineage      (NEW - Priority)
├── /product/ops-copilot       (Keep as legacy/detail page)
├── /product/mini-foundry      (Keep as legacy/detail page)
├── /product/security          (Keep as legacy/detail page)
└── /product/marketplace       (Keep as legacy/detail page)
```

---

### 3. New Page: Insights Hub

**URL:** `/product/insights-hub`

**Suggested Content:**

#### Hero Section
- **Headline:** "Understand your entire business at a glance"
- **Subheadline:** "AI-powered analytics that tell the story behind your numbers"

#### Key Features
1. **Story Timeline**
   - "Your business narrative, automatically generated"
   - AI creates natural language summaries of key events
   - Understand what happened, why, and what it means

2. **Customer Segmentation**
   - "AI-powered customer clustering"
   - Automatically identify customer segments
   - Interactive scatter plot visualization
   - RFM analysis and behavioral grouping

3. **Predictive Analytics**
   - "See what's coming before it happens"
   - Revenue forecasting with confidence intervals
   - Demand prediction
   - Anomaly detection

4. **Unified Dashboard**
   - Consolidates data from all connected sources
   - Real-time KPIs and metrics
   - Customizable widgets

#### Differentiation
- "Not just charts — AI that explains what matters"
- "Segmentation without data scientists"
- "Predictions you can actually trust"

---

### 4. New Page: Action Hub

**URL:** `/product/action-hub`

**Suggested Content:**

#### Hero Section
- **Headline:** "From insight to action, seamlessly"
- **Subheadline:** "Plan, simulate, and execute with AI-powered confidence"

#### Key Features
1. **Causal Simulator**
   - "Test decisions before you make them"
   - What-if scenario analysis
   - Understand ripple effects across your business
   - Confidence scores for projections

2. **Initiative Planner**
   - "Strategic planning made simple"
   - Create and track business initiatives
   - Assign timelines and ownership
   - Connect initiatives to predicted outcomes

3. **Automations**
   - All Ops Copilot features
   - Natural language automation creation
   - Trigger-based workflows
   - Email and task automation

4. **History & Audit**
   - Complete action history
   - Simulation logs
   - Plan execution tracking
   - Exportable reports

#### Differentiation
- "Simulation before execution"
- "Strategic planning, not just task management"
- "Full audit trail for compliance"

---

### 5. New Page: Data Lineage

**URL:** `/product/data-lineage`

**Suggested Content:**

#### Hero Section
- **Headline:** "Know where your data comes from"
- **Subheadline:** "Complete visibility into your data's journey"

#### Key Features
1. **Lineage Visualization**
   - Interactive flow diagrams
   - Source to destination tracking
   - Real-time sync status

2. **Provenance Tracking**
   - Full audit trail
   - Transformation history
   - Version control for data

3. **Confidence Indicators**
   - Data quality scores
   - Freshness indicators
   - Reliability metrics

#### Differentiation
- "Enterprise-grade data governance for SMBs"
- "Confidence in every number"
- "Compliance-ready documentation"

---

### 6. Pricing Page Updates

**Current Plan:**
| | Starter | Pro | Business | Enterprise |
|---|---------|-----|----------|------------|
| Monthly | Free | $49/mo | $149/mo | Custom |
| Connectors | 2 | 10 | Unlimited | Unlimited |

**Required Updates:**
Based on production application, pricing features should include:

| Feature | Starter | Pro | Business | Enterprise |
|---------|---------|-----|----------|------------|
| **Hubs** | Insights only | All Hubs | All Hubs | All Hubs |
| **Causal Simulation** | - | Limited | Unlimited | Unlimited |
| **Predictive Analytics** | - | Basic | Advanced | Advanced + Custom |
| **Data Lineage** | - | Basic | Full | Full + Audit |
| **Customer Segmentation** | - | Basic | AI-powered | AI-powered |
| **Real-time Sync** | - | - | ✓ | ✓ |
| **Webhooks** | - | - | ✓ | ✓ |

---

### 7. Navigation Updates

**Current Plan:**
```
Product ▼ | Why Binelek | Solutions ▼ | Integrations | Pricing
```

**New Navigation:**
```
Product ▼ | Platform | Solutions ▼ | Integrations | Pricing
    │
    ├── Insights Hub (NEW)
    ├── Action Hub (NEW)
    ├── Data Lineage (NEW)
    ├── ─────────────
    ├── Ops Copilot
    ├── Mini Foundry
    ├── Security
    └── Marketplace

Platform (NEW SECTION):
    ├── Hub Overview
    ├── AI Capabilities
    └── Architecture
```

---

### 8. Key Messaging Updates

**Old Messaging:**
| Problem | Solution |
|---------|----------|
| Data scattered | Four modules |
| Manual tasks | Ops Copilot |
| No insights | Mini Foundry |
| Security gaps | Cybersecurity Scanner |
| Blind to competition | Marketplace Intel |

**New Messaging:**
| Problem | Solution |
|---------|----------|
| Can't see the big picture | Insights Hub consolidates everything |
| Decisions feel like guesses | Action Hub simulates outcomes |
| Don't trust your data | Data Lineage provides confidence |
| Analysis paralysis | AI tells you what matters |
| Planning is reactive | Causal simulation enables proactive strategy |
| Data silos | Unified data layer with full lineage |

---

### 9. Demo Videos to Create

**New videos needed:**
1. **Insights Hub Overview** (3-5 min)
   - Story Timeline walkthrough
   - Segmentation demo
   - Predictive analytics showcase

2. **Action Hub Overview** (3-5 min)
   - Causal simulator in action
   - Initiative planning workflow
   - Automation creation

3. **Data Lineage Demo** (2-3 min)
   - Lineage graph navigation
   - Confidence indicators explanation
   - Provenance tracking

4. **Platform Architecture** (3-5 min)
   - How Hubs connect
   - Data flow explanation
   - AI capabilities overview

---

### 10. Screenshots/Mockups Needed

**New assets required:**
- [ ] Insights Hub main view
- [ ] Story Timeline with AI-generated narratives
- [ ] Customer segmentation scatter plot
- [ ] Predictive analytics charts with confidence bands
- [ ] Action Hub simulator view
- [ ] Causal flow model visualization
- [ ] Initiative planner board view
- [ ] Data lineage flow diagram
- [ ] Confidence indicator examples

---

## Implementation Priority

### Phase 1 (Critical - Before Launch)
1. Create Insights Hub page
2. Create Action Hub page
3. Update homepage with Hub messaging
4. Update navigation structure
5. Update pricing table with Hub features

### Phase 2 (Important - Week 2)
1. Create Data Lineage page
2. Update "Why Binelek" page
3. Create new demo videos
4. Update all CTAs and messaging

### Phase 3 (Enhancement - Month 1)
1. Add customer testimonials with Hub references
2. Create industry-specific Hub use cases
3. Add interactive demos/tours
4. Create comparison content (Hubs vs. traditional tools)

---

## Technical Notes

### New URL Structure
```
/                               Homepage (updated)
/product/insights-hub           NEW
/product/action-hub             NEW
/product/data-lineage           NEW
/product/ops-copilot            Existing (update as "included in Action Hub")
/product/mini-foundry           Existing (update as "included in Insights Hub")
/product/security               Existing
/product/marketplace            Existing
/platform                       NEW - Architecture overview
/platform/ai                    NEW - AI capabilities
```

### Redirects Needed
```
/modules → /product
/product (old overview) → /platform
```

### SEO Considerations
- New Hub pages need unique meta titles/descriptions
- Update existing pages to reference Hub architecture
- Create FAQ entries for Hub features
- Add structured data for new features

---

## Content Migration Checklist

- [ ] Homepage hero updated for Hub messaging
- [ ] Four module cards replaced with three Hub cards
- [ ] "How it works" section updated for Hub flow
- [ ] Product navigation restructured
- [ ] Insights Hub page created
- [ ] Action Hub page created
- [ ] Data Lineage page created
- [ ] Pricing table updated with Hub features
- [ ] Demo videos created for new features
- [ ] Screenshots captured from production app
- [ ] FAQ updated with Hub-related questions
- [ ] Legacy module pages updated to reference parent Hubs
- [ ] All CTAs still link to /demo
- [ ] Mobile responsive testing for new pages

---

## Approval Required

Before implementing these changes, please review and approve:

1. **Messaging Strategy**: Does Hub-focused messaging resonate with target audience?
2. **URL Structure**: Any SEO concerns with new URLs?
3. **Pricing Updates**: Are tier features accurately reflected?
4. **Legacy Module Treatment**: Keep separate pages or redirect to Hubs?
5. **Timeline**: Alignment with marketing/launch schedule?

---

*Document created: December 2024*
*Last updated: December 2024*
*For implementation by: Marketing/Website Team*
