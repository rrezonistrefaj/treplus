"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { servicesData } from "./servicesData";
import { bannerData } from "@/components/Banner/bannerData";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslations('Services');

  // Use the "Design" main image as the static right hero (matches reference)
  const designMainImage =
    bannerData.animatedContent.find((c) => c.word === "Design")?.mainImageSrc ||
    bannerData.animatedContent[0].mainImageSrc;
  const designOverlay =
    bannerData.animatedContent.find((c) => c.word === "Design")
      ?.overlayImageSrc || bannerData.animatedContent[0].overlayImageSrc;

  // Create card data from services data
  const cardData = [
    ...servicesData.items.map((item, index) => ({
      id: index + 1,
      title: t(`items.${index}.title`),
      content: t(`items.${index}.description`),
      iconSrc: item.iconSrc,
      bgColor: "bg-white",
      textColor: "text-gray-900",
      isContact: false,
    })),
    {
      id: servicesData.items.length + 1,
      title: t("contact.title"),
      content: t("contact.label"),
      iconSrc: servicesData.contactCard.iconSrc,
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      isContact: true,
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
          card.style.transform = "translateY(0%)";
          return;
        }

        const totalCards = cardData.length;
        const cardStartProgress = (index - 1) / (totalCards - 1);
        const cardEndProgress = index / (totalCards - 1);

        if (index === 1) {
          if (scrollProgress < cardStartProgress) {
            card.style.opacity = "1";
            card.style.transform = "translateY(120%)";
          } else if (scrollProgress >= cardEndProgress) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0%)";
          } else {
            card.style.opacity = "1";
            const cardProgress = (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress);
            const translateY = (1 - cardProgress) * 120;
            card.style.transform = `translateY(${translateY}%)`;
          }
        } else {
          const prevCardStartProgress = (index - 2) / (totalCards - 1);

          if (scrollProgress < prevCardStartProgress) {
            // Card should be completely out of view
            card.style.opacity = "0";
            card.style.transform = "translateY(240%)";
          } else if (scrollProgress < cardStartProgress) {
            // Card becomes visible and slides into position from below
            card.style.opacity = "1";
            const appearProgress =
              (scrollProgress - prevCardStartProgress) / (cardStartProgress - prevCardStartProgress);
            const translateY = 240 - appearProgress * 120; // Slide from 240% to 120%
            card.style.transform = `translateY(${translateY}%)`;
          } else if (scrollProgress >= cardEndProgress) {
            // Card is fully in position
            card.style.opacity = "1";
            card.style.transform = "translateY(0%)";
          } else {
            // Card is in transition to stack
            card.style.opacity = "1";
            const cardProgress = (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress);
            const translateY = (1 - cardProgress) * 120;
            card.style.transform = `translateY(${translateY}%)`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardData.length]);

  return (
    <section className="max-w-[1260px] mx-auto px-4 md:px-0 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-h-[360vh]">
        {/* Left column - stacking cards */}
        <div className="lg:col-span-4">
          <div 
            ref={containerRef} 
            className="relative" 
            style={{ height: `${cardData.length * 100}vh` }}
          >
            <div className="sticky top-30 h-screen flex items-center justify-center">
              {cardData.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`absolute w-full max-w-[416px] ${card.isContact ? 'h-[480px]' : 'h-[360px]'} rounded-[25px] border border-[#E4E7E9] flex flex-col ${card.bgColor} ${card.textColor}`}
                  style={{
                    transform: index === 0 ? "translateY(0%)" : index === 1 ? "translateY(120%)" : "translateY(240%)",
                    opacity: index <= 1 ? 1 : 0,
                    zIndex: index + 1,
                    top: "0px",
                    left: "0px",
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
                        <h2 className="text-5xl font-bold  text-[#22252A]">
                          {card.title}
                        </h2>
                      </div>
                      <button className="w-full bg-[#FF5F1F] hover:bg-orange-600 text-white text-base font-bold py-6 rounded-lg ">
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
        </div>

        {/* Right column - sticky hero image and heading */}
        <div 
          className="lg:col-span-8"
          style={{
            // Make the right column unstick one stage earlier than the left stack
            // by shortening its parent container height by one viewport.
            minHeight: `${(cardData.length - 0.5) * 100}vh`,
          }}
        >
          <div
            className="sticky top-30 lg:block hidden"
            style={{ zIndex: 10 }}
          >
            <div className="w-full">
              <h2 className="text-5xl font-semibold font-unbounded text-[#22252A]">
                {t('heading')}
              </h2>
              <p className="mt-6 text-base font-medium text-[#474D57] max-w-[568px]">
                {t('subheading')}
              </p>
            </div>
            <div className="mt-6 relative w-full h-[539px]">
              <Image
                src={"/TogethereImage.png"}
                alt="design showcase"
                width={760}
                height={539}
                className="object-cover"
                priority
              />
              <div className="absolute -top-30 -right-10 select-none">
                <Image
                  src={"/TogetherPurpleIcon.svg"}
                  alt="design icon"
                  width={316}
                  height={316}
                />
              </div>
            </div>
          </div>
          
          {/* Mobile version */}
          <div className="lg:hidden relative">
            <div className="max-w-[720px]">
              <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.08] font-bold text-gray-900">
                {t('heading')}
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                {t('subheading')}
              </p>
            </div>
            <div className="mt-6 relative w-full h-[420px] md:h-[460px] rounded-[20px] overflow-hidden bg-gray-100">
              <Image
                src={designMainImage}
                alt="design showcase"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 720px, 100vw"
                priority
              />
              <div className="absolute -top-8 right-4 select-none">
                <Image
                  src={designOverlay}
                  alt="design icon"
                  width={140}
                  height={140}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 select-none">
                <Image
                  src="https://placehold.co/160x160/FF8A1E/ffffff/png"
                  alt="orange plus"
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;