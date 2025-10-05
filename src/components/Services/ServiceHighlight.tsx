"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { type ServiceHighlightVisual } from "./serviceHighlightsData";

interface ServiceHighlightsProps {
  items: ServiceHighlightVisual[];
  className?: string;
  onReadMoreClick?: (index: number) => void;
}

export default function ServiceHighlights({
  items,
  className,
  onReadMoreClick,
}: ServiceHighlightsProps) {
  const t = useTranslations("ServiceHighlights");

  if (!items.length) {
    return null;
  }

  return (
    <section className={clsx("max-w-[1118px] mx-auto w-full flex flex-col", className)}>
      {items.map(({ imageSrc, imagePlacement }, index) => {
        const title = t(`items.${index}.title`);
        const description = t(`items.${index}.description`);
        const cta = t(`items.${index}.cta`);

        return (
          <article
            key={imageSrc}
            className={clsx(
              "flex flex-col gap-14 lg:gap-20 items-center lg:items-center px-4 md:px-0 py-12 sm:px-12 sm:py-20 justify-between",
              imagePlacement === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
            )}
          >
            <div className="flex flex-col justify-center gap-6 max-w-[357px] text-center">
              <h3 className="text-3xl sm:text-3xl leading-[36px] font-bold text-[#22252A]">
                {title}
              </h3>
              <p className="text-base text-[#474D57] leading-[20px]">{description}</p>
              <div>
                <button
                  type="button"
                  onClick={() => onReadMoreClick?.(index)}
                  className="inline-flex items-center gap-3 mt-4 text-base font-semibold text-[#22252A] hover:text-[#FF5F1F] transition-colors"
                >
                  {cta}
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F8EF] text-[#1F9E51]"
                  >
                    ↗
                  </span>
                </button>
              </div>
            </div>

            <div className="relative w-[537px] h-[537px] max-w-[537px] overflow-hidden rounded-[36px]">
              <Image
                src={imageSrc}
                alt={title}
                width={537}
                height={537}
                className="object-cover"
                priority
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}


