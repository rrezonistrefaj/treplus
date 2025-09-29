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
    <section className={clsx("max-w-[1260px] mx-auto w-full flex flex-col", className)}>
      {items.map(({ imageSrc, imagePlacement }, index) => {
        const title = t(`items.${index}.title`);
        const description = t(`items.${index}.description`);
        const cta = t(`items.${index}.cta`);

        return (
          <article
            key={imageSrc}
            className={clsx(
              "flex flex-col gap-14 lg:gap-20 items-center lg:items-center px-6 py-12 sm:px-12 sm:py-20",
              imagePlacement === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
            )}
          >
            <div className="flex flex-col justify-center gap-5 max-w-xl text-center lg:text-left">
              <h3 className="text-3xl sm:text-[44px] leading-tight font-unbounded font-semibold text-[#22252A]">
                {title}
              </h3>
              <p className="text-base sm:text-lg text-[#474D57] leading-relaxed">{description}</p>
              <div>
                <button
                  type="button"
                  onClick={() => onReadMoreClick?.(index)}
                  className="inline-flex items-center gap-3 text-base font-semibold text-[#22252A] hover:text-[#FF5F1F] transition-colors"
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

            <div className="relative w-full max-w-[560px] aspect-[4/3] overflow-hidden rounded-[36px]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
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


