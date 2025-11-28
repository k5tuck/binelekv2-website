"use client";

import Link from "next/link";
import Image from "next/image";
import { EmailSignup } from "./EmailSignup";

const productLinks = [
  { name: "Overview", href: "/product" },
  { name: "Ops Copilot", href: "/product/ops-copilot" },
  { name: "Mini Foundry", href: "/product/mini-foundry" },
  { name: "Security", href: "/product/security" },
  { name: "Marketplace", href: "/product/marketplace" },
];

const solutionsLinks = [
  { name: "For E-commerce", href: "/solutions" },
  { name: "For Retail", href: "/solutions" },
  { name: "For Prof. Services", href: "/solutions" },
  { name: "For SaaS", href: "/solutions" },
];

const resourcesLinks = [
  { name: "Getting Started", href: "/resources/getting-started", disabled: true },
  { name: "Demo Videos", href: "/resources/videos", disabled: true },
  { name: "FAQ", href: "/resources/faq" },
  { name: "Status", href: "/status", disabled: true },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

const integrationLogos = [
  {
    name: "Shopify",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M15.337 3.415c-.043-.174-.203-.261-.349-.261-.145 0-2.905.007-2.905.007s-1.939-1.882-2.127-2.07c-.187-.188-.554-.131-.697-.087 0 0-.453.139-1.209.371-.072-.214-.178-.467-.313-.726-.463-.854-1.142-1.306-1.962-1.306-.058 0-.117.003-.175.01-.026-.028-.051-.056-.078-.084C5.043-.238 4.462-.06 3.959.418c-.661.629-1.317 1.905-1.662 3.322-.893.276-1.524.471-1.537.476-.48.15-.495.165-.558.619C.134 5.307 0 15.472 0 15.472l11.247 2.118L20 15.87s-4.61-12.204-4.663-12.455zM10.89 4.669l-.956.296c0-.312-.043-.746-.173-1.107-.429.069-.809.315-1.073.66.142.254.234.56.277.88l-1.28.396c.163-.632.529-1.252.907-1.589-.314-.1-.655-.082-1.022.074.116.198.205.418.277.64-.197.061-1.206.373-1.206.373-.015-.043-.045-.179-.055-.256.292-.094 1.064-.331 1.064-.331-.043-.152-.098-.303-.166-.447-.401.125-1.264.392-1.264.392s-.01-.056-.022-.154c.378-.118 1.227-.381 1.227-.381-.058-.125-.123-.247-.196-.359-.333.104-1.23.382-1.23.382l-.015-.103c.385-.12 1.262-.391 1.262-.391-.081-.108-.172-.207-.269-.297-.28.087-1.306.405-1.306.405l.002-.015c-.001.002-.001.002-.001.005 0 .001 0 .002-.001.005l-.001.01c-.002.012-.003.025-.005.039l.013.075.098-.03c.073.068.143.144.209.226l-1.22.378c.004.038.01.078.016.119l1.278-.396c.057.098.106.205.151.316l-1.234.382c.008.056.017.115.027.176l1.255-.389c.035.118.064.243.086.372l-1.228.38c.015.091.03.187.045.289.027.177.048.365.062.559l1.295-.401c-.004.138-.014.275-.031.41-.059.459-.212.872-.436 1.209-.21.317-.476.564-.773.734l-.065.033-.053.024-.048.019-.044.015-.041.012-.038.009-.037.007-.036.005-.035.003-.036.002h-.071l-.036-.003-.035-.005-.034-.007-.032-.01-.03-.012-.028-.014-.024-.015-.021-.016-.018-.016-.024-.024c-.024-.024-.044-.051-.062-.079-.069-.108-.102-.247-.102-.412 0-.024.001-.049.003-.074l-.002.011.014-.143.02-.125 1.24-.384c.007-.075.012-.152.015-.23l-1.247.386c.01-.083.016-.166.022-.25l1.252-.388c-.002-.11-.008-.221-.018-.331l-1.259.39c-.013-.113-.03-.226-.05-.337l1.262-.391c-.022-.109-.048-.217-.077-.323l-1.269.393c-.027-.097-.058-.193-.091-.286l1.276-.395c-.04-.099-.084-.196-.131-.29l-1.285.398c-.051-.095-.107-.187-.166-.276l1.296-.401c-.074-.107-.156-.208-.245-.302l-1.312.406c-.018-.019-.037-.037-.056-.054l.001-.001c.001-.002.002-.003.002-.004l.005-.01c.003-.009.007-.017.01-.025.292-.72.893-1.27 1.591-1.51.27-.093.552-.145.826-.145.138 0 .273.014.402.039-.074-.101-.158-.196-.25-.284-.407-.393-.887-.589-1.413-.589-.158 0-.321.017-.485.051-.726.152-1.388.581-1.893 1.252-.454.603-.786 1.366-.944 2.222-.04.216-.068.426-.086.631l.084-.026c.179-.583.499-1.113.92-1.463.42-.349.909-.507 1.37-.437.223.034.434.115.627.236-.081-.225-.192-.437-.329-.631-.013-.019-.027-.037-.04-.056l.001-.001.006-.004c.011-.007.022-.013.034-.019.274-.151.601-.195.951-.117.437.096.853.37 1.193.792.101.126.194.264.277.411.214-.066.383-.119.456-.141.019-.006.034-.013.054-.019l-.001.001c-.003-.012-.009-.033-.013-.054-.039-.165-.127-.464-.301-.787z" />
      </svg>
    ),
  },
  {
    name: "QuickBooks",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.636 0 8.4 3.764 8.4 8.4s-3.764 8.4-8.4 8.4-8.4-3.764-8.4-8.4S7.364 3.6 12 3.6zm-2.4 4.8v7.2H7.2V8.4h2.4zm4.8 0c1.325 0 2.4 1.075 2.4 2.4v2.4c0 1.325-1.075 2.4-2.4 2.4h-2.4v-2.4h2.4v-2.4h-2.4V8.4h2.4z"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.2 2.2 0 0017.238.84h-.066a2.2 2.2 0 00-2.193 2.193v.066c0 .87.51 1.617 1.244 1.974v2.862a6.27 6.27 0 00-2.792 1.138l-7.463-5.86a2.479 2.479 0 00.058-.51 2.514 2.514 0 10-2.514 2.514c.474 0 .916-.135 1.294-.362l7.316 5.746a6.27 6.27 0 00-.634 2.757 6.321 6.321 0 006.321 6.32 6.32 6.32 0 001.184-12.528zm-1.184 9.49a3.282 3.282 0 110-6.564 3.282 3.282 0 010 6.564z"/>
      </svg>
    ),
  },
  {
    name: "Square",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4.01 0A4.01 4.01 0 000 4.01v15.98A4.01 4.01 0 004.01 24h15.98A4.01 4.01 0 0024 19.99V4.01A4.01 4.01 0 0019.99 0H4.01zm1.508 4.756h12.964c.799 0 1.518.719 1.518 1.518v11.452c0 .799-.72 1.518-1.518 1.518H5.518c-.799 0-1.518-.72-1.518-1.518V6.274c0-.799.72-1.518 1.518-1.518zm3.089 2.627c-.452 0-.824.371-.824.824v7.586c0 .452.372.824.824.824h6.786c.452 0 .824-.372.824-.824V8.207a.827.827 0 00-.824-.824H8.607z"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-marketing py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Solutions
              <span className="ml-2 text-xs text-gray-400">Coming Soon</span>
            </h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  {link.disabled ? (
                    <span className="text-sm text-gray-400 flex items-center gap-2">
                      {link.name}
                      <span className="text-xs bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded">Soon</span>
                    </span>
                  ) : (
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get product updates and news delivered to your inbox.
            </p>
            <EmailSignup
              variant="inline"
              buttonText="Subscribe"
              successMessage="You're subscribed! We'll keep you updated."
            />
          </div>
        </div>

        {/* Integration Logos */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center mb-6">Integrates with your favorite tools</p>
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
            &copy; {new Date().getFullYear()} Binelek. All rights reserved.
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
