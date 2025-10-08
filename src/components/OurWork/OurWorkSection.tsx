"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

const OurWorkSection = () => {
  const t = useTranslations('OurWork');
  return (
    <section className="max-w-[1260px] mx-auto px-4 sm:px-0 pb-20">
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
            className="text-[40px] sm:text-[48px] font-unbounded font-bold text-[#0F0F0F]"
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
        className="mt-13 relative ourwork-overflow"
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
                  className="h-full rounded-[25px] bg-[#F3F3F3] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-3 flex flex-col gap-5"
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
                  <header className="px-4.5 pt-8">
                    <h3 className={`text-3xl font-bold leading-snug ${item.textColor}`}>
                      {t(`items.${index}.title`)}
                    </h3>
                    <p className="mt-2 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed line-clamp-3">
                      {t(`items.${index}.description`)}
                    </p>
                  </header>

                  <div className="relative mt-4 rounded-[16px] overflow-hidden h-[220px] bg-gray-100">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={380}
                      height={245}
                      className="object-cover"
                      priority
                    />

                    <div className="absolute bottom-3 left-3">
                      <ReadMoreButton color={item.textColor.replace('text-', '')} />
                    </div>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Position arrows just outside carousel content on the left to mimic reference */}
          <CarouselPrevious
            variant="custom"
            size="custom"
            className="-left-2 bottom-[-84px] top-auto translate-y-0 size-[60px] rounded-full border-2 bg-transparent hover:bg-transparent shadow-none border-[#0F0F0F] text-[#0F0F0F] disabled:border-gray-400 disabled:text-gray-400 disabled:opacity-100"
          />
          <CarouselNext
            variant="custom"
            size="custom"
            className="left-16 bottom-[-84px] top-auto translate-y-0 size-[60px] rounded-full border-2 bg-transparent hover:bg-transparent shadow-none border-[#0F0F0F] text-[#0F0F0F] disabled:border-gray-400 disabled:text-gray-400 disabled:opacity-100"
          />
        </Carousel>

        {/* Mobile CTA */}
        <motion.div 
          className="mt-8 sm:hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Button variant="custom" size="custom" className="w-full bg-[#FF5F1F] px-11.5 py-5 font-bold rounded-[10px] hover:bg-orange-600 text-white transition-transform will-change-transform hover:-translate-y-[1px]">{t('seeMore')}</Button>
        </motion.div>
      </motion.div>
      {/* Scoped override: allow left-side visibility by removing overflow clipping on shadcn carousel content */}
      <style jsx global>{`
        .ourwork-overflow [data-slot="carousel-content"] { overflow: visible; }
      `}</style>
    </section>
  );
};

export default OurWorkSection;