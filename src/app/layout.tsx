import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
