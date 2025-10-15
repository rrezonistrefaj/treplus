"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { bannerData } from "./bannerData";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations('Banner');
  const currentContent = bannerData.animatedContent[currentIndex];

  // Auto-advance the animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.animatedContent.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentIndex]);


  return (
    <div className="max-w-[1260px] mx-auto px-4 xl:px-0 pt-16">
      {/* Main content container */}
      <div className="relative flex flex-col md:flex-row items-end gap-0 md:gap-10">
        {/* Image section - Top on mobile, right on desktop */}
        <motion.div 
          className="w-full md:max-w-[466px] relative mb-8 md:mb-0 md:order-2"
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
          {/* Main image placeholder */}
          <div className="relative w-full aspect-square">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={currentContent.mainImageSrc}
                  alt={`${currentContent.word} illustration`}
                  width={466}
                  height={466}
                  priority
                  className="object-cover w-full h-full rounded-[25px]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Animated overlay - top left - hidden on mobile */}
            <motion.div 
              className="absolute -top-8 sm:-top-13 -left-0 md:-left-4 lg:-left-17 select-none hidden md:block"
              variants={{ 
                hidden: { opacity: 0, scale: 0.8 }, 
                visible: { opacity: 1, scale: 1 } 
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Image
                    src={currentContent.overlayImageSrc}
                    alt={`${currentContent.word} icon`}
                    width={169}
                    height={150}
                    className="block w-[120px] sm:w-[140px] md:w-[120px] lg:w-[169px] h-auto"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Orange plus overlay - bottom right - hidden on mobile */}
            <motion.div 
              className="absolute -bottom-24 sm:-bottom-32 lg:-bottom-42 -right-8 sm:-right-12 lg:-right-17 select-none hidden md:block"
              variants={{ 
                hidden: { opacity: 0, scale: 0.8 }, 
                visible: { opacity: 1, scale: 1 } 
              }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              <Image
                src="/orangeIcon.svg"
                alt="orange plus placeholder"
                width={295}
                height={295}
                className="w-[200px] sm:w-[240px] lg:w-[295px] h-auto"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Left side - Text content */}
        <motion.div 
          className="md:flex-1 w-full md:w-auto md:order-1"
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
          <div>
            <motion.h1 
              className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-none font-semibold font-unbounded text-[#22252A]"
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="pr-2">{t('titleStatic')}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`${currentContent.wordColor} inline-block`}
                >
                  {t(`animated.${currentIndex}`)}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
            
            <motion.p 
              className="mt-5 text-[14px] sm:text-base font-medium leading-[20px] text-[#474D57] max-w-[589px]"
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t('description')}
            </motion.p>
            
            <motion.div 
              className="mt-8 sm:mt-14"
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button className="bg-[#FF5F1F] hover:bg-orange-600 text-white text-lg sm:text-xl px-8 sm:px-[56.5px] py-4 sm:py-5 font-bold rounded-[10px] transition-transform hover:-translate-y-1">
                {t('primaryCta')}
              </button>
            </motion.div>

            {/* Trusted by row */}
            <motion.div 
              className="mt-8 sm:mt-15"
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-[12px] uppercase tracking-wide text-gray-500 mb-5">
                {t('trustedBy')}
              </div>
              <motion.div 
                className="grid grid-cols-4  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 items-center gap-y-5 max-w-[741px]"
                variants={{ 
                  hidden: {}, 
                  visible: { 
                    transition: { staggerChildren: 0.05 } 
                  } 
                }}
              >
                {bannerData.trustedBy.map((company, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2 sm:gap-2.5"
                    variants={{ 
                      hidden: { opacity: 0, y: 10 }, 
                      visible: { opacity: 1, y: 0 } 
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Image
                      src={company.iconSrc}
                      alt={company.alt}
                      width={33}
                      height={33}
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[33px] lg:h-[33px]"
                    />
                    <span className="text-[#383B41] text-sm sm:text-lg lg:text-xl font-semibold">
                      {company.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;