"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";
import { EmailSignup } from "@/components/EmailSignup";
import { Zap, Database, Shield, Search, TrendingUp } from "lucide-react";

export default function ProductOverviewPage() {
  const t = useTranslations("product.overview");
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");

  const modules = [
    {
      name: tHome("moduleOpsCopilot"),
      tagline: tHome("moduleOpsCopilotTagline"),
      description: tHome("moduleOpsCopilotDesc"),
      features: [
        tHome("featureTaskScheduling"),
        tHome("featureEmailAutomation"),
        tHome("featureWorkflowBuilder"),
        tHome("featureNaturalLanguage"),
      ],
      href: "/product/ops-copilot",
      Icon: Zap,
    },
    {
      name: tHome("moduleMiniFoundry"),
      tagline: tHome("moduleMiniFoundryTagline"),
      description: tHome("moduleMiniFoundryDesc"),
      features: [
        tHome("featureCustomDashboards"),
        tHome("featureNaturalLanguageQueries"),
        tHome("featureAutomatedReports"),
        tHome("featureDataConsolidation"),
      ],
      href: "/product/mini-foundry",
      Icon: Database,
    },
    {
      name: tHome("moduleSecurity"),
      tagline: tHome("moduleSecurityTagline"),
      description: tHome("moduleSecurityDesc"),
      features: [
        tHome("featureSecurityScoring"),
        tHome("featureVulnerabilityScanning"),
        tHome("featureComplianceReporting"),
        tHome("featureMfaMonitoring"),
      ],
      href: "/product/security",
      Icon: Shield,
      comingSoon: true,
    },
    {
      name: tHome("moduleMarketplace"),
      tagline: tHome("moduleMarketplaceTagline"),
      description: tHome("moduleMarketplaceDesc"),
      features: [
        tHome("featurePriceTracking"),
        tHome("featureCompetitorMonitoring"),
        tHome("featureMarketTrends"),
        tHome("featurePriceAlerts"),
      ],
      href: "/product/marketplace",
      Icon: Search,
    },
    {
      name: tHome("modulePredictive"),
      tagline: tHome("modulePredictiveTagline"),
      description: tHome("modulePredictiveDesc"),
      features: [
        tHome("featureSalesForecasting"),
        tHome("featureInventoryPrediction"),
        tHome("featureChurnPrevention"),
        tHome("featureCustomConnectors"),
      ],
      href: "/product/predictive-analytics",
      Icon: TrendingUp,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              {tCommon("comingSoon")}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              {t("heroSubtitle")}
            </p>
            <div className="flex justify-center">
              <EmailSignup
                variant="hero"
                buttonText={tCommon("getEarlyAccess")}
                placeholder={t("emailPlaceholder")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Screenshot */}
      <section className="py-16 bg-white">
        <div className="container-marketing">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/screenshots/dashboard-desktop.png"
              alt={t("platformAlt")}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("modulesTitle")}
            </h2>
            <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
              {t("modulesSubtitle")}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                {module.comingSoon && (
                  <span className="absolute top-4 right-4 text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full font-medium">
                    {tCommon("comingSoon")}
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <module.Icon className="w-10 h-10 text-primary-600 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {module.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">{module.tagline}</p>
                    <p className="text-gray-600 font-serif mb-4">{module.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {module.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Highlight */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t("aiTitle")}
              </h2>
              <p className="text-lg text-gray-600 font-serif">
                {t("aiSubtitle")}
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">{t("aiYouAsk")}</p>
                  <p className="text-gray-900">&ldquo;{t("aiQuestion")}&rdquo;</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-primary-600 mb-1">{t("aiBinelekResponds")}</p>
                  <p className="text-gray-900">&ldquo;{t("aiAnswer")}&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
