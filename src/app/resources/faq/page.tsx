import { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Binelek. Learn about pricing, security, integrations, and more.",
};

const faqCategories = [
  {
    name: "General",
    questions: [
      {
        q: "What is Binelek?",
        a: "Binelek is an AI-powered command center for small and medium businesses. It brings together task automation, business intelligence, security monitoring, and competitive intelligence in one platform.",
      },
      {
        q: "Who is Binelek for?",
        a: "Binelek is designed for growing SMBs with 10-200 employees. It's perfect for business owners and operations managers who want enterprise capabilities without enterprise complexity.",
      },
      {
        q: "How is Binelek different from other tools?",
        a: "Unlike piecemeal solutions, Binelek brings everything together in one platform with a unified AI that understands your entire business. You can ask questions in plain English and get answers from all your connected data.",
      },
      {
        q: "Do I need technical skills to use Binelek?",
        a: "No! Binelek is designed for non-technical users. Everything can be done through natural language queries and visual interfaces. No SQL, no coding required.",
      },
    ],
  },
  {
    name: "Pricing & Billing",
    questions: [
      {
        q: "How much does Binelek cost?",
        a: "We offer a free Starter plan, Pro at $49/month, Business at $149/month, and custom Enterprise pricing. Annual plans save 20%.",
      },
      {
        q: "Is there a free plan?",
        a: "Yes! Our Starter plan is free forever and includes 2 connectors and 50 AI queries per month.",
      },
      {
        q: "How does the free trial work?",
        a: "You can start with our free Starter plan immediately. For a full demo of Pro/Business features, schedule a demo with our team.",
      },
      {
        q: "Can I change my plan later?",
        a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards and can arrange invoicing for Enterprise customers.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "You can cancel anytime from your account settings. No questions asked, no hidden fees.",
      },
    ],
  },
  {
    name: "Security & Privacy",
    questions: [
      {
        q: "Is my data secure?",
        a: "Yes. We use industry-standard encryption (AES-256 at rest, TLS 1.3 in transit) and follow security best practices. Your data is isolated in a multi-tenant architecture.",
      },
      {
        q: "Where is my data stored?",
        a: "Data is stored in secure cloud infrastructure (AWS) with data centers in the US. Enterprise customers can request specific regions.",
      },
      {
        q: "Do you sell my data?",
        a: "Absolutely not. Your data is yours. We never sell, share, or use your data for advertising.",
      },
      {
        q: "What compliance certifications do you have?",
        a: "We support SOC2, GDPR, HIPAA, and PCI-DSS compliance requirements. Contact us for specific compliance documentation.",
      },
      {
        q: "Can I delete my data?",
        a: "Yes. You can request complete data deletion at any time, and we'll remove all your data within 30 days.",
      },
    ],
  },
  {
    name: "Integrations",
    questions: [
      {
        q: "What tools does Binelek integrate with?",
        a: "We integrate with Shopify, QuickBooks, Stripe, HubSpot, Square, Xero, Zoho, Gmail, Outlook, and more. Check our Integrations page for the full list.",
      },
      {
        q: "How do I connect my tools?",
        a: "Most integrations use OAuth — just click to connect and authorize access. Your data starts syncing automatically within minutes.",
      },
      {
        q: "What if I need an integration you don't have?",
        a: "Contact us! We're constantly adding new integrations based on customer requests. Enterprise customers can also request custom integrations.",
      },
      {
        q: "How often does data sync?",
        a: "Depends on your plan: Starter syncs every 24 hours, Pro every hour, and Business/Enterprise get real-time sync.",
      },
    ],
  },
  {
    name: "AI & Data",
    questions: [
      {
        q: "How does the AI work?",
        a: "Our AI understands natural language and can query across all your connected data sources. Ask questions like 'What was my revenue this month?' and get instant answers.",
      },
      {
        q: "Can I use Binelek without the AI features?",
        a: "Yes! While AI is a core feature, you can also use traditional dashboards, manual workflows, and visual builders without using natural language queries.",
      },
      {
        q: "How accurate are the AI responses?",
        a: "Our AI pulls directly from your connected data sources, so answers are based on your real data. We always show the source so you can verify.",
      },
      {
        q: "What data does the AI have access to?",
        a: "The AI only has access to data you've connected. It cannot access anything outside your authorized integrations.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-serif">
              Everything you need to know about Binelek.
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
        headline="Still have questions?"
        subheadline="Schedule a demo and we'll answer all your questions personally."
        variant="gradient"
      />
    </>
  );
}
