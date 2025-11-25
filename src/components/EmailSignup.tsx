"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface EmailSignupProps {
  variant?: "default" | "hero" | "inline" | "dark";
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  source?: string;
}

export function EmailSignup({
  variant = "default",
  placeholder = "Enter your email",
  buttonText = "Get Notified",
  successMessage = "Thanks! We'll notify you when we launch.",
  source = "website",
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage(data.alreadySubscribed ? "You're already on the list!" : successMessage);
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex items-center gap-2 ${variant === "dark" ? "text-white" : "text-green-600"}`}>
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">{message}</span>
      </div>
    );
  }

  const baseInputStyles = "flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all";
  const baseButtonStyles = "px-6 py-3 font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap";

  const variantStyles = {
    default: {
      container: "flex flex-col sm:flex-row gap-3 w-full max-w-md",
      input: `${baseInputStyles} border-gray-300 focus:ring-primary-500 focus:border-primary-500`,
      button: `${baseButtonStyles} bg-primary-600 text-white hover:bg-primary-700`,
    },
    hero: {
      container: "flex flex-col sm:flex-row gap-3 w-full max-w-lg",
      input: `${baseInputStyles} border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-lg py-4`,
      button: `${baseButtonStyles} bg-primary-600 text-white hover:bg-primary-700 text-lg px-8 py-4`,
    },
    inline: {
      container: "flex gap-2 w-full max-w-sm",
      input: `${baseInputStyles} border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-sm py-2`,
      button: `${baseButtonStyles} bg-primary-600 text-white hover:bg-primary-700 text-sm px-4 py-2`,
    },
    dark: {
      container: "flex flex-col sm:flex-row gap-3 w-full max-w-lg",
      input: `${baseInputStyles} bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-white/50 focus:border-white/50 text-lg py-4`,
      button: `${baseButtonStyles} bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4`,
    },
  };

  const styles = variantStyles[variant];

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className="relative flex-1">
        <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${variant === "dark" ? "text-white/60" : "text-gray-400"}`} />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={placeholder}
          className={`${styles.input} pl-10`}
          disabled={status === "loading"}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className={styles.button}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Joining...</span>
          </>
        ) : (
          buttonText
        )}
      </button>
      {status === "error" && (
        <p className={`text-sm mt-1 ${variant === "dark" ? "text-red-300" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
