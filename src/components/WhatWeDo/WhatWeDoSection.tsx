"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { whatWeDoData } from "./whatWeDoData";

const WhatWeDoSection = () => {
  return (
    <section className="max-w-[1260px] mx-auto px-4 md:px-0 py-20">
      {/* Main Title */}
      <motion.div 
        className="text-center mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#22252A] font-unbounded ">
          {whatWeDoData.heading}
        </h2>
      </motion.div>

      {/* Service Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
            className="relative bg rounded-[25px] border border-[#E4E7E9] px-[23px] pb-13 flex flex-col items-center text-center"
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
            <div className="absolute top-10 left-0 w-full flex justify-center">
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={190}
                height={135}
                className="select-none"
                priority
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-[#22252A] mb-3 mt-[212px] leading-[36px] tracking-[0px]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-base text-[#474D57] leading-[20px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatWeDoSection;
