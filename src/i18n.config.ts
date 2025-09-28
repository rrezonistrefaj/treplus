export const locales = ["en", "al", "nl"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  al: "Albanian",
  nl: "Dutch",
};


