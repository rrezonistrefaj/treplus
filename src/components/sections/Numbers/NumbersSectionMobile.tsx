"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimationControls, useInView } from "motion/react";
import { numbersDataMobile } from "./numbersDataMobile";
import { useTranslations } from "next-intl";

const cardBaseMobile =
  "relative overflow-hidden rounded-[9px] p-[11px] flex flex-col leading-[100%] justify-start text-white font-unbounded font-black text-[23px]";

const subTextMobile = "mt-1 text-[15px] font-medium font-sans leading-[100%]";

export default function NumbersSectionMobile() {
  const t = useTranslations('Numbers');
  
  const col1 = useAnimationControls();
  const col2 = useAnimationControls();
  const col3 = useAnimationControls();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.8 });

  React.useEffect(() => {
    if (!isInView) return;

    const container = containerRef.current;
    if (!container) return;

    // Get the gap value from the column flex containers (gap-2 = 8px)
    const columnGap = 8; // 8px = gap-2 in Tailwind (used in flex columns)

    // Mobile layout: 3 columns with different heights
    const col1Height = 115; // orange #2 card (tall)
    const col2Heights = [81, 81, 81]; // blue 50+, green 5, purple 120+
    const col3Heights = [115, 81, 81]; // purple 90% (tall), orange 532, blue 77%

    // Calculate total height of each column (including gaps)
    const col1Total = col1Height; // Only 1 card, no gaps
    const col2Total = col2Heights[0] + col2Heights[1] + col2Heights[2] + columnGap * 2; // 3 cards + 2 gaps
    const col3Total = col3Heights[0] + col3Heights[1] + col3Heights[2] + columnGap * 2; // 3 cards + 2 gaps

    // Find the tallest column total
    const maxHeight = Math.max(col1Total, col2Total, col3Total);
    
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
          className="text-[20px] md:text-5xl font-bold font-unbounded text-[#0F0F0F]"
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

      {/* Mobile 3-column grid */}
      <motion.div 
        ref={containerRef}
        className="mt-12 grid grid-cols-3 gap-2"
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
        {/* Column 1: Orange #2 */}
        <motion.div
          animate={col1}
          initial={{ marginTop: 0 }}
          className="flex flex-col gap-2"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {[1].map((idx) => {
            const card = numbersDataMobile.cards[idx];
            return (
              <motion.div
                key={`mobile-c1-${idx}`}
                className={`${cardBaseMobile} h-[115px] bg-gradient-to-br ${card.bgClass}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Image
                  src={card.bgImage}
                  alt=""
                  aria-hidden="true"
                  width={270}
                  height={316}
                  className="absolute bottom-0 right-0 pointer-events-none select-none z-0"
                  priority
                />
                <div className="relative z-10">{card.headline}</div>
                <div className={`${subTextMobile} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Column 2: Blue 50+, Green 5, Purple 120+ */}
        <motion.div
          animate={col2}
          initial={{ marginTop: 0 }}
          className="flex flex-col gap-2"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {[2, 4, 0].map((idx) => {
            const card = numbersDataMobile.cards[idx];
            const heightClass = 'h-[81px]'; // All cards in column 2 are 81px
            const isBlue = idx === 2;
            const isGreen = idx === 4;
            const isPurple = idx === 0;
            
            return (
              <motion.div
                key={`mobile-c2-${idx}`}
                className={`${cardBaseMobile} ${heightClass} bg-gradient-to-br ${card.bgClass}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Image
                  src={card.bgImage}
                  alt=""
                  {...(isBlue ? { width: 273, height: 273 } : isGreen ? { width: 225, height: 174 } : isPurple ? { width: 200, height: 117 } : { fill: true })}
                  className={isBlue ? "absolute -bottom-11 -right-6 pointer-events-none select-none z-0" : isGreen ? "absolute -bottom-5 pointer-events-none select-none z-0" : isPurple ? "absolute bottom-0 right-4 pointer-events-none select-none z-0" : ""}
                />
                <div className="relative z-10">{card.headline}</div>
                <div className={`${subTextMobile} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Column 3: Purple 90%, Orange 532, Blue 77% */}
        <motion.div
          animate={col3}
          initial={{ marginTop: 0 }}
          className="flex flex-col gap-2"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {[3, 5, 6].map((idx) => {
            const card = numbersDataMobile.cards[idx];
            const heightClass = idx === 3 ? 'h-[115px]' : 'h-[81px]'; // First card (Purple 90%) is 115px, others are 81px
            const isPurple = idx === 3;
            const isOrange = idx === 5;
            const isBlue = idx === 6;
            
            return (
              <motion.div
                key={`mobile-c3-${idx}`}
                className={`${cardBaseMobile} ${heightClass} bg-gradient-to-br ${card.bgClass}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Image
                  src={card.bgImage}
                  alt=""
                  {...(isPurple ? { width: 200, height: 117 } : isOrange ? { width: 193, height: 225 } : isBlue ? { width: 273, height: 273 } : { fill: true })}
                  className={isPurple ? "absolute bottom-0 right-4 pointer-events-none select-none z-0" : isOrange ? "absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0" : isBlue ? "absolute -bottom-11 -right-6 pointer-events-none select-none z-0" : ""}
                />
                <div className="relative z-10">{card.headline}</div>
                <div className={`${subTextMobile} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

