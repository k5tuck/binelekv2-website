"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { EmailSignup } from "./EmailSignup";

// Hub-based navigation structure with modules nested under parent hubs
const hubLinks = [
  {
    nameKey: "insightsHub",
    href: "/product/insights-hub",
    modules: [
      { nameKey: "miniFoundry", href: "/product/mini-foundry" },
      { nameKey: "marketplaceIntelligence", href: "/product/marketplace" },
    ],
  },
  {
    nameKey: "actionHub",
    href: "/product/action-hub",
    modules: [
      { nameKey: "opsCopilot", href: "/product/ops-copilot" },
    ],
  },
  {
    nameKey: "dataLineage",
    href: "/product/data-lineage",
    modules: [],
  },
];

const standaloneLinks = [
  { nameKey: "cybersecurityScanner", href: "/product/security", comingSoon: true },
];

const resourcesLinks = [
  { nameKey: "gettingStarted", href: "/resources/getting-started", disabled: true },
  { nameKey: "demoVideos", href: "/resources/videos", disabled: true },
  { nameKey: "faq", href: "/resources/faq" },
  { nameKey: "status", href: "/status", disabled: true },
];

const companyLinks = [
  { nameKey: "about", href: "/about" },
  { nameKey: "contact", href: "/contact" },
  { nameKey: "careers", href: "/careers" },
  { nameKey: "privacy", href: "/privacy" },
  { nameKey: "terms", href: "/terms" },
];

const integrationLogos = [
  {
    name: "Shopify",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#7AB55C">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
      </svg>
    ),
  },
  {
    name: "QuickBooks",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#2CA01C">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF7A59">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"/>
      </svg>
    ),
  },
  {
    name: "Square",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#006AFF">
        <path d="M4.5 2A2.5 2.5 0 002 4.5v15A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0019.5 2h-15zm2 4h11a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 16.5v-9A1.5 1.5 0 016.5 6z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const tCommon = useTranslations("common");

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-marketing py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t("product")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product" className="text-sm text-gray-600 hover:text-primary-600">
                  {t("overview")}
                </Link>
              </li>
              {hubLinks.map((hub) => (
                <li key={hub.href}>
                  <Link href={hub.href} className="text-sm text-gray-900 font-medium hover:text-primary-600">
                    {t(hub.nameKey)}
                  </Link>
                  {hub.modules.length > 0 && (
                    <ul className="mt-1 ml-3 space-y-1">
                      {hub.modules.map((module) => (
                        <li key={module.href}>
                          <Link href={module.href} className="text-sm text-gray-500 hover:text-primary-600">
                            {t(module.nameKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              {standaloneLinks.map((link) => (
                <li key={link.href}>
                  {link.comingSoon ? (
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-600 flex items-center gap-2">
                      {t(link.nameKey)}
                      <span className="text-xs bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded">{tCommon("soon")}</span>
                    </Link>
                  ) : (
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                      {t(link.nameKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t("resources")}</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  {link.disabled ? (
                    <span className="text-sm text-gray-400 flex items-center gap-2">
                      {t(link.nameKey)}
                      <span className="text-xs bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded">{tCommon("soon")}</span>
                    </span>
                  ) : (
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                      {t(link.nameKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t("company")}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="col-span-2 md:col-span-4">
            <div className="md:flex md:items-start md:justify-between md:gap-8 lg:block">
              <div className="md:flex-1 lg:block">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 md:mb-2 lg:mb-4">{tFooter("stayUpdated")}</h3>
                <p className="text-sm text-gray-600 mb-4 md:mb-0 lg:mb-4">
                  {tFooter("newsletterText")}
                </p>
              </div>
              <div className="md:flex-1 md:max-w-sm lg:max-w-none">
                <EmailSignup
                  variant="inline"
                  buttonText={tCommon("subscribe")}
                  successMessage={tFooter("subscribeSuccess")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Integration Logos */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center mb-6">{tFooter("integratesWith")}</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {integrationLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:border-primary-200 hover:text-primary-600 transition-colors"
              >
                {logo.icon}
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Image
              src="/logo-light.svg"
              alt="Binelek - The SMB AI Platform"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </div>

          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Binelek. {tFooter("allRightsReserved")}
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="https://twitter.com/binelek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/binelek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
