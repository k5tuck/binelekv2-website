"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";
import {
  BarChart3,
  TrendingUp,
  Users,
  BookOpen,
  Sparkles,
  LineChart,
  PieChart,
  Target,
} from "lucide-react";

export default function InsightsHubPage() {
  const t = useTranslations("product.insightsHub");
  const tCommon = useTranslations("common");

  const capabilities = [
    {
      title: t("storyTimeline"),
      description: t("storyTimelineDesc"),
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("customerSegmentation"),
      description: t("customerSegmentationDesc"),
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t("predictiveAnalytics"),
      description: t("predictiveAnalyticsDesc"),
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: t("unifiedDashboard"),
      description: t("unifiedDashboardDesc"),
      icon: BarChart3,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const features = [
    {
      title: t("featureAiNarratives"),
      description: t("featureAiNarrativesDesc"),
      icon: Sparkles,
    },
    {
      title: t("featureForecasting"),
      description: t("featureForecastingDesc"),
      icon: LineChart,
    },
    {
      title: t("featureSegmentAnalysis"),
      description: t("featureSegmentAnalysisDesc"),
      icon: PieChart,
    },
    {
      title: t("featureAnomalyDetection"),
      description: t("featureAnomalyDetectionDesc"),
      icon: Target,
    },
  ];

  const includedModules = [
    { name: t("includedMiniFoundry"), href: "/product/mini-foundry" },
    { name: t("includedPredictive"), href: "/product/predictive-analytics" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("capabilitiesTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("capabilitiesSubtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className={`w-14 h-14 bg-gradient-to-br ${cap.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <cap.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("aiPoweredTitle")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("aiPoweredSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 bg-white p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
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
              {t("seeItInAction")}
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
              <div className="aspect-video flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">{t("screenshotPlaceholder")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Modules */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("includesTitle")}
            </h2>
            <p className="text-gray-600 mb-8">
              {t("includesSubtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {includedModules.map((module) => (
                <Link
                  key={module.name}
                  href={module.href}
                  className="px-6 py-3 bg-white rounded-lg shadow-sm text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  {module.name}
                </Link>
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
            <p className="text-lg text-gray-600 font-serif mb-8">
              {t("differentiationDesc")}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="font-bold text-gray-900 mb-2">{t("diff1Title")}</p>
                <p className="text-gray-600 text-sm">{t("diff1Desc")}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="font-bold text-gray-900 mb-2">{t("diff2Title")}</p>
                <p className="text-gray-600 text-sm">{t("diff2Desc")}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="font-bold text-gray-900 mb-2">{t("diff3Title")}</p>
                <p className="text-gray-600 text-sm">{t("diff3Desc")}</p>
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
