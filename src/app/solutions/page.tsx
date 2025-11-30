"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function SolutionsPage() {
  const t = useTranslations("solutions");
  const tCommon = useTranslations("common");

  const industries = [
    {
      name: t("forEcommerce"),
      description: t("forEcommerceDesc"),
      icon: "🛒",
    },
    {
      name: t("forRetail"),
      description: t("forRetailDesc"),
      icon: "🏪",
    },
    {
      name: t("forProfessionalServices"),
      description: t("forProfessionalServicesDesc"),
      icon: "💼",
    },
    {
      name: t("forSaas"),
      description: t("forSaasDesc"),
      icon: "☁️",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              {tCommon("comingSoon")}
            </span>
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

      {/* Industries Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="p-8 bg-gray-50 rounded-2xl opacity-75"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-500 mb-2">{industry.name}</h3>
                <p className="text-gray-400 font-serif">{industry.description}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-gray-200 text-gray-500 rounded text-sm">
                  {tCommon("comingSoon")}
                </span>
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
