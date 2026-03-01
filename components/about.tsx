import Link from "next/link";
import { LineReveal } from "@/components/line-reveal";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <ScrollReveal>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
            About Us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Research-focused chemistry solutions
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
            Dr Nagar&apos;s Laboratories is a research and development company
            based in Vadodara, Gujarat, founded in 2015 by Dr Divyesh Nagar. We
            support clients with process R&amp;D, analytical testing, and method
            development for pharmaceutical and chemical projects.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" className="rounded-none">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-6 border border-foreground/15 p-6 transition-all duration-150 ease-out hover:border-foreground/30 hover:-translate-y-[1px]">
            <div>
              <p className="text-sm font-medium">Dr Divyesh Nagar</p>
              <p className="mt-1 text-xs text-foreground/60">
                Founder & Director · MSc, PhD — Pharmaceutical Chemistry
              </p>
            </div>
            <p className="text-sm leading-relaxed text-foreground/70">
              18+ years of industry and research experience across leading
              chemical and pharmaceutical organisations in India.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-14">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </section>
  );
}
