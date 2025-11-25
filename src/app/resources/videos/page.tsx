import { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Demo Videos",
  description: "Watch Binelek in action. Platform overview and module-specific demo videos.",
};

const videos = [
  {
    category: "Platform Overview",
    duration: "2-3 min",
    items: [
      { title: "Full Platform Walkthrough", description: "See all four modules working together" },
    ],
  },
  {
    category: "Module Demos",
    duration: "1-2 min each",
    items: [
      { title: "Ops Copilot", description: "Creating your first automation" },
      { title: "Mini Foundry", description: "Building a custom dashboard" },
      { title: "Cybersecurity Scanner", description: "Understanding your security score" },
      { title: "Marketplace Intelligence", description: "Tracking competitor prices" },
    ],
  },
  {
    category: "Getting Started",
    duration: "3-5 min",
    items: [
      { title: "Complete Onboarding Tutorial", description: "From signup to first insights" },
    ],
  },
];

export default function VideosPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              See Binelek in action
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Watch demo videos to understand what Binelek can do for your business.
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
        headline="Want a personalized walkthrough?"
        subheadline="Schedule a live demo with one of our product specialists."
        variant="gradient"
      />
    </>
  );
}
