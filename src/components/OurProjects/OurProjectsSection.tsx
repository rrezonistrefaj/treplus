"use client";
import React from "react";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { ourProjectsData } from "./ourProjectsData";
import Image from "next/image";

const OurProjectsSection = () => {
  return (
    <Reveal as="section" className="max-w-[810px] mx-auto px-4 xl:px-0 py-[80px] reveal-will-change" amount={0.15}>
      <div className="text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-semibold font-unbounded text-[#22252A] leading-[110%]">
            {/* Line 1 */}
            <div className="flex items-center justify-center gap-2">
              <span>{ourProjectsData.heading.line1}</span>
            </div>
            
            {/* Line 2 - with orange icon before "us" and purple icon before "our" */}
            <div className="flex items-center justify-center gap-2">
              <Image
                src={ourProjectsData.icons.orange}
                alt="Orange icon"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <span>{ourProjectsData.heading.line2.beforeUs}</span>
              <Image
                src={ourProjectsData.icons.purple}
                alt="Purple icon"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <span>{ourProjectsData.heading.line2.afterOur}</span>
            </div>
            
            {/* Line 3 */}
            <div className="flex items-center justify-center gap-3">
              <span>{ourProjectsData.heading.line3}</span>
            </div>
          </h2>
        </motion.div>

        {/* Description Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base text-[#474D57] leading-[20px] mt-4">
            {ourProjectsData.description}
          </p>
        </motion.div>
      </div>
    </Reveal>
  );
};

export default OurProjectsSection;
