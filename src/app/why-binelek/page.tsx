import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why Binelek",
  description: "Discover why Binelek is the AI-powered command center that brings all your business tools together in one platform.",
};

const comparison = [
  { oldWay: "Spreadsheets for tracking, another app for tasks, another for dashboards", binelekWay: "Everything in one place" },
  { oldWay: "Copy-paste data between tools", binelekWay: "Automatic data sync" },
  { oldWay: "Learn 5 different interfaces", binelekWay: "One intuitive interface" },
  { oldWay: "Pay for 5 different subscriptions", binelekWay: "One predictable price" },
  { oldWay: "No connection between tools", binelekWay: "AI that sees your whole business" },
];

const differentiators = [
  {
    title: "AI That Actually Helps",
    description: "Most 'AI-powered' tools just add a chatbot. Binelek's AI understands your entire business — your sales, your operations, your security, your competition — and gives you answers that matter.",
    icon: "🤖",
  },
  {
    title: "No Technical Setup",
    description: "Connect your tools in minutes, not days. No data engineers. No SQL queries. No consultants. Just connect and go.",
    icon: "⚡",
  },
  {
    title: "Built for Growing Businesses",
    description: "Enterprise platforms are overkill. Basic tools don't scale. Binelek gives you powerful capabilities sized right for your business — and your budget.",
    icon: "📈",
  },
  {
    title: "Security Included, Not Extra",
    description: "Most platforms treat security as an afterthought — or an expensive add-on. Binelek monitors your security posture automatically, because protecting your business shouldn't be optional.",
    icon: "🛡️",
  },
];

const modules = [
  { name: "Ops Copilot", description: "Automate your operations", href: "/product/ops-copilot" },
  { name: "Mini Foundry", description: "Understand your data", href: "/product/mini-foundry" },
  { name: "Cybersecurity Scanner", description: "Protect your business", href: "/product/security" },
  { name: "Marketplace Intelligence", description: "Outsmart your competition", href: "/product/marketplace" },
];

export default function WhyBinelekPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              One platform. Not ten tabs.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Most businesses juggle separate tools for tasks, dashboards, security, and market research. Binelek brings it all together.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            The problem with piecemeal tools
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center font-semibold text-gray-500 py-3">The Old Way</div>
              <div className="text-center font-semibold text-primary-600 py-3">The Binelek Way</div>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 border-t border-gray-100">
                <div className="py-4 px-4 text-gray-600 bg-gray-50">{row.oldWay}</div>
                <div className="py-4 px-4 text-gray-900 font-medium bg-primary-50">{row.binelekWay}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            What makes Binelek different
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-serif">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Modules Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Four modules, one platform
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {modules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="text-center p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-2">{module.name}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing text-center">
          <h2 className="text-2xl font-bold text-gray-400 mb-4">
            &ldquo;We replaced [X] with Binelek&rdquo;
          </h2>
          <p className="text-gray-500 font-serif">
            Customer testimonials coming soon
          </p>
          <p className="text-lg text-gray-600 mt-8 font-serif italic">
            Join hundreds of businesses simplifying their operations with Binelek.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="See it in action"
        subheadline="Book a personalized demo to see how Binelek can work for your business."
        variant="gradient"
      />
    </>
  );
}
