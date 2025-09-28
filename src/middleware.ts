import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localeDetection: true,
});

export const config = {
  matcher: ["/", "/(en|al|nl)/:path*"],
};


