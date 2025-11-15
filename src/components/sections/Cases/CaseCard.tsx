"use client";

import React from "react";
import Image from "next/image";
import { ReadMoreButton } from "@/components/ui/ReadMoreButton";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { CaseItem } from "./casesData";

interface CaseCardProps {
  item: CaseItem;
  index?: number;
}

const CaseCard: React.FC<CaseCardProps> = ({ item, index = 0 }) => {
  const t = useTranslations("Cases");
  const title = t(`${item.i18nKey}.title`);
  const description = t(`${item.i18nKey}.description`);

  return (
    <article className="h-full rounded-[25px] bg-[#F3F3F3] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-3 flex flex-col gap-5 w-full">
      <header className="px-4.25 pt-8">
        <h3
          className="text-[20px] md:text-3xl font-bold leading-snug"
          style={{ color: item.accentColor }}
        >
          {title}
        </h3>
        <p
          className="mt-2 text-[14px] sm:text-[16px] text-[#474D57] leading-[16px] sm:leading-[20px] min-h-[48px] sm:min-h-[60px]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      </header>

      <div className="relative mt-4 rounded-[16px] overflow-hidden aspect-[380/245] bg-gray-100">
        <Link href={`/cases/${item.slug}`}>
          <Image
            src={item.coverImage}
            alt={title}
            fill
            className="object-cover w-full h-full"
            priority={index < 3}
          />
        </Link>
        <div className="absolute bottom-3 left-3">
          <Link href={`/cases/${item.slug}`}>
            <ReadMoreButton color={item.accentColor} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CaseCard;


