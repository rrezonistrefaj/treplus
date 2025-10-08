"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const InsightsBanner = () => {
  const t = useTranslations('InsightsBanner');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="max-w-[1036px] mx-auto px-0 pt-16">
      <div className="relative flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Text content with staggered animations */}
        <motion.div
          className="max-w-[490px]"
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
            className="text-5xl font-semibold font-unbounded text-[#22252A] leading-[110%]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('title')}
          </motion.h1>
          <motion.p 
            className="mt-2.5 text-lg leading-[24px] text-[#474D57]"
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
          className="w-[471px] h-[471px] flex items-center justify-center"
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
              src="/insightsIcon.png"
              alt="Insights icon"
              width={471}
              height={471}
              priority
              className="object-contain"
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InsightsBanner;
