"use client";
import React from "react";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { teamStatsData } from "./teamStatsData";
import { useTranslations } from "next-intl";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5 },
  }),
};

const TeamStatsSection = () => {
  const t = useTranslations('Stats');

  return (
    <Reveal as="section" className="max-w-[1260px] mx-auto px-4 xl:px-0 py-[50px] reveal-will-change" amount={0.15}>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {teamStatsData.stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={index}
            variants={itemVariants}
            className=""
          >
            <div className="text-[64px]  font-bold font-unbounded ">
              <span
                className={`bg-clip-text text-transparent ${stat.numberClass}`}
              >
                {stat.number}
              </span>
            </div>
            <div className="mt-1 text-xl font-bold text-[#22252A]">
              {t(`items.${index}.title`)}
            </div>
            <div className="mt-2 text-base text-[#474D57]">
              {t(`items.${index}.description`)}
            </div>
          </motion.div>
        ))}
      </div>
    </Reveal>
  );
};

export default TeamStatsSection;
