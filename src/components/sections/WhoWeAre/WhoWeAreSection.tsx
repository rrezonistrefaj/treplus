"use client";
import React from "react";
import { whoWeAreData } from "./whoWeAreData";
import Image from "next/image";

const WhoWeAreSection = () => {
  return (
    <section className="max-w-[792px] mx-auto px-4 xl:px-0 py-12 md:py-16 lg:py-20 xl:py-[80px] animate-fade-in overflow-x-clip">
      <div className="text-center">
        {/* Main Heading */}
        <div className="mb-6 md:mb-8 animate-slide-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-unbounded text-[#22252A] leading-tight sm:leading-normal md:leading-[50px]">
            {/* Line 1: "Who We Are" */}
            <div className="flex items-center justify-center flex-wrap">
              <Image
                src={whoWeAreData.icons.orange}
                alt="Orange icon"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-[62px] md:h-[62px] flex-shrink-0"
              />
              <span>Who We Are</span>
              <Image
                src={whoWeAreData.icons.blue}
                alt="Blue icon"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px] flex-shrink-0"
              />
            </div>
            
            {/* Line 2: "From Three Founders" */}
            <div className="flex items-center justify-center  flex-wrap">
              <span>From</span>
              <Image
                src={whoWeAreData.icons.green}
                alt="Green icon"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-[50px] md:h-[50px] flex-shrink-0"
              />
              <span>Three Founders</span>
            </div>
            
            {/* Line 3: "to a Shared Vision" */}
            <div className="flex items-center justify-center  flex-wrap">
              <span>to a Shared</span>
              <Image
                src={whoWeAreData.icons.purple}
                alt="Purple icon"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-[50px] md:h-[50px] flex-shrink-0"
              />
              <span>Vision</span>
            </div>
          </h2>
        </div>

        {/* Description Paragraph */}
        <div className="animate-slide-up-delayed">
          <p className="text-sm sm:text-base text-[#474D57] leading-relaxed sm:leading-[20px] px-2 sm:px-0">
            &ldquo;{whoWeAreData.description}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
