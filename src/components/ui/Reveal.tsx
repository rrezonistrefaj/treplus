"use client";

import React from "react";
import { motion } from "motion/react";

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  amount?: number;
  delay?: number;
};

/**
 * Subtle in-view reveal wrapper.
 * Uses framer-motion compatible "motion" from motion package already present.
 * Adds a tiny upward translate and fade on first view only, without interfering
 * with nested animations.
 */
export const Reveal = React.forwardRef<HTMLElement, RevealProps>(
  ({
    as = "div",
    className,
    children,
    amount = 0.2,
    delay = 0,
  }, ref) => {
    const motionIndex = motion as unknown as Record<string, React.ElementType>;
    const MotionTag = (motionIndex[as as string] ?? motion.div) as React.ElementType;

    return (
      <MotionTag
        ref={ref as unknown as React.Ref<unknown>}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
        className={className}
      >
        {children}
      </MotionTag>
    );
  }
);

Reveal.displayName = "Reveal";

export default Reveal;


