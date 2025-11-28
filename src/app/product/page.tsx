import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { EmailSignup } from "@/components/EmailSignup";
import { Zap, Database, Shield, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Overview",
  description: "Explore the Binelek platform - four powerful modules that work together to automate, analyze, secure, and grow your business.",
};

const modules = [
  {
    name: "Ops Copilot",
    tagline: "Automate your operations",
    description: "AI-powered task management and workflow automation. Create automations with plain English, not complicated flowcharts.",
    features: ["Task automation", "Email automation", "Workflow builder", "Natural language commands"],
    href: "/product/ops-copilot",
    Icon: Zap,
  },
  {
    name: "Mini Foundry",
    tagline: "Understand your data",
    description: "Business intelligence without the learning curve. Connect your data sources and ask questions in plain English.",
    features: ["Custom dashboards", "Natural language queries", "Automated reports", "Data consolidation"],
    href: "/product/mini-foundry",
    Icon: Database,
  },
  {
    name: "Cybersecurity Scanner",
    tagline: "Protect your business",
    description: "Enterprise security made simple for growing businesses. Continuous monitoring with actionable recommendations.",
    features: ["Security scoring", "Vulnerability scanning", "Compliance reporting", "MFA monitoring"],
    href: "/product/security",
    Icon: Shield,
  },
  {
    name: "Marketplace Intelligence",
    tagline: "Outsmart your competition",
    description: "Know what competitors charge before your customers do. Real-time price tracking across every marketplace.",
    features: ["Price tracking", "Competitor monitoring", "Market trends", "Price alerts"],
    href: "/product/marketplace",
    Icon: Search,
  },
];

export default function ProductOverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Coming Soon
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything your business needs. One platform.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Four powerful modules that work together to automate, analyze, secure, and grow your business.
            </p>
            <div className="flex justify-center">
              <EmailSignup
                variant="hero"
                buttonText="Get Early Access"
                placeholder="Enter your email for updates"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Screenshot */}
      <section className="py-16 bg-white">
        <div className="container-marketing">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/screenshots/dashboard-desktop.png"
              alt="Binelek Platform Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              One platform, not four tools
            </h2>
            <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
              Unlike piecemeal tools, Binelek brings everything together with a unified data layer and AI that understands your entire business.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <module.Icon className="w-10 h-10 text-primary-600 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {module.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">{module.tagline}</p>
                    <p className="text-gray-600 font-serif mb-4">{module.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {module.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Highlight */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                AI that works across everything
              </h2>
              <p className="text-lg text-gray-600 font-serif">
                Ask questions in plain English and get answers from all your connected data.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">You ask:</p>
                  <p className="text-gray-900">&ldquo;What was my revenue this month?&rdquo;</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-primary-600 mb-1">Binelek responds:</p>
                  <p className="text-gray-900">&ldquo;Your revenue this month is $47,832, up 12% from last month. Your top-selling product is Widget Pro, accounting for 34% of sales.&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
