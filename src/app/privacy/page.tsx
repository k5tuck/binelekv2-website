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
              Binelek (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. This policy applies to users worldwide, including those in the European Economic Area (EEA), United Kingdom, California, and other jurisdictions with specific privacy requirements.
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

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Legal Basis for Processing (EEA/UK Users)</h2>
            <p>If you are in the European Economic Area or United Kingdom, we process your data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contract performance:</strong> To provide our services to you</li>
              <li><strong>Legitimate interests:</strong> To improve our services and prevent fraud</li>
              <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
              <li><strong>Legal obligation:</strong> To comply with applicable laws</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your transactions</li>
              <li>To send you service-related communications</li>
              <li>To improve our platform and develop new features</li>
              <li>To protect against fraud and abuse</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the platform to function</li>
              <li><strong>Analytics cookies:</strong> Help us understand how you use our platform</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="mt-4">
              You can manage your cookie preferences through your browser settings or our cookie consent banner. Note that disabling certain cookies may affect platform functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Sharing</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in operating our platform</li>
              <li>Integration partners you authorize</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption at rest (AES-256) and in transit (TLS 1.3), access controls, and regular security audits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">All Users</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data (data portability)</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">EEA/UK Users (GDPR)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to restrict processing</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to lodge a complaint with your local data protection authority</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">California Residents (CCPA/CPRA)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to opt out of the sale of personal information (we do not sell your data)</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide services. You can request deletion at any time. After deletion, we may retain anonymized data for analytics purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. International Data Transfers</h2>
            <p>
              Binelek is based in the United States. If you are accessing our services from outside the US, please be aware that your data may be transferred to, stored, and processed in the United States.
            </p>
            <p className="mt-4">
              For EEA/UK users, we ensure appropriate safeguards for international transfers through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Data processing agreements with our service providers</li>
              <li>Additional security measures as appropriate</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for children under 16. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. For significant changes, we will provide additional notice via email.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us at:
            </p>
            <ul className="list-none pl-0 space-y-2 mt-4">
              <li><strong>Email:</strong> support@binelek.io</li>
              <li><strong>Address:</strong> Binelek, Inc.</li>
            </ul>
            <p className="mt-4">
              For EEA/UK users, you also have the right to lodge a complaint with your local supervisory authority.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500">
                This privacy policy is designed to comply with GDPR, CCPA, and other international privacy regulations. Please consult with legal counsel to ensure full compliance with all applicable laws in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
