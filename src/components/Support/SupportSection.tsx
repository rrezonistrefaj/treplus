'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { supportData } from './supportData';

const SupportSection = () => {
  return (
    <div className="max-w-[1260px] mx-auto px-4 md:px-0 py-20">
      {/* Section Title */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-semibold text-[#22252A] leading-[110%] font-unbounded">
          {supportData.title}
        </h2>
      </motion.div>

      {/* Cards Container */}
      <motion.div 
        className="flex flex-col lg:flex-row gap-8"
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
            className="bg-[#F4F4F4] border border-[#E4E7E9] rounded-[25px] p-8 hover:shadow-xl transition-shadow duration-200 w-full"
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
            <div className="flex items-start space-x-6">
              {/* Icon */}
                <div className="w-[232px] h-[208px] relative">
                  <Image
                    src={card.icon}
                    alt={`${card.heading} icon`}
                    fill
                    className="object-contain"
                  />
                </div>

              {/* Text Content */}
              <div >
                <h3 className="text-3xl font-semibold text-[#22252A] mb-3">
                  {card.heading}
                </h3>
                <p className="text-base text-[#474D57] mb-5 leading-[20px]">
                  {card.description}
                </p>

                {/* Action Button/Link */}
                {card.actionType === 'email' ? (
                  <a
                    href={card.actionUrl}
                    className="inline-block px-6 py-3 border border-[#FF5F1F] text-[#FF5F1F] bg-white rounded-[10px] font-medium text-base hover:bg-[#FF5F1F] hover:text-white transition-transform will-change-transform hover:-translate-y-[1px] duration-200"
                  >
                    {card.actionText}
                  </a>
                ) : (
                  <button
                    onClick={() => window.open(card.actionUrl, '_blank')}
                    className="px-6 py-3 border border-[#FF5F1F] text-[#FF5F1F] bg-white rounded-[10px] font-medium text-base hover:bg-[#FF5F1F] hover:text-white transition-transform will-change-transform hover:-translate-y-[1px] duration-200"
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
