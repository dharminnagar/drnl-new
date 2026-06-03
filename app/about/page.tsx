import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LineReveal } from "@/components/line-reveal";

export const metadata: Metadata = {
  title: "About | Dr Nagar's Laboratories",
  description:
    "Learn about Dr Nagar's Laboratories — a research-based chemical company in Vadodara, Gujarat, founded by Dr Divyesh Nagar in 2015.",
};

const capabilities = [
  "Pharmaceutical (API & Formulation)",
  "Herbal Extraction",
  "Chemicals (Organic & Inorganic)",
  "Polymers",
  "Dyes & Pigments",
  "Pesticides",
  "Perfumery",
  "Petroleum",
  "Nano Substance",
  "Waste & Disposal Management",
];

const documentationCapabilities = [
  "GMP",
  "USFDA",
  "ISO",
  "Technology Transfer Document",
  "Process Flow Diagram",
];

const experience = [
  {
    role: "Founder & CEO",
    org: "Dr Nagar's Laboratories",
    location: "Vadodara, Gujarat",
    period: "June 2015 – Present",
    current: true,
  },
  {
    role: "Research Chemist",
    org: "Jubilant Organosys",
    location: "Gajraula",
    period: "Industry tenure",
    current: false,
  },
  {
    role: "Research Chemist",
    org: "Alembic Research Centre",
    location: "Vadodara",
    period: "Industry tenure",
    current: false,
  },
  {
    role: "Research Chemist",
    org: "Uma Laboratories",
    location: "Vadodara",
    period: "Industry tenure",
    current: false,
  },
  {
    role: "Research Chemist",
    org: "Chemical Research Laboratory",
    location: "Rajkot",
    period: "Industry tenure",
    current: false,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      {/* Header */}
      <div className="mb-14">
        <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50">
            About us
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Research-focused chemistry solutions
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-foreground/55">
          Dr Nagar&apos;s Laboratories is a Research and Development based
          company in Vadodara, Gujarat. We conduct Process Research &
          Development and Analytical Testing & Method Development to support
          clients with specific requirements.
        </p>
        <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-foreground/45">
          Our team is dedicated to creating a healthier society through
          innovation, with expertise in developing novel processes and
          manufacturing technologies for intermediates, chemicals, and drug
          substances.
        </p>
      </div>

      <LineReveal direction="horizontal" className="h-px w-full" />

      {/* Founder section */}
      <div className="mt-16 grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/40">
            Founder & Director
          </p>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center">
              <span className="text-sm font-semibold tracking-wider text-foreground/60">DN</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Dr Divyesh Nagar</h2>
              <p className="text-xs text-foreground/45 mt-0.5">
                MSc, PhD — Pharmaceutical Chemistry, Saurashtra University, Rajkot
              </p>
            </div>
          </div>

          <div className="space-y-4 text-pretty text-sm leading-relaxed text-foreground/60">
            <p>
              Dr Divyesh Nagar has over 18 years of experience across leading
              chemical and pharmaceutical research organisations in India. He
              held research positions at Chemical Research Laboratory in Rajkot,
              Uma Laboratories and Alembic Research Centre in Vadodara, and
              Jubilant Organosys in Gajraula.
            </p>
            <p>
              In June 2015, he established Dr Nagar&apos;s Laboratories with a
              focus on process innovation, analytical precision, and dependable
              manufacturing support.
            </p>
            <p>
              Our chemists deliver Custom Synthesis Projects, Analogues, and
              Specially Designed lead molecules at affordable cost without
              compromising on quality.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/#contact" className="group btn-primary">
              Get in touch
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Experience timeline card */}
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/40">
            Experience
          </p>
          <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5">
            <div className="rounded-[calc(1rem-6px)] bg-card">
              <div className="px-5 py-3 border-b border-foreground/6">
                <p className="text-xs text-foreground/40 tabular-nums">18+ years across leading labs</p>
              </div>
              <ul className="divide-y divide-foreground/6">
                {experience.map((item) => (
                  <li key={`${item.org}-${item.period}`} className="px-5 py-4 flex items-start gap-3">
                    <span
                      className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${item.current ? "bg-primary" : "bg-foreground/20"}`}
                    />
                    <div>
                      <p className="text-sm font-medium">{item.org}</p>
                      <p className="text-xs text-foreground/45 mt-0.5">{item.role} · {item.location}</p>
                      {item.current && (
                        <span className="inline-block mt-1.5 text-[10px] rounded-full border border-primary/25 bg-primary/8 px-2 py-0.5 text-primary/70">
                          Current
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>

      {/* Capabilities */}
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/40">
            Project capabilities
          </p>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-xs text-foreground/60">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/40">
            Documentation capabilities
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {documentationCapabilities.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-xs text-foreground/60">
                {item}
              </span>
            ))}
          </div>

          <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5">
            <div className="rounded-[calc(1rem-6px)] bg-card px-5 py-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-foreground/40 mb-1">Established</p>
                <p className="text-sm font-medium">June 15, 2015</p>
              </div>
              <div>
                <p className="text-xs text-foreground/40 mb-1">Location</p>
                <p className="text-sm font-medium">Vadodara, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </div>
  );
}
