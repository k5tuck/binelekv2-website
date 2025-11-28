export const locales = ["en", "es", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
};

// Currency settings per locale
export const localeCurrencies: Record<Locale, { code: string; symbol: string; name: string }> = {
  en: { code: "USD", symbol: "$", name: "US Dollar" },
  es: { code: "EUR", symbol: "€", name: "Euro" },
  fr: { code: "EUR", symbol: "€", name: "Euro" },
  de: { code: "EUR", symbol: "€", name: "Euro" },
};

// Pricing multipliers (relative to USD base prices)
export const currencyMultipliers: Record<string, number> = {
  USD: 1,
  EUR: 0.92, // Approximate conversion
};
