"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 20,
  duration = 0.6,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Reduced motion guard
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const tween = gsap.fromTo(
      element,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      tween.kill();
      tween.scrollTrigger?.kill();
    };
  }, [delay, duration, yOffset]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
