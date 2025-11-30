"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  const t = useTranslations("about");

  const values = [
    {
      title: t("value1Title"),
      description: t("value1Desc"),
      icon: "✨",
    },
    {
      title: t("value2Title"),
      description: t("value2Desc"),
      icon: "👁️",
    },
    {
      title: t("value3Title"),
      description: t("value3Desc"),
      icon: "🎯",
    },
    {
      title: t("value4Title"),
      description: t("value4Desc"),
      icon: "🛡️",
    },
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
            <p className="text-xl lg:text-2xl text-gray-600 font-serif">
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("missionTitle")}</h2>
            <p className="text-xl text-gray-600 font-serif">
              {t("missionText")}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t("storyTitle")}</h2>
            <div className="prose prose-lg mx-auto text-gray-600 font-serif">
              <p>
                {t("storyP1")}
              </p>
              <p>
                {t("storyP2")}
              </p>
              <p>
                {t("storyP3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t("valuesTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-gray-50 rounded-2xl">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 font-serif">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("getInTouchTitle")}</h2>
            <p className="text-gray-600 mb-8 font-serif">
              {t("getInTouchSubtitle")}
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>{t("email")}:</strong> info@binelek.io
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/binelek" className="text-primary-600 hover:text-primary-700">Twitter</a>
                <a href="https://linkedin.com/company/binelek" className="text-primary-600 hover:text-primary-700">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 bg-white">
        <div className="container-marketing text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("joinTeamTitle")}</h2>
          <p className="text-gray-600 mb-6 font-serif">
            {t("joinTeamSubtitle")}
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            {t("viewOpenPositions")}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
