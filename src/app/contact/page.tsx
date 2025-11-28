import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Binelek team. We're here to help with sales, support, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-marketing">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let&apos;s talk
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-serif">
                Have a question, feedback, or want to learn more about Binelek? We&apos;re here to help.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                  <p className="text-gray-600">info@binelek.io</p>
                </div>
                {/* TODO: Create sales@binelek.io email account */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sales</h3>
                  <p className="text-gray-400">sales@binelek.io <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded ml-1">Coming Soon</span></p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                  <p className="text-gray-600">support@binelek.io</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Support Hours</h3>
                  <p className="text-gray-600">Monday - Friday, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise Inquiries</h3>
                <p className="text-gray-600 mb-4 font-serif">
                  Looking for custom pricing, dedicated support, or specific compliance requirements?
                </p>
                <Link
                  href="/demo"
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  Schedule an Enterprise Demo →
                </Link>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press/Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Link href="/demo" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Get Early Access</h3>
              <p className="text-gray-600 text-sm">See Binelek in action with a personalized walkthrough.</p>
            </Link>
            <Link href="/resources/faq" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm">Find answers to common questions.</p>
            </Link>
            <Link href="/status" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">System Status</h3>
              <p className="text-gray-600 text-sm">Check our current system status and uptime.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
