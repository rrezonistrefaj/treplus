"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { teamMembers } from "./teamData";

const TeamSection = () => {
  return (
    <Reveal as="section" className="max-w-[1260px] mx-auto px-4 sm:px-0 py-20 reveal-will-change" amount={0.2}>
      {/* Header */}
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-[760px] mb-20">
          <h2 className="text-[40px] sm:text-5xl font-unbounded font-bold text-[#1F1F1F]">
            Our team
          </h2>
          <p className="mt-4 mb-6 text-base font-medium text-[#474D57] ">
            We’re software developers, designers, and marketers working together to create impactful
            digital solutions. With creativity and expertise, we help brands innovate and grow.
          </p>
          <div className="shrink-0 hidden sm:block">
          <button className="bg-[#FF5F1F] px-11.5 py-5 font-bold rounded-[10px] hover:bg-orange-600 text-white">View full team</button>
        </div>
        </div>
        
      </div>

      {/* Right-bleed carousel, same structure as OurWork */}
      <div className="mt-10 relative team-overflow">
        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent>
            {teamMembers.map((member) => (
              <CarouselItem
                key={member.id}
                className="basis-[85%] sm:basis-[65%] md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
              >
                <article className="h-full rounded-[20px]">
                  <div className="flex flex-col items-start gap-4 w-[323px]">
                    <div className="relative mt-1 w-[323px] h-[389px] overflow-visible">
                    {/* Background layer */}
                    <div className="absolute inset-0 rounded-[33px] bg-[#F3F3F3] border border-[#E4E7E9]" />

                    {/* Icon layer (under the person) */}
                    {member.icons?.map((icon, idx) => (
                      <Image
                        key={`${member.id}-icon-${idx}`}
                        src={icon.src}
                        alt=""
                        width={icon.width}
                        height={icon.height}
                        className={`absolute z-[1] ${icon.className}`}
                        priority
                      />
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
                      <h3 className="text-lg sm:text-3xl font-bold text-[#0F0F0F]">{member.name}</h3>
                      <p className="mt-1 text-[13px] sm:text-base text-[#0F0F0F] font-medium">{member.role}</p>
                    </header>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Position arrows just outside content, like OurWork */}
          <CarouselPrevious
            variant="custom"
            size="custom"
            className="-left-2 -bottom-18 top-auto translate-y-0 size-[60px] rounded-full border-2 bg-transparent hover:bg-transparent shadow-none border-[#0F0F0F] text-[#0F0F0F] disabled:border-gray-400 disabled:text-gray-400 disabled:opacity-100"
          />
          <CarouselNext
            variant="custom"
            size="custom"
            className="left-16 -bottom-18 top-auto translate-y-0 size-[60px] rounded-full border-2 bg-transparent hover:bg-transparent shadow-none border-[#0F0F0F] text-[#0F0F0F] disabled:border-gray-400 disabled:text-gray-400 disabled:opacity-100"
          />
        </Carousel>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden">
          <Button className="w-full bg-orange-500 hover:bg-orange-600">View full team</Button>
        </div>
      </div>

      {/* Scoped overflow rule matching OurWork to allow left-side peek */}
      <style jsx global>{`
        .team-overflow [data-slot="carousel-content"] { overflow: visible; }
      `}</style>
    </Reveal>
  );
};

export default TeamSection;


