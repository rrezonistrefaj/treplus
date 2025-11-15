"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CTASection = () => {
  const t = useTranslations('CTA');
  return (
    <section className=" py-16 sm:py-20 overflow-x-clip">
      <div className=" mx-auto">
        <div className=" bg-[#F3F3F3] shadow-[0_0_24px_rgba(0,0,0,0.15)]">
          <motion.div 
            className=" pt-20 pb-25 text-center px-12.5"
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
              className="text-[20px] sm:text-5xl leading-[125%] font-bold font-unbounded  text-[#1F1F1F]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t('titleLine1')}
              <br className="hidden sm:block" /> {t('titleLine2')}
            </motion.h2>
            <motion.p 
              className="mt-2 text-[14px] sm:text-base font-medium text-[#474D57] px-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t('subtext')}
            </motion.p>
            <motion.div 
              className="mt-6 flex justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button className="bg-[#FF5F1F] px-11.5 py-5 font-bold rounded-[10px] hover:bg-orange-600 text-white transition-transform will-change-transform hover:-translate-y-[1px]">
                {t('cta')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


