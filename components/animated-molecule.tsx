"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type AnimatedMoleculeProps = {
  className?: string;
  triggerId?: string;
};

export function AnimatedMolecule({
  className,
  triggerId = "hero",
}: AnimatedMoleculeProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const moleculeRef = useRef<SVGGElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const molecule = moleculeRef.current;
    const svg = svgRef.current;
    const trigger = document.getElementById(triggerId) ?? wrapper;

    if (!wrapper || !molecule || !svg || !trigger) {
      return;
    }

    const bonds = Array.from(svg.querySelectorAll<SVGLineElement>(".bond"));
    const atoms = Array.from(svg.querySelectorAll<SVGCircleElement>(".atom"));

    bonds.forEach((bond) => {
      const length = bond.getTotalLength();
      gsap.set(bond, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    gsap.set(atoms, {
      opacity: 0,
      scale: 0,
      transformOrigin: "center center",
    });

    const intro = gsap.timeline({ delay: 0.3 });

    intro
      .to(bonds, {
        strokeDashoffset: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
      })
      .to(
        atoms,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    });

    scrollTl
      .to(
        molecule,
        {
          rotate: 180,
          transformOrigin: "50% 50%",
          ease: "none",
        },
        0
      )
      .to(
        wrapper,
        {
          scale: 0.92,
          opacity: 0.85,
          ease: "none",
        },
        0
      );

    return () => {
      intro.kill();
      scrollTl.kill();
      scrollTl.scrollTrigger?.kill();
    };
  }, [triggerId]);

  return (
    <div ref={wrapperRef} className={cn("w-full max-w-[420px]", className)}>
      <svg
        ref={svgRef}
        viewBox="0 0 320 320"
        className="w-full"
        role="img"
        aria-label="Chemistry molecule illustration">
        <g ref={moleculeRef}>
          <line
            className="bond stroke-foreground/55"
            x1="160"
            y1="45"
            x2="241"
            y2="92"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/55"
            x1="241"
            y1="92"
            x2="241"
            y2="186"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/55"
            x1="241"
            y1="186"
            x2="160"
            y2="233"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/55"
            x1="160"
            y1="233"
            x2="79"
            y2="186"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/55"
            x1="79"
            y1="186"
            x2="79"
            y2="92"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/55"
            x1="79"
            y1="92"
            x2="160"
            y2="45"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/45"
            x1="160"
            y1="45"
            x2="160"
            y2="16"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/45"
            x1="241"
            y1="92"
            x2="275"
            y2="74"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/45"
            x1="241"
            y1="186"
            x2="282"
            y2="209"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/45"
            x1="160"
            y1="233"
            x2="160"
            y2="275"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/45"
            x1="79"
            y1="186"
            x2="42"
            y2="208"
            strokeWidth="1.5"
          />
          <line
            className="bond stroke-foreground/45"
            x1="79"
            y1="92"
            x2="45"
            y2="71"
            strokeWidth="1.5"
          />

          <circle className="atom fill-foreground" cx="160" cy="45" r="5.5" />
          <circle className="atom fill-foreground" cx="241" cy="92" r="5.5" />
          <circle className="atom fill-foreground" cx="241" cy="186" r="5.5" />
          <circle className="atom fill-foreground" cx="160" cy="233" r="5.5" />
          <circle className="atom fill-foreground" cx="79" cy="186" r="5.5" />
          <circle className="atom fill-foreground" cx="79" cy="92" r="5.5" />
          <circle className="atom fill-foreground/85" cx="160" cy="16" r="4" />
          <circle className="atom fill-foreground/85" cx="275" cy="74" r="4" />
          <circle className="atom fill-foreground/85" cx="282" cy="209" r="4" />
          <circle className="atom fill-foreground/85" cx="160" cy="275" r="4" />
          <circle className="atom fill-foreground/85" cx="42" cy="208" r="4" />
          <circle className="atom fill-foreground/85" cx="45" cy="71" r="4" />
        </g>
      </svg>
    </div>
  );
}
