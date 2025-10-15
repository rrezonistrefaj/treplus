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
    <section className="max-w-[1260px] mx-auto px-4 sm:px-0 py-20">
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
            {insightsData.title}
          </motion.h2>
          <motion.p
            className="py-5 text-[14px] sm:text-base text-[#474D57] leading-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {insightsData.description}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button className="bg-[#FF5F1F] px-11.5 py-5 font-bold rounded-[10px] hover:bg-orange-600 text-white transition-transform will-change-transform hover:-translate-y-[1px]">
              <Link href={insightsData.seeMoreButtonHref}>{insightsData.seeMoreLabel}</Link>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Carousel with staggered animations */}
      <motion.div
        className="mt-7.5 relative insights-overflow"
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
                className="basis-[85%] sm:basis-[65%] md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
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
                  <div className="relative w-full h-[404px] rounded-t-[25px] overflow-hidden bg-[#F3F3F3]">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={404}
                      height={404}
                      className="object-cover w-full h-full rounded-b-[25px]"
                    />
                  </div>

                  {/* Content area with #F3F3F3 background and 25px padding */}
                  <div className="bg-[#F3F3F3] px-[25px] pb-[25px] pt-[15px] flex flex-col rounded-b-[25px]">
                    <div className="flex items-center justify-between text-base text-[#474D57] leading-[120%] pb-7">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[#22252A] truncate" title={item.title}>{item.title}</h3>
                    <p className="text-[13px] sm:text-base font-medium text-[#474D57] leading-[150%]">
                      {item.excerpt}
                    </p>
                    <div className="mt-[37.5px]">
                      <button className="cursor-pointer group relative inline-flex items-center overflow-hidden rounded-full transition-all duration-300 hover:scale-105 bg-white">
                        {/* Left side - Glass morphism effect with set height */}
                        <div className="flex items-center justify-center h-12 px-4 text-[#474D57] font-medium text-lg">
                          Read More
                        </div>

                        {/* Right side - White circle with orange arrow */}
                        <div className="flex items-center justify-center w-11 h-11 bg-[#F4F4F4] rounded-full border border-white">
                          <ArrowUpRight className="w-[18px] h-[18px] text-[#FF5F1F]" />
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>

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
      </motion.div>

      {/* Overflow like OurWork */}
      <style jsx global>{`
        .insights-overflow [data-slot="carousel-content"] { 
          overflow: visible; 
          overflow-x: hidden;
        }
        .insights-overflow {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default InsightsSection;


