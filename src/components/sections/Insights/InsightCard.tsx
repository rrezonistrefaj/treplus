"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import React from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

export interface InsightCardItem {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
}

export default function InsightCard({ item }: { item: InsightCardItem }) {
  const t = useTranslations("Common");

  return (
    <article className="h-full flex flex-col">
      {/* Edge-to-edge image - matches carousel */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[404px] rounded-t-[20px] sm:rounded-t-[25px] overflow-hidden bg-[#F3F3F3]">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={404}
          height={404}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content area with #F3F3F3 background and responsive padding - matches carousel */}
      <div className="bg-[#F3F3F3] px-4 sm:px-5 md:px-6 lg:px-[25px] pb-4 sm:pb-5 md:pb-6 lg:pb-[25px] pt-3 sm:pt-4 md:pt-[15px] flex flex-col rounded-b-[20px] sm:rounded-b-[25px]">
        <div className="flex items-center justify-between text-sm sm:text-[15px] md:text-base text-[#474D57] leading-[120%] pb-4 sm:pb-5 md:pb-7">
          <span className="truncate pr-2">{item.category}</span>
          <span className="flex-shrink-0">{item.date}</span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#22252A] truncate" title={item.title}>
          {item.title}
        </h3>
        <p className="mt-2 sm:mt-3 text-[13px] sm:text-sm md:text-base font-medium text-[#474D57] leading-[140%] sm:leading-[150%] truncate" title={item.excerpt}>
          {item.excerpt}
        </p>
        <div className="mt-6 sm:mt-7 md:mt-[37.5px]">
          <Link href={`/insights/${item.slug}`} className="cursor-pointer group relative inline-flex items-center overflow-hidden rounded-full transition-all duration-300 hover:scale-105 bg-white">
            {/* Left side - Glass morphism effect with set height */}
            <div className="flex items-center justify-center h-10 sm:h-11 md:h-12 px-3 sm:px-3.5 md:px-4 text-[#474D57] font-medium text-sm sm:text-base md:text-lg">
              {t("readMore")}
            </div>

            {/* Right side - White circle with orange arrow */}
            <div className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 bg-[#F4F4F4] rounded-full border border-white flex-shrink-0">
              <ArrowUpRight className="w-4 h-4 sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] text-[#FF5F1F]" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}


