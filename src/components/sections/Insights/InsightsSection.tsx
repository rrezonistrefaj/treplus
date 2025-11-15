"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { insightsData } from "./insightsData";

const InsightsSection = () => {
  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:px-0 py-12 md:py-20 overflow-x-clip">
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
            className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-unbounded font-bold text-[#0F0F0F] leading-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {insightsData.title}
          </motion.h2>
          <motion.p
            className="mt-3 sm:mt-4 md:py-5 text-[14px] sm:text-[15px] md:text-base text-[#474D57] leading-5 sm:leading-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {insightsData.description}
          </motion.p>
          <motion.div
            className="mt-4 sm:mt-5 md:mt-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button className="bg-[#FF5F1F] px-8 sm:px-10 md:px-11.5 py-4 sm:py-4.5 md:py-5 font-bold text-sm sm:text-base rounded-[10px] hover:bg-orange-600 text-white transition-transform will-change-transform hover:-translate-y-[1px]">
              <Link href={insightsData.seeMoreButtonHref}>{insightsData.seeMoreLabel}</Link>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Carousel with staggered animations */}
      <motion.div
        className="mt-6 sm:mt-7 md:mt-7.5 relative insights-overflow overflow-visible"
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
            {insightsData.items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[85%] sm:basis-[70%] md:basis-[60%] lg:basis-1/2 xl:basis-1/3"
              >
                <motion.article
                  className="h-full flex flex-col"
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
                  {/* Edge-to-edge image */}
                  <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[404px] rounded-t-[20px] sm:rounded-t-[25px] overflow-hidden bg-[#F3F3F3]">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={404}
                      height={404}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Content area with #F3F3F3 background and responsive padding */}
                  <div className="bg-[#F3F3F3] px-4 sm:px-5 md:px-6 lg:px-[25px] pb-4 sm:pb-5 md:pb-6 lg:pb-[25px] pt-3 sm:pt-4 md:pt-[15px] flex flex-col rounded-b-[20px] sm:rounded-b-[25px]">
                    <div className="flex items-center justify-between text-sm sm:text-[15px] md:text-base text-[#474D57] leading-[120%] pb-4 sm:pb-5 md:pb-7">
                      <span className="truncate pr-2">{item.category}</span>
                      <span className="flex-shrink-0">{item.date}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#22252A] truncate" title={item.title}>{item.title}</h3>
                    <p className="mt-2 sm:mt-3 text-[13px] sm:text-sm md:text-base font-medium text-[#474D57] leading-[140%] sm:leading-[150%] line-clamp-3 sm:line-clamp-none">
                      {item.excerpt}
                    </p>
                    <div className="mt-6 sm:mt-7 md:mt-[37.5px]">
                      <Link href={`/insights/${item.slug}`} className="cursor-pointer group relative inline-flex items-center overflow-hidden rounded-full transition-all duration-300 hover:scale-105 bg-white">
                        {/* Left side - Glass morphism effect with set height */}
                        <div className="flex items-center justify-center h-10 sm:h-11 md:h-12 px-3 sm:px-3.5 md:px-4 text-[#474D57] font-medium text-sm sm:text-base md:text-lg">
                          Read More
                        </div>

                        {/* Right side - White circle with orange arrow */}
                        <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-[#F4F4F4] rounded-full border border-white">
                          <ArrowUpRight className="w-4 h-4 sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] text-[#FF5F1F]" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons below carousel, contained within max-width */}
          <div className="max-w-[1260px] mx-auto mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
            <CarouselPrevious
              variant="custom"
              size="custom"
              className="!relative !left-0 !top-0 !translate-y-0 !translate-x-0 size-[50px] sm:size-[55px] md:size-[60px] rounded-full border-2 bg-transparent hover:bg-transparent shadow-none border-[#0F0F0F] text-[#0F0F0F] disabled:border-gray-400 disabled:text-gray-400 disabled:opacity-100"
            />
            <CarouselNext
              variant="custom"
              size="custom"
              className="!relative !left-0 !top-0 !translate-y-0 !translate-x-0 size-[50px] sm:size-[55px] md:size-[60px] rounded-full border-2 bg-transparent hover:bg-transparent shadow-none border-[#0F0F0F] text-[#0F0F0F] disabled:border-gray-400 disabled:text-gray-400 disabled:opacity-100"
            />
          </div>
        </Carousel>
      </motion.div>

      {/* Overflow like OurWork */}
      <style jsx global>{`
        .insights-overflow [data-slot="carousel-content"] { 
          overflow: visible !important; 
        }
        .insights-overflow [data-slot="carousel-item"] {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
};

export default InsightsSection;


