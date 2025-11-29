# Security Scanner to Predictive Analytics Module Replacement Audit

## Executive Summary

This document details all locations where the **Security Scanner / Cybersecurity Module** is implemented across the Binelek platform, and provides a comprehensive plan for replacing it with a **Predictive Analytics** module.

**Scope:**
- Marketing Website: `/home/user/binelekv2-website`
- Backend Platform: `/home/user/binelekv2-smb-platform-backend`
- Frontend Platform: `/home/user/binelekv2-smb-platform-frontend`

**Total Files to Modify:** ~50+ files across 3 repositories
**Total Translation Keys to Update:** 57 keys across 4 languages
**Estimated API Endpoints to Rename:** 15+ endpoints

---

## Part 1: Marketing Website (binelekv2-website)

### 1.1 Pages to Modify

| File | Type | Changes Required |
|------|------|------------------|
| `src/app/product/security/page.tsx` | **RENAME/REWRITE** | Rename to `predictive-analytics/page.tsx`, completely rewrite content |
| `src/app/page.tsx` | Edit | Update module card, icon, features |
| `src/app/product/page.tsx` | Edit | Update module card |
| `src/app/why-binelek/page.tsx` | Edit | Update differentiator section |
| `src/app/demo/page.tsx` | Edit | Update module interest option |
| `src/app/pricing/page.tsx` | Edit | Update feature descriptions |
| `src/app/about/page.tsx` | Edit | Update company value #4 |
| `src/app/resources/faq/page.tsx` | Edit | Update FAQ category |
| `src/app/resources/videos/page.tsx` | Edit | Update video listing |
| `src/app/coming-soon/page.tsx` | Edit | Update feature list |

### 1.2 Components to Modify

| File | Changes Required |
|------|------------------|
| `src/components/Header.tsx` | Update nav link: `cybersecurityScanner` → `predictiveAnalytics` |
| `src/components/Footer.tsx` | Update nav link: `security` → `predictiveAnalytics` |
| `src/components/ComingSoonLanding.tsx` | Update feature list |

### 1.3 Translation Files (4 languages)

**Files:** `messages/en.json`, `messages/de.json`, `messages/fr.json`, `messages/es.json`

**Keys to Update (57 total per language):**

#### Navigation Keys (2 keys)
- `nav.security` → `nav.predictiveAnalytics`
- `nav.cybersecurityScanner` → `nav.predictiveAnalyticsScanner`

#### Homepage Keys (9 keys)
- `home.benefitEnterpriseSecurity` → `home.benefitPredictiveInsights`
- `home.benefitEnterpriseSecurityDesc` → Updated description
- `home.moduleSecurity` → `home.modulePredictiveAnalytics`
- `home.moduleSecurityTagline` → `home.modulePredictiveAnalyticsTagline`
- `home.moduleSecurityDesc` → `home.modulePredictiveAnalyticsDesc`
- `home.featureSecurityScoring` → `home.featurePredictiveScoring`
- `home.featureVulnerabilityScanning` → `home.featureTrendDetection`
- `home.featureComplianceReporting` → `home.featureForecastReporting`
- `home.featureMfaMonitoring` → `home.featureAnomalyMonitoring`

#### Product Page Keys (24 keys)
**Rename entire section:** `product.security.*` → `product.predictiveAnalytics.*`

All keys under `product.security`:
- heroTitle, heroSubtitle
- securityScore → predictiveScore
- vulnerabilityScanning → trendDetection
- complianceReporting → forecastReporting
- mfaMonitoring → anomalyDetection
- atAGlance, issuesResolved → insightsGenerated
- pendingActions → pendingPredictions
- mfaCoverage → forecastAccuracy
- dashboardPreview, stepByStep, stepByStepDesc
- All remediation example keys
- complianceFrameworks → integrationFrameworks
- differentiationTitle, differentiationDesc

