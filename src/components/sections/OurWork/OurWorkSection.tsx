"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReadMoreButton } from "@/components/ui/ReadMoreButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ourWorkSectionData } from "./ourWorkData";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const OurWorkSection = () => {
  const t = useTranslations('OurWork');
  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:pl-0 pb-20">
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
        <div className="max-w-[760px]">
          <motion.h2 
            className="text-[20px] md:text-[30px] lg:text-[48px] font-unbounded font-bold text-[#0F0F0F]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            className="py-5 text-[14px] sm:text-base text-[#474D57] leading-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t('description')}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button className="bg-[#FF5F1F] px-11.5 py-5 font-bold rounded-[10px] hover:bg-orange-600 text-white transition-transform will-change-transform hover:-translate-y-[1px]">
              <Link href={ourWorkSectionData.seeMoreButtonHref}>{t('seeMore')}</Link>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right-bleed carousel with staggered animations */}
      <motion.div 
        className="mt-13 relative ourwork-overflow overflow-visible"
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
        {/* Carousel within container; overflow visible so left side peeks when sliding */}
        <Carousel
          opts={{ align: "start" }}
          className="relative"
        >
          <CarouselContent>
            {ourWorkSectionData.workItems.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="basis-[85%] sm:basis-[65%] md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
              >
                <motion.article 
                  className="h-full rounded-[25px] bg-[#F3F3F3] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-3 flex flex-col gap-5 w-full"
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
                  <header className="px-4.25 pt-8">
                    <h3 className="text-[20px] md:text-3xl font-bold leading-snug" style={{ color: item.textColor }}>
                      {t(`items.${index}.title`)}
                    </h3>
                    <p
                      className="mt-2 text-[14px] sm:text-[16px] text-[#474D57] leading-[16px] sm:leading-[20px] min-h-[48px] sm:min-h-[60px]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {t(`items.${index}.description`)}
                    </p>
                  </header>

                  <div className="relative mt-4 rounded-[16px] overflow-hidden aspect-[380/245] bg-gray-100">
                    <Link href={item.slug ? `/cases/${item.slug}` : ourWorkSectionData.readMoreButtonHref}>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
                    </Link>

                    <div className="absolute bottom-3 left-3">
                      <Link href={item.slug ? `/cases/${item.slug}` : ourWorkSectionData.readMoreButtonHref}>
                        <ReadMoreButton color={item.textColor} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons below carousel, contained within max-width */}
          <div className="max-w-[1260px] mx-auto mt-8 flex items-center gap-4">
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
      {/* Scoped override: allow left-side visibility by removing overflow clipping on shadcn carousel content */}
      <style jsx global>{`
        .ourwork-overflow [data-slot="carousel-content"] { 
          overflow: visible !important; 
        }
        .ourwork-overflow [data-slot="carousel-item"] {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
};

export default OurWorkSection;