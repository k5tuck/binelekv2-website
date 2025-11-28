"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";

export function LanguageSelector() {
  const currentLocale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (locale: Locale) => {
    // Set the locale cookie
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
    setIsOpen(false);
    // Reload the page to apply the new locale
    window.location.reload();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-base">{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors ${
                locale === currentLocale ? "bg-primary-50 text-primary-600" : "text-gray-700"
              }`}
            >
              <span className="text-lg">{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
              {locale === currentLocale && (
                <svg className="w-4 h-4 ml-auto text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
