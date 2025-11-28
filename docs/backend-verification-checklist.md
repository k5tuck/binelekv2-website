# Backend Verification Checklist

This document contains claims made on the marketing website that need backend verification before launch.

**Last Updated:** November 2024
**Backend Repo:** `binelekv2-smb-platform-backend`

---

## Data Sync Frequency (FAQ - Integrations Section)

**Claim:** "How often does data sync? Depends on your plan: Starter syncs every 24 hours, Pro every hour, and Business/Enterprise get real-time sync."

**Location:** `src/app/resources/faq/page.tsx`

**Backend Status:** ⚠️ PARTIALLY IMPLEMENTED

**Findings:**
- Connectors service exists (`services/connectors/app/main.py`)
- Basic sync infrastructure in place
- **Missing:** Plan-based sync frequency control
- **Missing:** Real-time sync for Business/Enterprise (webhooks)

**Verification Required:**
- [ ] Add `sync_frequency` column to `connector_configs` table
- [ ] Implement sync scheduler with plan-based intervals
- [ ] Add webhook handlers for real-time sync (Shopify, Stripe, etc.)
- [ ] Create cron job for Starter (24h) and Pro (1h) plans
- [ ] Document sync implementation in backend README

**Files to Modify:**
- `database/init/01_create_database.sql` - Add sync config columns
- `services/connectors/app/main.py` - Add sync scheduler
- `gateway/src/services/` - Add sync status service

---

## AI Source Attribution (FAQ - AI & Data Section)

**Claim:** "We always show the source so you can verify."

**Location:** `src/app/resources/faq/page.tsx`

**Backend Status:** ✅ IMPLEMENTED

**Findings:**
- AI Orchestrator (`services/ai-orchestrator/app/services/orchestrator.py`) includes `sources` in responses
- QueryResponse model has `sources: List[Dict[str, Any]]` field
- `_execute_plan()` collects sources from each tool execution
- Sources are passed through to final response

**Verified in Code:**
```python
# orchestrator.py line 95-100
response = {
    ...
    "sources": execution_results.get("sources", []),
    ...
}
```

**Remaining Tasks:**
- [ ] Ensure all connectors populate source metadata correctly
- [ ] Add clickable links to sources in frontend display
- [ ] Test source attribution across all integrations
- [ ] Document source format in API docs

---

## AI Data Access Restrictions (FAQ - AI & Data Section)

**Claim:** "The AI only has access to data you've connected. It cannot access anything outside your authorized integrations."

**Location:** `src/app/resources/faq/page.tsx`

**Backend Status:** ✅ IMPLEMENTED

**Findings:**
- Tenant isolation enforced via `TenantMiddleware` (`services/ai-orchestrator/app/middleware/tenant.py`)
- All requests require `X-Tenant-Id` header
- `tenant_id` is passed to all orchestrator operations
- Database queries filter by `tenant_id` (verified in connector configs)

**Verified in Code:**
```python
# tenant.py - TenantMiddleware
tenant_id = request.headers.get("X-Tenant-Id")
if not tenant_id:
    raise HTTPException(status_code=400, detail="Missing X-Tenant-Id header")
request.state.tenant_id = tenant_id

# orchestrator.py - All queries use tenant_id
result = await orchestrator.process_query(
    query=query_request.query,
    tenant_id=tenant_id,
    ...
)
```

**Remaining Tasks:**
- [ ] Security audit: Penetration testing for tenant isolation
- [ ] Verify no cross-tenant data leakage in vector search (Qdrant)
- [ ] Add tenant isolation tests to CI/CD
- [ ] Document tenant isolation architecture

---

## Pricing Page Sync Claims

**Location:** `src/app/pricing/page.tsx`

The pricing page lists data refresh rates per plan:
- Starter: "24-hour data refresh"
- Pro: "1-hour data refresh"
- Business: "Real-time data refresh"

**Backend Status:** ⚠️ NOT YET ENFORCED

**Tasks:**
- [ ] Create `plans` table or config with sync frequencies
- [ ] Enforce sync frequency based on tenant's plan
- [ ] Implement real-time webhooks for Business tier
- [ ] Add upgrade prompts when hitting sync limits

---

## New: Internationalization (i18n)

**Location:** Frontend + Backend

**Backend Status:** ✅ IMPLEMENTED (in `feature/i18n-support` branch)

**Implemented Features:**
- User locale preferences (`preferred_locale`, `preferred_currency`)
- Tenant default locale/currency
- Consent tracking for GDPR
- Currency exchange rates from API
- Multi-currency billing

**Files Added:**
- `database/init/05_i18n_support.sql`
- `gateway/src/middleware/locale.ts`
- `gateway/src/routes/locale.ts`
- `gateway/src/services/currency.ts`

**Remaining Tasks:**
- [ ] Merge `feature/i18n-support` branch to main
- [ ] Get ExchangeRate-API key for production
- [ ] Run database migration
- [ ] Test currency conversion accuracy

---

## Summary

| Feature | Status | Priority |
|---------|--------|----------|
| Data Sync Frequency | ⚠️ Partial | High |
| AI Source Attribution | ✅ Done | - |
| AI Data Access Restrictions | ✅ Done | - |
| Plan-based Sync Enforcement | ❌ Not Started | High |
| i18n Support | ✅ Done (PR pending) | Medium |

---

## Notes

- Update this checklist as claims are verified
- Remove or update marketing claims if backend cannot support them
- Add new claims to this list as they are added to the website
- Run security audit before launch
