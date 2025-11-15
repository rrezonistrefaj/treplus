"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "./teamMembersData";
import { useTranslations } from "next-intl";

const TeamMembersSection = () => {
  const t = useTranslations("Team");
  return (
    <section className="max-w-[1260px] mx-auto px-4 xl:px-0 py-12 md:py-16 lg:py-20 overflow-x-clip">
      {/* Header */}
      <motion.div 
        className="max-w-[760px] mb-12 md:mb-16 lg:mb-37"
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
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold text-[#1F1F1F]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t("membersTitle")}
        </motion.h2>
        <motion.p 
          className="mt-2 text-sm sm:text-base font-medium text-[#474D57] mb-20 md:mb-28 xl:mb-0"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t("description")}
        </motion.p>
      </motion.div>


      {/* Grid layout for team members */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 sm:gap-y-20 md:gap-y-24 lg:gap-y-32 xl:gap-y-36 items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 }
          }
        }}
      >
        {teamMembers.map((member) => (
          <motion.article
            key={member.id}
            className="h-full"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              }
            }}
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
              <div className="relative mt-1 w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[295px] aspect-[295/355] overflow-visible">
                {/* Background layer */}
                <div className="absolute inset-0 rounded-[20px] sm:rounded-[25px] md:rounded-[28px] lg:rounded-[33px] bg-[#F3F3F3]" />

                {/* Icon layer (under the person) */}
                {member.icons?.map((icon, idx) => {
                  const iconSrcLower = icon.src.toLowerCase();
                  const isOrange = iconSrcLower.includes("orange");
                  const isPurple = iconSrcLower.includes("purple");
                  
                  // Mobile-specific positioning adjustments for orange and purple icons
                  let mobileClasses = "";
                  if (isOrange) {
                    mobileClasses = "-right-12 -top-16 sm:-right-18 sm:-top-24";
                  } else if (isPurple) {
                    mobileClasses = "left-1 -top-12 rotate-6 sm:left-2 sm:-top-20 sm:rotate-12";
                  }
                  
                  return (
                    <Image
                      key={`${member.id}-icon-${idx}`}
                      src={icon.src}
                      alt=""
                      width={icon.width}
                      height={icon.height}
                      className={`absolute z-[1] ${mobileClasses || icon.className} w-[60%] sm:w-[70%] md:w-[80%] lg:w-full h-auto`}
                      priority
                    />
                  );
                })}

                {/* Person image on top, allowed to overflow the card */}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-[92%] sm:w-[95%] md:w-[98%] lg:w-[275px] aspect-[255/371] pointer-events-none">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 32vw, 275px"
                    priority
                  />
                </div>
              </div>
              <header className="text-center mt-2 w-full">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0F0F0F]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm md:text-base text-[#0F0F0F] font-medium">
                  {t(`roles.${member.id}`)}
                </p>
              </header>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamMembersSection;