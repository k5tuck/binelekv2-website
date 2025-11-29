"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function OpsCopilotPage() {
  const t = useTranslations("product.opsCopilot");
  const tCommon = useTranslations("common");

  const capabilities = [
    {
      title: t("taskAutomation"),
      description: t("taskAutomationDesc"),
      icon: "📋",
    },
    {
      title: t("emailAutomation"),
      description: t("emailAutomationDesc"),
      icon: "✉️",
    },
    {
      title: t("workflowBuilder"),
      description: t("workflowBuilderDesc"),
      icon: "🔄",
    },
  ];

  const useCases = [
    t("useCase1"),
    t("useCase2"),
    t("useCase3"),
    t("useCase4"),
    t("useCase5"),
    t("useCase6"),
  ];

  const integrations = ["Gmail", "Outlook", "HubSpot", "Zoho", "Slack", "QuickBooks"];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">⚡</div>
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
              {t("whatYouCanAutomate")}
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
              {t("buildWorkflows")}
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="/screenshots/ops-copilot.png"
                alt={t("screenshotAlt")}
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
            {t("worksWithTools")}
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
              {t("differentiationTitle")}
            </h2>
            <p className="text-lg text-gray-600 font-serif mb-8">
              {t("differentiationDesc")}
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-500 text-sm mb-2">{t("example")}</p>
              <p className="text-gray-900 text-lg italic">
                &ldquo;{t("exampleText")}&rdquo;
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
