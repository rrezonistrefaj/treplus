"use client";
import React from "react";
import Reveal from "@/components/ui/Reveal";

const CTASection = () => {
  return (
    <Reveal as="section" className=" py-16 sm:py-20 reveal-will-change" amount={0.2}>
      <div className=" mx-auto">
        <div className=" bg-[#F3F3F3] shadow-[0_0_24px_rgba(0,0,0,0.15)]">
          <div className=" pt-20 pb-25 text-center">
            <h2 className="text-[34px] sm:text-5xl leading-tight font-bold font-unbounded  text-[#1F1F1F]">
              Schedule a meeting or
              <br className="hidden sm:block" /> request an estimate
            </h2>
            <p className="mt-2 text-[14px] sm:text-base font-medium text-[#474D57]">
              We’d love to help you learn more about our products and services.
            </p>
            <div className="mt-6 flex justify-center">
              <button className="bg-[#FF5F1F] px-11.5 py-5 font-bold rounded-[10px] hover:bg-orange-600 text-white">
                Let’s talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default CTASection;


