import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
  variant?: "default" | "gradient" | "dark";
}

export function CTASection({
  headline = "See Binelek in action",
  subheadline = "Book a personalized demo and discover how Binelek can transform your business operations.",
  primaryCTA = "Schedule a Demo",
  primaryHref = "/demo",
  secondaryCTA,
  secondaryHref,
  variant = "default",
}: CTASectionProps) {
  const variants = {
    default: "bg-gray-50",
    gradient: "gradient-cta text-white",
    dark: "bg-gray-900 text-white",
  };

  const buttonVariants = {
    default: "bg-primary-600 text-white hover:bg-primary-700",
    gradient: "bg-white text-primary-600 hover:bg-gray-100",
    dark: "bg-white text-gray-900 hover:bg-gray-100",
  };

  const secondaryButtonVariants = {
    default: "border-primary-600 text-primary-600 hover:bg-primary-50",
    gradient: "border-white text-white hover:bg-white/10",
    dark: "border-white text-white hover:bg-white/10",
  };

  return (
    <section className={`py-16 lg:py-24 ${variants[variant]}`}>
      <div className="container-marketing text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${variant !== "default" ? "" : "text-gray-900"}`}>
          {headline}
        </h2>
        <p className={`text-lg max-w-2xl mx-auto mb-8 ${variant !== "default" ? "opacity-90" : "text-gray-600"}`}>
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={`inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-colors ${buttonVariants[variant]}`}
          >
            {primaryCTA}
          </Link>
          {secondaryCTA && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border-2 transition-colors ${secondaryButtonVariants[variant]}`}
            >
              {secondaryCTA}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
