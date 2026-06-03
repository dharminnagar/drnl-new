import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LineReveal } from "@/components/line-reveal";
import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <ScrollReveal>
          <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50">
              About us
            </span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Research-focused chemistry solutions
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-foreground/60">
            Dr Nagar&apos;s Laboratories is a research and development company
            based in Vadodara, Gujarat, founded in 2015 by Dr Divyesh Nagar.
            We support clients with process R&amp;D, analytical testing, and
            method development for pharmaceutical and chemical projects.
          </p>
          <div className="mt-8">
            <Link href="/about" className="group btn-primary">
              Learn more
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {/* Double-bezel founder card */}
          <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5 h-full">
            <div
              className="rounded-[calc(1rem-6px)] bg-card p-6 h-full flex flex-col justify-between gap-6"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)" }}>
              <div className="space-y-1">
                <div className="h-10 w-10 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center mb-4">
                  <span className="text-xs font-semibold tracking-wider text-foreground/60">DN</span>
                </div>
                <p className="text-sm font-semibold">Dr Divyesh Nagar</p>
                <p className="text-xs text-foreground/50">
                  Founder & Director · MSc, PhD — Pharmaceutical Chemistry
                </p>
              </div>

              <p className="text-pretty text-sm leading-relaxed text-foreground/60">
                18+ years across leading chemical and pharmaceutical research
                organisations in India. Established DRNL in June 2015 with a
                focus on process innovation and analytical precision.
              </p>

              <div className="flex items-center gap-4 border-t border-foreground/6 pt-4">
                <div>
                  <p className="text-lg font-semibold tracking-tight tabular-nums">18+</p>
                  <p className="text-xs text-foreground/45">Years experience</p>
                </div>
                <div className="h-6 w-px bg-foreground/10" />
                <div>
                  <p className="text-lg font-semibold tracking-tight tabular-nums">2015</p>
                  <p className="text-xs text-foreground/45">Founded</p>
                </div>
                <div className="h-6 w-px bg-foreground/10" />
                <div>
                  <p className="text-lg font-semibold tracking-tight tabular-nums">10+</p>
                  <p className="text-xs text-foreground/45">Capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-16">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </section>
  );
}
