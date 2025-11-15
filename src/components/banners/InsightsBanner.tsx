"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const InsightsBanner = () => {
  const t = useTranslations('InsightsBanner');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="max-w-[1036px] mx-auto px-4 xl:px-0 pt-8 md:pt-12 lg:pt-16">
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
        {/* Left side - Text content with staggered animations */}
        <motion.div
          className="w-full lg:max-w-[490px] text-center lg:text-left"
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
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-semibold font-unbounded text-[#22252A] leading-tight sm:leading-normal md:leading-[110%]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('title')}
          </motion.h1>
          <motion.p 
            className="mt-3 md:mt-4 text-sm sm:text-base leading-relaxed sm:leading-[24px] text-[#474D57]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Right side - Spinning Icon with skeleton loading */}
        <motion.div 
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[471px] aspect-square flex items-center justify-center mx-auto lg:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.5, ease: "easeOut" }
            }
          }}
        >
          <div className={`w-full h-full flex items-center justify-center animate-spin-slow ${!imageLoaded ? 'skeleton' : ''}`}>
            <Image
              src="/insightsIcon.svg"
              alt="Insights icon"
              width={471}
              height={471}
              priority
              className="object-contain w-full h-full"
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InsightsBanner;
