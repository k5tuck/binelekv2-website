import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Marketplace Intelligence - Competitive Intelligence",
  description: "Know what competitors charge before your customers do. Real-time price tracking across every marketplace.",
};

const capabilities = [
  {
    title: "Price Tracking",
    description: "Monitor competitor prices every 4 hours. Never miss a price change.",
    icon: "💰",
  },
  {
    title: "Competitor Discovery",
    description: "Find competitors by location or product similarity. Know your market.",
    icon: "🔍",
  },
  {
    title: "Market Trends",
    description: "See pricing patterns and opportunities. Stay ahead of the curve.",
    icon: "📈",
  },
  {
    title: "Price Alerts",
    description: "Get notified when competitors change prices. React in real-time.",
    icon: "🔔",
  },
];

const marketplaces = ["Amazon", "Shopify", "Etsy", "eBay", "Walmart", "Target"];

const useCases = [
  "Track competitor pricing on key products",
  "Identify pricing opportunities",
  "React quickly to market changes",
  "Optimize your pricing strategy",
  "Monitor new competitor entries",
];

export default function MarketplacePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">🔍</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Know what competitors charge before your customers do
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Real-time price tracking across every marketplace.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-6">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-600 font-serif text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplaces */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Track prices across major marketplaces
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {marketplaces.map((name) => (
              <div key={name} className="px-6 py-3 bg-white rounded-lg shadow-sm text-gray-700 font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              See the full picture
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-200">
                      <th className="pb-3 text-gray-600 font-medium">Product</th>
                      <th className="pb-3 text-gray-600 font-medium">Your Price</th>
                      <th className="pb-3 text-gray-600 font-medium">Competitor A</th>
                      <th className="pb-3 text-gray-600 font-medium">Competitor B</th>
                      <th className="pb-3 text-gray-600 font-medium">Gap</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-900">
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Widget Pro</td>
                      <td className="py-3 font-semibold">$49.99</td>
                      <td className="py-3">$52.99</td>
                      <td className="py-3">$47.99</td>
                      <td className="py-3 text-green-600">+$2.00</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">Widget Basic</td>
                      <td className="py-3 font-semibold">$29.99</td>
                      <td className="py-3">$29.99</td>
                      <td className="py-3">$31.99</td>
                      <td className="py-3 text-yellow-600">$0.00</td>
                    </tr>
                    <tr>
                      <td className="py-3">Widget Enterprise</td>
                      <td className="py-3 font-semibold">$199.99</td>
                      <td className="py-3">$189.99</td>
                      <td className="py-3">$195.99</td>
                      <td className="py-3 text-red-600">-$10.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">Price comparison preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What you can do
            </h2>
            <div className="space-y-3">
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

      {/* Differentiation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Competitive intelligence as part of your command center
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              Not a standalone tool — integrated with your other business data. See how pricing affects your revenue, all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
