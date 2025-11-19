"use client";

import React, { useMemo } from "react";
import { insightsData } from "./insightsData";
import InsightsTabs from "./InsightsTabs";
import InsightsGrid from "./InsightsGrid";
import { InsightCardItem } from "./InsightCard";

export default function InsightsListing({ initialCategory = "all" }: { initialCategory?: string }) {
  const filtered = useMemo(() => {
    if (initialCategory === "all") return insightsData.items;
    return insightsData.items.filter((i) => i.category === initialCategory);
  }, [initialCategory]);

  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:pl-0 pb-20">
      <div className="flex justify-center mb-25 mt-6">
        <InsightsTabs current={initialCategory} />
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      <InsightsGrid items={filtered.map(({ id: _, ...i }) => i as InsightCardItem)} />
    </section>
  );
}