#### Other Section Keys
- `whyBinelek.securityIncludedTitle` → `whyBinelek.predictiveAnalyticsIncludedTitle`
- `whyBinelek.securityIncludedDesc` → Updated description
- `about.value4Title` → Updated title
- `about.value4Desc` → Updated description
- `resources.faq.categorySecurity` → `resources.faq.categoryPredictiveAnalytics`
- `demo.interestSecurity` → `demo.interestPredictiveAnalytics`
- `resources.videos.videoSecurity` → `resources.videos.videoPredictiveAnalytics`
- `resources.videos.videoSecurityDesc` → Updated description
- `comingSoon.feature3` → Updated description
- `comingSoon.security` → `comingSoon.predictiveAnalytics`
- `comingSoon.securityDesc` → Updated description

### 1.4 Assets to Update

| File | Action |
|------|--------|
| `public/screenshots/security.png` | Replace with predictive analytics screenshot |

### 1.5 Icons to Change

| Current | New Suggestion |
|---------|----------------|
| `Shield` (lucide-react) | `TrendingUp` or `LineChart` or `Activity` |
| `Lock` | `BarChart3` or `BrainCircuit` |
| 🛡️ emoji | 📊 or 📈 or 🔮 |

---

## Part 2: Backend Platform (binelekv2-smb-platform-backend)

### 2.1 Database Schema Changes

**File:** `database/init/02_additional_tables.sql`

| Current Table | New Table | Action |
|---------------|-----------|--------|
| `security_issues` | `predictions` or `analytics_insights` | Rename and modify schema |
| `security_devices` | `data_sources` or `analytics_sources` | Rename and modify schema |

