"use client";
import React from "react";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { whoWeAreData } from "./whoWeAreData";
import Image from "next/image";

const WhoWeAreSection = () => {
  return (
    <Reveal as="section" className="max-w-[792px] mx-auto px-4 xl:px-0 py-[80px] reveal-will-change" amount={0.15}>
      <div className="text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-[48px] md:text-5xl font-semibold font-unbounded text-[#22252A] leading-[50px]">
            {/* Line 1: "Who We Are" */}
            <div className="flex items-center justify-center gap-3">
              <Image
                src={whoWeAreData.icons.orange}
                alt="Orange icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span>Who We Are</span>
              <Image
                src={whoWeAreData.icons.blue}
                alt="Blue icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            
            {/* Line 2: "From Three Founders" */}
            <div className="flex items-center justify-center gap-3">
              <span>From</span>
              <Image
                src={whoWeAreData.icons.green}
                alt="Green icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span>Three Founders</span>
            </div>
            
            {/* Line 3: "to a Shared Vision" */}
            <div className="flex items-center justify-center gap-3">
              <span>to a Shared</span>
              <Image
                src={whoWeAreData.icons.purple}
                alt="Purple icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span>Vision</span>
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
          <p className="text-base text-[#474D57] leading-[20px]">
            &ldquo;{whoWeAreData.description}&rdquo;
          </p>
        </motion.div>
      </div>
    </Reveal>
  );
};

export default WhoWeAreSection;
