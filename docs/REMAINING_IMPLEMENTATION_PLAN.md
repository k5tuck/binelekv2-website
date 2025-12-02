# Remaining Implementation Plan

This document outlines the remaining items to complete the marketing website after the Hub-based architecture migration. Use this document in a future session with both frontend and backend repositories.

---

## Summary of Completed Work

### Phase 1 (Completed)
- [x] Insights Hub page (`/product/insights-hub`)
- [x] Action Hub page (`/product/action-hub`)
- [x] Data Lineage page (`/product/data-lineage`)
- [x] Homepage updated with Hub messaging and 3-Hub cards
- [x] Header navigation restructured (Hubs prioritized)
- [x] Footer navigation restructured (Hubs prioritized)
- [x] Pricing table updated with Hub-based features

### Phase 2 & 3 (Completed - Excluding Testimonials)
- [x] Why Binelek page updated (3-Hub grid replaces 4-module grid)
- [x] Product Overview page updated (Hub-first, modules secondary)
- [x] Solutions page with industry-specific Hub use cases
- [x] All translation keys added to `messages/en.json`

---

## Remaining Items

### Priority 1: Screenshots & Mockups

**Location:** `/public/screenshots/`

**Required assets from production app:**

| Asset | Description | Used On |
|-------|-------------|---------|
| `insights-hub-overview.png` | Main Insights Hub view with KPIs | `/product/insights-hub` |
| `story-timeline.png` | Story Timeline with AI-generated narratives | `/product/insights-hub` |
| `customer-segmentation.png` | Segmentation scatter plot | `/product/insights-hub` |
| `predictive-analytics.png` | Forecasting charts with confidence bands | `/product/insights-hub` |
| `action-hub-overview.png` | Main Action Hub view | `/product/action-hub` |
| `causal-simulator.png` | What-if scenario interface | `/product/action-hub` |
| `initiative-planner.png` | Strategic planning board view | `/product/action-hub` |
| `automations.png` | Automation workflow builder | `/product/action-hub` |
| `data-lineage-graph.png` | Lineage flow diagram | `/product/data-lineage` |
| `confidence-indicators.png` | Data quality scores visualization | `/product/data-lineage` |
| `dashboard-desktop.png` | Main dashboard (already exists, may need update) | `/product` |
| `dashboard-mobile.png` | Mobile responsive view | Homepage |

**Implementation:**
1. Capture screenshots from production app
2. Place in `/public/screenshots/`
3. Update placeholder image references in Hub pages

---

### Priority 2: Demo Videos

**Location:** `/public/videos/` or external hosting (Vimeo/YouTube)

**Required videos:**

| Video | Duration | Content |
|-------|----------|---------|
| Insights Hub Overview | 3-5 min | Story Timeline walkthrough, Segmentation demo, Predictive analytics |
| Action Hub Overview | 3-5 min | Causal simulator in action, Initiative planning, Automation creation |
| Data Lineage Demo | 2-3 min | Lineage graph navigation, Confidence indicators, Provenance tracking |
| Platform Architecture | 3-5 min | How Hubs connect, Data flow, AI capabilities |
| Quick Start Guide | 2-3 min | Connecting first integration, navigating dashboard |

**Implementation:**
1. Record screen captures from production app
2. Add voiceover/narration
3. Host on video platform or self-host
4. Create `VideoPlayer` component for embedding
5. Add videos to respective Hub pages and resources section

---

### Priority 3: Platform Overview Pages (New)

**New pages to create:**

#### `/platform` - Hub Architecture Overview
```
Content:
- Hero: "Built on Three Pillars"
- Visual diagram showing how Hubs interconnect
- Data flow explanation (Sources → Processing → Hubs → Actions)
- Comparison: Hub architecture vs. traditional siloed tools
- Link to each Hub page
```

#### `/platform/ai` - AI Capabilities
```
Content:
- Hero: "AI That Understands Your Business"
- List of AI features:
  - Natural language querying
  - Story Timeline generation
  - Customer segmentation clustering
  - Predictive forecasting
  - Causal modeling
  - Anomaly detection
- How AI is used in each Hub
- Privacy and data handling
```

**Files to create:**
- `src/app/platform/page.tsx`
- `src/app/platform/ai/page.tsx`
- Add translations to `messages/en.json` under `platform` key

---

### Priority 4: Interactive Demos/Tours (Requires Backend)

**Implementation options:**

