import { Metadata } from "next";
import { ComingSoonLanding } from "@/components/ComingSoonLanding";

export const metadata: Metadata = {
  title: "Coming Soon - Binelek",
  description: "Binelek is coming soon. The AI-powered command center for growing businesses.",
};

export default function ComingSoonPage() {
  return <ComingSoonLanding />;
}
