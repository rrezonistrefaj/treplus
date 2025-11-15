"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { whatWeDoData } from "./whatWeDoData";

const WhatWeDoSection = () => {
  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:px-0 py-12 md:py-16 lg:py-20 overflow-x-clip">
      {/* Main Title */}
      <motion.div 
        className="text-center mb-12 md:mb-16 lg:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#22252A] font-unbounded">
          {whatWeDoData.heading}
        </h2>
      </motion.div>

      {/* Service Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 }
          }
        }}
      >
        {whatWeDoData.items.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg rounded-[15px] sm:rounded-[20px] md:rounded-[25px] border border-[#E4E7E9] px-4 sm:px-5 md:px-[23px] pb-8 sm:pb-10 md:pb-13 flex flex-col items-center text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              }
            }}
          >
            {/* Icon */}
            <div className="absolute top-6 sm:top-8 md:top-10 left-0 w-full flex justify-center">
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={190}
                height={135}
                className="w-32 h-auto sm:w-40 md:w-[140px] lg:w-[190px] select-none"
                priority
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#22252A] mb-2 sm:mb-3 mt-32 sm:mt-40 md:mt-[180px] lg:mt-[212px] leading-tight sm:leading-normal md:leading-[36px] tracking-[0px]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#474D57] leading-relaxed sm:leading-[20px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatWeDoSection;
