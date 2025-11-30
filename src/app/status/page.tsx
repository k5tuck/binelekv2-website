"use client";

import { useTranslations } from "next-intl";

export default function StatusPage() {
  const t = useTranslations("status");

  const services = [
    { name: t("apiService"), status: "operational" },
    { name: t("webApplication"), status: "operational" },
    { name: t("dataSync"), status: "operational" },
    { name: t("aiEngine"), status: "operational" },
    { name: t("integrations"), status: "operational" },
  ];

  return (
    <>
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-marketing">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t("heroTitle")}
              </h1>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                {t("allSystemsOperational")}
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
                      {t("operational")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>{t("lastUpdated")}: {new Date().toLocaleString()}</p>
              <p className="mt-2">
                For real-time updates, follow{" "}
                <a href="https://twitter.com/binelekstatus" className="text-primary-600 hover:text-primary-700">
                  @binelekstatus
                </a>
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-100 rounded-xl text-center">
              <p className="text-gray-600 text-sm">
                {t("placeholderNote")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
