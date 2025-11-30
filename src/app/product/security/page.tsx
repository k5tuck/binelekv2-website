"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function SecurityPage() {
  const t = useTranslations("product.security");
  const tCommon = useTranslations("common");

  const capabilities = [
    {
      title: t("securityScore"),
      description: t("securityScoreDesc"),
      icon: "🎯",
    },
    {
      title: t("vulnerabilityScanning"),
      description: t("vulnerabilityScanningDesc"),
      icon: "🔍",
    },
    {
      title: t("complianceReporting"),
      description: t("complianceReportingDesc"),
      icon: "📋",
    },
    {
      title: t("mfaMonitoring"),
      description: t("mfaMonitoringDesc"),
      icon: "🔐",
    },
  ];

  const complianceFrameworks = ["SOC2", "GDPR", "HIPAA", "PCI-DSS"];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">🛡️</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-6">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-600 font-serif text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Score Visual */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("atAGlance")}
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">85</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">12</p>
                  <p className="text-sm text-gray-600">{t("issuesResolved")}</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">3</p>
                  <p className="text-sm text-gray-600">{t("pendingActions")}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">98%</p>
                  <p className="text-sm text-gray-600">{t("mfaCoverage")}</p>
                </div>
              </div>
              <p className="text-center text-gray-500 text-sm mt-6">{t("dashboardPreview")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Remediation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {t("stepByStep")}
            </h2>
            <p className="text-lg text-gray-600 font-serif text-center mb-8">
              {t("stepByStepDesc")}
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-600">⚠️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t("mfaNotEnabled")}</h3>
                  <p className="text-gray-600 text-sm mb-3">{t("highPriority")} • 2 {t("accountsAffected")}</p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-700">
                      <strong>{t("howToFix")}</strong> {t("mfaFixInstructions")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t("complianceFrameworks")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {complianceFrameworks.map((framework) => (
              <div key={framework} className="px-8 py-4 bg-white rounded-lg shadow-sm text-gray-900 font-bold">
                {framework}
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
            <p className="text-lg text-gray-600 font-serif">
              {t("differentiationDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
