"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function WhyBinelekPage() {
  const t = useTranslations("whyBinelek");
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");

  const comparison = [
    { oldWay: t("oldWay1"), binelekWay: t("binelekWay1") },
    { oldWay: t("oldWay2"), binelekWay: t("binelekWay2") },
    { oldWay: t("oldWay3"), binelekWay: t("binelekWay3") },
    { oldWay: t("oldWay4"), binelekWay: t("binelekWay4") },
    { oldWay: t("oldWay5"), binelekWay: t("binelekWay5") },
  ];

  const differentiators = [
    {
      title: t("aiTitle"),
      description: t("aiDesc"),
      icon: "🤖",
    },
    {
      title: t("noTechnicalTitle"),
      description: t("noTechnicalDesc"),
      icon: "⚡",
    },
    {
      title: t("builtForGrowingTitle"),
      description: t("builtForGrowingDesc"),
      icon: "📈",
    },
    {
      title: t("securityIncludedTitle"),
      description: t("securityIncludedDesc"),
      icon: "🛡️",
    },
  ];

  const modules = [
    { name: tHome("moduleOpsCopilot"), description: tHome("moduleOpsCopilotTagline"), href: "/product/ops-copilot" },
    { name: tHome("moduleMiniFoundry"), description: tHome("moduleMiniFoundryTagline"), href: "/product/mini-foundry" },
    { name: tHome("moduleSecurity"), description: tHome("moduleSecurityTagline"), href: "/product/security" },
    { name: tHome("moduleMarketplace"), description: tHome("moduleMarketplaceTagline"), href: "/product/marketplace" },
  ];

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

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("problemTitle")}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center font-semibold text-gray-500 py-3">{t("theOldWay")}</div>
              <div className="text-center font-semibold text-primary-600 py-3">{t("theBinelekWay")}</div>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 border-t border-gray-100">
                <div className="py-4 px-4 text-gray-600 bg-gray-50">{row.oldWay}</div>
                <div className="py-4 px-4 text-gray-900 font-medium bg-primary-50">{row.binelekWay}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("whatMakesDifferent")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-serif">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Modules Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("fourModulesTitle")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {modules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="text-center p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-2">{module.name}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing text-center">
          <h2 className="text-2xl font-bold text-gray-400 mb-4">
            &ldquo;{t("testimonialPlaceholder")}&rdquo;
          </h2>
          <p className="text-gray-500 font-serif">
            {t("testimonialsComingSoon")}
          </p>
          <p className="text-lg text-gray-600 mt-8 font-serif italic">
            {t("joinHundreds")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline={t("seeItInAction")}
        subheadline={t("seeItInActionSubheadline")}
        variant="gradient"
      />
    </>
  );
}
