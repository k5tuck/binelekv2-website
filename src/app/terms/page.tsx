import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Binelek Terms of Service - The terms governing your use of our platform.",
};

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-marketing">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Binelek (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p>
              Binelek provides an AI-powered business platform including task automation, business intelligence, security monitoring, and competitive intelligence tools.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete registration information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must be at least 18 years old to use the Service</li>
              <li>One person or entity may not maintain more than one account</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or interfere with the Service</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Use the Service for illegal purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Paid plans are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>We may change pricing with 30 days notice</li>
              <li>You are responsible for all applicable taxes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by Binelek and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Data</h2>
            <p>
              You retain ownership of data you upload to the Service. By using the Service, you grant us a license to use your data solely to provide the Service to you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BINELEK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OF THE SERVICE.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Termination</h2>
            <p>
              We may terminate or suspend your account at any time for any reason. You may cancel your account at any time through your account settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes via email or through the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact</h2>
            <p>
              Questions about these Terms should be sent to: <br />
              <strong>support@binelek.io</strong>
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500">
                This is a placeholder terms of service. Please consult with legal counsel to create terms appropriate for your jurisdiction and business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
