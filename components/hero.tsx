import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedMolecule } from "@/components/animated-molecule";
import { LineReveal } from "@/components/line-reveal";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] w-full max-w-[95vw] flex-col justify-between gap-10 px-6 pb-10 pt-10 md:pt-14">
      <div className="grid flex-1 gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <ScrollReveal className="order-2 flex flex-col justify-end md:order-1 md:self-end">
          <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary/80">
              Research Laboratory
            </span>
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-8xl lg:text-[6.5rem]">
            Dr Nagar&apos;s
            <br />
            Laboratories
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-foreground/55 md:text-lg">
            Process R&D and analytical solutions for pharmaceutical and
            chemical projects. Vadodara, Gujarat.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="#contact"
              className="group btn-primary">
              Get in touch
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link href="/services" className="btn-ghost">
              View services
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="order-1 flex items-start justify-center md:order-2 md:self-start md:justify-end">
          <AnimatedMolecule className="w-[200px] md:w-[300px] opacity-80" />
        </div>
      </div>

      <LineReveal direction="horizontal" className="h-px w-full" />
    </section>
  );
}
