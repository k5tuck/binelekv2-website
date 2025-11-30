"use client";

import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function FAQPage() {
  const t = useTranslations("resources.faq");

  const faqCategories = [
    {
      name: t("categoryGeneral"),
      questions: [
        { q: t("q1"), a: t("a1") },
        { q: t("q2"), a: t("a2") },
        { q: t("q3"), a: t("a3") },
        { q: t("q4"), a: t("a4") },
      ],
    },
    {
      name: t("categoryPricing"),
      questions: [
        { q: t("q5"), a: t("a5") },
        { q: t("q6"), a: t("a6") },
        { q: t("q7"), a: t("a7") },
        { q: t("q8"), a: t("a8") },
        { q: t("q9"), a: t("a9") },
        { q: t("q10"), a: t("a10") },
      ],
    },
    {
      name: t("categorySecurity"),
      questions: [
        { q: t("q11"), a: t("a11") },
        { q: t("q12"), a: t("a12") },
        { q: t("q13"), a: t("a13") },
        { q: t("q14"), a: t("a14") },
      ],
    },
    {
      name: t("categoryIntegrations"),
      questions: [
        { q: t("q15"), a: t("a15") },
        { q: t("q16"), a: t("a16") },
        { q: t("q17"), a: t("a17") },
        { q: t("q18"), a: t("a18") },
      ],
    },
    {
      name: t("categoryAi"),
      questions: [
        { q: t("q19"), a: t("a19") },
        { q: t("q20"), a: t("a20") },
        { q: t("q21"), a: t("a21") },
        { q: t("q22"), a: t("a22") },
      ],
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

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {category.name}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq) => (
                    <div key={faq.q}>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-600 font-serif">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
