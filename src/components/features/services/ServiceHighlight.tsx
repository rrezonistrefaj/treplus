"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { type ServiceHighlightVisual } from "./serviceHighlightsData";
import { Link } from "@/i18n/routing";

interface ServiceHighlightsProps {
  items: ServiceHighlightVisual[];
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const transition = { duration: 0.4, ease: "easeOut" as const };

export default function ServiceHighlights({
  items,
  className,
}: ServiceHighlightsProps) {
  const t = useTranslations("ServiceHighlights");

  if (!items.length) {
    return null;
  }

  return (
    <section className={clsx("max-w-[1118px] mx-auto w-full flex flex-col", className)}>
      {items.map(({ imageSrc, imagePlacement, color }, index) => {
        const title = t(`items.${index}.title`);
        const description = t(`items.${index}.description`);
        const cta = t(`items.${index}.cta`);
        const lightColor = `${color}1A`;

        return (
          <motion.article
            key={imageSrc}
            className={clsx(
              "flex flex-col sm:flex-row gap-14 lg:gap-20 items-center px-4 xl:px-0 py-12 sm:px-12 sm:py-20 justify-between",
              imagePlacement === "left" && "sm:flex-row-reverse"
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div 
              className="flex flex-col justify-center gap-6 w-full sm:max-w-[280px] md:max-w-[320px] lg:max-w-[357px] text-center"
              variants={fadeInUp}
              transition={transition}
            >
              <h3 className="text-3xl leading-[36px] font-bold text-[#22252A]">
                {title}
              </h3>
              <p className="text-base text-[#474D57] leading-[20px]">
                {description}
              </p>
            <Link
              href={`/services/${index === 0 ? "digital-marketing" : index === 1 ? "branding-and-design" : "development"}`}
              className="flex items-center gap-3 mt-4 mx-auto text-base font-semibold text-[#22252A] transition-colors cursor-pointer"
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = color; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#22252A"; }}
            >
              {cta}
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: lightColor, color }}
              >
                ↗
              </span>
            </Link>
            </motion.div>

            <motion.div 
              className="relative w-full sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] lg:w-[537px] lg:h-[537px] aspect-square overflow-hidden rounded-[36px] flex-shrink-0"
              variants={scaleIn}
              transition={transition}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={537}
                height={537}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
          </motion.article>
        );
      })}
    </section>
  );
}


