"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";

const TeamBanner = () => {
  const t = useTranslations('TeamBanner');

  return (
    <Reveal as="div" className="max-w-[1260px] mx-auto px-0 pt-16 reveal-will-change" amount={0.15}>
      {/* Main content container */}
      <div className="relative flex flex-col lg:flex-row items-center pb-20 gap-8 lg:gap-12">
        {/* Left side - Image */}
        <div className="relative">
          <Image
            src="/TeamBanner.png"
            alt="Meet our team"
            width={602}
            height={632}
            className="object-cover h-auto max-w-[602px]"
            priority
          />

          {/* Orange decorative element - top left */}
          <div className="absolute -top-8 -left-8 select-none">
            <Image
              src="/orangeIcon.svg"
              alt="orange icon"
              width={184}
              height={184}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Purple decorative element - top right */}
          <div className="absolute -top-6 -right-8 select-none">
            <Image
              src="/purpleIcon.svg"
              alt="purple icon"
              width={167}
              height={167}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Blue decorative element - center down */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 select-none">
            <Image
              src="/greenIcon.svg"
              alt="blue icon"
              width={155}
              height={155}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right side - Text content */}

          <div>
            <h1 className="text-5xl font-semibold font-unbounded text-[#22252A] leading-[50px]">
              {t('title')}
            </h1>
            <p className="mt-4 text-base font-medium leading-[20px] text-[#474D57] max-w-[480px]">
              {t('description')}
            </p>
          </div>
        </div>

    </Reveal>
  );
};

export default TeamBanner;
