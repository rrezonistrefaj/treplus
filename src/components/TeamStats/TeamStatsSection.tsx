"use client";
import React from "react";
import { motion } from "framer-motion";
import { teamStatsData } from "./teamStatsData";
import { useTranslations } from "next-intl";


const TeamStatsSection = () => {
  const t = useTranslations('Stats');

  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:px-0 py-[50px] animate-fade-in">

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {teamStatsData.stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.28, ease: "easeOut" }}
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
      </motion.div>
    </section>
  );
};

export default TeamStatsSection;