**New Schema Proposal:**
```sql
-- predictions table (replaces security_issues)
CREATE TABLE predictions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    prediction_type VARCHAR(50) NOT NULL, -- 'revenue', 'churn', 'demand', 'trend'
    confidence_score DECIMAL(5,2), -- 0-100 confidence
    predicted_value JSONB, -- flexible value storage
    prediction_date TIMESTAMP NOT NULL,
    actual_value JSONB, -- for accuracy tracking
    status VARCHAR(20) DEFAULT 'active', -- active, verified, expired
    source VARCHAR(100), -- data source
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- data_sources table (replaces security_devices)
CREATE TABLE data_sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    source_type VARCHAR(50) NOT NULL, -- 'erp', 'crm', 'ecommerce', 'custom'
    connection_status VARCHAR(20) DEFAULT 'active',
    last_sync_at TIMESTAMP,
    data_quality_score INTEGER, -- 0-100
    extra_data JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

**File:** `database/seeds/01_seed_data.sql`
- Replace security issues seed data with sample predictions
- Replace security devices with data sources

### 2.2 Python AI Orchestrator Service

**Files to Modify:**

| File | Changes |
|------|---------|
| `services/ai-orchestrator/app/models/security.py` | Rename to `predictive_analytics.py`, update classes |
| `services/ai-orchestrator/app/models/__init__.py` | Update imports |
| `services/ai-orchestrator/app/models/tenant.py` | Update relationships |
| `services/ai-orchestrator/app/services/security_service.py` | Rename to `predictive_analytics_service.py` |
| `services/ai-orchestrator/app/routers/security.py` | Rename to `predictive_analytics.py` |
| `services/ai-orchestrator/app/routers/__init__.py` | Update imports |
| `services/ai-orchestrator/app/main.py` | Update router prefix |
| `services/ai-orchestrator/app/services/query_router.py` | Update keywords and routing |
| `services/ai-orchestrator/app/services/query_service.py` | Update module description |
| `services/ai-orchestrator/app/services/events.py` | Update event types |
| `services/ai-orchestrator/app/services/task_planner.py` | Update task configuration |
| `services/ai-orchestrator/app/routers/agents.py` | Update agent definition |

**API Endpoint Changes:**

| Current Endpoint | New Endpoint |
|------------------|--------------|
| `/api/modules/cybersecurity-scanner/posture` | `/api/modules/predictive-analytics/overview` |
| `/api/modules/cybersecurity-scanner/compliance` | `/api/modules/predictive-analytics/accuracy` |
| `/api/modules/cybersecurity-scanner/alerts` | `/api/modules/predictive-analytics/predictions` |
| `/api/modules/cybersecurity-scanner/devices` | `/api/modules/predictive-analytics/data-sources` |

### 2.3 Node.js Gateway Service

**Files to Modify:**

| File | Changes |
|------|---------|
| `gateway/src/routes/modules.ts` | Rename cybersecurity routes |
| `gateway/src/routes/modules-direct.ts` | Rename direct routes (Lines 448-723) |
| `gateway/src/routes/dashboard.ts` | Update security metrics to predictions |
| `gateway/src/middleware/module-access.ts` | Rename module enum |
| `gateway/src/services/auth.ts` | Update default modules |

**Current Direct Routes to Rename:**
- `GET /cybersecurity/posture` → `GET /predictive-analytics/overview`
- `GET /cybersecurity/score` → `GET /predictive-analytics/accuracy`
- `GET /cybersecurity/stats` → `GET /predictive-analytics/stats`
- `GET /cybersecurity/issues` → `GET /predictive-analytics/predictions`
- `GET /cybersecurity/compliance` → `GET /predictive-analytics/models`
- `GET /cybersecurity/employees` → `GET /predictive-analytics/data-sources`
- `POST /cybersecurity/scan` → `POST /predictive-analytics/generate`

### 2.4 Documentation Updates

| File | Changes |
|------|---------|
| `README.md` | Update module description |
| `CLAUDE.md` | Update module documentation |

---

## Part 3: Frontend Application (binelekv2-smb-platform-frontend)

### 3.1 Main Module Page

**File:** `src/pages/modules/CybersecurityScanner.tsx` (641 lines)

| Element | Details |
|---------|---------|
| Route | `/cybersecurity` |
| Component | `CybersecurityScanner` / `CybersecurityScannerContent` |
| Features | Security Score, Issues tracking, Employee MFA, Compliance Checklist, Scan functionality |

**Key Functionality:**
- Security Score display (0-100 scale with colored indicators)
- Security Issues tracking (severity: critical, high, medium, low)
- Employee Security status (MFA tracking)
- Compliance Checklist management
- Security Scan functionality (full/quick scans with polling)
- Real-time WebSocket updates
- Issue status management (open, in_progress, resolved)
- MFA reminder notifications

### 3.2 API Service Client

**File:** `src/services/cybersecurity.ts` (111 lines)

| Method | Endpoint | Function |
|--------|----------|----------|
| GET | `/modules/cybersecurity/posture` | `getSecurityPosture()` |
| GET | `/modules/cybersecurity/score` | `getSecurityScore()` |
| GET | `/modules/cybersecurity/stats` | `getStats()` |
| GET | `/modules/cybersecurity/issues` | `getIssues()` |
| GET | `/modules/cybersecurity/issues/{id}` | `getIssue()` |
| PUT | `/modules/cybersecurity/issues/{id}` | `updateIssue()` |
| GET | `/modules/cybersecurity/employees` | `getEmployees()` |
| GET | `/modules/cybersecurity/compliance` | `getCompliance()` |
| PUT | `/modules/cybersecurity/compliance` | `updateComplianceItem()` |
| POST | `/modules/cybersecurity/scan` | `runScan()` |
| GET | `/modules/cybersecurity/scan/{scanId}` | `getScanStatus()` |
| POST | `/modules/cybersecurity/employees/{id}/mfa/enable` | `enableMFA()` |
| POST | `/modules/cybersecurity/employees/{id}/mfa/remind` | `sendMFAReminder()` |

### 3.3 TypeScript Type Definitions

**File:** `src/types/index.ts`

```typescript
// Types to rename/update
export type SecuritySeverity = 'critical' | 'high' | 'medium' | 'low';
export type SecurityIssueStatus = 'open' | 'in_progress' | 'resolved';
export type RiskLevel = 'low' | 'medium' | 'high';
export type ModuleType = 'ops-copilot' | 'mini-foundry' | 'cybersecurity-scanner' | 'marketplace-intel';

// Interfaces to rename
interface SecurityIssue { ... }      → PredictionInsight
interface Employee { ... }           → DataSource (or keep for different purpose)
interface ComplianceItem { ... }     → AnalyticsModel
interface SecurityStats { ... }      → PredictionStats
interface SecurityPosture { ... }    → AnalyticsOverview
interface UpdateSecurityIssueRequest → UpdatePredictionRequest
```

### 3.4 Real-time WebSocket Integration

**File:** `src/hooks/useRealtime.ts`

```typescript
// Hook to rename
export function useCybersecurityRealtime() → usePredictiveAnalyticsRealtime()

