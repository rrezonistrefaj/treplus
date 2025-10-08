"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TeamBanner = () => {
  const t = useTranslations('TeamBanner');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="max-w-[1260px] mx-auto px-0 pt-16">
      {/* Main content container */}
      <div className="relative flex flex-col lg:flex-row items-center pb-20 gap-8 lg:gap-12">
        {/* Left side - Image with skeleton loading */}
        <motion.div 
          className="relative"
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
          <div className={`relative w-[602px] h-[632px] ${!imageLoaded ? 'skeleton' : ''}`}>
            <Image
              src="/TeamBanner.png"
              alt="Meet our team"
              width={602}
              height={632}
              className="object-cover h-auto max-w-[602px]"
              priority
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </div>

          {/* Orange decorative element - top left */}
          <motion.div 
            className="absolute -top-8 -left-8 select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/orangeIcon.svg"
              alt="orange icon"
              width={184}
              height={184}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Purple decorative element - top right */}
          <motion.div 
            className="absolute -top-6 -right-8 select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/purpleIcon.svg"
              alt="purple icon"
              width={167}
              height={167}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Blue decorative element - center down */}
          <motion.div 
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="/greenIcon.svg"
              alt="blue icon"
              width={155}
              height={155}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Right side - Text content with staggered animations */}
        <motion.div
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
            className="text-5xl font-semibold font-unbounded text-[#22252A] leading-[50px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('title')}
          </motion.h1>
          <motion.p 
            className="mt-4 text-base font-medium leading-[20px] text-[#474D57] max-w-[480px]"
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
