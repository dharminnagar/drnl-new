import Link from "next/link";
import { AnimatedMolecule } from "@/components/animated-molecule";
import { LineReveal } from "@/components/line-reveal";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-[90vw] flex-col justify-between gap-10 px-6 pb-10 pt-12 md:pt-16">
      <div className="grid flex-1 gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div className="order-2 flex flex-col justify-end md:order-1 md:self-end">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
            Research Laboratory
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
            Dr Nagar&apos;s Laboratories
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base text-foreground/70 md:text-lg">
            All chemistry solutions at one place.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" className="rounded-none">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="order-1 flex items-start justify-center md:order-2 md:self-start md:justify-end">
          <AnimatedMolecule className="w-[220px] md:w-[320px]" />
        </div>
      </div>

      <LineReveal direction="horizontal" className="h-px w-full" />
    </section>
  );
}
