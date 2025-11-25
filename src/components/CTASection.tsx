import { EmailSignup } from "./EmailSignup";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  variant?: "default" | "gradient" | "dark";
  showEmailSignup?: boolean;
}

export function CTASection({
  headline = "Be the first to know",
  subheadline = "Sign up to get notified when Binelek launches and receive early access.",
  variant = "default",
  showEmailSignup = true,
}: CTASectionProps) {
  const variants = {
    default: "bg-gray-50",
    gradient: "gradient-cta text-white",
    dark: "bg-gray-900 text-white",
  };

  const emailVariant = variant === "default" ? "default" : "dark";

  return (
    <section className={`py-16 lg:py-24 ${variants[variant]}`}>
      <div className="container-marketing text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${variant !== "default" ? "" : "text-gray-900"}`}>
          {headline}
        </h2>
        <p className={`text-lg max-w-2xl mx-auto mb-8 ${variant !== "default" ? "opacity-90" : "text-gray-600"}`}>
          {subheadline}
        </p>
        {showEmailSignup && (
          <div className="flex justify-center">
            <EmailSignup
              variant={emailVariant === "dark" ? "dark" : "hero"}
              buttonText="Notify Me"
              placeholder="Enter your email address"
              successMessage="You're on the list! We'll be in touch soon."
            />
          </div>
        )}
      </div>
    </section>
  );
}
