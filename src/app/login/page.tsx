"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("login");

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-12 bg-gray-50">
      <div className="w-full max-w-md px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-primary-600">
              Binelek
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-2">{t("welcomeBack")}</h1>
            <p className="text-gray-600">{t("signInToAccount")}</p>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                {t("password")}
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-600">{t("rememberMe")}</span>
              </label>
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                {t("forgotPassword")}
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {t("signIn")}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {t("noAccount")}{" "}
              <Link href="/demo" className="text-primary-600 font-medium hover:text-primary-700">
                {t("scheduleDemo")}
              </Link>
            </p>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-sm text-gray-500">
              {t("placeholderNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
