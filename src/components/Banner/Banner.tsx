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
    <div className="max-w-[1260px] mx-auto px-0 pt-16">
      {/* Main content container */}
      <div className="relative flex flex-col lg:flex-row items-end">
        {/* Left side - Text content */}
        <motion.div 
          className="lg:flex-1"
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
              className="text-5xl font-semibold font-unbounded text-[#22252A]"
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t('titleStatic')}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`${currentContent.wordColor} pl-2`}
                >
                  {t(`animated.${currentIndex}`)}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
            
            <motion.p 
              className="mt-5 text-base font-medium leading-[20px] text-[#474D57] max-w-[589px]"
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t('description')}
            </motion.p>
            
            <motion.div 
              className="mt-14"
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button className="bg-[#FF5F1F] hover:bg-orange-600 text-white text-xl px-[56.5px] py-5 font-bold rounded-[10px] transition-transform hover:-translate-y-1">
                {t('primaryCta')}
              </button>
            </motion.div>

            {/* Trusted by row */}
            <motion.div 
              className="mt-15"
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
                className="flex flex-wrap items-center gap-x-20"
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
                    className="flex items-center gap-2.5"
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
                    />
                    <span className="text-[#383B41] text-xl font-semibold">
                      {company.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

         {/* Right side - Image with overlays */}
         <motion.div 
           className="w-[466px] relative"
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
          <div className="relative w-[466px] h-[466px]">
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
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Animated overlay - top left */}
            <motion.div 
              className="absolute -top-13 -left-17 select-none"
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
                    className="block"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Orange plus overlay - bottom right */}
            <motion.div 
              className="absolute -bottom-42 -right-17 select-none"
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
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;