1. **Guided Product Tour** (using react-joyride or similar)
   - Step-by-step walkthrough of Hub features
   - Triggered on first visit or via "Take a tour" button

2. **Interactive Sandbox**
   - Read-only demo environment with sample data
   - User can explore without signing up
   - Requires backend API to serve demo data

3. **Video Walkthroughs** (simpler alternative)
   - Embedded videos showing workflows
   - No backend required

**Components to create:**
- `src/components/ProductTour.tsx`
- `src/components/DemoSandbox.tsx` (if implementing sandbox)

---

### Priority 5: Legacy Module Page Updates

**Files to update:**

| Page | Change Required |
|------|-----------------|
| `/product/ops-copilot` | Add banner: "Now part of Action Hub" with link |
| `/product/mini-foundry` | Add banner: "Now part of Insights Hub" with link |
| `/product/security` | Keep as standalone (Coming Soon) |
| `/product/marketplace` | Consider integration with Insights Hub |

**Implementation:**
Add a "Part of [Hub Name]" banner component that can be reused:

```tsx
// src/components/HubBanner.tsx
interface HubBannerProps {
  hubName: string;
  hubHref: string;
}
```

---

### Priority 6: FAQ Updates for Hub Architecture

**Add to `messages/en.json` under `resources.faq`:**

```json
{
  "qHub1": "What are Binelek Hubs?",
  "aHub1": "Hubs are the three core areas of Binelek: Insights Hub for analytics and understanding your data, Action Hub for planning and executing strategies, and Data Lineage for tracking and trusting your data. Each Hub is designed to work together seamlessly.",

  "qHub2": "How do the Hubs work together?",
  "aHub2": "Data flows from your connected sources through Data Lineage (which tracks quality and origin), into Insights Hub (where AI analyzes and visualizes it), and finally to Action Hub (where you can simulate decisions and take action). Everything is interconnected.",

  "qHub3": "Can I use just one Hub?",
  "aHub3": "Yes! Our Starter plan includes Insights Hub only. Upgrade to Pro or Business to access all three Hubs and unlock the full power of the platform.",

  "qHub4": "What happened to Ops Copilot and Mini Foundry?",
  "aHub4": "Ops Copilot features are now part of Action Hub, and Mini Foundry features are now part of Insights Hub. The capabilities are the same or better, just organized in a more intuitive way."
}
```

**Update `/resources/faq/page.tsx`** to include a new "Hubs" category.

---

## Expanded Industry Templates

The following templates expand on the existing industry use cases in `/solutions`. These can be used to create dedicated industry landing pages or expand the current solutions page.

---

### E-commerce Expanded Template

**Target Audience:** Online stores, D2C brands, marketplace sellers

**Pain Points:**
- Inventory scattered across multiple channels (Shopify, Amazon, eBay)
- Manual competitor price monitoring
- Difficulty predicting demand for seasonal products
- Customer data siloed in different platforms

**Hub Use Cases (Expanded):**

#### Insights Hub
| Use Case | Description |
|----------|-------------|
| Multi-channel Revenue Dashboard | Unified view of sales from Shopify, Amazon, and other channels |
| Customer Lifetime Value Analysis | AI-powered CLV predictions by segment |
| Product Performance Heatmaps | Visual analysis of best/worst performing SKUs |
| Seasonal Demand Forecasting | Predict inventory needs for holidays and events |
| Cart Abandonment Analysis | Understand why customers don't complete purchases |

#### Action Hub
| Use Case | Description |
|----------|-------------|
| Dynamic Pricing Simulator | Test price changes before implementing |
| Promotion ROI Predictions | Simulate discount impact on revenue |
| Inventory Reorder Automation | Auto-trigger purchase orders when stock is low |
| Customer Win-back Campaigns | Automated emails to lapsed customers |
| Bundle Optimization | Simulate bundle configurations for maximum margin |

#### Data Lineage
| Use Case | Description |
|----------|-------------|
| Multi-platform Sync Status | See when Shopify, Stripe, ShipStation data was last synced |
| Returns Tracking | Trace return reasons back to original orders |
| Review Sentiment Tracking | Connect product reviews to sales impact |

---

### Retail Expanded Template

**Target Audience:** Brick-and-mortar stores, multi-location retailers, franchises

**Pain Points:**
- Disconnected POS systems across locations
- Manual inventory counts and transfers
- Staff scheduling based on gut feeling
- No visibility into per-store performance

**Hub Use Cases (Expanded):**

