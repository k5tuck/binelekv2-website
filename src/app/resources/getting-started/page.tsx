"use client";

import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function GettingStartedPage() {
  const t = useTranslations("resources.gettingStarted");

  const steps = [
    {
      number: "1",
      title: t("step1Title"),
      description: t("step1Desc"),
    },
    {
      number: "2",
      title: t("step2Title"),
      description: t("step2Desc"),
    },
    {
      number: "3",
      title: t("step3Title"),
      description: t("step3Desc"),
    },
    {
      number: "4",
      title: t("step4Title"),
      description: t("step4Desc"),
    },
    {
      number: "5",
      title: t("step5Title"),
      description: t("step5Desc"),
    },
  ];

  const quickWins = [
    t("quickWin1"),
    t("quickWin2"),
    t("quickWin3"),
    t("quickWin4"),
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

      {/* Video Placeholder */}
      <section className="py-16 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">▶</span>
                </div>
                <p className="text-white/80">{t("videoTitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {t("stepsTitle")}
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 font-serif">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("quickWinsTitle")}
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              {quickWins.map((win) => (
                <label key={win} className="flex items-center py-3 border-b border-gray-200 last:border-0">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">{win}</span>
                </label>
              ))}
            </div>
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
