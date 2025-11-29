"use client";

import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function CareersPage() {
  const t = useTranslations("careers");

  const benefits = [
    t("benefit1"),
    t("benefit2"),
    t("benefit3"),
    t("benefit4"),
    t("benefit5"),
    t("benefit6"),
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
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t("whyBinelekTitle")}</h2>
            <div className="prose prose-lg mx-auto text-gray-600 font-serif">
              <p>
                {t("whyBinelekP1")}
              </p>
              <p>
                {t("whyBinelekP2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t("benefitsTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center bg-white p-4 rounded-lg">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("openPositionsTitle")}</h2>

            <div className="text-center p-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 mb-4 font-serif">
                {t("noOpenPositions")}
              </p>
              <p className="text-gray-900 font-medium">
                {t("sendResumeTo")}{" "}
                <a href="mailto:info@binelek.io" className="text-primary-600 hover:text-primary-700">
                  info@binelek.io
                </a>
              </p>
            </div>

            {/* Placeholder for future job listings
            <div className="space-y-4">
              <Link href="#" className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">Senior Full Stack Engineer</h3>
                    <p className="text-gray-600 text-sm mt-1">Remote • Full-time</p>
                  </div>
                  <span className="text-primary-600">→</span>
                </div>
              </Link>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline={t("ctaHeadline")}
        subheadline={t("ctaSubheadline")}
        variant="gradient"
      />
    </>
  );
}
