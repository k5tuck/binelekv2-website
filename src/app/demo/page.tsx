import { Metadata } from "next";
import Link from "next/link";
import { EmailSignup } from "@/components/EmailSignup";
import { Bell, Zap, Gift, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Early Access",
  description: "Join the waitlist to be the first to know when Binelek launches. Get early access and exclusive updates.",
};

const benefits = [
  {
    Icon: Bell,
    title: "Be the first to know",
    description: "Get notified the moment we launch",
  },
  {
    Icon: Zap,
    title: "Early access",
    description: "Priority access before public launch",
  },
  {
    Icon: Gift,
    title: "Exclusive perks",
    description: "Special pricing for early adopters",
  },
  {
    Icon: Users,
    title: "Shape the product",
    description: "Your feedback helps build Binelek",
  },
];

const integrationLogos = ["Shopify", "QuickBooks", "Stripe", "HubSpot", "Square", "Xero"];

export default function WaitlistPage() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-marketing">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Coming Soon
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get early access to Binelek
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-serif">
                We&apos;re building the AI-powered command center for growing businesses.
                Join the waitlist to be among the first to try it.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.Icon className="w-5 h-5 text-primary-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-sm text-gray-500 mb-4">Will integrate with:</p>
                <div className="flex flex-wrap gap-3">
                  {integrationLogos.map((logo) => (
                    <span key={logo} className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the waitlist</h2>
              <p className="text-gray-600 mb-6">
                Enter your email to get notified when we launch.
              </p>

              <div className="space-y-6">
                <EmailSignup
                  variant="default"
                  buttonText="Join Waitlist"
                  placeholder="your@email.com"
                  successMessage="You're on the list! We'll be in touch soon."
                />

                <p className="text-sm text-gray-500 text-center">
                  No spam, ever. Unsubscribe anytime.
                </p>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">What is Binelek?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Binelek is an AI-powered platform that helps businesses automate operations,
                    understand their data, secure their systems, and track market competitors -
                    all in one place.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      Ops Copilot - Automate tasks with AI
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      Mini Foundry - Dashboards & insights
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      Security Scanner - Protect your business
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      Marketplace Intel - Track competitors
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Want to learn more?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/product"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Explore the Platform
            </Link>
            <Link
              href="/resources/faq"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
