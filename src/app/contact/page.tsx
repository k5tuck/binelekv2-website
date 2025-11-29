"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-marketing">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t("heroTitle")}
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-serif">
                {t("heroSubtitle")}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t("generalInquiries")}</h3>
                  <p className="text-gray-600">info@binelek.io</p>
                </div>
                {/* TODO: Create sales@binelek.io email account */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t("sales")}</h3>
                  <p className="text-gray-400">sales@binelek.io <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded ml-1">{t("comingSoon")}</span></p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t("support")}</h3>
                  <p className="text-gray-600">support@binelek.io</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t("supportHours")}</h3>
                  <p className="text-gray-600">{t("supportHoursValue")}</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">{t("enterpriseTitle")}</h3>
                <p className="text-gray-600 mb-4 font-serif">
                  {t("enterpriseSubtitle")}
                </p>
                <Link
                  href="/demo"
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  {t("scheduleEnterpriseDemo")} →
                </Link>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("formTitle")}</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("firstName")}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("lastName")}
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
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("subject")}
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  >
                    <option value="">{t("selectTopic")}</option>
                    <option value="general">{t("generalInquiry")}</option>
                    <option value="sales">{t("salesQuestion")}</option>
                    <option value="support">{t("technicalSupport")}</option>
                    <option value="partnership">{t("partnership")}</option>
                    <option value="press">{t("pressMedia")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={t("howCanWeHelp")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  {t("sendMessage")}
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
              <h3 className="font-bold text-gray-900 mb-2">{t("getEarlyAccess")}</h3>
              <p className="text-gray-600 text-sm">{t("getEarlyAccessDesc")}</p>
            </Link>
            <Link href="/resources/faq" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">{t("faq")}</h3>
              <p className="text-gray-600 text-sm">{t("faqDesc")}</p>
            </Link>
            <Link href="/status" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">{t("systemStatus")}</h3>
              <p className="text-gray-600 text-sm">{t("systemStatusDesc")}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
