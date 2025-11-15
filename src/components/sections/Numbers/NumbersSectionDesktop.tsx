"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimationControls, useInView } from "motion/react";
import { numbersDataDesktop } from "./numbersDataDesktop";
import { useTranslations } from "next-intl";

const cardBase =
  "relative overflow-hidden rounded-[24px] px-7.5 py-3 flex flex-col leading-[100%] justify-start text-white font-unbounded font-black text-[52px] md:text-[64px]";

const subText = "mt-2 text-[20px] font-bold font-sans leading-[100%]";

const gridLayout =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8";

export default function NumbersSectionDesktop() {
  const t = useTranslations('Numbers');
  
  const col1 = useAnimationControls();
  const col2 = useAnimationControls();
  const col3 = useAnimationControls();
  const col4 = useAnimationControls();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.8 });

  React.useEffect(() => {
    if (!isInView) return;

    const container = containerRef.current;
    if (!container) return;

    // Get the gap value
    const gap = 24; // fall back gap
    const styles = getComputedStyle(container);
    const parsedGap = parseFloat(styles.rowGap || styles.gap || `${gap}`);

    // Desktop layout: 4 columns
    const col1Height = 233; // purple card
    const col2Height = 316; // orange card
    const col3Height = 224; // blue and green cards (2 cards)
    const col4Heights = [316, 225, 225]; // purple, orange, blue (3 cards)

    // Calculate total height of each column (including gaps)
    const col1Total = col1Height;
    const col2Total = col2Height;
    const col3Total = col3Height * 2 + parsedGap; // 2 cards + 1 gap
    const col4Total = col4Heights[0] + col4Heights[1] + col4Heights[2] + parsedGap * 2; // 3 cards + 2 gaps

    // Find the tallest column total (Column 4 is tallest)
    const maxHeight = col4Total;
    
    // After animation, all columns should align to the same bottom
    const col1FinalMove = maxHeight - col1Total;
    const col2FinalMove = maxHeight - col2Total;
    const col3FinalMove = maxHeight - col3Total;

    (async () => {
      // Column 3 falls completely first
      await col3.start({
        marginTop: col3FinalMove,
        transition: { duration: 0.8, ease: "linear" },
      });

      await new Promise((r) => setTimeout(r, 100));

      // Then columns 1 and 2 fall
      await Promise.all([
        col1.start({
          marginTop: col1FinalMove,
          transition: { duration: 0.8, ease: "linear" },
        }),
        col2.start({
          marginTop: col2FinalMove,
          transition: { duration: 0.8, ease: "linear" },
        }),
      ]);
    })();
  }, [isInView, col1, col2, col3]);

  return (
    <section ref={sectionRef} className="max-w-[1260px] mx-auto px-4 xl:px-0 py-20 overflow-x-clip">
      <motion.div
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
          className="text-[36px] md:text-5xl font-bold font-unbounded text-[#0F0F0F]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t('headingStrong')}
        </motion.h2>
        <motion.p 
          className="mt-2 text-[#474D57] font-medium text-[14px] md:text-base"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t('headingSubtle')}
        </motion.p>
      </motion.div>

      <motion.div 
        ref={containerRef} 
        className={`mt-12 ${gridLayout}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 }
          }
        }}
      >
        {/* Column 1: 120+ */}
        <motion.div
          animate={col1}
          initial={{ marginTop: 0 }}
          className="flex flex-col gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {[0].map((idx) => {
            const card = numbersDataDesktop.cards[idx];
            return (
              <div
                key={`c1-${idx}`}
                className={`${cardBase} h-[233px] bg-gradient-to-br ${card.bgClass}`}
                data-card
              >
                {/* background vector */}
                <Image
                  src={card.bgImage}
                  alt=""
                  width={200}
                  height={117}
                  className="absolute bottom-0 right-4 pointer-events-none select-none z-0"
                  priority
                />
                <div className="relative z-10">{card.headline}</div>
                <div className={`${subText} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Column 2: #2 */}
        <motion.div
          animate={col2}
          initial={{ marginTop: 0 }}
          className="flex flex-col gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {[1].map((idx) => {
            const card = numbersDataDesktop.cards[idx];
            return (
              <div
                key={`c2-${idx}`}
                className={`${cardBase} h-[316px] bg-gradient-to-br ${card.bgClass}`}
                data-card
              >
                <Image
                  src={card.bgImage}
                  alt=""
                  width={270}
                  height={316}
                  className="absolute bottom-0 right-0 pointer-events-none select-none z-0"
                  priority
                />
                <div className="relative z-10">{card.headline}</div>
                <div className={`${subText} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Column 3: 50+, 5 */}
        <motion.div
          animate={col3}
          initial={{ marginTop: 0 }}
          className="flex flex-col gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {[2, 4].map((idx) => {
            const card = numbersDataDesktop.cards[idx];
            const isBlue = idx === 2;
            const isGreen = idx === 4;
            return (
              <div
                key={`c3-${idx}`}
                className={`${cardBase} h-[224px] bg-gradient-to-br ${card.bgClass}`}
                data-card
              >
                <Image
                  src={card.bgImage}
                  alt=""
                  {...(isBlue ? { width: 273, height: 273 } : isGreen ? { width: 225, height: 174 } : { fill: true })}
                  className={isBlue ? "absolute -bottom-11 -right-6 pointer-events-none select-none z-0" : isGreen ? "absolute -bottom-5 pointer-events-none select-none z-0" : "object-cover object-center pointer-events-none select-none z-0"}
                />
                <div className="relative z-10">{card.headline}</div>
                <div className={`${subText} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Column 4 (stays): 90%, 532, 77 */}
        <motion.div
          animate={col4}
          initial={{ marginTop: 0 }}
          className="flex flex-col gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {[3, 5, 6].map((idx) => {
            const card = numbersDataDesktop.cards[idx];
            const heightClass = idx === 3 ? 'h-[316px]' : 'h-[225px]';
            const isBlue = idx === 6;
            const isPurple = idx === 3;
            const isOrange = idx === 5;
            return (
              <div
                key={`c4-${idx}`}
                className={`${cardBase} ${heightClass} bg-gradient-to-br ${card.bgClass}`}
                data-card
              >
                <Image
                  src={card.bgImage}
                  alt=""
                  {...(isBlue ? { width: 273, height: 273 } : isPurple ? { width: 200, height: 117 } : isOrange ? { width: 193, height: 225 } : { fill: true })}
                  className={isBlue ? "absolute -bottom-11 -right-6 pointer-events-none select-none z-0" : isPurple ? "absolute bottom-0 right-4 pointer-events-none select-none z-0" : isOrange ? "absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0" : "object-cover object-center pointer-events-none select-none z-0"}
                />
                <div className="relative z-10">{card.headline}</div>
                <div className={`${subText} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

