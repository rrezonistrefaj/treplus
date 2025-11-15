"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { teamMembers } from "./teamData";
import { useTranslations } from "next-intl";

const TeamSection = () => {
  const t = useTranslations('Team');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    // Check on mount
    checkScreenSize();

    // Listen for resize
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:px-0 py-20 overflow-x-clip">
      {/* Header with staggered animations */}
      <motion.div 
        className="flex items-end justify-between gap-6"
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
        <div className="max-w-[760px] mb-20">
          <motion.h2 
            className="text-[20px] sm:text-3xl md:text-5xl font-unbounded font-bold text-[#1F1F1F]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            className="mt-4 mb-6 text-[14px] sm:text-base font-medium text-[#474D57]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('description')}
          </motion.p>
          <motion.div 
            className="shrink-0 hidden sm:block"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button className="bg-[#FF5F1F] px-11.5 py-5 font-bold rounded-[10px] hover:bg-orange-600 text-white transition-transform will-change-transform hover:-translate-y-[1px]">{t('viewAll')}</button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right-bleed carousel with staggered animations */}
      <motion.div 
        className="mt-10 relative team-overflow overflow-visible"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent>
            {teamMembers.map((member) => (
              <CarouselItem
                key={member.id}
                className="basis-[85%] sm:basis-[65%] md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
              >
                <motion.article 
                  className="h-full rounded-[20px]"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { 
                        duration: 0.4, 
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <div className="flex flex-col items-start gap-4 w-[323px]">
                    <div className="relative mt-1 w-[323px] h-[389px] overflow-visible">
                    {/* Background layer */}
                    <div className="absolute inset-0 rounded-[33px] bg-[#F3F3F3] border border-[#E4E7E9]" />

                    {/* Icon layer (under the person) */}
                    {member.icons?.map((icon, idx) => (
                      <div
                        key={`${member.id}-icon-${idx}`}
                        className={`absolute z-[1] team-icon-responsive ${isDesktop ? icon.className : icon.mobileClassName}`}
                        style={{
                          '--icon-mobile-width': `${icon.mobileWidth}px`,
                          '--icon-mobile-height': `${icon.mobileHeight}px`,
                          '--icon-desktop-width': `${icon.width}px`,
                          '--icon-desktop-height': `${icon.height}px`,
                        } as React.CSSProperties}
                      >
                        <Image
                          src={icon.src}
                          alt=""
                          width={icon.width}
                          height={icon.height}
                          className="w-full h-full object-contain"
                          priority
                        />
                      </div>
                    ))}

                    {/* Person image on top, allowed to overflow the card */}
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-[279px] h-[406px] pointer-events-none">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-contain"
                        sizes="360px"
                        priority
                      />
                    </div>
                    </div>
                    <header className="text-center mt-2 w-full">
                      <h3 className="text-[20px] sm:text-3xl font-bold text-[#0F0F0F]">{member.name}</h3>
                      <p className="mt-1 text-[14px] sm:text-base text-[#0F0F0F] font-medium">{t(`roles.${member.id}`)}</p>
                    </header>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons below carousel, contained within max-width */}
          <div className="max-w-[1260px] mx-auto pl-4 sm:pl-0 pr-4 sm:pr-0 mt-8 flex items-center gap-4">
            <CarouselPrevious
              variant="custom"
              size="custom"
              className="!relative !left-0 !top-0 !translate-y-0 !translate-x-0 size-[60px] rounded-full border-2 bg-transparent hover:bg-transparent shadow-none border-[#0F0F0F] text-[#0F0F0F] disabled:border-gray-400 disabled:text-gray-400 disabled:opacity-100"
            />
            <CarouselNext
              variant="custom"
              size="custom"
              className="!relative !left-0 !top-0 !translate-y-0 !translate-x-0 size-[60px] rounded-full border-2 bg-transparent hover:bg-transparent shadow-none border-[#0F0F0F] text-[#0F0F0F] disabled:border-gray-400 disabled:text-gray-400 disabled:opacity-100"
            />
          </div>
        </Carousel>
      </motion.div>

      {/* Scoped overflow rule matching OurWork to allow left-side peek */}
      <style jsx global>{`
        .team-overflow [data-slot="carousel-content"] { 
          overflow: visible !important; 
        }
        .team-overflow [data-slot="carousel-item"] {
          overflow: visible !important;
        }
        
        /* Responsive icon sizing - mobile first */
        .team-icon-responsive {
          width: var(--icon-mobile-width);
          height: var(--icon-mobile-height);
        }
        
        @media (min-width: 640px) {
          .team-icon-responsive {
            width: var(--icon-desktop-width);
            height: var(--icon-desktop-height);
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;


