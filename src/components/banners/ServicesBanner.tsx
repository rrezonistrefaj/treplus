"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { servicesBannerData } from "./servicesBannerData";

const ServicesBanner = () => {
  const tServicesBanner = useTranslations("ServicesBanner");

  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:px-0 pt-8 md:pt-16 overflow-x-visible">
      <div className="relative flex flex-col justify-between lg:flex-row items-center mb-10 md:mb-20">
        {/* Left: copy and CTA */}
        <motion.div 
          className="max-w-full md:max-w-[370px] text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <div>
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-unbounded text-[#22252A]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {tServicesBanner("title")}
            </motion.h1>
            <motion.p 
              className="mt-4 md:mt-5 text-sm md:text-base font-medium leading-[20px] text-[#474D57] max-w-[589px] mx-auto md:mx-0"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {tServicesBanner("description")}
            </motion.p>
            <motion.div 
              className="mt-6 md:mt-14"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button className="bg-[#FF5F1F] hover:bg-orange-600 text-white text-base md:text-xl px-5 py-3 md:px-[56.5px] md:py-5 font-bold rounded-[10px] transition-transform hover:-translate-y-1">
                {tServicesBanner("primaryCta")}
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: animated hero imagery layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.5, ease: "easeOut" }
            }
          }}
        >
          <AnimatedRightImages />
        </motion.div>
      </div>

      {/* Trusted by row - below both sides */}
      <motion.div 
        className="mt-8 md:mt-15"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 }
          }
        }}
      >
        <div className="text-[11px] md:text-[12px] uppercase tracking-wide text-gray-500 mb-4 md:mb-5">
          Trusted by
        </div>
        <motion.div 
          className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-20 md:gap-y-4"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 }
            }
          }}
        >
          {servicesBannerData.trustedBy.map((company, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2 md:gap-2.5"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image src={company.iconSrc} alt={company.alt} width={28} height={28} className="md:w-[33px] md:h-[33px]" />
              <span className="text-[#383B41] text-sm md:text-xl font-semibold">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesBanner;

// Internal: Animated right-side images where one column expands to full width
const AnimatedRightImages = () => {
  const tServicesBanner = useTranslations("ServicesBanner");

  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => new Array(servicesBannerData.images.length).fill(false));

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesBannerData.images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-end justify-center md:justify-start gap-2 md:gap-5 mt-6 lg:mt-0 select-none">
      {servicesBannerData.images.map((src, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={idx}
            className="relative overflow-hidden rounded-[16px] md:rounded-[24px] transition-all duration-500 ease-in-out"
            style={{ 
              width: isActive ? "clamp(120px, 38vw, 372px)" : "clamp(56px, 12vw, 120px)",
              height: "clamp(180px, 50vw, 533px)"
            }}
          >
            {!loaded[idx] && <div className="absolute inset-0 rounded-[16px] md:rounded-[24px] skeleton" />}
            <Image 
              src={src} 
              alt={`Services variant ${idx + 1}`} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 38vw, 372px"
              onLoadingComplete={() => setLoaded((prev)=>{ const next=[...prev]; next[idx]=true; return next; })} 
            />
            {isActive && (
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                {idx === 0 ? (
                  // First image shows tre+ logo
                  <div className="flex items-center gap-1">
                    <Image src="/logo.png" alt="tre+ plus" width={70} height={41} className="md:w-[89px] md:h-[52px]" />
                  </div>
                ) : (
                  // Other images show text
                  <div className="text-white text-[18px] md:text-[28px] font-bold font-unbounded drop-shadow-sm">
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
          </div>
        );
      })}
    </div>
  );
};
