"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  left: { x: -32 },
  right: { x: 32 },
  none: {},
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span" | "li";
  once?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...(reduceMotion ? {} : offset) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduceMotion ? 0.2 : duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
