"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { testimonialsData } from "./testimonialsData";

const TestimonialsSection = () => {
  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:px-0 py-12 md:py-20 overflow-x-clip">
      {/* Header with staggered animations */}
      <motion.div 
        className="flex items-end justify-between"
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
            className="text-[20px] sm:text-[48px] font-unbounded font-bold text-[#1F1F1F]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {testimonialsData.title}
          </motion.h2>
          <motion.p 
            className="text-[14px] sm:text-base font-bold text-[#474D57] leading-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {testimonialsData.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Carousel with staggered animations */}
      <motion.div 
        className="mt-12.5 relative testimonials-overflow overflow-visible"
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
            {testimonialsData.items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[85%] sm:basis-[65%] md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
              >
                <motion.article 
                  className="h-full rounded-[25px] bg-white border border-[#E4E7E9] p-7.5 flex flex-col"
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
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="text-[#FF5F1F] size-6 fill-current" />
                    ))}
                  </div>
                  <p className="pt-9.5 pb-20 text-[16px] sm:text-xl text-[#474D57] font-bold leading-[24px]">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                      <Image src={item.avatar} alt={item.name} width={70} height={70} className="object-cover" />
                    </div>
                    <div className="ml-5">
                      <div className="font-bold text-[#22252A] text-xl">{item.name}</div>
                      <div className="text-base text-[#474D57]">{item.role}</div>
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

      {/* Allow left-side visibility like OurWorkSection */}
      <style jsx global>{`
        .testimonials-overflow [data-slot="carousel-content"] { 
          overflow: visible !important; 
        }
        .testimonials-overflow [data-slot="carousel-item"] {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;


