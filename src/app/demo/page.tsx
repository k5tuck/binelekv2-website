import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schedule a Demo",
  description: "Book a personalized demo and discover how Binelek can transform your business operations.",
};

const benefits = [
  "30-minute personalized walkthrough",
  "Live demo of all four modules",
  "Q&A with a product specialist",
  "Custom recommendations for your business",
];

const faqs = [
  { q: "How long is the demo?", a: "30 minutes" },
  { q: "Who will I meet with?", a: "A product specialist" },
  { q: "Can I invite my team?", a: "Yes, up to 5 people" },
  { q: "What if I need to reschedule?", a: "Easy reschedule link in confirmation" },
];

const integrationLogos = ["Shopify", "QuickBooks", "Stripe", "HubSpot"];

export default function DemoPage() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-marketing">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                See Binelek in action
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-serif">
                Book a personalized demo and discover how Binelek can transform your business operations.
              </p>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">What you&apos;ll see:</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-700">
                      <span className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary-600 text-sm">✓</span>
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick answers:</h2>
                <div className="grid grid-cols-2 gap-4">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-500">{faq.q}</p>
                      <p className="font-medium text-gray-900">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-sm text-gray-500 mb-4">Integrates with:</p>
                <div className="flex flex-wrap gap-3">
                  {integrationLogos.map((logo) => (
                    <span key={logo} className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">
                      {logo}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  <span className="text-green-600">✓</span> No credit card required
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book your demo</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="retail">Retail</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="saas">SaaS</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What interests you most?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Ops Copilot", "Mini Foundry", "Cybersecurity", "Marketplace Intel"].map((module) => (
                      <label key={module} className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">{module}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date/Time *
                  </label>
                  <input
                    type="datetime-local"
                    id="datetime"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Times shown in your local timezone</p>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Anything specific you&apos;d like to cover?
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your goals or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Book My Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Prefer to explore on your own?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/resources/videos"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Watch Demo Videos
            </Link>
            <Link
              href="/resources/getting-started"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              View Getting Started Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
