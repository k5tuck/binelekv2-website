import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ComingSoonLanding } from "@/components/ComingSoonLanding";
import { EmailSignup } from "@/components/EmailSignup";
import { IntegrationLogos } from "@/components/IntegrationLogos";
import {
  Zap,
  Database,
  Shield,
  Search,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Bot,
  Lock,
  TrendingUp
} from "lucide-react";

// Environment variable toggle for coming soon mode
// Set NEXT_PUBLIC_COMING_SOON_MODE=true in Vercel to show coming soon page
const isComingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON_MODE === "true";

const modules = [
  {
    name: "Ops Copilot",
    tagline: "Automate your operations",
    description: "AI-powered task management and workflow automation. Create automations with natural language, not complicated flowcharts.",
    features: ["Email automation", "Task scheduling", "Workflow builder", "Natural language commands"],
    Icon: Zap,
    color: "from-amber-500 to-orange-500",
    href: "/product/ops-copilot",
  },
  {
    name: "Mini Foundry",
    tagline: "Understand your data",
    description: "Business intelligence without the learning curve. Connect your data sources and ask questions in plain English.",
    features: ["Custom dashboards", "Natural language queries", "Automated reports", "Data consolidation"],
    Icon: Database,
    color: "from-blue-500 to-cyan-500",
    href: "/product/mini-foundry",
  },
  {
    name: "Security Scanner",
    tagline: "Protect your business",
    description: "Enterprise-grade security made simple. Continuous monitoring with actionable recommendations.",
    features: ["Security scoring", "Vulnerability scanning", "Compliance reporting", "MFA monitoring"],
    Icon: Shield,
    color: "from-emerald-500 to-teal-500",
    href: "/product/security",
  },
  {
    name: "Marketplace Intel",
    tagline: "Outsmart your competition",
    description: "Know what competitors charge before your customers do. Real-time price tracking across marketplaces.",
    features: ["Price tracking", "Competitor monitoring", "Market trends", "Price alerts"],
    Icon: Search,
    color: "from-purple-500 to-pink-500",
    href: "/product/marketplace",
  },
];

const benefits = [
  {
    Icon: Bot,
    title: "AI-First Design",
    description: "Ask questions in plain English. No complex queries or dashboards to learn.",
  },
  {
    Icon: BarChart3,
    title: "Unified Data",
    description: "All your business data in one place. No more switching between apps.",
  },
  {
    Icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level security built in. SOC2 compliant from day one.",
  },
  {
    Icon: TrendingUp,
    title: "Actionable Insights",
    description: "Not just data, but recommendations. Know what to do next.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    description: "Link Shopify, QuickBooks, Stripe, and more in just a few clicks. No engineering required.",
  },
  {
    number: "02",
    title: "Ask anything",
    description: "\"What was my revenue last month?\" \"Send a follow-up email to John.\" Just ask.",
  },
  {
    number: "03",
    title: "Automate and scale",
    description: "Set up workflows that run automatically. Focus on growth, not busywork.",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="container-marketing relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Launching Soon
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo-light.svg"
                alt="Binelek - The SMB AI Platform"
                width={200}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              The AI Command Center
              <span className="block text-primary-600">for Your Business</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              One platform to automate operations, understand your data, secure your business, and outsmart the competition.
            </p>

            {/* Email Signup */}
            <div className="flex justify-center mb-8">
              <EmailSignup
                variant="hero"
                buttonText="Get Early Access"
                placeholder="Enter your work email"
                successMessage="You're on the list! We'll be in touch soon."
              />
            </div>

            {/* Social proof */}
            <p className="text-sm text-gray-500">
              Join 500+ businesses on the waitlist
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Bar */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container-marketing">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            Connects with the tools you already use
          </p>
          <IntegrationLogos />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-marketing">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stop juggling. Start scaling.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most businesses waste hours every week on manual tasks and scattered data. Binelek brings everything together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <benefit.Icon className="w-7 h-7 text-primary-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Modules */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-marketing">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Four modules. One platform.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your business smarter, faster, and more securely.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0`}>
                    <module.Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {module.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-primary-600 font-medium text-sm mb-3">{module.tagline}</p>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {module.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                        >
                          <CheckCircle className="w-3 h-3 text-primary-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-marketing">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Up and running in minutes
            </h2>
            <p className="text-lg text-gray-600">
              No complex setup. No engineering team required.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                  )}

                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Just ask. Binelek answers.
              </h2>
              <p className="text-lg text-gray-400">
                No dashboards to navigate. No reports to generate. Just ask questions in plain English.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">You</span>
                </div>
                <div className="bg-gray-700 rounded-2xl rounded-tl-none px-5 py-3">
                  <p>&ldquo;What was my best-selling product last month?&rdquo;</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-emerald-900/50 border border-emerald-700/50 rounded-2xl rounded-tl-none px-5 py-3 flex-1">
                  <p className="mb-3">&ldquo;Your best-selling product in October was <strong>Widget Pro</strong> with 847 units sold, generating $42,350 in revenue. That&apos;s up 23% from September.&rdquo;</p>
                  <p className="text-sm text-emerald-400">Would you like me to show you the full product performance report?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="signup" className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-white scroll-mt-20">
        <div className="container-marketing">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Be among the first
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We&apos;re launching soon. Join the waitlist to get early access, exclusive pricing, and help shape the product.
            </p>
            <div className="flex justify-center mb-6">
              <EmailSignup
                variant="hero"
                buttonText="Join the Waitlist"
                placeholder="your@company.com"
                successMessage="Welcome aboard! Check your email for next steps."
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                Early adopter pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to transform your business?"
        subheadline="Join hundreds of businesses already on the waitlist. Get notified when we launch."
        variant="gradient"
      />
    </>
  );
}
