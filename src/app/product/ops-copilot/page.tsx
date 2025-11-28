import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ops Copilot - Task & Workflow Automation",
  description: "Automate your operations with AI-powered task management. Create automations with plain English, not complicated flowcharts.",
};

const capabilities = [
  {
    title: "Task Automation",
    description: "Schedule recurring tasks and trigger actions on events. Set it and forget it.",
    icon: "📋",
  },
  {
    title: "Email Automation",
    description: "AI-drafted emails based on templates and business rules. Never write the same email twice.",
    icon: "✉️",
  },
  {
    title: "Workflow Builder",
    description: "Visual drag-and-drop for multi-step processes. Connect actions without code.",
    icon: "🔄",
  },
];

const useCases = [
  "Send invoice reminders every Monday",
  "Follow up with leads 3 days after contact",
  "Generate and send weekly sales reports",
  "Onboard new customers automatically",
  "Create tasks when support tickets are opened",
  "Send birthday emails to customers",
];

const integrations = ["Gmail", "Outlook", "HubSpot", "Zoho", "Slack", "QuickBooks"];

export default function OpsCopilotPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">⚡</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Automate the work that slows you down
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Create automations with plain English. No flowcharts required.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-8">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-gray-600 font-serif">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What you can automate
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((useCase) => (
                <div key={useCase} className="flex items-center bg-white p-4 rounded-lg">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Build workflows visually
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="/screenshots/ops-copilot.png"
                alt="Ops Copilot - Task & Workflow Automation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Works with your existing tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((name) => (
              <div key={name} className="px-6 py-3 bg-white rounded-lg shadow-sm text-gray-700 font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Automate with words, not complicated flowcharts
            </h2>
            <p className="text-lg text-gray-600 font-serif mb-8">
              Traditional automation tools require technical setup and complex flowcharts. With Binelek, just describe what you want to happen in plain English, and we&apos;ll make it work.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-500 text-sm mb-2">Example:</p>
              <p className="text-gray-900 text-lg italic">
                &ldquo;Every Monday at 9am, send me a summary of last week&apos;s sales and any overdue invoices.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
