"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

// Loops form endpoint - posts directly to Loops, no API key needed
const LOOPS_FORM_URL = "https://app.loops.so/api/newsletter-form/cmif1oyfve17g0s0ik5zr5ki0";

interface EmailSignupProps {
  variant?: "default" | "hero" | "inline" | "dark";
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
}

export function EmailSignup({
  variant = "default",
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  successMessage = "Thanks! We'll be in touch!",
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

    // Rate limiting - check if signed up in last minute
    const timestamp = Date.now();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");
    if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
      setStatus("error");
      setMessage("Too many signups, please try again in a little while");
      return;
    }
    localStorage.setItem("loops-form-timestamp", String(timestamp));

    setStatus("loading");

    try {
      const formBody = `userGroup=waitList&mailingLists=&email=${encodeURIComponent(email)}`;

      const response = await fetch(LOOPS_FORM_URL, {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        setStatus("success");
        setMessage(successMessage);
        setEmail("");
      } else {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      if (error instanceof Error && error.message === "Failed to fetch") {
        setMessage("Too many signups, please try again in a little while");
      } else {
        setMessage(error instanceof Error ? error.message : "Oops! Something went wrong, please try again");
      }
      localStorage.setItem("loops-form-timestamp", "");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex items-center justify-center gap-2 ${variant === "dark" ? "text-white" : "text-green-600"}`}>
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
      container: "flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto",
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
            <span>Please wait...</span>
          </>
        ) : (
          buttonText
        )}
      </button>
      {status === "error" && (
        <p className={`text-sm mt-1 w-full text-center ${variant === "dark" ? "text-red-300" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
