import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Binelek team. We're building the future of business software for SMBs.",
};

const benefits = [
  "Competitive salary and equity",
  "Remote-first culture",
  "Unlimited PTO",
  "Health, dental, and vision insurance",
  "Home office stipend",
  "Learning and development budget",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join our team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              We&apos;re building the future of business software for SMBs. Want to help?
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Binelek?</h2>
            <div className="prose prose-lg mx-auto text-gray-600 font-serif">
              <p>
                At Binelek, we&apos;re on a mission to democratize enterprise-grade tools for small and medium businesses. We believe every growing company deserves access to the same powerful AI, analytics, and automation capabilities that Fortune 500 companies have.
              </p>
              <p>
                We&apos;re a small, passionate team that moves fast and values impact over process. If you want to work on challenging problems with talented people and see your work make a real difference, we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>

            <div className="text-center p-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 mb-4 font-serif">
                We don&apos;t have any open positions right now, but we&apos;re always looking for talented people.
              </p>
              <p className="text-gray-900 font-medium">
                Send your resume to{" "}
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
        headline="Not looking for a job?"
        subheadline="Check out Binelek for your business instead. Sign up to be notified when we launch."
        variant="gradient"
      />
    </>
  );
}
