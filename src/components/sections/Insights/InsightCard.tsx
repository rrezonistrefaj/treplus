"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import React, { useEffect, useRef, useState } from "react";

export interface InsightCardItem {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
}

export default function InsightCard({ item }: { item: InsightCardItem }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [compactDesc, setCompactDesc] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;
    const computed = window.getComputedStyle(titleRef.current);
    const lineHeight = parseFloat(computed.lineHeight || "20");
    const lines = Math.round(titleRef.current.clientHeight / (lineHeight || 20));
    setCompactDesc(lines > 1);
  }, []);

  return (
    <article className="h-full flex flex-col bg-[#F3F3F3] rounded-[25px] overflow-hidden">
      <div className="relative w-full aspect-[380/245]">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-5 pt-4 pb-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-sm text-[#474D57]">
          <span className="truncate">{item.category}</span>
          <span>{item.date}</span>
        </div>
        <h3 ref={titleRef} className="mt-2 text-[20px] md:text-2xl font-bold text-[#22252A]">
          {item.title}
        </h3>
        <p
          className="mt-2 text-[14px] sm:text-[16px] text-[#474D57] leading-[20px]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: compactDesc ? 1 : 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: compactDesc ? "20px" : "40px",
          }}
        >
          {item.excerpt}
        </p>
        <div className="mt-auto">
          <Link
            href={`/insights/${item.slug}`}
            className="inline-flex items-center gap-3 text-[#22252A] font-semibold"
          >
            Read More
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}


