"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function MarketplacePage() {
  const t = useTranslations("product.marketplace");
  const tCommon = useTranslations("common");

  const capabilities = [
    {
      title: t("priceTracking"),
      description: t("priceTrackingDesc"),
      icon: "💰",
    },
    {
      title: t("competitorDiscovery"),
      description: t("competitorDiscoveryDesc"),
      icon: "🔍",
    },
    {
      title: t("marketTrends"),
      description: t("marketTrendsDesc"),
      icon: "📈",
    },
    {
      title: t("priceAlerts"),
      description: t("priceAlertsDesc"),
      icon: "🔔",
    },
  ];

  const marketplaces = ["Amazon", "Shopify", "Etsy", "eBay", "Walmart", "Target"];

  const useCases = [
    t("useCase1"),
    t("useCase2"),
    t("useCase3"),
    t("useCase4"),
    t("useCase5"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">🔍</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              {t("heroSubtitle")}
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {tCommon("getEarlyAccess")}
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
            {t("trackPrices")}
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
              {t("seeFullPicture")}
            </h2>
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
              {/* Mobile card layout */}
              <div className="md:hidden space-y-4">
                {/* Widget Pro */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">Widget Pro</h3>
                    <span className="text-green-600 font-medium text-sm bg-green-50 px-2 py-1 rounded">+$2.00</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">{t("yourPrice")}</p>
                      <p className="font-semibold text-gray-900">$49.99</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">{t("competitorA").split(" ")[0]}. A</p>
                      <p className="text-gray-700">$52.99</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">{t("competitorB").split(" ")[0]}. B</p>
                      <p className="text-gray-700">$47.99</p>
                    </div>
                  </div>
                </div>
                {/* Widget Basic */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">Widget Basic</h3>
                    <span className="text-yellow-600 font-medium text-sm bg-yellow-50 px-2 py-1 rounded">$0.00</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">{t("yourPrice")}</p>
                      <p className="font-semibold text-gray-900">$29.99</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">{t("competitorA").split(" ")[0]}. A</p>
                      <p className="text-gray-700">$29.99</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">{t("competitorB").split(" ")[0]}. B</p>
                      <p className="text-gray-700">$31.99</p>
                    </div>
                  </div>
                </div>
                {/* Widget Enterprise */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">Widget Enterprise</h3>
                    <span className="text-red-600 font-medium text-sm bg-red-50 px-2 py-1 rounded">-$10.00</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">{t("yourPrice")}</p>
                      <p className="font-semibold text-gray-900">$199.99</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">{t("competitorA").split(" ")[0]}. A</p>
                      <p className="text-gray-700">$189.99</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">{t("competitorB").split(" ")[0]}. B</p>
                      <p className="text-gray-700">$195.99</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop table layout */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-200">
                      <th className="pb-3 text-gray-600 font-medium">{t("product")}</th>
                      <th className="pb-3 text-gray-600 font-medium">{t("yourPrice")}</th>
                      <th className="pb-3 text-gray-600 font-medium">{t("competitorA")}</th>
                      <th className="pb-3 text-gray-600 font-medium">{t("competitorB")}</th>
                      <th className="pb-3 text-gray-600 font-medium">{t("gap")}</th>
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
              <p className="text-center text-gray-500 text-sm mt-4">{t("priceComparisonPreview")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("whatYouCanDo")}
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
              {t("differentiationTitle")}
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              {t("differentiationDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
