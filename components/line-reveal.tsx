"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type LineRevealProps = {
  direction?: "horizontal" | "vertical";
  className?: string;
};

export function LineReveal({
  direction = "horizontal",
  className,
}: LineRevealProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const line = lineRef.current;

    if (!wrapper || !line) {
      return;
    }

    const isHorizontal = direction === "horizontal";

    gsap.set(line, {
      transformOrigin: isHorizontal ? "center center" : "top center",
      scaleX: isHorizontal ? 0 : 1,
      scaleY: isHorizontal ? 1 : 0,
    });

    const tween = gsap.to(line, {
      scaleX: 1,
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top 95%",
        end: "bottom 30%",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
      tween.scrollTrigger?.kill();
    };
  }, [direction]);

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden", className)}>
      <span
        ref={lineRef}
        className={cn(
          "block bg-foreground/40",
          direction === "horizontal" ? "h-px w-full" : "h-full w-px"
        )}
      />
    </div>
  );
}
