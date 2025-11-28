# Backend Verification Checklist

This document contains claims made on the marketing website that need backend verification before launch.

## Data Sync Frequency (FAQ - Integrations Section)

**Claim:** "How often does data sync? Depends on your plan: Starter syncs every 24 hours, Pro every hour, and Business/Enterprise get real-time sync."

**Location:** `src/app/resources/faq/page.tsx`

**Verification Required:**
- [ ] Confirm Starter plan syncs every 24 hours
- [ ] Confirm Pro plan syncs every hour
- [ ] Confirm Business plan has real-time sync
- [ ] Confirm Enterprise plan has real-time sync
- [ ] Verify sync frequency is configurable per plan in backend
- [ ] Document actual sync implementation (cron jobs, webhooks, polling, etc.)

---

## AI Source Attribution (FAQ - AI & Data Section)

**Claim:** "We always show the source so you can verify."

**Location:** `src/app/resources/faq/page.tsx`

**Verification Required:**
- [ ] Confirm AI responses include source attribution
- [ ] Verify source links/references are accurate and clickable
- [ ] Test with multiple data sources to ensure attribution works across all integrations
- [ ] Document how source attribution is implemented in AI response pipeline

---

## AI Data Access Restrictions (FAQ - AI & Data Section)

**Claim:** "The AI only has access to data you've connected. It cannot access anything outside your authorized integrations."

**Location:** `src/app/resources/faq/page.tsx`

**Verification Required:**
- [ ] Confirm data isolation between tenants
- [ ] Verify AI cannot access data from unconnected integrations
- [ ] Confirm authorization checks are in place for all data queries
- [ ] Security audit: test that AI cannot be prompted to access unauthorized data
- [ ] Document data access control architecture

---

## Pricing Page Sync Claims

**Location:** `src/app/pricing/page.tsx`

The pricing page lists data refresh rates per plan:
- Starter: "24-hour data refresh"
- Pro: "1-hour data refresh"
- Business: "Real-time data refresh"

**Verification Required:**
- [ ] Ensure these match the actual backend implementation
- [ ] Ensure these match the FAQ claims above

---

## Notes

- Update this checklist as claims are verified
- Remove or update marketing claims if backend cannot support them
- Add new claims to this list as they are added to the website
