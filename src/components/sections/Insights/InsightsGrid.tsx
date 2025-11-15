"use client";

import React, { useMemo, useState } from "react";
import InsightCard, { InsightCardItem } from "./InsightCard";
import { useTranslations } from "next-intl";

interface InsightsGridProps {
  items: InsightCardItem[];
}

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

export default function InsightsGrid({ items }: InsightsGridProps) {
  const t = useTranslations("Insights");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const canLoadMore = visibleCount < items.length;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map((item) => (
          <InsightCard key={item.slug} item={item} />
        ))}
      </div>
      {canLoadMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, items.length))}
            className="bg-white border border-[#FF5F1F] text-[#FF5F1F] hover:bg-orange-50 px-6 py-3 rounded-[10px] transition-colors"
          >
            {t("buttons.viewMore", { default: "View more" })}
          </button>
        </div>
      )}
    </div>
  );
}


