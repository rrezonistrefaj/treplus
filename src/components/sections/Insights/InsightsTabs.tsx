"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { insightsTabsData } from "./insightsTabsData";

export default function InsightsTabs({ current = "all" }: { current?: string }) {
  const pathname = usePathname();
  const t = useTranslations("Insights.tabs");
  
  // Get tabs from data file, labels from translations
  const tabs = insightsTabsData.tabs.map((tab) => ({
    ...tab,
    label: t(tab.key),
  }));
  
  return (
    <div role="tablist" className="flex flex-wrap gap-3 justify-center">
      {tabs.map((tab) => {
        const isActive = current === tab.categoryKey || pathname === tab.href || (tab.key === "all" && pathname === "/insights");
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
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}