// Events to update
'security:issue_detected' → 'prediction:generated'
'security:scan_complete'  → 'prediction:analysis_complete'
```

**File:** `src/services/realtime.ts`

| Current Event | New Event |
|---------------|-----------|
| `security:alert` | `prediction:alert` |
| `security:posture_change` | `prediction:accuracy_change` |
| `security:issue_detected` | `prediction:generated` |
| `security:scan_complete` | `prediction:analysis_complete` |

**Channel:** `'security'` → `'predictive-analytics'`

### 3.5 Routing

**File:** `src/App.tsx`

| Current | New |
|---------|-----|
| Route: `/cybersecurity` | `/predictive-analytics` |
| Import: `CybersecurityScanner` | `PredictiveAnalytics` |
| Line 166 | Update route path |
| Line 28 | Update import |

### 3.6 Navigation Components

**File:** `src/components/layout/Sidebar.tsx` (Line 49)
```typescript
// Current
{ name: 'Security', href: '/cybersecurity', icon: Shield, moduleId: 'cybersecurity' }
// New
{ name: 'Predictive Analytics', href: '/predictive-analytics', icon: TrendingUp, moduleId: 'predictive-analytics' }
```

**File:** `src/components/layout/Breadcrumbs.tsx` (Line 19)
```typescript
// Current
'cybersecurity': 'Security Scanner',
// New
'predictive-analytics': 'Predictive Analytics',
```

### 3.7 Dashboard Integration

**File:** `src/pages/dashboard/Dashboard.tsx` (Lines 66-72)
```typescript
// Current
{
  name: 'Security Scanner',
  icon: Shield,
  description: 'Security posture & compliance',
  color: 'bg-green-500',
  href: '/cybersecurity',
  goalId: 'security',
}
// New
{
  name: 'Predictive Analytics',
  icon: TrendingUp,
  description: 'Forecasts & trend analysis',
  color: 'bg-indigo-500',
  href: '/predictive-analytics',
  goalId: 'predictions',
}
```

**File:** `src/pages/dashboard/ThemedDashboard.tsx`
- Update "Security Score" gauge widget → "Prediction Accuracy"
- Update activity type `'security'` → `'prediction'`

### 3.8 Module Configuration

**File:** `src/services/modules.ts` (Lines 134-140)
```typescript
// Current
{
  id: 'cybersecurity',
  name: 'Cybersecurity Scanner',
  description: 'Security monitoring and compliance tracking',
  enabled: true,
  tier: 'pro',
  features: ['Security scanning', 'Compliance monitoring', 'MFA tracking'],
}
// New
{
  id: 'predictive-analytics',
  name: 'Predictive Analytics',
  description: 'AI-powered forecasting and trend analysis',
  enabled: true,
  tier: 'pro',
  features: ['Trend detection', 'Revenue forecasting', 'Anomaly alerts'],
}
```

### 3.9 Onboarding Integration

**File:** `src/pages/onboarding/steps/GoalsStep.tsx` (Lines 41-45)
```typescript
// Current
{
  id: 'security',
  icon: Shield,
  title: 'Monitor Security',
  description: 'Security posture, compliance, MFA tracking',
}
// New
{
  id: 'predictions',
  icon: TrendingUp,
  title: 'Predict Trends',
  description: 'Revenue forecasting, trend detection, anomaly alerts',
}
```

**File:** `src/services/onboarding.ts` (Line 11)
```typescript
// Update goal type
| 'security' → | 'predictions'
```

### 3.10 Documentation Page

**File:** `src/pages/Documentation.tsx` (Lines 85-89)
```typescript
// Current
{
  id: 'cybersecurity-scanner',
  title: 'Cybersecurity Scanner Guide',
  description: 'Monitor security posture and compliance',
  readTime: '10 min',
}
// New
{
  id: 'predictive-analytics',
  title: 'Predictive Analytics Guide',
  description: 'AI-powered forecasting and trend analysis',
  readTime: '10 min',
}
```

### 3.11 Settings Page

**File:** `src/pages/Settings.tsx`

| Line | Current | New |
|------|---------|-----|
| 56 | Tab: `{ id: 'security', name: 'Security', icon: Shield }` | Keep (user security settings) |
| 557 | Security Alerts notification preference | Rename to "Prediction Alerts" |

*Note: User account security settings (2FA, password) should remain unchanged as they are unrelated to the security module.*

### 3.12 Icons Used

| Current Icon | New Icon | Usage |
|--------------|----------|-------|
| `Shield` | `TrendingUp` or `LineChart` | Primary module icon |
| `ShieldCheck` | `CheckCircle2` | Good score indicator |
| `ShieldAlert` | `AlertTriangle` | Warning indicator |
| `ShieldX` | `XCircle` | Poor score indicator |
| `Key` | `Database` | Data sources metric |
| `Lock` | `BarChart3` | Protected assets → Data quality |

### 3.13 Frontend Files Summary

```
src/pages/modules/CybersecurityScanner.tsx    → RENAME to PredictiveAnalytics.tsx & REWRITE
src/services/cybersecurity.ts                  → RENAME to predictive-analytics.ts
src/services/index.ts                          → UPDATE import
src/types/index.ts                             → UPDATE types & interfaces
src/hooks/useRealtime.ts                       → UPDATE hook name & events
src/services/realtime.ts                       → UPDATE event types & channel
src/App.tsx                                    → UPDATE route & import
src/components/layout/Sidebar.tsx              → UPDATE nav item
src/components/layout/Breadcrumbs.tsx          → UPDATE breadcrumb label
src/pages/dashboard/Dashboard.tsx              → UPDATE module card
src/pages/dashboard/ThemedDashboard.tsx        → UPDATE widgets & activity
src/services/modules.ts                        → UPDATE module config
src/pages/onboarding/steps/GoalsStep.tsx       → UPDATE goal option
src/services/onboarding.ts                     → UPDATE goal type
src/pages/Documentation.tsx                    → UPDATE doc entry
src/pages/Settings.tsx                         → UPDATE notification pref
```

**Total Frontend Files:** 16 files

---

## Implementation Plan

### Phase 1: Database & Backend (Priority: High)

1. **Create migration scripts** for database schema changes
2. **Update Python models** in AI Orchestrator
3. **Update Python services** and routers
4. **Update Gateway routes** and middleware
5. **Run database migrations** on development environment
6. **Test API endpoints**

### Phase 2: Marketing Website (Priority: High)

1. **Rename security page** directory to `predictive-analytics`
2. **Update all translation files** (en, de, fr, es)
3. **Update navigation components** (Header, Footer)
4. **Update homepage** module card and features
5. **Update all related pages** (product, why-binelek, demo, etc.)
6. **Replace screenshot** assets
7. **Update SEO metadata**
8. **Test all routes and i18n**

### Phase 3: Frontend Platform (Priority: Medium)

1. **Audit frontend codebase** for security references
2. **Update TypeScript interfaces**
3. **Update API client calls**
4. **Update dashboard components**
5. **Test user flows**

### Phase 4: Testing & Deployment (Priority: Critical)

1. **Unit tests** for new backend endpoints
2. **Integration tests** for API changes
3. **E2E tests** for frontend flows
4. **Staging deployment** and QA
5. **Production deployment**

---

## New Module Concept: Predictive Analytics

### Tagline Options
- "See tomorrow's trends today"
- "Data-driven foresight for your business"
- "Turn data into predictions"

### Core Capabilities (replacing Security features)

| Security Feature | Predictive Analytics Feature |
|------------------|------------------------------|
| Security Score | Prediction Accuracy Score |
| Vulnerability Scanning | Trend Detection |
| Compliance Reporting | Forecast Reports |
| MFA Monitoring | Anomaly Detection |

### New Feature Set

1. **Prediction Accuracy Score** - Composite 0-100 score showing prediction reliability
2. **Trend Detection** - Automated identification of business patterns
3. **Forecast Reports** - Revenue, demand, and churn predictions
4. **Anomaly Detection** - Unusual pattern identification in business metrics

### Dashboard Metrics

| Current Metric | New Metric |
|----------------|------------|
| Issues Resolved | Predictions Generated |
| Pending Actions | Pending Insights |
| MFA Coverage | Forecast Accuracy |

### Compliance Frameworks → Integration Frameworks

Replace SOC2/GDPR/HIPAA/PCI-DSS badges with:
- QuickBooks Integration
- Shopify Integration
- Stripe Integration
- Custom Data Sources

---

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Breaking existing API consumers | Version API, maintain backwards compatibility |
| SEO impact from URL changes | Set up 301 redirects from /product/security |
| Translation inconsistencies | QA all 4 languages post-update |
| Database migration issues | Test on staging, have rollback plan |

---

## Timeline Estimate

- **Phase 1 (Backend):** 2-3 days
- **Phase 2 (Marketing Website):** 1-2 days
- **Phase 3 (Frontend Platform):** 2-3 days
- **Phase 4 (Testing):** 1-2 days

**Total:** 6-10 days depending on complexity

---

## Files Quick Reference

### Marketing Website Files (15 files)
```
src/app/product/security/page.tsx        → RENAME & REWRITE
src/app/page.tsx                         → UPDATE
src/app/product/page.tsx                 → UPDATE
src/app/why-binelek/page.tsx             → UPDATE
src/app/demo/page.tsx                    → UPDATE
src/app/pricing/page.tsx                 → UPDATE
src/app/about/page.tsx                   → UPDATE
src/app/resources/faq/page.tsx           → UPDATE
src/app/resources/videos/page.tsx        → UPDATE
src/app/coming-soon/page.tsx             → UPDATE
src/components/Header.tsx                → UPDATE
src/components/Footer.tsx                → UPDATE
src/components/ComingSoonLanding.tsx     → UPDATE
messages/en.json                         → UPDATE (57 keys)
messages/de.json                         → UPDATE (57 keys)
messages/fr.json                         → UPDATE (57 keys)
messages/es.json                         → UPDATE (57 keys)
public/screenshots/security.png          → REPLACE
```

### Backend Files (20+ files)
```
database/init/02_additional_tables.sql
database/seeds/01_seed_data.sql
services/ai-orchestrator/app/models/security.py
services/ai-orchestrator/app/models/__init__.py
services/ai-orchestrator/app/models/tenant.py
services/ai-orchestrator/app/services/security_service.py
services/ai-orchestrator/app/routers/security.py
services/ai-orchestrator/app/routers/__init__.py
services/ai-orchestrator/app/main.py
services/ai-orchestrator/app/services/query_router.py
services/ai-orchestrator/app/services/query_service.py
services/ai-orchestrator/app/services/events.py
services/ai-orchestrator/app/services/task_planner.py
services/ai-orchestrator/app/routers/agents.py
gateway/src/routes/modules.ts
gateway/src/routes/modules-direct.ts
gateway/src/routes/dashboard.ts
gateway/src/middleware/module-access.ts
gateway/src/services/auth.ts
README.md
CLAUDE.md
```

### Frontend Application Files (16 files)
```
src/pages/modules/CybersecurityScanner.tsx    → RENAME & REWRITE
src/services/cybersecurity.ts                  → RENAME
src/services/index.ts                          → UPDATE
src/types/index.ts                             → UPDATE
src/hooks/useRealtime.ts                       → UPDATE
src/services/realtime.ts                       → UPDATE
src/App.tsx                                    → UPDATE
src/components/layout/Sidebar.tsx              → UPDATE
src/components/layout/Breadcrumbs.tsx          → UPDATE
src/pages/dashboard/Dashboard.tsx              → UPDATE
src/pages/dashboard/ThemedDashboard.tsx        → UPDATE
src/services/modules.ts                        → UPDATE
src/pages/onboarding/steps/GoalsStep.tsx       → UPDATE
src/services/onboarding.ts                     → UPDATE
src/pages/Documentation.tsx                    → UPDATE
src/pages/Settings.tsx                         → UPDATE
```
