"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { useTranslations } from "next-intl";

const InsightsBanner = () => {
  const t = useTranslations('InsightsBanner');

  return (
    <Reveal as="div" className="max-w-[1036px] mx-auto px-0 pt-16 reveal-will-change" amount={0.15}>
      <div className="relative flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Text content */}
          <div className="max-w-[490px]">
            <h1 className="text-5xl font-semibold font-unbounded text-[#22252A] leading-[110%]">
              {t('title')}
            </h1>
            <p className="mt-2.5 text-lg leading-[24px] text-[#474D57]">
              {t('description')}
            </p>
          </div>

        {/* Right side - Spinning Icon */}
        <div className="w-[471px] h-[471px] flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/insightsIcon.png"
              alt="Insights icon"
              width={471}
              height={471}
              priority
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
};

export default InsightsBanner;
