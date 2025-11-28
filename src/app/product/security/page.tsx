import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Cybersecurity Scanner - Security & Compliance",
  description: "Enterprise security made simple for growing businesses. Continuous monitoring with actionable recommendations.",
};

const capabilities = [
  {
    title: "Security Score",
    description: "A 0-100 composite score updated continuously. Know exactly where you stand.",
    icon: "🎯",
  },
  {
    title: "Vulnerability Scanning",
    description: "Automated detection of security gaps. Find issues before they become problems.",
    icon: "🔍",
  },
  {
    title: "Compliance Reporting",
    description: "SOC2, GDPR, HIPAA, PCI-DSS ready reports. Prove your security posture.",
    icon: "📋",
  },
  {
    title: "MFA Monitoring",
    description: "Track which accounts have MFA enabled. Close authentication gaps.",
    icon: "🔐",
  },
];

const complianceFrameworks = ["SOC2", "GDPR", "HIPAA", "PCI-DSS"];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">🛡️</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Enterprise security, without the enterprise price
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Know your security posture. Fix issues before they become problems.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-6">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-600 font-serif text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Score Visual */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your security at a glance
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">85</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">12</p>
                  <p className="text-sm text-gray-600">Issues Resolved</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">3</p>
                  <p className="text-sm text-gray-600">Pending Actions</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">98%</p>
                  <p className="text-sm text-gray-600">MFA Coverage</p>
                </div>
              </div>
              <p className="text-center text-gray-500 text-sm mt-6">Security dashboard preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Remediation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Step-by-step fix instructions
            </h2>
            <p className="text-lg text-gray-600 font-serif text-center mb-8">
              Don&apos;t just know about problems — know exactly how to fix them.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-600">⚠️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">MFA not enabled for admin account</h3>
                  <p className="text-gray-600 text-sm mb-3">High priority • 2 accounts affected</p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-700">
                      <strong>How to fix:</strong> Go to Settings → Security → Multi-Factor Authentication and enable MFA for the following accounts: admin@company.com, ceo@company.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Compliance frameworks supported
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {complianceFrameworks.map((framework) => (
              <div key={framework} className="px-8 py-4 bg-white rounded-lg shadow-sm text-gray-900 font-bold">
                {framework}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise security made simple for growing businesses
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              Security is included in every plan, not an expensive add-on. Because protecting your business shouldn&apos;t be optional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
