"use client";

import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import CaseCard from "./CaseCard";
import { CaseItem } from "./casesData";

interface CasesGridProps {
  items: CaseItem[];
}

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 6;

export default function CasesGrid({ items }: CasesGridProps) {
  const t = useTranslations("Cases");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );

  const canLoadMore = visibleCount < items.length;

  const handleLoadMore = () => {
    setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, items.length));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map((item, idx) => (
          <CaseCard key={item.id} item={item} index={idx} />
        ))}
      </div>
      {canLoadMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-white border border-[#FF5F1F] text-[#FF5F1F] hover:bg-orange-50 px-6 py-3 rounded-[10px] transition-colors"
          >
            {t("buttons.viewMore")}
          </button>
        </div>
      )}
    </div>
  );
}


