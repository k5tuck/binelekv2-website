import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status",
  description: "Check the current status of Binelek services and infrastructure.",
};

const services = [
  { name: "API", status: "operational" },
  { name: "Web Application", status: "operational" },
  { name: "Data Sync", status: "operational" },
  { name: "AI Services", status: "operational" },
  { name: "Integrations", status: "operational" },
];

export default function StatusPage() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-marketing">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                System Status
              </h1>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                All systems operational
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Services</h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700">{service.name}</span>
                    <span className="flex items-center text-sm text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      Operational
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Last updated: {new Date().toLocaleString()}</p>
              <p className="mt-2">
                For real-time updates, follow{" "}
                <a href="https://twitter.com/binelekstatus" className="text-primary-600 hover:text-primary-700">
                  @binelekstatus
                </a>
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-100 rounded-xl text-center">
              <p className="text-gray-600 text-sm">
                This is a placeholder status page. A full status page with incident history and real-time monitoring will be available at{" "}
                <span className="font-mono text-primary-600">status.binelek.io</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
