"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { type ServiceProcessStepVisual } from "./serviceProcessData";

interface ServiceProcessProps {
  steps: ServiceProcessStepVisual[];
  className?: string;
}

export default function ServiceProcess({ steps, className }: ServiceProcessProps) {
  const t = useTranslations("ServiceProcess");

  if (!steps.length) {
    return null;
  }

  const sectionClasses = clsx("max-w-[1260px] mx-auto w-full px-4 md:px-0", className);

  return (
    <section className={sectionClasses}>
      <motion.div 
        className="text-left max-w-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-unbounded font-bold text-[#0F0F0F]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {t("title")}
        </motion.h2>
        <motion.p 
          className="mt-3 text-base text-[#474D57] font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {t("subtitle")}
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 }
          }
        }}
      >
        {steps.map(({ iconSrc, iconAlt }, index) => {
          const title = t(`steps.${index}.title`);
          const description = t(`steps.${index}.description`);

          return (
            <motion.article
              key={iconSrc}
              className="relative flex flex-col gap-6 rounded-[32px] border border-[#E4E7E9] bg-white pl-10 pr-8 text-left h-[400px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute left-6 top-4 h-[128px] w-[128px]">
                <Image src={iconSrc} alt={iconAlt} fill className="object-contain" priority />
              </div>

              <div className="flex flex-col gap-3 mt-[215px]">
                <h3 className="text-xl md:text-3xl font-black text-[#22252A]">
                  <span className="mr-1">{index + 1}.</span>
                  {title}
                </h3>
                <p className="text-sm md:text-base text-[#474D57] leading-[20px]">
                  {description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}


