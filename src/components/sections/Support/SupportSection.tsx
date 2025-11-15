'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { supportData } from './supportData';

const SupportSection = () => {
  return (
    <div className="max-w-[1260px] mx-auto px-4 md:px-0 py-12 md:py-16 lg:py-20">
      {/* Section Title */}
      <motion.div 
        className="text-center mb-8 md:mb-12 lg:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#22252A] leading-tight sm:leading-normal lg:leading-[110%] font-unbounded px-2 md:px-0">
          {supportData.title}
        </h2>
      </motion.div>

      {/* Cards Container */}
      <motion.div 
        className="flex flex-row gap-3.5 sm:gap-6 md:gap-8"
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
        {supportData.cards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-[#F4F4F4] border border-[#E4E7E9] rounded-[15px] lg:rounded-[25px] px-2 sm:px-6 lg:px-8 py-2 sm:py-6 lg:py-8 hover:shadow-xl transition-shadow duration-200 flex-1 min-w-0"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.4, ease: "easeOut" }
              }
            }}
          >
            {/* Card Content */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left w-full space-y-6 lg:space-y-0 lg:space-x-0">
              {/* Icon */}
              <div className="w-20 h-20 sm:w-28 sm:h-24 md:w-36 md:h-32 lg:w-[232px] lg:h-[208px] relative mb-4 sm:mb-5 lg:mb-0 flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={`${card.heading} icon`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="w-full min-w-0 lg:flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#22252A] mb-2 sm:mb-3 lg:mb-3 break-words">
                  {card.heading}
                </h3>
                <p className="text-sm sm:text-base lg:text-base text-[#474D57] mb-4 sm:mb-5 lg:mb-5 tracking-[0%] leading-[16px] sm:leading-[20px] lg:leading-[20px] break-words">
                  {card.description}
                </p>

                {/* Action Button/Link */}
                {card.actionType === 'email' ? (
                  <a
                    href={card.actionUrl}
                    className="block lg:inline-block w-full lg:w-auto px-3 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3 border border-[#FF5F1F] text-[#FF5F1F] bg-white rounded-[10px] font-medium text-sm sm:text-base lg:text-base hover:bg-[#FF5F1F] hover:text-white transition-transform will-change-transform hover:-translate-y-[1px] duration-200 break-words text-center lg:text-left"
                  >
                    {card.actionText}
                  </a>
                ) : (
                  <button
                    onClick={() => window.open(card.actionUrl, '_blank')}
                    className="w-full lg:w-auto px-2 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3 border border-[#FF5F1F] text-[#FF5F1F] bg-white rounded-[10px] font-medium text-sm sm:text-base lg:text-base hover:bg-[#FF5F1F] hover:text-white transition-transform will-change-transform hover:-translate-y-[1px] duration-200 break-words"
                  >
                    {card.actionText}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SupportSection;
