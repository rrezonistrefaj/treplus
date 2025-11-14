"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { servicesBannerData } from "./servicesBannerData";

const ServicesBanner = () => {
  const tServicesBanner = useTranslations("ServicesBanner");

  return (
    <section className="max-w-[1260px] mx-auto px-4 md:px-0 pt-16">
      <div className="relative flex flex-col justify-between lg:flex-row items-center mb-20">
        {/* Left: copy and CTA */}
        <motion.div 
          className="max-w-[370px]"
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
              className="text-5xl font-semibold font-unbounded text-[#22252A]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {tServicesBanner("title")}
            </motion.h1>
            <motion.p 
              className="mt-5 text-base font-medium leading-[20px] text-[#474D57] max-w-[589px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {tServicesBanner("description")}
            </motion.p>
            <motion.div 
              className="mt-14"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button className="bg-[#FF5F1F] hover:bg-orange-600 text-white text-xl px-[56.5px] py-5 font-bold rounded-[10px] transition-transform hover:-translate-y-1">
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
        className="mt-15"
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
        <div className="text-[12px] uppercase tracking-wide text-gray-500 mb-5">
          Trusted by
        </div>
        <motion.div 
          className="flex flex-wrap items-center gap-x-20"
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
              className="flex items-center gap-2.5"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image src={company.iconSrc} alt={company.alt} width={33} height={33} />
              <span className="text-[#383B41] text-xl font-semibold">{company.name}</span>
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
    <div className="flex items-end gap-5 mt-10 lg:mt-0 select-none">
      {servicesBannerData.images.map((src, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={idx}
            className="relative h-[533px] overflow-hidden rounded-[24px] transition-all duration-500 ease-in-out"
            style={{ width: isActive ? 372 : 120 }}
          >
            {!loaded[idx] && <div className="absolute inset-0 rounded-[24px] skeleton" />}
            <Image 
              src={src} 
              alt={`Services variant ${idx + 1}`} 
              fill 
              className="object-cover" 
              onLoadingComplete={() => setLoaded((prev)=>{ const next=[...prev]; next[idx]=true; return next; })} 
            />
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
          </div>
        );
      })}
    </div>
  );
};
