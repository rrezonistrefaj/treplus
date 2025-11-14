"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { bannerData } from "./bannerData";

type Direction = 1 | -1;
type EaseArray = [number, number, number, number];

// Constants
const forwardDelay = 3500;
const reverseDelay = 80;

// Common ease functions
const easeStandard: EaseArray = [0.25, 0.1, 0.25, 1];
const easeReverse: EaseArray = [0.33, 1, 0.68, 1];
const easeBounce: EaseArray = [0.68, -0.55, 0.265, 1.55];

// Transition configurations
const forwardTransition = { duration: 0.3, ease: easeStandard };
const reverseTransition = { duration: 0.08, ease: easeReverse };
const forwardEnterTransition = { 
  duration: 0.8,
  delay: 0.15,
  times: [0, 0.85, 1],
  ease: easeBounce
};
const reverseEnterTransition = { 
  duration: 0.5,
  delay: 0.05,
  times: [0, 0.85, 1],
  ease: easeBounce
};

// Bounce variants for text (left side)
const getCarouselVariants = (direction: Direction) => ({
  enter: {
    y: direction === 1 ? ["100%", "2%", "0%"] : ["-100%", "-2%", "0%"],
    transition: direction === 1 ? forwardEnterTransition : reverseEnterTransition,
  },
  center: { y: 0 },
  exit: {
    y: direction === 1 ? "-100%" : "100%",
    transition: direction === 1 ? forwardTransition : reverseTransition,
  },
});

// Fade variants for overlay icons (right side icons)
const iconVariants = {
  enter: {
    opacity: 0,
    transition: { duration: 0.3, ease: easeStandard },
  },
  center: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: easeStandard },
  },
};

// Common fade-in-up animation variant (used for text elements)
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Common fade-in-up transition
const fadeInUpTransition = { duration: 0.5, ease: "easeOut" as const };

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const isInitialMount = useRef(true);
  const t = useTranslations('Banner');
  
  const totalItems = useMemo(() => bannerData.animatedContent.length, []);
  const currentContent = bannerData.animatedContent[currentIndex];
  const carouselVariants = useMemo(() => getCarouselVariants(direction), [direction]);

  // Mark initial mount as complete after first render
  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  // Auto-advance the animation - cycles forward (0 -> 1 -> 2) then reverses (2 -> 1 -> 0) quickly and repeats
  useEffect(() => {
    const delay = direction === 1 ? forwardDelay : reverseDelay;

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + direction;

        if (nextIndex >= totalItems) {
          setDirection(-1);
          return prevIndex;
        }

        if (nextIndex < 0) {
          setDirection(1);
          return prevIndex;
        }

        return nextIndex;
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, direction, totalItems]);


  return (
    <div className="max-w-[1260px] mx-auto px-4 xl:px-0 pt-8.5 lg:pt-41.25">
      {/* Main content container */}
      <div className="relative flex flex-col md:flex-row items-end gap-0 md:gap-10">
        {/* Image section - Top on mobile, right on desktop */}
        <motion.div 
          className="w-full md:max-w-[466px] relative mb-5 md:mb-0 md:order-2"
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
          <div className="relative w-full aspect-[343/242] md:aspect-square overflow-hidden rounded-[15px] md:rounded-[25px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                variants={iconVariants}
                initial={isInitialMount.current ? "center" : "enter"}
                animate="center"
                exit="exit"
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
          </div>

          {/* Animated overlay - top left - hidden on mobile */}
          <motion.div 
            className="absolute -top-8 sm:-top-13 -left-0 md:-left-4 lg:-left-17 select-none hidden md:block"
            variants={{ 
              hidden: { opacity: 0, scale: 0.8 }, 
              visible: { opacity: 1, scale: 1 } 
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-[120px] sm:w-[140px] md:w-[120px] lg:w-[169px] h-[120px] sm:h-[140px] md:h-[120px] lg:h-[150px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  variants={iconVariants}
                  initial={isInitialMount.current ? "center" : "enter"}
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={currentContent.overlayImageSrc}
                    alt={`${currentContent.word} icon`}
                    width={169}
                    height={150}
                    className="block w-full h-auto"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
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
              className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl max-w-[280px] sm:max-w-[600px] md:max-w-[400px] lg:max-w-none font-semibold font-unbounded text-[#22252A] leading-tight sm:leading-normal"
              variants={fadeInUpVariant}
              transition={fadeInUpTransition}
            >
              <span className="pr-2 leading-[30px]">{t('titleStatic')}</span>
              <span className="inline-block overflow-hidden relative align-bottom">
                <span className="invisible inline-block whitespace-nowrap pointer-events-none" aria-hidden="true">
                  Development
                </span>
                <AnimatePresence initial={false}>
                  <motion.span
                    key={currentIndex}
                    variants={carouselVariants}
                    initial={isInitialMount.current ? "center" : "enter"}
                    animate="center"
                    exit="exit"
                    className={`${currentContent.wordColor} inline-block whitespace-nowrap`}
                    style={{ position: 'absolute', left: 0, bottom: 0 }}
                  >
                    {t(`animated.${currentIndex}`)}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-2 md:mt-5 text-[14px] sm:text-base font-medium leading-[16px] md:leading-[20px] text-[#474D57] max-w-[589px]"
              variants={fadeInUpVariant}
              transition={fadeInUpTransition}
            >
              {t('description')}
            </motion.p>
            
            <motion.div 
              className="mt-4.5 sm:mt-14"
              variants={fadeInUpVariant}
              transition={fadeInUpTransition}
            >
              <button 
                type="button"
                className="bg-[#FF5F1F] hover:bg-orange-600 text-white text-lg sm:text-xl px-8 sm:px-[56.5px] py-4 sm:py-5 font-bold rounded-[10px] transition-transform hover:-translate-y-1"
              >
                {t('primaryCta')}
              </button>
            </motion.div>

            {/* Trusted by row */}
            <motion.div 
              className="mt-10 sm:mt-15"
              variants={fadeInUpVariant}
              transition={fadeInUpTransition}
            >
              <div className="text-[12px] uppercase tracking-wide text-gray-500 mb-5 text-center md:text-left">
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
                {bannerData.trustedBy.map((company) => (
                  <motion.div 
                    key={company.name} 
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