#### Insights Hub
| Use Case | Description |
|----------|-------------|
| Store Performance Comparison | Side-by-side metrics for all locations |
| Foot Traffic Predictions | Forecast busy periods for staffing |
| Basket Analysis | Understand what products sell together |
| Customer Segmentation by Location | Different customer profiles per store |
| Shrinkage Analysis | Track inventory discrepancies |

#### Action Hub
| Use Case | Description |
|----------|-------------|
| Inter-store Transfer Planner | Optimize inventory distribution |
| Staff Schedule Optimization | Align schedules with predicted traffic |
| Price Zone Testing | Simulate different pricing by region |
| Supplier Order Automation | Auto-generate POs based on velocity |
| Promotion Timing Optimizer | Find best days/times for sales events |

#### Data Lineage
| Use Case | Description |
|----------|-------------|
| POS Data Quality Monitoring | Detect sync issues before they impact reports |
| Supplier Data Tracking | Track pricing and inventory from suppliers |
| Cash Reconciliation | Trace discrepancies to source transactions |

---

### Professional Services Expanded Template

**Target Audience:** Consulting firms, agencies, law firms, accounting practices

**Pain Points:**
- Manual time tracking and billing
- Difficulty forecasting project profitability
- No visibility into resource utilization
- Client data scattered across tools

**Hub Use Cases (Expanded):**

#### Insights Hub
| Use Case | Description |
|----------|-------------|
| Client Profitability Dashboard | Revenue vs. time invested per client |
| Utilization Heatmaps | See which team members are over/under-utilized |
| Project Timeline Predictions | AI-powered deadline risk assessment |
| Revenue Recognition Forecasting | Predict when revenue will be recognized |
| Client Health Scores | Identify at-risk client relationships |

#### Action Hub
| Use Case | Description |
|----------|-------------|
| Resource Allocation Simulator | Test team assignments before committing |
| Rate Change Impact Analysis | Model effects of rate increases |
| Hiring Scenario Planner | Predict when new hires are needed |
| Time Entry Reminders | Automated nudges for missing timesheets |
| Invoice Generation Automation | Auto-create invoices from time entries |

#### Data Lineage
| Use Case | Description |
|----------|-------------|
| Time Entry Validation | Flag suspicious or missing entries |
| CRM to Billing Reconciliation | Ensure all billable work is captured |
| Project Data History | Track how scope changed over time |

---

### SaaS Expanded Template

**Target Audience:** B2B SaaS companies, subscription businesses, software startups

**Pain Points:**
- Difficulty tracking cohort metrics
- Reactive approach to churn
- Manual calculation of expansion revenue
- Disconnected product usage and billing data

**Hub Use Cases (Expanded):**

#### Insights Hub
| Use Case | Description |
|----------|-------------|
| MRR Cohort Analysis | Track revenue by signup month |
| Churn Prediction Scores | AI identifies at-risk customers before they leave |
| Feature Adoption Tracking | See which features drive retention |
| NPS to Revenue Correlation | Connect satisfaction scores to expansion |
| Customer Health Dashboard | Unified view of usage, support, and billing |

#### Action Hub
| Use Case | Description |
|----------|-------------|
| Pricing Tier Simulator | Model impact of new pricing plans |
| Expansion Revenue Forecasting | Predict upsell opportunities |
| Churn Prevention Workflows | Automated outreach when health drops |
| Trial Conversion Optimization | Simulate changes to trial experience |
| Feature Launch Planning | Model impact of new features on metrics |

#### Data Lineage
| Use Case | Description |
|----------|-------------|
| Usage Data Pipeline Monitoring | Ensure product analytics are accurate |
| Subscription State Tracking | Trace every subscription change |
| Payment Failure Reconciliation | Connect failed payments to churn |

---

### Additional Industries (Future)

Consider adding these industry templates:

| Industry | Key Use Cases |
|----------|---------------|
| **Healthcare** | Patient flow optimization, appointment predictions, insurance claim tracking |
| **Manufacturing** | Production planning, supply chain visibility, quality control analytics |
| **Hospitality** | Occupancy forecasting, revenue management, guest segmentation |
| **Real Estate** | Property performance analytics, tenant lifecycle, market predictions |
| **Non-Profit** | Donor segmentation, grant tracking, fundraising campaign optimization |
| **Financial Services** | Portfolio analytics, risk modeling, client reporting |

---

## Implementation Checklist

