import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { locales } from "../i18n.config";

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);


