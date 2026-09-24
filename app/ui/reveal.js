"use client";

import { motion } from "motion/react";

// A small wrapper around motion's whileInView so every section fades/slides
// in the same way once, the first time it scrolls into view. `delay` lets
// siblings stagger (e.g. cards in a grid) without each needing its own
// IntersectionObserver.
export default function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
