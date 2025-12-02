"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";
import { BarChart3, Zap, GitMerge } from "lucide-react";

export default function SolutionsPage() {
  const t = useTranslations("solutions");
  const tCommon = useTranslations("common");
  const tHome = useTranslations("home");

  const industries = [
    {
      name: t("forEcommerce"),
      description: t("forEcommerceDesc"),
      icon: "🛒",
      hubUseCases: [
        { hub: tHome("hubInsights"), useCase: t("ecommerceInsightsUseCase") },
        { hub: tHome("hubAction"), useCase: t("ecommerceActionUseCase") },
        { hub: tHome("hubDataLineage"), useCase: t("ecommerceLineageUseCase") },
      ],
    },
    {
      name: t("forRetail"),
      description: t("forRetailDesc"),
      icon: "🏪",
      hubUseCases: [
        { hub: tHome("hubInsights"), useCase: t("retailInsightsUseCase") },
        { hub: tHome("hubAction"), useCase: t("retailActionUseCase") },
        { hub: tHome("hubDataLineage"), useCase: t("retailLineageUseCase") },
      ],
    },
    {
      name: t("forProfessionalServices"),
      description: t("forProfessionalServicesDesc"),
      icon: "💼",
      hubUseCases: [
        { hub: tHome("hubInsights"), useCase: t("servicesInsightsUseCase") },
        { hub: tHome("hubAction"), useCase: t("servicesActionUseCase") },
        { hub: tHome("hubDataLineage"), useCase: t("servicesLineageUseCase") },
      ],
    },
    {
      name: t("forSaas"),
      description: t("forSaasDesc"),
      icon: "☁️",
      hubUseCases: [
        { hub: tHome("hubInsights"), useCase: t("saasInsightsUseCase") },
        { hub: tHome("hubAction"), useCase: t("saasActionUseCase") },
        { hub: tHome("hubDataLineage"), useCase: t("saasLineageUseCase") },
      ],
    },
  ];

  const hubIcons: { [key: string]: typeof BarChart3 } = {
    [tHome("hubInsights")]: BarChart3,
    [tHome("hubAction")]: Zap,
    [tHome("hubDataLineage")]: GitMerge,
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
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

      {/* Industries with Hub Use Cases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("howHubsHelpTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("howHubsHelpSubtitle")}
            </p>
          </div>
          <div className="space-y-12">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                    <p className="text-gray-600 font-serif">{industry.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {industry.hubUseCases.map((hubUseCase) => {
                    const Icon = hubIcons[hubUseCase.hub] || BarChart3;
                    return (
                      <div key={hubUseCase.hub} className="bg-white p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-5 h-5 text-primary-600" strokeWidth={1.5} />
                          <span className="font-semibold text-primary-600 text-sm">{hubUseCase.hub}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{hubUseCase.useCase}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("getNotified")}
            </h2>
            <form className="flex flex-col sm:flex-row gap-3 mt-6">
              <select className="flex-shrink-0 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>{t("selectIndustry")}</option>
                <option>{t("ecommerce")}</option>
                <option>{t("retail")}</option>
                <option>{t("professionalServices")}</option>
                <option>{t("saas")}</option>
                <option>{t("other")}</option>
              </select>
              <input
                type="email"
                placeholder={t("enterEmail")}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                {t("notifyMe")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline={t("cantWait")}
        subheadline={t("cantWaitSubheadline")}
        variant="gradient"
      />
    </>
  );
}
