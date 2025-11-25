import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Binelek Privacy Policy - How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-marketing">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              Binelek (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (name, email, company name)</li>
              <li>Payment information (processed by our payment provider)</li>
              <li>Business data you connect through integrations</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Log data (IP address, browser type, pages visited)</li>
              <li>Device information</li>
              <li>Usage analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your transactions</li>
              <li>To send you service-related communications</li>
              <li>To improve our platform and develop new features</li>
              <li>To protect against fraud and abuse</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in operating our platform</li>
              <li>Integration partners you authorize</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption at rest (AES-256) and in transit (TLS 1.3), access controls, and regular security audits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide services. You can request deletion at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Transfers</h2>
            <p>
              Your data may be processed in the United States. We ensure appropriate safeguards are in place for international transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p>
              For privacy-related questions, contact us at: <br />
              <strong>privacy@binelek.io</strong>
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500">
                This is a placeholder privacy policy. Please consult with legal counsel to create a policy appropriate for your jurisdiction and business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
