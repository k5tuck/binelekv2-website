import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Get up and running with Binelek in minutes. Step-by-step guide to setting up your account and connecting your first data source.",
};

const steps = [
  {
    number: "1",
    title: "Create your account",
    description: "Sign up with your email and set up your workspace. Takes less than a minute.",
  },
  {
    number: "2",
    title: "Connect your first data source",
    description: "Link Shopify, QuickBooks, or any of our supported integrations via OAuth.",
  },
  {
    number: "3",
    title: "Explore your dashboard",
    description: "See your data flow in and explore the pre-built dashboards and insights.",
  },
  {
    number: "4",
    title: "Ask your first question",
    description: "Try asking something like 'What was my revenue this month?' and see the magic happen.",
  },
  {
    number: "5",
    title: "Create your first automation",
    description: "Set up a simple automation like weekly sales reports or invoice reminders.",
  },
];

const quickWins = [
  "Connect Shopify or QuickBooks",
  "View your revenue dashboard",
  "Ask 'What was my revenue this month?'",
  "Set up an invoice reminder",
];

export default function GettingStartedPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Up and running in minutes
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Everything you need to get started with Binelek.
            </p>
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-16 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">▶</span>
                </div>
                <p className="text-white/80">Your first 5 minutes with Binelek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Onboarding steps
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 font-serif">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick wins checklist
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              {quickWins.map((win) => (
                <label key={win} className="flex items-center py-3 border-b border-gray-200 last:border-0">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">{win}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to get started?"
        subheadline="Schedule a demo and we'll walk you through everything."
        variant="gradient"
      />
    </>
  );
}
