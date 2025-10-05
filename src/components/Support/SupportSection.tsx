'use client';

import React from 'react';
import Image from 'next/image';
import { supportData } from './supportData';

const SupportSection = () => {
  return (
    <div className="max-w-[1260px] mx-auto px-4 md:px-0 py-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold text-[#22252A] leading-[110%] font-unbounded">
          {supportData.title}
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row gap-8 ">
        {supportData.cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#F4F4F4] border border-[#E4E7E9] rounded-[25px] p-8 hover:shadow-xl transition-shadow duration-200 w-full"
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
                    className="inline-block px-6 py-3 border border-[#FF5F1F] text-[#FF5F1F] bg-white rounded-[10px] font-medium text-base hover:bg-[#FF5F1F] hover:text-white transition-colors duration-200"
                  >
                    {card.actionText}
                  </a>
                ) : (
                  <button
                    onClick={() => window.open(card.actionUrl, '_blank')}
                    className="px-6 py-3 border border-[#FF5F1F] text-[#FF5F1F] bg-white rounded-[10px] font-medium text-base hover:bg-[#FF5F1F] hover:text-white transition-colors duration-200"
                  >
                    {card.actionText}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection;
