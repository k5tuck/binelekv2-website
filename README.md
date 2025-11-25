# Binelek Marketing Website

The official marketing website for Binelek - the AI-powered command center for SMBs.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── why-binelek/       # Why Binelek page
│   ├── product/           # Product pages
│   │   ├── page.tsx       # Product overview
│   │   ├── ops-copilot/
│   │   ├── mini-foundry/
│   │   ├── security/
│   │   └── marketplace/
│   ├── solutions/         # Solutions (placeholder)
│   ├── integrations/      # Integrations page
│   ├── pricing/           # Pricing page
│   ├── demo/              # Demo scheduling page
│   ├── resources/         # Resources section
│   │   ├── getting-started/
│   │   ├── videos/
│   │   └── faq/
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── status/            # Status page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── login/             # Login placeholder
│   └── careers/           # Careers page
├── components/            # Shared components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── CTASection.tsx
├── styles/                # Global styles
│   └── globals.css
└── lib/                   # Utility functions
```

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Main landing page |
| Why Binelek | `/why-binelek` | Differentiation page |
| Product Overview | `/product` | All modules overview |
| Ops Copilot | `/product/ops-copilot` | Automation module |
| Mini Foundry | `/product/mini-foundry` | BI module |
| Security Scanner | `/product/security` | Security module |
| Marketplace Intel | `/product/marketplace` | Competitive intel module |
| Solutions | `/solutions` | Coming soon placeholder |
| Integrations | `/integrations` | Integration partners |
| Pricing | `/pricing` | Pricing plans |
| Demo | `/demo` | Schedule a demo |
| Getting Started | `/resources/getting-started` | Onboarding guide |
| Videos | `/resources/videos` | Demo videos |
| FAQ | `/resources/faq` | Frequently asked questions |
| About | `/about` | Company info |
| Contact | `/contact` | Contact form |
| Status | `/status` | System status |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## Design Guidelines

- **Primary Font:** Neue Haas Grotesk / Helvetica
- **Secondary Font:** Source Serif
- **Imagery:** Clean gradients with minimal line illustrations
- **Primary CTA:** "Schedule a Demo" → `/demo`

## Deployment

The site is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Related Repositories

- `binelekv2-docs` - Customer and developer documentation (docs.binelek.io)
- `binelekv2-smb-platform-backend` - API backend
- `binelekv2-smb-platform-frontend` - Application frontend (app.binelek.io)

## License

Proprietary - All rights reserved
