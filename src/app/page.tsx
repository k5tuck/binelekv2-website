"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";
import { ComingSoonLanding } from "@/components/ComingSoonLanding";
import { EmailSignup } from "@/components/EmailSignup";
import { IntegrationLogos } from "@/components/IntegrationLogos";
import {
  Zap,
  Database,
  Shield,
  Search,
  TrendingUp as TrendingUpIcon,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Bot,
  Lock,
  TrendingUp,
  GitMerge,
  BookOpen,
  Users,
  GitBranch,
  ClipboardList,
  Eye,
  FileCheck,
} from "lucide-react";

// Environment variable toggle for coming soon mode
// Set NEXT_PUBLIC_COMING_SOON_MODE=true in Vercel to show coming soon page
const isComingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON_MODE === "true";

// Hub-focused architecture (primary)
const hubIcons = [
  { Icon: BarChart3, color: "from-blue-500 to-cyan-500", href: "/product/insights-hub" },
  { Icon: Zap, color: "from-amber-500 to-orange-500", href: "/product/action-hub" },
  { Icon: GitMerge, color: "from-emerald-500 to-teal-500", href: "/product/data-lineage" },
];

// Legacy module icons (secondary)
const moduleIcons = [
  { Icon: Zap, color: "from-amber-500 to-orange-500", href: "/product/ops-copilot" },
  { Icon: Database, color: "from-blue-500 to-cyan-500", href: "/product/mini-foundry" },
  { Icon: Shield, color: "from-emerald-500 to-teal-500", href: "/product/security", comingSoon: true },
  { Icon: Search, color: "from-purple-500 to-pink-500", href: "/product/marketplace" },
  { Icon: TrendingUpIcon, color: "from-violet-500 to-indigo-500", href: "/product/predictive-analytics" },
];

const benefitIcons = [Bot, BarChart3, Lock, TrendingUp];

