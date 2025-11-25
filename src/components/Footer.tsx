import Link from "next/link";
import Image from "next/image";

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
  { name: "Getting Started", href: "/resources/getting-started" },
  { name: "Demo Videos", href: "/resources/videos" },
  { name: "FAQ", href: "/resources/faq" },
  { name: "Status", href: "/status" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

const integrationLogos = [
  { name: "Shopify", src: "/icons/shopify.svg" },
  { name: "QuickBooks", src: "/icons/quickbooks.svg" },
  { name: "Stripe", src: "/icons/stripe.svg" },
  { name: "HubSpot", src: "/icons/hubspot.svg" },
  { name: "Square", src: "/icons/square.svg" },
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
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                    {link.name}
                  </Link>
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
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Integration Logos */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center mb-6">Integrates with your favorite tools</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrationLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500"
                title={logo.name}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Binelek Logo"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span className="text-xl font-bold text-primary-600">Binelek</span>
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
