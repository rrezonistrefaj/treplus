"use client";
import React from "react";
import { ourProjectsData } from "./ourProjectsData";
import Image from "next/image";

const OurProjectsSection = () => {
  return (
    <section className="max-w-[810px] mx-auto px-4 xl:px-0 py-12 md:py-16 lg:py-20 xl:py-[80px] animate-fade-in">
      <div className="text-center">
        {/* Main Heading */}
        <div className="mb-6 md:mb-8 animate-slide-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-unbounded text-[#22252A] leading-tight sm:leading-normal md:leading-[110%]">
            {/* Line 1 */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span>{ourProjectsData.heading.line1}</span>
            </div>
            
            {/* Line 2 - with orange icon before "us" and purple icon before "our" */}
            <div className="flex items-center justify-center flex-wrap">
              <Image
                src={ourProjectsData.icons.orange}
                alt="Orange icon"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-[62px] md:h-[62px] flex-shrink-0"
              />
              <span>{ourProjectsData.heading.line2.beforeUs}</span>
              <Image
                src={ourProjectsData.icons.purple}
                alt="Purple icon"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-[62px] md:h-[62px] flex-shrink-0"
              />
              <span>{ourProjectsData.heading.line2.afterOur}</span>
            </div>
            
            {/* Line 3 */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span>{ourProjectsData.heading.line3}</span>
            </div>
          </h2>
        </div>

        {/* Description Paragraph */}
        <div className="animate-slide-up-delayed">
          <p className="text-sm sm:text-base text-[#474D57] leading-relaxed sm:leading-[20px] mt-4 px-2 sm:px-0">
            {ourProjectsData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProjectsSection;
