"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TeamBanner = () => {
  const t = useTranslations('TeamBanner');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="max-w-[1260px] mx-auto px-4 xl:px-0 pt-8 md:pt-12 lg:pt-16">
      {/* Main content container */}
      <div className="relative flex flex-col lg:flex-row items-center pb-12 md:pb-16 lg:pb-20 gap-6 md:gap-8 lg:gap-12">
        {/* Left side - Image with skeleton loading */}
        <motion.div 
          className="relative w-full max-w-[602px] mx-auto lg:mx-0"
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
          <div className={`relative w-full aspect-[602/632] ${!imageLoaded ? 'skeleton' : ''}`}>
            <Image
              src="/TeamBanner.png"
              alt="Meet our team"
              width={602}
              height={632}
              className="object-cover w-full h-full"
              priority
              quality={95}
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </div>

          {/* Orange decorative element - top left */}
          <motion.div 
            className="absolute top-4 xs:top-8 -left-4 sm:-left-8 select-none z-10 w-[120px] h-[120px] xs:w-[200px] sm:h-[200px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/teamBannerOrange.svg"
              alt="orange icon"
              width={184}
              height={184}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Purple decorative element - top right */}
          <motion.div 
            className="absolute -top-3 xs:-top-0 sm:-top-4 -right-8 xs:-right-16 sm:-right-10 select-none z-10 w-[120px] h-[120px] xs:w-[187px] sm:h-[187px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/teamBannerPurple.svg"
              alt="purple icon"
              width={167}
              height={167}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Green decorative element - center down */}
          <motion.div 
            className="absolute -bottom-3 md:-bottom-5 lg:-bottom-4 right-[39%] select-none z-10 w-[120px] h-[120px] xs:w-[167px] sm:h-[167px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="/teamBannerGreen.svg"
              alt="green icon"
              width={155}
              height={155}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Right side - Text content with staggered animations */}
        <motion.div
          className="w-full lg:w-auto text-center lg:text-left"
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
            className="text-3xl sm:text-4xl md:text-5xl font-semibold font-unbounded text-[#22252A] leading-tight sm:leading-[45px] md:leading-[50px] max-w-[640px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('title')}
          </motion.h1>
          <motion.p 
            className="mt-3 md:mt-4 text-sm sm:text-base font-medium leading-relaxed sm:leading-[20px] text-[#474D57] max-w-full lg:max-w-[480px] mx-auto lg:mx-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('description')}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamBanner;
