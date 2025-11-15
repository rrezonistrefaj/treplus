"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";

const tabs = [
  { key: "all", label: "All Insights", href: "/insights" },
  { key: "Marketing", label: "Marketing", href: "/insights/category/Marketing" },
  { key: "Development", label: "Software", href: "/insights/category/Development" },
  { key: "Design", label: "Creative", href: "/insights/category/Design" },
  { key: "Industry News", label: "Industry News", href: "/insights/category/Industry%20News" },
];

export default function InsightsTabs({ current = "all" }: { current?: string }) {
  const pathname = usePathname();
  return (
    <div role="tablist" className="flex flex-wrap gap-3 justify-center">
      {tabs.map((t) => {
        const isActive = current === t.key || pathname === t.href || (t.key === "all" && pathname === "/insights");
        return (
          <Link
            key={t.key}
            href={t.href}
            role="tab"
            aria-selected={isActive}
            className={`px-4 py-2 rounded-[10px] border transition-colors ${
              isActive
                ? "bg-[#FF5F1F] border-[#FF5F1F] text-white"
                : "bg-white border-[#FF5F1F] text-[#FF5F1F] hover:bg-[#FF5F1F] hover:text-white"
            }`}
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}


