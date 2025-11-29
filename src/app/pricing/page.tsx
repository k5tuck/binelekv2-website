"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";
import { localeCurrencies, currencyMultipliers, type Locale } from "@/i18n/config";

// Base prices in USD
const basePrices = {
  pro: { monthly: 49, yearly: 39, yearlySavings: 120 },
  business: { monthly: 149, yearly: 119, yearlySavings: 360 },
};

function formatPrice(amount: number, currency: { code: string; symbol: string }): string {
  // Apply currency multiplier
  const multiplier = currencyMultipliers[currency.code] || 1;
  const convertedAmount = Math.round(amount * multiplier);

  // Format based on currency
  if (currency.code === "EUR") {
    return `€${convertedAmount}`;
  }
  return `${currency.symbol}${convertedAmount}`;
}

function formatSavings(amount: number, currency: { code: string; symbol: string }): string {
  const multiplier = currencyMultipliers[currency.code] || 1;
  const convertedAmount = Math.round(amount * multiplier);

  if (currency.code === "EUR") {
    return `€${convertedAmount}/year`;
  }
  return `${currency.symbol}${convertedAmount}/year`;
}

export default function PricingPage() {
  const t = useTranslations("pricing");
  const tCommon = useTranslations("common");
  const [isYearly, setIsYearly] = useState(true);
  const [currency, setCurrency] = useState(localeCurrencies.en);

  useEffect(() => {
    // Get locale from cookie
    const cookies = document.cookie.split(";");
    const localeCookie = cookies.find((c) => c.trim().startsWith("NEXT_LOCALE="));
    if (localeCookie) {
      const locale = localeCookie.split("=")[1] as Locale;
      if (localeCurrencies[locale]) {
        setCurrency(localeCurrencies[locale]);
      }
    }
  }, []);

  const plans = [
    {
      name: t("starter"),
      monthlyPrice: t("free"),
      yearlyPrice: t("free"),
      description: t("starterDesc"),
      showPerMonth: false,
      features: [
        t("features.connectors", { count: 2 }),
        t("features.aiQueries", { count: 50 }),
        t("features.teamMembers", { count: 1 }),
        t("features.dataRefresh24h"),
        t("features.emailSupport"),
      ],
      cta: tCommon("getEarlyAccess"),
      href: "/demo",
      highlighted: false,
    },
    {
      name: t("pro"),
      monthlyPrice: formatPrice(basePrices.pro.monthly, currency),
      yearlyPrice: formatPrice(basePrices.pro.yearly, currency),
      yearlySavings: formatSavings(basePrices.pro.yearlySavings, currency),
      description: t("proDesc"),
      showPerMonth: true,
      features: [
        t("features.connectors", { count: 10 }),
        t("features.unlimitedAiQueries"),
        t("features.teamMembers", { count: 5 }),
        t("features.dataRefresh1h"),
        t("features.prioritySupport"),
        t("features.customDashboards"),
      ],
      cta: tCommon("getEarlyAccess"),
      href: "/demo",
      highlighted: true,
    },
    {
      name: t("business"),
      monthlyPrice: formatPrice(basePrices.business.monthly, currency),
      yearlyPrice: formatPrice(basePrices.business.yearly, currency),
      yearlySavings: formatSavings(basePrices.business.yearlySavings, currency),
      description: t("businessDesc"),
      showPerMonth: true,
      features: [
        t("features.unlimitedConnectors"),
        t("features.unlimitedAiQueries"),
        t("features.teamMembers", { count: 25 }),
        t("features.dataRefreshRealtime"),
        t("features.dedicatedSupport"),
        t("features.advancedSecurity"),
        t("features.customIntegrations"),
      ],
      cta: tCommon("getEarlyAccess"),
      href: "/demo",
      highlighted: false,
    },
    {
      name: t("enterprise"),
      monthlyPrice: t("custom"),
      yearlyPrice: t("custom"),
      description: t("enterpriseDesc"),
      showPerMonth: false,
      features: [
        t("everythingInBusiness"),
        t("features.unlimitedTeamMembers"),
        t("features.dedicatedAccountManager"),
        t("features.customSla"),
        t("features.onPremise"),
        t("features.advancedCompliance"),
      ],
      cta: tCommon("contactSales"),
      href: "/contact",
      highlighted: false,
    },
  ];

  const faqs = [
    { question: t("faq.billingQuestion"), answer: t("faq.billingAnswer") },
    { question: t("faq.changePlansQuestion"), answer: t("faq.changePlansAnswer") },
    { question: t("faq.limitsQuestion"), answer: t("faq.limitsAnswer") },
    { question: t("faq.trialQuestion"), answer: t("faq.trialAnswer") },
    { question: t("faq.cancelQuestion"), answer: t("faq.cancelAnswer") },
    { question: t("faq.currencyQuestion"), answer: t("faq.currencyAnswer") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t("title")}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              {t("subtitle")}
            </p>

            {/* Currency indicator */}
            <p className="text-sm text-gray-500 mb-4">
              {t("pricesShownIn", { currency: currency.name, code: currency.code })}
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  !isYearly ? "bg-primary-600 text-white" : "text-gray-600"
                }`}
              >
                {t("monthly")}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isYearly ? "bg-primary-600 text-white" : "text-gray-600"
                }`}
              >
                {t("yearly")}
                <span className="ml-1 text-xs opacity-75">{t("save", { percent: 20 })}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-primary-600 text-white ring-4 ring-primary-300"
                    : "bg-gray-50 text-gray-900"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-primary-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {plan.showPerMonth && (
                    <span className={`text-sm ${plan.highlighted ? "text-primary-100" : "text-gray-500"}`}>
                      {t("perMonth")}
                    </span>
                  )}
                  {isYearly && plan.yearlySavings && (
                    <p className={`text-sm mt-1 ${plan.highlighted ? "text-primary-200" : "text-green-600"}`}>
                      {t("saveAmount", { amount: plan.yearlySavings })}
                    </p>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <span className={`mr-2 ${plan.highlighted ? "text-primary-200" : "text-primary-500"}`}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-white text-primary-600 hover:bg-gray-100"
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t("faqTitle")}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 font-serif">{faq.answer}</p>
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
