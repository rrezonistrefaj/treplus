"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
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

  // Animation variants for the text
  const textVariants = {
    enter: {
      y: 20,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  // Animation variants for images
  const imageVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Reveal as="div" className="max-w-[1260px] mx-auto px-0 pt-16 reveal-will-change" amount={0.15}>
      {/* Main content container */}
        <div className="relative flex flex-col lg:flex-row items-end">
        {/* Left side - Text content */}
        <div className="lg:flex-1">
          <div >
            <h1 className="text-5xl font-semibold font-unbounded text-[#22252A] ">
              {t('titleStatic')}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className={`${currentContent.wordColor} pl-2`}
                >
                  {t(`animated.${currentIndex}`)}
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="mt-5 text-base font-medium leading-[20px] text-[#474D57] max-w-[589px]">
              {t('description')}
            </p>
            <div className="mt-14">
              <button className="bg-[#FF5F1F] hover:bg-orange-600 text-white text-xl px-[56.5px] py-5 font-bold rounded-[10px]">
                {t('primaryCta')}
              </button>
            </div>

            {/* Trusted by row */}
            {/* TODO: dont make with intl*/}
            <div className="mt-15">
              <div className="text-[12px] uppercase tracking-wide text-gray-500 mb-5">
                {t('trustedBy')}
              </div>
              <div className="flex flex-wrap items-center gap-x-20 ">
                {bannerData.trustedBy.map((company, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <Image
                      src={company.iconSrc}
                      alt={company.alt}
                      width={33}
                      height={33}
                    />
                    <span className="text-[#383B41] text-xl font-semibold">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

         {/* Right side - Image with overlays */}
         <div className="w-[466px] relative">
          {/* Main image placeholder */}
          <div className="relative w-[466px] h-[466px] ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
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
            <div className="absolute -top-13 -left-17 select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
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
            </div>

            {/* Orange plus overlay - bottom right (placeholder image) */}
            <div className="absolute -bottom-42 -right-17 select-none">
              <Image
                src="/orangeIcon.svg"
                alt="orange plus placeholder"
                width={295}
                height={295}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Banner;