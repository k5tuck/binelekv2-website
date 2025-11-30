import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { locales, defaultLocale, type Locale } from "./config";

export default getRequestConfig(async () => {
  let locale: Locale = defaultLocale;

  try {
    // Get locale from cookie, fallback to default
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
    if (localeCookie && locales.includes(localeCookie as Locale)) {
      locale = localeCookie as Locale;
    }
  } catch {
    // If cookies aren't available (e.g., during static build), use default
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
