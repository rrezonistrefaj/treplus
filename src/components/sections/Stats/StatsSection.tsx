"use client";


import React, { useMemo, useRef } from "react";

import Reveal from "@/components/ui/Reveal";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";

import { statsData } from "./statsData";

import { useTranslations } from "next-intl";

const containerVariants = {

  hidden: { opacity: 0, y: 24 },

  visible: {

    opacity: 1,

    y: 0,

    transition: { duration: 0.6 },

  },

};

const itemVariants = {

  hidden: { opacity: 0, y: 16 },

  visible: (i: number) => ({

    opacity: 1,

    y: 0,

    transition: { delay: 0.1 * i, duration: 0.5 },

  }),

};

interface StatsSectionProps {
  hideHeading?: boolean;
}

const StatsSection = ({ hideHeading = false }: StatsSectionProps) => {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({

    target: sectionRef,

    offset: ["start end", "start start"],

  });

  const t = useTranslations('Stats');

  const fullTitle = useMemo(

    () => `${t('headingStrong')} ${t('headingSubtle')}`,

    [t]

  );

  const words = useMemo(() => fullTitle.split(" "), [fullTitle]);

  return (

    <Reveal as="section" className={`max-w-[1260px] mx-auto px-4 xl:px-0 reveal-will-change ${hideHeading ? "py-[50px]" : "py-20 lg:py-[250px]"}`} amount={0.15}>

      {!hideHeading && (
        <div ref={sectionRef} className="text-center max-w-[1100px] mx-auto">

          <motion.h2

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, amount: 0.6 }}

            variants={containerVariants}

            className="text-2xl md:text-3xl font-unbounded font-bold"

          >

            {words.map((word, index) => (

              <RevealWord

                key={`${word}-${index}`}

                text={word}

                index={index}

                total={words.length}

                progress={scrollYProgress}

              />

            ))}

          </motion.h2>

        </div>
      )}
      {hideHeading && <div ref={sectionRef} className="absolute -z-10 opacity-0 pointer-events-none" style={{ height: '1px', width: '1px' }} aria-hidden="true" />}

      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-12 text-center md:text-left ${hideHeading ? "" : "mt-25 md:mt-30 lg:mt-44"}`}>

        {statsData.stats.map((stat, index) => (

          <motion.div

            key={index}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, amount: 0.4 }}

            custom={index}

            variants={itemVariants}

            className=""

          >

            <div className="text-[30px] md:text-[64px] font-bold font-unbounded ">

              <span

                className={`bg-clip-text text-transparent ${stat.numberClass}`}

              >

                {stat.number}

              </span>

            </div>

            <div className="mt-0 md:mt-1 text-[14px] md:text-xl font-bold text-[#22252A]">

              {t(`items.${index}.title`)}

            </div>

            <div className="mt-0 md:mt-2 text-[14px] md:text-base text-[#474D57]">

              {t(`items.${index}.description`)}

            </div>

          </motion.div>

        ))}

      </div>

    </Reveal>

  );

};

export default StatsSection;

interface RevealWordProps {

  text: string;

  index: number;

  total: number;

  progress: MotionValue<number>;

}

const RevealWord = ({ text, index, total, progress }: RevealWordProps) => {

  const start = index / total;

  const end = Math.min(1, start + 0.12);

  const color = useTransform(

    progress,

    [0, start, end],

    ["#9CA3AF", "#727272", "#111827"]

  );

  return (

    <motion.span style={{ color }}>

      {text}

      {index < total - 1 ? " " : ""}

    </motion.span>

  );

};