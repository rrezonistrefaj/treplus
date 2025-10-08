"use client";
import React from "react";
import { motion, useAnimationControls, useInView } from "motion/react";
import { numbersData } from "./numbersData";
import { useTranslations } from "next-intl";

const cardBase =
  "rounded-[24px] px-7.5 py-3 h-[233px] flex flex-col leading-snug justify-start text-white font-unbounded font-black text-[52px] md:text-[64px]";

const subText = "mt-2 text-[20px] font-bold ";

const gridLayout =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8";

export default function NumbersSection() {
  const t = useTranslations('Numbers')
  // Column controls (1..4)
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

    const firstCard = container.querySelector<HTMLElement>("[data-card]");
    if (!firstCard) return;

    // Measure one vertical step from actual card + gap so it matches design
    const gap = 24; // fall back gap, then try read from computed
    const styles = getComputedStyle(container);
    const parsedGap = parseFloat(styles.rowGap || styles.gap || `${gap}`);
    const cardHeight = firstCard.offsetHeight;
    const oneStep = cardHeight + parsedGap;
    const twoSteps = oneStep * 2;

    (async () => {
      await col3.start({
        marginTop: oneStep,
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
      });

      await new Promise((r) => setTimeout(r, 180));

      await Promise.all([
        col1.start({
          marginTop: twoSteps,
          transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
        }),
        col2.start({
          marginTop: twoSteps,
          transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
        }),
      ]);
    })();
  }, [isInView, col1, col2, col3]);

  // Using translations directly; keep local memo removed to avoid unused vars

  return (
    <section ref={sectionRef} className="max-w-[1260px] mx-auto px-4 md:px-0 py-20">
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
                className={`${cardBase} bg-gradient-to-br ${card.bgClass}`}
                data-card
              >
                <div>{card.headline}</div>
                <div className={subText}>{t(`cards.${idx}.subline`)}</div>
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
                className={`${cardBase} bg-gradient-to-br ${card.bgClass}`}
                data-card
              >
                <div>{card.headline}</div>
                <div className={subText}>{t(`cards.${idx}.subline`)}</div>
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
            return (
              <div
                key={`c3-${idx}`}
                className={`${cardBase} bg-gradient-to-br ${card.bgClass}`}
                data-card
              >
                <div>{card.headline}</div>
                <div className={subText}>{t(`cards.${idx}.subline`)}</div>
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
            return (
              <div
                key={`c4-${idx}`}
                className={`${cardBase} bg-gradient-to-br ${card.bgClass}`}
                data-card
              >
                <div>{card.headline}</div>
                <div className={subText}>{card.subline}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}


