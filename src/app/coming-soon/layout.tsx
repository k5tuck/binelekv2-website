import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Coming Soon - Binelek",
  description: "Binelek is coming soon. The AI-powered command center for growing businesses.",
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout doesn't include Header/Footer since the landing page has its own
  return children;
}
