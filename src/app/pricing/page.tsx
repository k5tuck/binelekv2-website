"use client";

import { useState } from "react";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    description: "For trying out Binelek",
    features: [
      "2 connectors",
      "50 AI queries/month",
      "1 team member",
      "24-hour data refresh",
      "Email support",
    ],
    cta: "Get Early Access",
    href: "/demo",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: "$49",
    yearlyPrice: "$39",
    yearlySavings: "$120/year",
    description: "For growing businesses",
    features: [
      "10 connectors",
      "Unlimited AI queries",
      "5 team members",
      "1-hour data refresh",
      "Priority support",
      "Custom dashboards",
    ],
    cta: "Get Early Access",
    href: "/demo",
    highlighted: true,
  },
  {
    name: "Business",
    monthlyPrice: "$149",
    yearlyPrice: "$119",
    yearlySavings: "$360/year",
    description: "For scaling teams",
    features: [
      "Unlimited connectors",
      "Unlimited AI queries",
      "25 team members",
      "Real-time data refresh",
      "Dedicated support",
      "Advanced security features",
      "Custom integrations",
    ],
    cta: "Get Early Access",
    href: "/demo",
    highlighted: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Business",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom SLA",
      "On-premise option",
      "Advanced compliance",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually depending on your choice. Annual plans save up to 20%.",
  },
  {
    question: "Can I change plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "What happens if I exceed limits?",
    answer: "We'll notify you when you're approaching limits. You can upgrade anytime to continue without interruption.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! Our Starter plan is free forever. You can also request a demo to see the full platform.",
  },
  {
    question: "How do I cancel?",
    answer: "You can cancel anytime from your account settings. No questions asked.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Start free. Scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  !isYearly ? "bg-primary-600 text-white" : "text-gray-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isYearly ? "bg-primary-600 text-white" : "text-gray-600"
                }`}
              >
                Yearly
                <span className="ml-1 text-xs opacity-75">Save 20%</span>
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
                  {plan.monthlyPrice !== "Free" && plan.monthlyPrice !== "Custom" && (
                    <span className={`text-sm ${plan.highlighted ? "text-primary-100" : "text-gray-500"}`}>
                      /month
                    </span>
                  )}
                  {isYearly && plan.yearlySavings && (
                    <p className={`text-sm mt-1 ${plan.highlighted ? "text-primary-200" : "text-green-600"}`}>
                      Save {plan.yearlySavings}
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
            Pricing FAQ
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
