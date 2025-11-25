"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const productLinks = [
  { name: "Overview", href: "/product" },
  { name: "Ops Copilot", href: "/product/ops-copilot" },
  { name: "Mini Foundry", href: "/product/mini-foundry" },
  { name: "Cybersecurity Scanner", href: "/product/security" },
  { name: "Marketplace Intelligence", href: "/product/marketplace" },
];

const solutionsLinks = [
  { name: "For E-commerce", href: "/solutions", badge: "Coming Soon" },
  { name: "For Retail", href: "/solutions", badge: "Coming Soon" },
  { name: "For Professional Services", href: "/solutions", badge: "Coming Soon" },
  { name: "For SaaS", href: "/solutions", badge: "Coming Soon" },
];

const resourcesLinks = [
  { name: "Getting Started", href: "/resources/getting-started" },
  { name: "Demo Videos", href: "/resources/videos" },
  { name: "FAQ", href: "/resources/faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-marketing">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Binelek Logo"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span className="text-2xl font-bold text-primary-600">Binelek</span>
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
                Product
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
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/why-binelek" className="text-gray-700 hover:text-primary-600 font-medium">
              Why Binelek
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium">
                Solutions
                <span className="ml-2 text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">
                  Coming Soon
                </span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "solutions" && (
                <div className="absolute top-full left-0 w-64 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between px-4 py-2 text-gray-500 hover:bg-primary-50"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/integrations" className="text-gray-700 hover:text-primary-600 font-medium">
              Integrations
            </Link>

            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium">
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium">
                Resources
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "resources" && (
                <div className="absolute top-full left-0 w-48 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-primary-600 font-medium">
              Login
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Schedule a Demo
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
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Product</p>
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link href="/why-binelek" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Why Binelek
              </Link>
              <Link href="/integrations" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Integrations
              </Link>
              <Link href="/pricing" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Resources</p>
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 space-y-3">
                <Link href="/login" className="block text-center py-2 text-gray-700 font-medium">
                  Login
                </Link>
                <Link
                  href="/demo"
                  className="block text-center py-3 text-white bg-primary-600 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