### Before Starting
- [ ] Have access to production application for screenshots/recordings
- [ ] Have access to backend repository for API integration
- [ ] Review current state of Hub pages in frontend repo

### Screenshots & Assets
- [ ] Capture Insights Hub screenshots (4 images)
- [ ] Capture Action Hub screenshots (4 images)
- [ ] Capture Data Lineage screenshots (2 images)
- [ ] Capture updated dashboard screenshot
- [ ] Place all images in `/public/screenshots/`
- [ ] Update image references in Hub pages

### Demo Videos
- [ ] Record Insights Hub walkthrough
- [ ] Record Action Hub walkthrough
- [ ] Record Data Lineage walkthrough
- [ ] Record platform overview video
- [ ] Set up video hosting (Vimeo/YouTube/self-hosted)
- [ ] Create VideoPlayer component
- [ ] Add videos to pages

### New Pages
- [ ] Create `/platform` page
- [ ] Create `/platform/ai` page
- [ ] Add navigation links to Header
- [ ] Add translations to en.json

### Legacy Module Updates
- [ ] Create HubBanner component
- [ ] Add banner to Ops Copilot page
- [ ] Add banner to Mini Foundry page
- [ ] Review Marketplace page for Hub integration

### FAQ Updates
- [ ] Add Hub-related FAQ questions
- [ ] Add "Hubs" category to FAQ page
- [ ] Review existing FAQs for outdated module references

### Optional: Interactive Tours
- [ ] Evaluate react-joyride or similar
- [ ] Design tour steps for each Hub
- [ ] Implement ProductTour component
- [ ] Add "Take a tour" CTAs

### Testing
- [ ] Test all new pages on mobile
- [ ] Verify all screenshot images load
- [ ] Verify all video embeds work
- [ ] Test navigation changes
- [ ] Run build to check for errors

---

## File Structure Reference

```
src/
├── app/
│   ├── platform/
│   │   ├── page.tsx              # NEW: Platform overview
│   │   └── ai/
│   │       └── page.tsx          # NEW: AI capabilities
│   ├── product/
│   │   ├── insights-hub/
│   │   │   └── page.tsx          # EXISTS: Update with screenshots
│   │   ├── action-hub/
│   │   │   └── page.tsx          # EXISTS: Update with screenshots
│   │   ├── data-lineage/
│   │   │   └── page.tsx          # EXISTS: Update with screenshots
│   │   ├── ops-copilot/
│   │   │   └── page.tsx          # EXISTS: Add HubBanner
│   │   ├── mini-foundry/
│   │   │   └── page.tsx          # EXISTS: Add HubBanner
│   │   └── ...
│   └── resources/
│       └── faq/
│           └── page.tsx          # EXISTS: Add Hub category
├── components/
│   ├── HubBanner.tsx             # NEW: "Part of [Hub]" banner
│   ├── VideoPlayer.tsx           # NEW: Video embed component
│   └── ProductTour.tsx           # NEW: Interactive tour (optional)
├── messages/
│   └── en.json                   # EXISTS: Add platform, faq keys
└── public/
    ├── screenshots/
    │   ├── insights-hub-overview.png    # NEW
    │   ├── story-timeline.png           # NEW
    │   ├── customer-segmentation.png    # NEW
    │   ├── predictive-analytics.png     # NEW
    │   ├── action-hub-overview.png      # NEW
    │   ├── causal-simulator.png         # NEW
    │   ├── initiative-planner.png       # NEW
    │   ├── data-lineage-graph.png       # NEW
    │   └── confidence-indicators.png    # NEW
    └── videos/                          # NEW (if self-hosting)
        ├── insights-hub-demo.mp4
        ├── action-hub-demo.mp4
        └── data-lineage-demo.mp4
```

---

## Notes for Future Session

1. **Backend Access Required For:**
   - Capturing production screenshots
   - Recording demo videos
   - Interactive sandbox (if implementing)
   - API-driven interactive tours

2. **Translation Files:**
   - All new content should be added to `messages/en.json`
   - Consider adding translations for other locales if applicable

3. **Build Commands:**
   ```bash
   npm run dev     # Development server
   npm run build   # Production build
   npm run lint    # Check for errors
   ```

4. **Current Branch:**
   - All work was done on `claude/review-latest-commit-01MkzqS47odxEnkCrEP5ieNd`
   - Commits already pushed for Phase 1, 2, 3 work

---

*Document created: December 2024*
*For use in future implementation session with frontend + backend access*
