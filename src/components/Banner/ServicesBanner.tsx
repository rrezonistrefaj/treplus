"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { servicesBannerData } from "@/components/Banner/servicesBannerData";
import { motion } from "framer-motion";

const ServicesBanner = () => {
  const tServicesBanner = useTranslations("ServicesBanner");

  return (
    <section className="max-w-[1260px] mx-auto px-4 md:px-0 pt-16">
      <div className="relative flex flex-col justify-between lg:flex-row items-center mb-20">
        {/* Left: copy and CTA */}
        <div className="max-w-[370px]">
          <div>
            <h1 className="text-5xl font-semibold font-unbounded text-[#22252A]">
              {tServicesBanner("title")}
            </h1>
            <p className="mt-5 text-base font-medium leading-[20px] text-[#474D57] max-w-[589px]">
              {tServicesBanner("description")}
            </p>
            <div className="mt-14">
              <button className="bg-[#FF5F1F] hover:bg-orange-600 text-white text-xl px-[56.5px] py-5 font-bold rounded-[10px]">
                {tServicesBanner("primaryCta")}
              </button>
            </div>
          </div>
        </div>

        {/* Right: animated hero imagery layout */}
        <AnimatedRightImages />
      </div>

      {/* Trusted by row - below both sides */}
      <div className="mt-15">
        <div className="flex flex-wrap items-center gap-x-20 ">
          {servicesBannerData.trustedBy.map((company, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <Image src={company.iconSrc} alt={company.alt} width={33} height={33} />
              <span className="text-[#383B41] text-xl font-semibold">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;

// Internal: Animated right-side images where one column expands to full width
const AnimatedRightImages = () => {
  const tServicesBanner = useTranslations("ServicesBanner");

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesBannerData.images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-end gap-5 mt-10 lg:mt-0 select-none">
      {servicesBannerData.images.map((src, idx) => {
        const isActive = idx === activeIndex;
        return (
          <motion.div
            key={idx}
            className="relative h-[533px] overflow-hidden rounded-[24px]"
            style={{ width: isActive ? 372 : 120 }}
            animate={{ width: isActive ? 372 : 120 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image src={src} alt={`Services variant ${idx + 1}`} fill className="object-cover" />
            {isActive && (
              <div className="absolute bottom-4 left-4">
                {idx === 0 ? (
                  // First image shows tre+ logo
                  <div className="flex items-center gap-1">
                    <Image src="/logo.png" alt="tre+ plus" width={89} height={52} />
                  </div>
                ) : (
                  // Other images show text
                  <div className="text-white text-[28px] font-bold font-unbounded">
                    {idx === 1 && (
                      <>
                        {tServicesBanner("overlays.software").split(" <br/> ").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        {tServicesBanner("overlays.creative").split(" <br/> ").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                      </>
                    )}
                    {idx === 3 && (
                      <>
                        {tServicesBanner("overlays.marketing").split(" <br/> ").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
