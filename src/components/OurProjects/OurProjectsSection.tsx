"use client";
import React from "react";
import { ourProjectsData } from "./ourProjectsData";
import Image from "next/image";

const OurProjectsSection = () => {
  return (
    <section className="max-w-[810px] mx-auto px-4 xl:px-0 py-[80px] animate-fade-in">
      <div className="text-center">
        {/* Main Heading */}
        <div className="animate-slide-up">
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
        </div>

        {/* Description Paragraph */}
        <div className="animate-slide-up-delayed">
          <p className="text-base text-[#474D57] leading-[20px] mt-4">
            {ourProjectsData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProjectsSection;
