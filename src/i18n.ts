import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, locales } from "./i18n.config";

export default getRequestConfig(async ({ locale }) => {
  const candidate = locale ?? "en";
  if (!locales.includes(candidate as Locale)) {
    return notFound();
  }

  return {
    locale: candidate,
    messages: (await import(`../locales/${candidate}.json`)).default,
  };
});


