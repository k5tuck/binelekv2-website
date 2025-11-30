"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "./LanguageSelector";

const productLinks = [
  { nameKey: "overview", href: "/product" },
  { nameKey: "opsCopilot", href: "/product/ops-copilot" },
  { nameKey: "miniFoundry", href: "/product/mini-foundry" },
  { nameKey: "cybersecurityScanner", href: "/product/security" },
  { nameKey: "marketplaceIntelligence", href: "/product/marketplace" },
];

const solutionsLinks = [
  { nameKey: "forEcommerce", href: "/solutions", hasBadge: true },
  { nameKey: "forRetail", href: "/solutions", hasBadge: true },
  { nameKey: "forProfessionalServices", href: "/solutions", hasBadge: true },
  { nameKey: "forSaas", href: "/solutions", hasBadge: true },
];

const resourcesLinks = [
  { nameKey: "gettingStarted", href: "/resources/getting-started", disabled: true },
  { nameKey: "demoVideos", href: "/resources/videos", disabled: true },
  { nameKey: "faq", href: "/resources/faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-marketing">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-light.svg"
              alt="Binelek - The SMB AI Platform"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("product")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium">
                {t("product")}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "product" && (
                <div className="absolute top-full left-0 w-56 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {t(link.nameKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/why-binelek" className="text-gray-700 hover:text-primary-600 font-medium">
              {t("whyBinelek")}
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium">
                {t("solutions")}
                <span className="ml-2 text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">
                  {tCommon("comingSoon")}
                </span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "solutions" && (
                <div className="absolute top-full left-0 w-64 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.nameKey}
                      href={link.href}
                      className="flex items-center justify-between px-4 py-2 text-gray-500 hover:bg-primary-50"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {t(link.nameKey)}
                      {link.hasBadge && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                          {tCommon("comingSoon")}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/integrations" className="text-gray-700 hover:text-primary-600 font-medium">
              {t("integrations")}
            </Link>

            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium">
              {t("pricing")}
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium">
                {t("resources")}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "resources" && (
                <div className="absolute top-full left-0 w-48 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {resourcesLinks.map((link) => (
                    link.disabled ? (
                      <span
                        key={link.href}
                        className="flex items-center justify-between px-4 py-2 text-gray-400 cursor-not-allowed"
                      >
                        {t(link.nameKey)}
                        <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded">{tCommon("soon")}</span>
                      </span>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t(link.nameKey)}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <Link
              href="/#signup"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {tCommon("getEarlyAccess")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="space-y-4">
              {/* Language Selector - Prominent at top */}
              <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-semibold text-gray-700">{tCommon("language")}</span>
                <LanguageSelector />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">{t("product")}</p>
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(link.nameKey)}
                  </Link>
                ))}
              </div>
              <Link href="/why-binelek" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t("whyBinelek")}
              </Link>
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-2">
                  {t("solutions")}
                  <span className="text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">{tCommon("comingSoon")}</span>
                </p>
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.nameKey}
                    href={link.href}
                    className="flex items-center gap-2 py-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(link.nameKey)}
                  </Link>
                ))}
              </div>
              <Link href="/integrations" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t("integrations")}
              </Link>
              <Link href="/pricing" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t("pricing")}
              </Link>
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">{t("resources")}</p>
                {resourcesLinks.map((link) => (
                  link.disabled ? (
                    <span
                      key={link.href}
                      className="flex items-center gap-2 py-2 text-gray-400"
                    >
                      {t(link.nameKey)}
                      <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded">{tCommon("soon")}</span>
                    </span>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(link.nameKey)}
                    </Link>
                  )
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/#signup"
                  className="block text-center py-3 text-white bg-primary-600 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {tCommon("getEarlyAccess")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
