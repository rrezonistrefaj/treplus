"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { servicesData } from "./servicesData";
import { servicesCardData } from "./servicesCardData";
import { useTranslations } from "next-intl";

const ServicesSectionMobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslations('Services');

  // Create card data from services data + styling config
  const cardData = [
    ...servicesData.items.map((item, index) => ({
      id: index + 1,
      title: t(`items.${index}.title`),
      content: t(`items.${index}.description`),
      iconSrc: item.iconSrc,
      ...servicesCardData.serviceCard,
    })),
    {
      id: servicesData.items.length + 1,
      title: t("contact.title"),
      content: t("contact.label"),
      iconSrc: servicesData.contactCard.iconSrc,
      ...servicesCardData.contactCard,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the container
      const scrollProgress = Math.max(0, Math.min(1, -containerTop / (containerHeight - windowHeight)));

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        if (index === 0) {
          card.style.opacity = "1";
          card.style.transform = "translate(-50%, 0%)";
          return;
        }

        const totalCards = cardData.length;
        const cardStartProgress = (index - 1) / (totalCards - 1);
        const cardEndProgress = index / (totalCards - 1);

        if (index === 1) {
          if (scrollProgress < cardStartProgress) {
            card.style.opacity = "1";
            card.style.transform = "translate(-50%, 120%)";
          } else if (scrollProgress >= cardEndProgress) {
            card.style.opacity = "1";
            card.style.transform = "translate(-50%, 0%)";
          } else {
            card.style.opacity = "1";
            const cardProgress = (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress);
            const translateY = (1 - cardProgress) * 120;
            card.style.transform = `translate(-50%, ${translateY}%)`;
          }
        } else {
          const prevCardStartProgress = (index - 2) / (totalCards - 1);

          if (scrollProgress < prevCardStartProgress) {
            // Card should be completely out of view
            card.style.opacity = "0";
            card.style.transform = "translate(-50%, 240%)";
          } else if (scrollProgress < cardStartProgress) {
            // Card becomes visible and slides into position from below
            card.style.opacity = "1";
            const appearProgress =
              (scrollProgress - prevCardStartProgress) / (cardStartProgress - prevCardStartProgress);
            const translateY = 240 - appearProgress * 120; // Slide from 240% to 120%
            card.style.transform = `translate(-50%, ${translateY}%)`;
          } else if (scrollProgress >= cardEndProgress) {
            // Card is fully in position
            card.style.opacity = "1";
            card.style.transform = "translate(-50%, 0%)";
          } else {
            // Card is in transition to stack
            card.style.opacity = "1";
            const cardProgress = (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress);
            const translateY = (1 - cardProgress) * 120;
            card.style.transform = `translate(-50%, ${translateY}%)`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardData.length]);

  return (
    <section className="max-w-[1260px] mx-auto px-4 pt-12 max-h-[390vh] overflow-x-clip">
      {/* Hero image and heading on top for mobile - NO STICKY */}
      <div className="mb-4">
        <div className="w-full">
          <h2 className="text-[34px] sm:text-[44px] leading-[1.08] font-bold font-unbounded text-[#22252A]">
            {t('heading')}
          </h2>
          <p className="mt-4 text-[14px] sm:text-base text-[#474D57] leading-relaxed">
            {t('subheading')}
          </p>
        </div>
        <div className="mt-6 relative w-full overflow-visible">
          <div className="relative w-full aspect-[343/243] rounded-[20px] overflow-hidden">
            <Image
              src={"/TogethereImage.png"}
              alt="design showcase"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute -top-4 right-0 -translate-y-1/4 translate-x-1/4 select-none z-10">
            <Image
              src={"/TogetherPurpleIcon.svg"}
              alt="design icon"
              width={140}
              height={140}
            />
          </div>
        </div>
      </div>

      {/* Stacking cards below */}
      <div 
        ref={containerRef} 
        className="relative max-h-[360vh]" 
        style={{ height: `${cardData.length * 100}vh` }}
      >
        <div className="sticky top-24 h-screen flex items-center justify-center">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`absolute w-[90%] ${card.isContact ? 'h-[480px]' : 'h-[360px]'} rounded-[25px] border border-[#E4E7E9] flex flex-col ${card.bgColor} ${card.textColor}`}
              style={{
                transform: index === 0 ? "translate(-50%, 0%)" : index === 1 ? "translate(-50%, 120%)" : "translate(-50%, 240%)",
                opacity: index <= 1 ? 1 : 0,
                zIndex: index + 1,
                top: "0px",
                left: "50%",
              }}
            >
              {card.isContact ? (
                <div className="p-7.5 flex flex-col h-full overflow-hidden relative">
                  <div className="absolute -right-0 -top-0 select-none opacity-90">
                    <Image
                      src={card.iconSrc}
                      alt="plus"
                      width={150}
                      height={150}
                      priority
                    />
                  </div>
                  <div className="text-base font-bold text-[#FF5F1F] mb-[100px]">
                    {card.content}
                  </div>
                  <div className="flex-1 flex items-center pb-7.5">
                    <h2 className="text-5xl font-bold text-[#22252A]">
                      {card.title}
                    </h2>
                  </div>
                  <button className="w-full bg-[#FF5F1F] hover:bg-orange-600 text-white text-base font-bold py-6 rounded-lg">
                    {t('contact.cta')}
                  </button>
                </div>
              ) : (
                <div className="p-7.5 flex flex-col justify-between h-full">
                  <div className="shrink-0">
                    <Image
                      src={card.iconSrc}
                      alt={card.title}
                      width={133}
                      height={95}
                      className="select-none"
                      priority
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 pb-3">
                    <h2 className="text-3xl font-bold text-[#22252A]">
                      {card.title}
                    </h2>
                    <p className="text-base text-[#474D57]">
                      {card.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionMobile;

