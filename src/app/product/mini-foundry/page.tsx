import { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mini Foundry - Business Intelligence & Analytics",
  description: "Beautiful dashboards without the learning curve. Connect your data sources and ask questions in plain English.",
};

const capabilities = [
  {
    title: "Data Consolidation",
    description: "Connect all your sources and see everything in one place. No more switching between apps.",
    icon: "🔗",
  },
  {
    title: "Custom Dashboards",
    description: "Drag-and-drop builder with pre-built templates. Create beautiful visualizations in minutes.",
    icon: "📊",
  },
  {
    title: "Automated Reports",
    description: "Schedule daily, weekly, or monthly reports. Delivered to your inbox automatically.",
    icon: "📬",
  },
];

const widgetTypes = [
  { name: "Line Chart", description: "Trends over time" },
  { name: "Bar Chart", description: "Comparing categories" },
  { name: "Pie Chart", description: "Distribution/composition" },
  { name: "Number Card", description: "Single key metrics" },
  { name: "Table", description: "Detailed data lists" },
  { name: "Map", description: "Geographic data" },
];

const exampleQueries = [
  "What was my revenue this month?",
  "Show me top customers by order value",
  "Compare this quarter to last quarter",
  "Which products are selling best?",
  "What's my customer churn rate?",
];

const templates = ["Sales Overview", "Customer Analytics", "Financial Health", "Marketing Performance", "Inventory Status"];

export default function MiniFoundryPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container-marketing">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">📊</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ask your data anything
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-serif">
              Beautiful dashboards without the learning curve.
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
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-8">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-gray-600 font-serif">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Widget Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Visualize data your way
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {widgetTypes.map((widget) => (
              <div key={widget.name} className="bg-white p-4 rounded-xl text-center">
                <div className="h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-2xl">
                  📈
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{widget.name}</h3>
                <p className="text-xs text-gray-500">{widget.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Language Queries */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-marketing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Just ask in plain English
            </h2>
            <div className="space-y-3">
              {exampleQueries.map((query) => (
                <div key={query} className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <span className="text-primary-500 mr-3">💬</span>
                  <span className="text-gray-700 italic">&ldquo;{query}&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Templates */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-marketing">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pre-built templates to get started fast
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {templates.map((template) => (
              <div key={template} className="px-6 py-3 bg-white rounded-lg shadow-sm text-gray-700 font-medium">
                {template}
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
              Business intelligence without the learning curve
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              No SQL. No data engineering. No consultants. Connect your tools, and start asking questions immediately.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="gradient" />
    </>
  );
}
