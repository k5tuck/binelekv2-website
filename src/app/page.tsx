import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ComingSoonLanding } from "@/components/ComingSoonLanding";

// Environment variable toggle for coming soon mode
// Set NEXT_PUBLIC_COMING_SOON_MODE=true in Vercel to show coming soon page
const isComingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON_MODE === "true";

const modules = [
  {
    name: "Ops Copilot",
    description: "Automate your operations with AI-powered task management and workflow automation.",
    href: "/product/ops-copilot",
    icon: "⚡",
  },
  {
    name: "Mini Foundry",
    description: "Understand your data with beautiful dashboards and natural language queries.",
    href: "/product/mini-foundry",
    icon: "📊",
  },
  {
    name: "Cybersecurity Scanner",
    description: "Protect your business with automated security monitoring and compliance.",
    href: "/product/security",
    icon: "🛡️",
  },
  {
    name: "Marketplace Intelligence",
    description: "Outsmart your competition with real-time price tracking and market insights.",
    href: "/product/marketplace",
    icon: "🔍",
  },
];

const integrations = [
  "Shopify",
  "QuickBooks",
  "Stripe",
  "HubSpot",
  "Square",
  "Xero",
  "Zoho",
  "Gmail",
  "Outlook",
];

const steps = [
  {
    number: "1",
    title: "Connect your tools",
    description: "Link your existing business tools in just a few clicks.",
  },
  {
    number: "2",
    title: "Ask anything",
    description: "Use natural language to query your data and automate tasks.",
  },
  {
    number: "3",
    title: "Automate and grow",
    description: "Let AI handle the repetitive work while you focus on growth.",
  },
];

export default function HomePage() {
  // Show coming soon page if environment variable is set
  if (isComingSoonMode) {
    return <ComingSoonLanding />;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your AI-powered command center for business
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Ask questions. Automate tasks. See everything.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/resources/videos"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Watch Demo Video
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Running a business shouldn&apos;t be this hard
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              Most SMBs struggle with scattered data, manual processes, and tools that don&apos;t talk to each other.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "📁", title: "Data silos", desc: "Information scattered across dozens of tools" },
              { icon: "⏰", title: "Manual work", desc: "Hours spent on repetitive tasks" },
              { icon: "❓", title: "Limited insights", desc: "No time to analyze what matters" },
              { icon: "🔓", title: "Security gaps", desc: "Vulnerabilities you don't know about" },
              { icon: "👁️", title: "Competitive blindness", desc: "No visibility into market changes" },
            ].map((problem) => (
              <div key={problem.title} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="text-3xl mb-3">{problem.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Modules */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Four modules. One platform.
            </h2>
            <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
              Everything you need to run your business smarter, faster, and more securely.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {module.name}
                </h3>
                <p className="text-gray-600 font-serif">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container-marketing">
          <p className="text-center text-sm text-gray-500 mb-6">
            Connects with the tools you already use
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((name) => (
              <div
                key={name}
                className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              Get up and running in minutes, not months.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 font-serif">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing text-center">
          <p className="text-lg text-gray-600 font-serif italic">
            &ldquo;Join hundreds of businesses simplifying their operations with Binelek.&rdquo;
          </p>
          <p className="text-sm text-gray-500 mt-4">Customer testimonials coming soon</p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="See Binelek in action"
        subheadline="Book a personalized demo and discover how Binelek can transform your business operations."
        primaryCTA="Schedule a Demo"
        primaryHref="/demo"
        secondaryCTA="Watch Demo Video"
        secondaryHref="/resources/videos"
        variant="gradient"
      />
    </>
  );
}
