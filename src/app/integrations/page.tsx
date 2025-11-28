import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect Binelek to the tools you already use. Shopify, QuickBooks, Stripe, HubSpot, and more.",
};

const integrationIcons: Record<string, React.ReactNode> = {
  Shopify: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M15.337 3.415c-.043-.174-.203-.261-.349-.261-.145 0-2.905.007-2.905.007s-1.939-1.882-2.127-2.07c-.187-.188-.554-.131-.697-.087 0 0-.453.139-1.209.371-.072-.214-.178-.467-.313-.726-.463-.854-1.142-1.306-1.962-1.306-.058 0-.117.003-.175.01-.026-.028-.051-.056-.078-.084C5.043-.238 4.462-.06 3.959.418c-.661.629-1.317 1.905-1.662 3.322-.893.276-1.524.471-1.537.476-.48.15-.495.165-.558.619C.134 5.307 0 15.472 0 15.472l11.247 2.118L20 15.87s-4.61-12.204-4.663-12.455z" />
    </svg>
  ),
  Square: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M4.01 0A4.01 4.01 0 000 4.01v15.98A4.01 4.01 0 004.01 24h15.98A4.01 4.01 0 0024 19.99V4.01A4.01 4.01 0 0019.99 0H4.01zm1.508 4.756h12.964c.799 0 1.518.719 1.518 1.518v11.452c0 .799-.72 1.518-1.518 1.518H5.518c-.799 0-1.518-.72-1.518-1.518V6.274c0-.799.72-1.518 1.518-1.518zm3.089 2.627c-.452 0-.824.371-.824.824v7.586c0 .452.372.824.824.824h6.786c.452 0 .824-.372.824-.824V8.207a.827.827 0 00-.824-.824H8.607z"/>
    </svg>
  ),
  WooCommerce: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M2.227 4.857A2.228 2.228 0 000 7.094v7.457c0 1.236 1.001 2.237 2.237 2.237h3.09l-.396 3.058 3.835-3.058h12.997A2.228 2.228 0 0024 14.551V7.094a2.228 2.228 0 00-2.237-2.237H2.227zm3.186 2.453c.379.007.704.202.975.591.63.92.953 2.477.953 4.666 0 1.47-.227 2.557-.683 3.262-.35.543-.78.815-1.288.815-.393 0-.752-.195-1.078-.584-.455-.53-.683-1.594-.683-3.185 0-1.568.24-2.792.721-3.672.35-.643.77-.893 1.083-.893zm5.93.008c.48 0 .865.313 1.153.941.32.697.481 1.618.481 2.768 0 1.382-.201 2.463-.606 3.244-.32.613-.72.92-1.2.92-.392 0-.753-.195-1.077-.584-.456-.53-.684-1.594-.684-3.185 0-1.568.241-2.792.722-3.672.35-.288.77-.432 1.211-.432zm5.684.18c.108 0 .217.024.326.071.303.143.53.428.682.856.12.32.181.69.181 1.107 0 .65-.132 1.38-.398 2.183l-.565 1.706 1.244-4.143c.098-.33.227-.573.386-.73a.654.654 0 01.482-.196c.266 0 .489.118.67.354.157.199.236.436.236.713 0 .153-.026.325-.079.515l-1.095 3.593c-.226.747-.485 1.277-.775 1.592-.29.314-.675.471-1.154.471-.446 0-.825-.153-1.138-.46-.314-.305-.535-.756-.663-1.353l-.398-1.863-.613 1.793c-.277.798-.533 1.363-.77 1.696-.32.461-.72.692-1.2.692-.398 0-.744-.16-1.037-.48-.294-.32-.536-.8-.727-1.44l-1.3-4.446a2.06 2.06 0 01-.087-.543c0-.266.082-.493.247-.681.183-.21.41-.314.681-.314.214 0 .4.069.558.205.158.137.283.354.377.653l.957 3.474.645-2.034c.24-.764.441-1.304.606-1.617.288-.551.666-.826 1.133-.826.283 0 .528.09.734.268.206.18.387.477.543.892l.66 1.98.614-2.034c.158-.524.337-.878.535-1.06a.894.894 0 01.6-.235z"/>
    </svg>
  ),
  QuickBooks: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.636 0 8.4 3.764 8.4 8.4s-3.764 8.4-8.4 8.4-8.4-3.764-8.4-8.4S7.364 3.6 12 3.6zm-2.4 4.8v7.2H7.2V8.4h2.4zm4.8 0c1.325 0 2.4 1.075 2.4 2.4v2.4c0 1.325-1.075 2.4-2.4 2.4h-2.4v-2.4h2.4v-2.4h-2.4V8.4h2.4z"/>
    </svg>
  ),
  Xero: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.243 16.243l-2.829-2.829-2.828 2.829-1.414-1.414 2.828-2.829-2.828-2.829 1.414-1.414 2.828 2.829 2.829-2.829 1.414 1.414-2.829 2.829 2.829 2.829-1.414 1.414z"/>
    </svg>
  ),
  Stripe: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
    </svg>
  ),
  HubSpot: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.2 2.2 0 0017.238.84h-.066a2.2 2.2 0 00-2.193 2.193v.066c0 .87.51 1.617 1.244 1.974v2.862a6.27 6.27 0 00-2.792 1.138l-7.463-5.86a2.479 2.479 0 00.058-.51 2.514 2.514 0 10-2.514 2.514c.474 0 .916-.135 1.294-.362l7.316 5.746a6.27 6.27 0 00-.634 2.757 6.321 6.321 0 006.321 6.32 6.32 6.32 0 001.184-12.528zm-1.184 9.49a3.282 3.282 0 110-6.564 3.282 3.282 0 010 6.564z"/>
    </svg>
  ),
  "Zoho CRM": (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.25L19.5 6.75 12 11.25 4.5 6.75 12 2.25zM3 8.25l8.25 4.5v8.25L3 16.5V8.25zm18 0v8.25l-8.25 4.5v-8.25L21 8.25z"/>
    </svg>
  ),
  Salesforce: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.45 0-.87-.06-1.29-.165a3.9 3.9 0 01-3.42 2.025c-.45 0-.899-.075-1.305-.24a4.635 4.635 0 01-4.14 2.565 4.62 4.62 0 01-4.2-2.715 4.2 4.2 0 01-.69.06C1.695 17.834 0 16.124 0 14.009c0-1.38.75-2.595 1.86-3.255a4.54 4.54 0 01-.165-1.2c0-2.49 2.01-4.515 4.5-4.515 1.5 0 2.82.72 3.645 1.83l.166.546z"/>
    </svg>
  ),
  Gmail: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  ),
  Outlook: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.158.154-.352.23-.58.23h-8.547v-6.959l1.6 1.229c.102.078.214.117.337.117.123 0 .235-.04.337-.117l6.873-5.34a.587.587 0 01.218.14.554.554 0 010 .395v-.001zm-.238-1.447a.737.737 0 01.184.088l-7.028 5.46-1.536-1.177V5.022h7.562c.228 0 .422.076.58.23.072.072.13.15.172.232l.066.456zm-9.198 9.381v-9.68l-6.727 3.996v7.748l6.727-2.064zm-6.328-9.2l-7.291 4.33 7.291 4.18v-8.51zM.455 8.494l-.233.052A.96.96 0 000 9.17v5.3c0 .258.085.479.256.66.17.18.379.278.626.292l.162.01 7.191-2.2-7.78-4.738z"/>
    </svg>
  ),
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
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                          {integrationIcons[integration.name] || integration.name[0]}
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
