"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { statsData } from "./statsData";
import { useTranslations } from "next-intl";

const StatsSection = () => {
  const t = useTranslations('Stats');
  const fullTitle = useMemo(
    () => `${t('headingStrong')} ${t('headingSubtle')}`,
    [t]
  );

  return (
    <section className="max-w-[1260px] mx-auto px-4 md:px-0 py-[250px]">
      {/* Header with improved animation */}
      <motion.div 
        className="text-center max-w-[1100px] mx-auto hidden md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-unbounded font-bold"
        >
          {fullTitle}
        </motion.h2>
      </motion.div>

      {/* Stats grid with enhanced animations */}
      <motion.div
        className="mt-0 md:mt-44 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 }
          }
        }}
      >
        {statsData.stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center group"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.5, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.15 }
            }}
          >
            {/* Static number with gradient */}
            <div className=" text-[30px] md:text-[64px] font-bold font-unbounded mb-2">
              <span
                className={`bg-gradient-to-r ${stat.numberClass} bg-clip-text text-transparent will-change-transform`}
              >
                {stat.number}
              </span>
            </div>
            
            {/* Title */}
            <div className="text-[14px] md:text-xl font-bold text-[#22252A] mb-2">
              {t(`items.${index}.title`)}
            </div>
            
            {/* Description */}
            <div className="text-[14px] md:text-base text-[#474D57] leading-relaxed">
              {t(`items.${index}.description`)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;