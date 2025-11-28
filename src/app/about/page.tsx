import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Binelek's mission to empower small and medium businesses with enterprise-grade AI tools.",
};

const values = [
  {
    title: "Simplicity over complexity",
    description: "We believe powerful tools should be easy to use. If it's complicated, we haven't finished designing it.",
    icon: "✨",
  },
  {
    title: "Transparency in everything",
    description: "Clear pricing, honest communication, and no hidden agendas. What you see is what you get.",
    icon: "👁️",
  },
  {
    title: "Customer success first",
    description: "Your success is our success. We measure ourselves by the value we create for your business.",
    icon: "🎯",
  },
  {
    title: "Security by default",
    description: "Security isn't an add-on — it's built into everything we do from day one.",
    icon: "🛡️",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Built for businesses like yours
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-serif">
              We believe every growing business deserves the tools that used to be reserved for enterprises — without the complexity or the price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 font-serif">
              Empower small and medium businesses with enterprise-grade AI tools that make business operations effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600 font-serif">
              <p>
                We started Binelek because we saw a gap in the market. Enterprise companies have access to incredible tools — AI-powered analytics, automated workflows, sophisticated security monitoring, and competitive intelligence. But small and medium businesses? They&apos;re stuck with spreadsheets, disconnected apps, and manual processes.
              </p>
              <p>
                We knew there had to be a better way. So we built Binelek — a unified platform that brings enterprise capabilities to growing businesses, without the enterprise complexity or price tag.
              </p>
              <p>
                Today, Binelek aims to help hundreds of businesses run smarter, faster, and more securely. And we&apos;re just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-gray-50 rounded-2xl">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 font-serif">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 font-serif">
              Have questions? We&apos;d love to hear from you.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Email:</strong> hello@binelek.io
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/binelek" className="text-primary-600 hover:text-primary-700">Twitter</a>
                <a href="https://linkedin.com/company/binelek" className="text-primary-600 hover:text-primary-700">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 bg-white">
        <div className="container-marketing text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6 font-serif">
            We&apos;re building the future of business software. Want to help?
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
