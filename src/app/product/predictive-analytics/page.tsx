"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";
import { TrendingUp, Database, Webhook, Server, FolderOpen, CheckCircle } from "lucide-react";

export default function PredictiveAnalyticsPage() {
  const t = useTranslations("product.predictive");
  const tCommon = useTranslations("common");

  const capabilities = [
    {
      title: t("salesForecasting"),
      description: t("salesForecastingDesc"),
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
    },
    {
      title: t("inventoryPrediction"),
      description: t("inventoryPredictionDesc"),
      icon: <Database className="w-8 h-8 text-primary-600" />,
    },
    {
      title: t("churnPrevention"),
      description: t("churnPreventionDesc"),
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      title: t("customConnectors"),
      description: t("customConnectorsDesc"),
      icon: <Webhook className="w-8 h-8 text-primary-600" />,
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

  const steps = [
    { number: "01", title: t("step1"), description: t("step1Desc") },
    { number: "02", title: t("step2"), description: t("step2Desc") },
    { number: "03", title: t("step3"), description: t("step3Desc") },
  ];

  const exampleQueries = [
    t("query1"),
    t("query2"),
    t("query3"),
    t("query4"),
    t("query5"),
  ];

  const connectorTypes = [
    { name: t("connectorType1"), icon: <Server className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { name: t("connectorType2"), icon: <Database className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { name: t("connectorType3"), icon: <Webhook className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
    { name: t("connectorType4"), icon: <FolderOpen className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors">
                <div className="mb-4 flex justify-center">{cap.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-gray-600 font-serif">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Predict */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("whatYouCanPredict")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t("howItWorks")}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                  )}

                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
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

      {/* Natural Language Queries */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("askAnything")}
            </h2>
            <div className="space-y-3">
              {exampleQueries.map((query) => (
                <div key={query} className="bg-white p-4 rounded-lg flex items-center shadow-sm">
                  <span className="text-primary-500 mr-3">
                    <TrendingUp className="w-5 h-5" />
                  </span>
                  <span className="text-gray-700 italic">&ldquo;{query}&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy Dashboard Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("accuracyTitle")}
            </h2>
            <p className="text-lg text-gray-600 font-serif mb-8">
              {t("accuracyDesc")}
            </p>
            {/* Visual representation of accuracy */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl font-bold text-primary-600">94%</div>
                  <div className="text-sm text-gray-500">Sales Accuracy</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl font-bold text-emerald-600">91%</div>
                  <div className="text-sm text-gray-500">Inventory Accuracy</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl font-bold text-violet-600">89%</div>
                  <div className="text-sm text-gray-500">Churn Accuracy</div>
                </div>
              </div>
              <div className="h-32 bg-white rounded-xl flex items-end justify-around p-4">
                {[65, 72, 78, 85, 89, 91, 94].map((height, i) => (
                  <div
                    key={i}
                    className="w-8 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-2">Accuracy improving over time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Connectors */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {t("customConnectorsTitle")}
            </h2>
            <p className="text-lg text-gray-600 font-serif mb-8 text-center">
              {t("customConnectorsDesc")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {connectorTypes.map((connector) => (
                <div key={connector.name} className="bg-white p-6 rounded-xl text-center">
                  <div className={`w-12 h-12 rounded-xl ${connector.color} flex items-center justify-center mx-auto mb-3`}>
                    {connector.icon}
                  </div>
                  <div className="font-medium text-gray-900">{connector.name}</div>
                </div>
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