export default function HomePage() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  // Build translated arrays - Hub-focused architecture
  const hubs = [
    {
      name: t("hubInsights"),
      tagline: t("hubInsightsTagline"),
      description: t("hubInsightsDesc"),
      features: [t("featureStoryTimeline"), t("featureCustomerSegmentation"), t("featurePredictiveAnalytics"), t("featureUnifiedDashboard")],
      ...hubIcons[0],
    },
    {
      name: t("hubAction"),
      tagline: t("hubActionTagline"),
      description: t("hubActionDesc"),
      features: [t("featureCausalSimulator"), t("featureInitiativePlanner"), t("featureAutomations"), t("featureHistoryAudit")],
      ...hubIcons[1],
    },
    {
      name: t("hubDataLineage"),
      tagline: t("hubDataLineageTagline"),
      description: t("hubDataLineageDesc"),
      features: [t("featureLineageVisualization"), t("featureProvenanceTracking"), t("featureConfidenceIndicators"), t("featureAuditReady")],
      ...hubIcons[2],
    },
  ];

  // Legacy modules (kept for reference but not displayed prominently)
  const modules = [
    {
      name: t("moduleOpsCopilot"),
      tagline: t("moduleOpsCopilotTagline"),
      description: t("moduleOpsCopilotDesc"),
      features: [t("featureEmailAutomation"), t("featureTaskScheduling"), t("featureWorkflowBuilder"), t("featureNaturalLanguage")],
      ...moduleIcons[0],
    },
    {
      name: t("moduleMiniFoundry"),
      tagline: t("moduleMiniFoundryTagline"),
      description: t("moduleMiniFoundryDesc"),
      features: [t("featureCustomDashboards"), t("featureNaturalLanguageQueries"), t("featureAutomatedReports"), t("featureDataConsolidation")],
      ...moduleIcons[1],
    },
    {
      name: t("moduleSecurity"),
      tagline: t("moduleSecurityTagline"),
      description: t("moduleSecurityDesc"),
      features: [t("featureSecurityScoring"), t("featureVulnerabilityScanning"), t("featureComplianceReporting"), t("featureMfaMonitoring")],
      ...moduleIcons[2],
    },
    {
      name: t("moduleMarketplace"),
      tagline: t("moduleMarketplaceTagline"),
      description: t("moduleMarketplaceDesc"),
      features: [t("featurePriceTracking"), t("featureCompetitorMonitoring"), t("featureMarketTrends"), t("featurePriceAlerts")],
      ...moduleIcons[3],
    },
    {
      name: t("modulePredictive"),
      tagline: t("modulePredictiveTagline"),
      description: t("modulePredictiveDesc"),
      features: [t("featureSalesForecasting"), t("featureInventoryPrediction"), t("featureChurnPrevention"), t("featureCustomConnectors")],
      ...moduleIcons[4],
    },
  ];

  const benefits = [
    { Icon: benefitIcons[0], title: t("benefitAiFirst"), description: t("benefitAiFirstDesc") },
    { Icon: benefitIcons[1], title: t("benefitUnifiedData"), description: t("benefitUnifiedDataDesc") },
    { Icon: benefitIcons[2], title: t("benefitEnterpriseSecurity"), description: t("benefitEnterpriseSecurityDesc") },
    { Icon: benefitIcons[3], title: t("benefitActionableInsights"), description: t("benefitActionableInsightsDesc") },
  ];

  const steps = [
    { number: "01", title: t("step1Title"), description: t("step1Desc") },
    { number: "02", title: t("step2Title"), description: t("step2Desc") },
    { number: "03", title: t("step3Title"), description: t("step3Desc") },
  ];

  // Show coming soon page if environment variable is set
  if (isComingSoonMode) {
    return <ComingSoonLanding />;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="container-marketing relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              {t("launchingSoon")}
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo-light.svg"
                alt="Binelek - The SMB AI Platform"
                width={200}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {t("heroTitle")}
              <span className="block text-primary-600">{t("heroTitleHighlight")}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("heroSubtitle")}
            </p>

            {/* Email Signup */}
            <div className="flex justify-center mb-8">
              <EmailSignup
                variant="hero"
                buttonText={tCommon("getEarlyAccess")}
                placeholder={t("enterWorkEmail")}
                successMessage={t("onWaitlist")}
              />
            </div>

            {/* Social proof */}
            <p className="text-sm text-gray-500">
              {t("joinWaitlistCount")}
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Bar */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container-marketing">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            {t("connectsWithTools")}
          </p>
          <IntegrationLogos />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-marketing">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("valuePropTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("valuePropSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <benefit.Icon className="w-7 h-7 text-primary-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Hubs */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-marketing">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("hubsTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("hubsSubtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {hubs.map((hub) => (
              <Link
                key={hub.name}
                href={hub.href}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${hub.color} flex items-center justify-center mx-auto mb-4`}>
                    <hub.Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {hub.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-primary-600 font-medium text-sm mb-3">{hub.tagline}</p>
                </div>
                <p className="text-gray-600 mb-4 text-center">{hub.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {hub.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                    >
                      <CheckCircle className="w-3 h-3 text-primary-500" />
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-marketing">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("howItWorksTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("howItWorksSubtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                  )}

                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("aiDemoTitle")}
              </h2>
              <p className="text-lg text-gray-400">
                {t("aiDemoSubtitle")}
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">{t("aiDemoYou")}</span>
                </div>
                <div className="bg-gray-700 rounded-2xl rounded-tl-none px-5 py-3">
                  <p>&ldquo;{t("aiDemoQuestion")}&rdquo;</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-emerald-900/50 border border-emerald-700/50 rounded-2xl rounded-tl-none px-5 py-3 flex-1">
                  <p className="mb-3">&ldquo;{t("aiDemoAnswer")}&rdquo;</p>
                  <p className="text-sm text-emerald-400">{t("aiDemoFollowup")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="signup" className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-white scroll-mt-20">
        <div className="container-marketing">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("earlyAccessTitle")}
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              {t("earlyAccessSubtitle")}
            </p>
            <div className="flex justify-center mb-6">
              <EmailSignup
                variant="hero"
                buttonText={t("joinWaitlist")}
                placeholder={t("emailPlaceholder")}
                successMessage={t("welcomeAboard")}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                {t("noCreditCard")}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                {t("cancelAnytime")}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                {t("earlyAdopterPricing")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline={t("ctaHeadline")}
        subheadline={t("ctaSubheadline")}
        variant="gradient"
      />
    </>
  );
}
