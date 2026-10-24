"use client";

import { createElement, type ReactNode } from "react";
import { useRevealOnce } from "@/hooks/useRevealOnce";
import type { CSSVars } from "@/hooks/cssVars";

interface Props {
  as?: "div" | "section" | "article";
  delay?: number;
  className?: string;
  children: ReactNode;
}

export default function Reveal({ as = "div", delay = 0, className = "", children }: Props) {
  const ref = useRevealOnce<HTMLElement>();
  return createElement(
    as,
    { ref, className: `reveal ${className}`.trim(), style: { "--d": delay } as CSSVars },
    children
  );
}
