"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { teamMembers } from "./teamMembersData";
import { useTranslations } from "next-intl";

const TeamMembersSection = () => {
  const t = useTranslations("Team");
  return (
    <Reveal
      as="section"
      className="max-w-[1260px] mx-auto px-4 sm:px-0 py-20 reveal-will-change"
      amount={0.2}
    >
      {/* Header */}

        <div className="max-w-[760px] mb-37">
          <h2 className="text-[40px] sm:text-5xl font-unbounded font-bold text-[#1F1F1F]">
            {t("membersTitle")}
          </h2>
          <p className="mt-2 text-base font-medium text-[#474D57] ">
            {t("description")}
          </p>
        </div>


      {/* Grid layout for team members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-y-36">
        {teamMembers.map((member) => (
          <article key={member.id} className="h-full">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="relative mt-1 w-[295px] h-[355px] overflow-visible">
                {/* Background layer */}
                <div className="absolute inset-0 rounded-[33px] bg-[#F3F3F3] " />

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
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-[255px] h-[371px] pointer-events-none">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-contain"
                    sizes="255px"
                    priority
                  />
                </div>
              </div>
              <header className="text-center mt-2 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F0F0F]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-[#0F0F0F] font-medium">
                  {t(`roles.${member.id}`)}
                </p>
              </header>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 sm:hidden">
        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          {t("viewAll")}
        </Button>
      </div>
    </Reveal>
  );
};

export default TeamMembersSection;