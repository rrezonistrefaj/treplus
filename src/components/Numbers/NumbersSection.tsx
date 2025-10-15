"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimationControls, useInView } from "motion/react";
import { numbersData } from "./numbersData";
import { useTranslations } from "next-intl";

const cardBase =
  "relative overflow-hidden rounded-[24px] px-7.5 py-3 flex flex-col leading-[100%] justify-start text-white font-unbounded font-black text-[52px] md:text-[64px]";

const cardBaseMobile =
  "relative overflow-hidden rounded-[24px] px-7.5 py-3 flex flex-col leading-[100%] justify-start text-white font-unbounded font-black text-[23px]";

const subText = "mt-2 text-[20px] font-bold font-sans leading-[100%]";

const subTextMobile = "mt-2 text-[12px] font-bold font-sans leading-[100%]";

const gridLayout =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8";

export default function NumbersSection() {
  const t = useTranslations('Numbers')
  const [isMobile, setIsMobile] = React.useState(false);
  
  // Column controls (1..4)
  const col1 = useAnimationControls();
  const col2 = useAnimationControls();
  const col3 = useAnimationControls();
  const col4 = useAnimationControls();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.8 });

  // Detect mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    if (!isInView) return;

    const container = containerRef.current;
    if (!container) return;

    // Get the gap value
    const gap = 24; // fall back gap
    const styles = getComputedStyle(container);
    const parsedGap = parseFloat(styles.rowGap || styles.gap || `${gap}`);

    if (isMobile) {
      // Mobile layout: 3 columns with different heights
      const col1Height = 115; // purple card
      const col2Heights = [81, 81, 81]; // blue, orange, purple cards
      const col3Heights = [115, 81, 81]; // green, orange, blue cards

      // Calculate total height of each column (including gaps)
      const col1Total = col1Height;
      const col2Total = col2Heights[0] + col2Heights[1] + col2Heights[2] + parsedGap * 2; // 3 cards + 2 gaps
      const col3Total = col3Heights[0] + col3Heights[1] + col3Heights[2] + parsedGap * 2; // 3 cards + 2 gaps

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
    } else {
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
    }
  }, [isInView, isMobile, col1, col2, col3]);

  // Using translations directly; keep local memo removed to avoid unused vars

  // Mobile layout (3 columns)
  if (isMobile) {
    return (
      <section ref={sectionRef} className="max-w-[1260px] mx-auto px-4 xl:px-0 py-20">
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

        {/* Mobile 3-column grid */}
        <motion.div 
          className="mt-12 grid grid-cols-3 gap-4"
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
          {/* Column 1: Purple 120+ */}
          <motion.div
            animate={col1}
            initial={{ marginTop: 0 }}
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            {[0].map((idx) => {
              const card = numbersData.cards[idx];
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
                    width={200}
                    height={117}
                    className="absolute bottom-0 right-4 pointer-events-none select-none z-0"
                    priority
                  />
                  <div className="relative z-10">{card.headline}</div>
                  <div className={`${subTextMobile} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Column 2: Blue 50+, Orange #2, Purple 90% */}
          <motion.div
            animate={col2}
            initial={{ marginTop: 0 }}
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            {[2, 1, 3].map((idx) => {
              const card = numbersData.cards[idx];
              const heightClass = 'h-[81px]'; // All cards in column 2 are 81px
              const isBlue = idx === 2;
              const isOrange = idx === 1;
              const isPurple = idx === 3;
              
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
                    {...(isBlue ? { width: 273, height: 273 } : isOrange ? { width: 270, height: 316 } : isPurple ? { width: 200, height: 117 } : { fill: true })}
                    className={isBlue ? "absolute -bottom-11 -right-6 pointer-events-none select-none z-0" : isOrange ? "absolute bottom-0 right-0 pointer-events-none select-none z-0" : isPurple ? "absolute bottom-0 right-4 pointer-events-none select-none z-0" : ""}
                  />
                  <div className="relative z-10">{card.headline}</div>
                  <div className={`${subTextMobile} relative z-10`}>{t(`cards.${idx}.subline`)}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Column 3: Green 5, Orange 532, Blue 77% */}
          <motion.div
            animate={col3}
            initial={{ marginTop: 0 }}
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            {[4, 5, 6].map((idx) => {
              const card = numbersData.cards[idx];
              const heightClass = idx === 4 ? 'h-[115px]' : 'h-[81px]'; // First card (Green 5) is 115px, others are 81px
              const isGreen = idx === 4;
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
                    {...(isGreen ? { width: 225, height: 174 } : isOrange ? { width: 193, height: 225 } : isBlue ? { width: 273, height: 273 } : { fill: true })}
                    className={isGreen ? "absolute -bottom-5 pointer-events-none select-none z-0" : isOrange ? "absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0" : isBlue ? "absolute -bottom-11 -right-6 pointer-events-none select-none z-0" : ""}
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

  // Desktop layout (4 columns with animation)
  return (
    <section ref={sectionRef} className="max-w-[1260px] mx-auto px-4 xl:px-0 py-20">
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
            const card = numbersData.cards[idx];
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
            const card = numbersData.cards[idx];
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
            const card = numbersData.cards[idx];
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
            const card = numbersData.cards[idx];
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
                <div className={`${subText} relative z-10`}>{card.subline}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}


