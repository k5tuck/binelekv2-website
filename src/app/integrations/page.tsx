import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect Binelek to the tools you already use. Shopify, QuickBooks, Stripe, HubSpot, and more.",
};

const integrationCategories = [
  {
    name: "E-commerce",
    integrations: [
      { name: "Shopify", description: "Sync orders, customers, and inventory", status: "available" },
      { name: "Square", description: "Connect your POS and payments", status: "available" },
      { name: "WooCommerce", description: "WordPress e-commerce integration", status: "coming" },
    ],
  },
  {
    name: "Finance",
    integrations: [
      { name: "QuickBooks", description: "Sync invoices, expenses, and reports", status: "available" },
      { name: "Xero", description: "Cloud accounting integration", status: "available" },
      { name: "Stripe", description: "Payment processing data", status: "available" },
    ],
  },
  {
    name: "CRM",
    integrations: [
      { name: "HubSpot", description: "Contacts, deals, and marketing", status: "available" },
      { name: "Zoho CRM", description: "Sales and customer data", status: "available" },
      { name: "Salesforce", description: "Enterprise CRM integration", status: "coming" },
    ],
  },
  {
    name: "Email",
    integrations: [
      { name: "Gmail", description: "Email automation and tracking", status: "available" },
      { name: "Outlook", description: "Microsoft email integration", status: "available" },
    ],
  },
];

const steps = [
  { number: "1", title: "Click to connect", description: "Choose the tool you want to integrate" },
  { number: "2", title: "Authorize access", description: "Securely connect via OAuth" },
  { number: "3", title: "Data syncs automatically", description: "Your data flows into Binelek" },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Connect everything you already use
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Binelek works with the tools your business runs on.
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

      {/* Integration Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="space-y-12">
            {integrationCategories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.integrations.map((integration) => (
                    <div
                      key={integration.name}
                      className={`p-6 rounded-xl border ${
                        integration.status === "available"
                          ? "border-gray-200 bg-white"
                          : "border-gray-100 bg-gray-50 opacity-75"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg font-bold text-gray-400">
                          {integration.name[0]}
                        </div>
                        {integration.status === "coming" && (
                          <span className="px-2 py-1 bg-gray-200 text-gray-500 rounded text-xs">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900">{integration.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{integration.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More integrations on the way
          </h2>
          <p className="text-gray-600 mb-6">
            Need an integration we don&apos;t have yet?
          </p>
          <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors">
            Request an Integration
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How connections work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 font-serif">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
