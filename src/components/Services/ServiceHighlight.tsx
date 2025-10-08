"use client";

import { motion } from "framer-motion";
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
          <motion.article
            key={imageSrc}
            className={clsx(
              "flex flex-col gap-14 lg:gap-20 items-center lg:items-center px-4 md:px-0 py-12 sm:px-12 sm:py-20 justify-between",
              imagePlacement === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.div 
              className="flex flex-col justify-center gap-6 max-w-[357px] text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-3xl sm:text-3xl leading-[36px] font-bold text-[#22252A]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-base text-[#474D57] leading-[20px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {description}
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
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
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative w-[537px] h-[537px] max-w-[537px] overflow-hidden rounded-[36px]"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.4, ease: "easeOut" }
                }
              }}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={537}
                height={537}
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.article>
        );
      })}
    </section>
  );
}


