"use client";

import React, { useMemo } from "react";
import CasesTabs from "./CasesTabs";
import CasesGrid from "./CasesGrid";
import { CaseCategory, casesData } from "./casesData";

interface CasesListingProps {
  initialCategory?: CaseCategory | "all";
}

export default function CasesListing({ initialCategory = "all" }: CasesListingProps) {

  const filtered = useMemo(() => {
    if (initialCategory === "all") return casesData;
    return casesData.filter((c) => c.category === initialCategory);
  }, [initialCategory]);

  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:pl-0 pb-20">
      <div className="flex justify-center mb-25 mt-17">
        <CasesTabs currentCategory={initialCategory} />
      </div>
      <CasesGrid items={filtered} />
    </section>
  );
}


