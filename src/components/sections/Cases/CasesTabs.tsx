"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { CaseCategory } from "./casesData";

interface CasesTabsProps {
  currentCategory?: CaseCategory | "all";
}

const tabs: { key: "all" | CaseCategory; href: string }[] = [
  { key: "all", href: "/cases" },
  { key: "marketing", href: "/cases/category/marketing" },
  { key: "software", href: "/cases/category/software" },
  { key: "creative", href: "/cases/category/creative" },
];

export default function CasesTabs({ currentCategory = "all" }: CasesTabsProps) {
  const t = useTranslations("Cases");
  const pathname = usePathname();

  return (
    <div role="tablist" aria-label="Cases categories" className="flex flex-wrap gap-3 justify-center">
      {tabs.map((tab) => {
        const isActive =
          currentCategory === tab.key ||
          pathname === tab.href ||
          (tab.key === "all" && pathname === "/cases");
        
        return (
          <Link
            key={tab.key}
            href={tab.href}
            role="tab"
            aria-selected={isActive}
            className={`px-4 py-2 rounded-[10px] border transition-colors ${
              isActive
                ? "bg-[#FF5F1F] border-[#FF5F1F] text-white"
                : "bg-white border-[#FF5F1F] text-[#FF5F1F] hover:bg-[#FF5F1F] hover:text-white"
            }`}
          >
            {t(`tabs.${tab.key}`)}
          </Link>
        );
      })}
    </div>
  );
}


