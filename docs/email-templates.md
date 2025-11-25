# Binelek Waitlist Email Sequence

Copy these templates into your Loops dashboard to set up automated emails.

---

## Email 1: Welcome (Immediate)

**Subject:** Welcome to Binelek - You're on the list!

**Body:**

```
Hi there,

Thanks for joining the Binelek early access list. We're building something special for small business owners like you, and we're excited to have you along for the journey.

**What is Binelek?**

Binelek is an AI-powered operations platform that connects your existing tools—Shopify, QuickBooks, Stripe, and more—into one intelligent system. No more jumping between apps or manually updating spreadsheets.

**What you'll get with early access:**

- Priority onboarding when we launch
- Founding member pricing (locked in forever)
- Direct input on features we build
- Early access to new modules

We're working hard to get Binelek ready for you. In the meantime, keep an eye on your inbox—we'll share updates on our progress and let you know the moment you can start using the platform.

Questions? Just reply to this email. We read every message.

Talk soon,
The Binelek Team

---
binelek.com
```

---

## Email 2: The Problem We're Solving (Day 3)

**Subject:** Why we're building Binelek

**Body:**

```
Hi again,

We wanted to share why we started Binelek.

Running a small business means wearing a lot of hats. You're the CEO, the accountant, the customer service rep, and the operations manager—all at once.

And your tools? They don't talk to each other.

Your orders live in Shopify. Your finances are in QuickBooks. Customer data is scattered across email, spreadsheets, and sticky notes. Every day, you're copying data between systems, chasing down answers, and putting out fires instead of growing your business.

**We built Binelek to fix this.**

Imagine asking a simple question like "Which customers haven't ordered in 60 days?" and getting an instant answer—pulled from your actual data, across all your tools.

Or having your inventory automatically reorder when stock runs low, with the purchase order already drafted and waiting for your approval.

That's what Binelek does. It connects your tools, understands your business, and handles the busywork so you can focus on what matters.

More details coming soon.

Best,
The Binelek Team
```

---

## Email 3: The Four Modules (Day 7)

**Subject:** How Binelek actually works

**Body:**

```
Hi,

You've probably been wondering what Binelek looks like in action. Here's a quick breakdown of our four core modules:

**1. Ops Co-Pilot**
Your AI assistant that understands your entire business. Ask questions in plain English and get answers pulled from all your connected tools. "What were my top 5 products last month?" Done.

**2. Mini Foundry**
Automate the repetitive tasks eating up your day. Set up workflows that trigger automatically—like sending a thank-you email when a VIP customer places an order, or flagging invoices that are overdue.

**3. Marketplace**
Pre-built integrations and automation templates from other business owners. Find workflows that work and deploy them in minutes, not hours.

**4. Security & Compliance**
Your data stays yours. Bank-level encryption, audit logs, and compliance tools built in from day one. We take security seriously so you don't have to worry.

All four modules work together seamlessly. Connect your tools once, and everything just works.

We'll let you know the moment early access opens.

Best,
The Binelek Team
```

---

## Email 4: Integrations Preview (Day 12)

**Subject:** The tools Binelek connects

**Body:**

```
Hi,

One of the most common questions we get: "Does Binelek work with [tool I already use]?"

The answer is almost certainly yes.

**Launching with support for:**

E-commerce:
- Shopify
- Square
- WooCommerce

Accounting:
- QuickBooks
- Xero
- FreshBooks

Payments:
- Stripe
- PayPal

CRM & Marketing:
- HubSpot
- Salesforce
- Mailchimp

Communication:
- Gmail
- Outlook
- Slack

**And more coming every month.**

The best part? You connect each tool once, and Binelek keeps everything in sync automatically. No more manual exports, no more copy-paste errors.

If there's a specific tool you need that's not on this list, reply and let us know. Early access members get priority requests.

Best,
The Binelek Team
```

---

## Email 5: Early Access Reminder (Day 18)

**Subject:** Quick update on Binelek

**Body:**

```
Hi,

Just a quick note to say: we haven't forgotten about you.

The team has been heads-down building, and we're making great progress. We're in the final stages of testing and polish before we start letting early access members in.

**What's next:**

1. We'll email you when early access opens
2. You'll get a personal onboarding call to set up your account
3. Founding member pricing locks in the moment you activate

You're on the list, so you don't need to do anything. Just keep an eye on your inbox.

Thanks for your patience. It'll be worth the wait.

Best,
The Binelek Team

P.S. - If you have questions or want to chat before launch, just reply to this email. We're always happy to talk.
```

---

## Email 6: Launch Announcement (When Ready)

**Subject:** It's time - Your Binelek access is ready

**Body:**

```
Hi,

The moment you've been waiting for: Binelek is ready for you.

As an early access member, you're getting in before the general public—and locking in founding member pricing that won't be available later.

**Get started now:**
[BUTTON: Activate Your Account]

**What happens next:**

1. Click the button above to create your account
2. Connect your first tool (takes about 2 minutes)
3. Book your free onboarding call with our team

**Your founding member benefits:**

- 50% off your first year (locked in forever for early members)
- Priority support with direct access to our team
- Early access to new features before anyone else

We built Binelek for business owners like you. We can't wait to see what you do with it.

Let's go,
The Binelek Team

[BUTTON: Activate Your Account]

---

Questions? Reply to this email or reach out at support@binelek.com
```

---

# Loops Setup Instructions

## Creating the Sequence

1. **Go to Loops Dashboard** > Emails > Create Email

2. **Create each email** with the content above:
   - Set "From name" to "Binelek" or "The Binelek Team"
   - Set "From email" to hello@binelek.com
   - Use a clean, minimal template

3. **Create a Loop (automation)**:
   - Trigger: Contact created with `userGroup` equals `waitlist`
   - Add emails with delays:
     - Email 1: Immediate (0 delay)
     - Email 2: 3 days
     - Email 3: 7 days
     - Email 4: 12 days
     - Email 5: 18 days
   - Email 6: Send manually when you're ready to launch

## Recommended Settings

- **Reply-to:** hello@binelek.com
- **Unsubscribe:** Enable (required by law)
- **Track opens:** Yes
- **Track clicks:** Yes

## Testing

Before activating:
1. Add yourself as a test contact
2. Send test emails to verify formatting
3. Check links work correctly
4. Verify unsubscribe works
