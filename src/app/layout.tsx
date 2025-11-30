import type { Metadata } from "next";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

// ============================================
// COMING SOON MODE TOGGLE
// Set to false when ready to launch
// ============================================
const COMING_SOON_MODE = false;

export const metadata: Metadata = {
  title: {
    default: "Binelek - AI-Powered Command Center for Your Business",
    template: "%s | Binelek",
  },
  description:
    "Binelek is the AI-powered command center that helps SMBs automate operations, understand data, secure their business, and outsmart competition.",
  keywords: [
    "AI business platform",
    "SMB automation",
    "business intelligence",
    "workflow automation",
    "cybersecurity for small business",
    "competitive intelligence",
  ],
  authors: [{ name: "Binelek" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://binelek.io",
    siteName: "Binelek",
    title: "Binelek - AI-Powered Command Center for Your Business",
    description:
      "Automate operations, understand data, secure your business, and outsmart competition with Binelek.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binelek - AI-Powered Command Center for Your Business",
    description:
      "Automate operations, understand data, secure your business, and outsmart competition with Binelek.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // In coming soon mode, hide header/footer entirely
  // The middleware redirects all pages to /coming-soon anyway
  const showNav = !COMING_SOON_MODE;

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {showNav && <Header />}
          <main className="flex-grow">{children}</main>
          {showNav && <Footer />}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
