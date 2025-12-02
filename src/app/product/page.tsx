"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";
import { EmailSignup } from "@/components/EmailSignup";
import { Zap, Database, Shield, Search, TrendingUp, BarChart3, GitMerge, CheckCircle, ArrowRight } from "lucide-react";

export default function ProductOverviewPage() {
  const t = useTranslations("product.overview");
  const tHome = useTranslations("home");
  const tCommon = useTranslations("common");

  // Hub-based architecture (primary)
  const hubs = [
    {
      name: tHome("hubInsights"),
      tagline: tHome("hubInsightsTagline"),
      description: tHome("hubInsightsDesc"),
      features: [
        tHome("featureStoryTimeline"),
        tHome("featureCustomerSegmentation"),
        tHome("featurePredictiveAnalytics"),
        tHome("featureUnifiedDashboard"),
      ],
      href: "/product/insights-hub",
      Icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: tHome("hubAction"),
      tagline: tHome("hubActionTagline"),
      description: tHome("hubActionDesc"),
      features: [
        tHome("featureCausalSimulator"),
        tHome("featureInitiativePlanner"),
        tHome("featureAutomations"),
        tHome("featureHistoryAudit"),
      ],
      href: "/product/action-hub",
      Icon: Zap,
      color: "from-amber-500 to-orange-500",
    },
    {
      name: tHome("hubDataLineage"),
      tagline: tHome("hubDataLineageTagline"),
      description: tHome("hubDataLineageDesc"),
      features: [
        tHome("featureLineageVisualization"),
        tHome("featureProvenanceTracking"),
        tHome("featureConfidenceIndicators"),
        tHome("featureAuditReady"),
      ],
      href: "/product/data-lineage",
      Icon: GitMerge,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  // Modules organized by parent hub
  const hubModules = [
    {
      hubName: tHome("hubInsights"),
      hubHref: "/product/insights-hub",
      hubColor: "from-blue-500 to-cyan-500",
      modules: [
        {
          name: tHome("moduleMiniFoundry"),
          tagline: tHome("moduleMiniFoundryTagline"),
          href: "/product/mini-foundry",
          Icon: Database,
        },
        {
          name: tHome("moduleMarketplace"),
          tagline: tHome("moduleMarketplaceTagline"),
          href: "/product/marketplace",
          Icon: Search,
        },
      ],
    },
    {
      hubName: tHome("hubAction"),
      hubHref: "/product/action-hub",
      hubColor: "from-amber-500 to-orange-500",
      modules: [
        {
          name: tHome("moduleOpsCopilot"),
          tagline: tHome("moduleOpsCopilotTagline"),
          href: "/product/ops-copilot",
          Icon: Zap,
        },
      ],
    },
  ];

  // Standalone modules (not part of any hub)
  const standaloneModules = [
    {
      name: tHome("moduleSecurity"),
      tagline: tHome("moduleSecurityTagline"),
      href: "/product/security",
      Icon: Shield,
      comingSoon: true,
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

      {/* Three Hubs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("hubsTitle")}
            </h2>
            <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
              {t("hubsSubtitle")}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {hubs.map((hub) => (
              <Link
                key={hub.name}
                href={hub.href}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${hub.color} flex items-center justify-center mx-auto mb-4`}>
                    <hub.Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {hub.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-primary-600 font-medium text-sm mt-1">{hub.tagline}</p>
                </div>
                <p className="text-gray-600 font-serif mb-4 text-center text-sm">{hub.description}</p>
                <ul className="space-y-2">
                  {hub.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-500 flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modules by Hub */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("modulesTitle")}
            </h2>
            <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
              {t("modulesSubtitle")}
            </p>
          </div>

          {/* Modules grouped by Hub */}
          <div className="space-y-12">
            {hubModules.map((hubGroup) => (
              <div key={hubGroup.hubName}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${hubGroup.hubColor}`} />
                  <Link href={hubGroup.hubHref} className="text-lg font-semibold text-gray-900 hover:text-primary-600">
                    {hubGroup.hubName}
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-6">
                  {hubGroup.modules.map((module) => (
                    <Link
                      key={module.name}
                      href={module.href}
                      className="group relative bg-gray-50 p-6 rounded-xl hover:bg-primary-50 transition-colors border border-gray-100"
                    >
                      <module.Icon className="w-8 h-8 text-primary-600 mb-3" strokeWidth={1.5} />
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                        {module.name}
                      </h3>
                      <p className="text-sm text-gray-600">{module.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Standalone Modules */}
            {standaloneModules.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                  <span className="text-lg font-semibold text-gray-900">{t("standaloneTitle")}</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-6">
                  {standaloneModules.map((module) => (
                    <Link
                      key={module.name}
                      href={module.href}
                      className="group relative bg-gray-50 p-6 rounded-xl hover:bg-primary-50 transition-colors border border-gray-100"
                    >
                      {module.comingSoon && (
                        <span className="absolute top-3 right-3 text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full font-medium">
                          {tCommon("comingSoon")}
                        </span>
                      )}
                      <module.Icon className="w-8 h-8 text-primary-600 mb-3" strokeWidth={1.5} />
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                        {module.name}
                      </h3>
                      <p className="text-sm text-gray-600">{module.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AI Highlight */}
      <section className="py-16 lg:py-24 bg-gray-50">
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
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
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
