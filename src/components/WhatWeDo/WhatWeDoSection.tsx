"use client";
import React from "react";
import Image from "next/image";
import { whatWeDoData } from "./whatWeDoData";

const WhatWeDoSection = () => {
  return (
    <section className="max-w-[1260px] mx-auto px-4 md:px-0 py-20">
      {/* Main Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#22252A] font-unbounded ">
          {whatWeDoData.heading}
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {whatWeDoData.items.map((item, index) => (
    <div
      key={index}
      className="relative bg rounded-[25px] border border-[#E4E7E9] px-[23px] pb-13 flex flex-col items-center text-center"
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
    </div>
  ))}
</div>

    </section>
  );
};

export default WhatWeDoSection;
