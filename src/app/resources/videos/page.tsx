"use client";

import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";

export default function VideosPage() {
  const t = useTranslations("resources.videos");

  const videos = [
    {
      category: t("categoryPlatform"),
      duration: t("duration2to3"),
      items: [
        { title: t("videoFullWalkthrough"), description: t("videoFullWalkthroughDesc") },
      ],
    },
    {
      category: t("categoryModules"),
      duration: t("duration1to2"),
      items: [
        { title: t("videoOpsCopilot"), description: t("videoOpsCopilotDesc") },
        { title: t("videoMiniFoundry"), description: t("videoMiniFoundryDesc") },
        { title: t("videoSecurity"), description: t("videoSecurityDesc") },
        { title: t("videoMarketplace"), description: t("videoMarketplaceDesc") },
      ],
    },
    {
      category: t("categoryOnboarding"),
      duration: t("duration3to5"),
      items: [
        { title: t("videoOnboarding"), description: t("videoOnboardingDesc") },
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
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="space-y-16">
            {videos.map((section) => (
              <div key={section.category}>
                <div className="flex items-baseline justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{section.category}</h2>
                  <span className="text-sm text-gray-500">{section.duration}</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((video) => (
                    <div key={video.title} className="group cursor-pointer">
                      <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center mb-4 group-hover:ring-4 ring-primary-300 transition-all">
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <span className="text-white text-xl ml-1">▶</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600">{video.description}</p>
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
