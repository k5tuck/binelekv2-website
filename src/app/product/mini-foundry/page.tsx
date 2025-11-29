"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function MiniFoundryPage() {
  const t = useTranslations("product.miniFoundry");
  const tCommon = useTranslations("common");

  const capabilities = [
    {
      title: t("dataConsolidation"),
      description: t("dataConsolidationDesc"),
      icon: "🔗",
    },
    {
      title: t("customDashboards"),
      description: t("customDashboardsDesc"),
      icon: "📊",
    },
    {
      title: t("automatedReports"),
      description: t("automatedReportsDesc"),
      icon: "📬",
    },
  ];

  const widgetTypes = [
    {
      name: t("lineChart"),
      description: t("lineChartDesc"),
      icon: (
        <svg viewBox="0 0 48 32" className="w-12 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="4,24 14,16 24,20 34,8 44,12" className="text-primary-500" />
          <circle cx="14" cy="16" r="2" className="fill-primary-500" />
          <circle cx="24" cy="20" r="2" className="fill-primary-500" />
          <circle cx="34" cy="8" r="2" className="fill-primary-500" />
        </svg>
      ),
    },
    {
      name: t("barChart"),
      description: t("barChartDesc"),
      icon: (
        <svg viewBox="0 0 48 32" className="w-12 h-8" fill="currentColor">
          <rect x="4" y="18" width="8" height="14" className="text-primary-300" rx="1" />
          <rect x="14" y="10" width="8" height="22" className="text-primary-400" rx="1" />
          <rect x="24" y="6" width="8" height="26" className="text-primary-500" rx="1" />
          <rect x="34" y="14" width="8" height="18" className="text-primary-400" rx="1" />
        </svg>
      ),
    },
    {
      name: t("pieChart"),
      description: t("pieChartDesc"),
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <circle cx="16" cy="16" r="12" className="fill-primary-200" />
          <path d="M16,16 L16,4 A12,12 0 0,1 27.8,20 Z" className="fill-primary-500" />
          <path d="M16,16 L27.8,20 A12,12 0 0,1 8,25 Z" className="fill-primary-400" />
        </svg>
      ),
    },
    {
      name: t("numberCard"),
      description: t("numberCardDesc"),
      icon: (
        <svg viewBox="0 0 48 32" className="w-12 h-8" fill="currentColor">
          <rect x="4" y="4" width="40" height="24" rx="4" className="text-primary-100" />
          <text x="24" y="21" textAnchor="middle" className="text-primary-600 text-sm font-bold" style={{ fontSize: '14px' }}>$47K</text>
        </svg>
      ),
    },
    {
      name: t("table"),
      description: t("tableDesc"),
      icon: (
        <svg viewBox="0 0 48 32" className="w-12 h-8" fill="currentColor">
          <rect x="4" y="4" width="40" height="6" className="text-primary-500" rx="1" />
          <rect x="4" y="12" width="18" height="4" className="text-primary-200" rx="1" />
          <rect x="26" y="12" width="18" height="4" className="text-primary-200" rx="1" />
          <rect x="4" y="18" width="18" height="4" className="text-primary-100" rx="1" />
          <rect x="26" y="18" width="18" height="4" className="text-primary-100" rx="1" />
          <rect x="4" y="24" width="18" height="4" className="text-primary-200" rx="1" />
          <rect x="26" y="24" width="18" height="4" className="text-primary-200" rx="1" />
        </svg>
      ),
    },
    {
      name: t("map"),
      description: t("mapDesc"),
      icon: (
        <svg viewBox="0 0 48 32" className="w-12 h-8" fill="currentColor">
          <path d="M8,8 L18,4 L28,8 L38,4 L42,6 L42,26 L38,28 L28,24 L18,28 L8,24 L4,26 L4,6 Z" className="text-primary-200" />
          <path d="M18,4 L18,28 M28,8 L28,24" stroke="currentColor" strokeWidth="1" className="text-primary-300" fill="none" />
          <circle cx="24" cy="14" r="3" className="text-primary-500" />
          <circle cx="14" cy="18" r="2" className="text-primary-400" />
          <circle cx="34" cy="12" r="2" className="text-primary-400" />
        </svg>
      ),
    },
  ];

  const exampleQueries = [
    t("query1"),
    t("query2"),
    t("query3"),
    t("query4"),
    t("query5"),
  ];

  const templates = [
    t("templateSales"),
    t("templateCustomer"),
    t("templateFinancial"),
    t("templateMarketing"),
    t("templateInventory"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">📊</div>
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

      {/* Widget Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("visualizeData")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {widgetTypes.map((widget) => (
              <div key={widget.name} className="bg-white p-4 rounded-xl text-center">
                <div className="h-16 bg-gray-50 rounded-lg mb-3 flex items-center justify-center">
                  {widget.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{widget.name}</h3>
                <p className="text-xs text-gray-500">{widget.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Language Queries */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("askInPlainEnglish")}
            </h2>
            <div className="space-y-3">
              {exampleQueries.map((query) => (
                <div key={query} className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <span className="text-primary-500 mr-3">💬</span>
                  <span className="text-gray-700 italic">&ldquo;{query}&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Templates */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("templatesTitle")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {templates.map((template) => (
              <div key={template} className="px-6 py-3 bg-white rounded-lg shadow-sm text-gray-700 font-medium">
                {template}
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
