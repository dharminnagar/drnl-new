import type { Metadata } from "next";
import { LineReveal } from "@/components/line-reveal";

export const metadata: Metadata = {
  title: "Projects & Capabilities | Dr Nagar's Laboratories",
  description:
    "Project segments and synthetic capabilities across pharmaceuticals, chemicals, and specialised materials.",
};

const projectSegments = [
  { label: "Pharmaceutical (API & Formulation)", note: "Drug substance & formulation" },
  { label: "Herbal Extraction", note: "Natural product isolation" },
  { label: "Chemicals (Organic & Inorganic)", note: "Custom synthesis" },
  { label: "Polymers", note: "Material science" },
  { label: "Dyes & Pigments", note: "Colour chemistry" },
  { label: "Pesticides", note: "Agrochemical" },
  { label: "Perfumery", note: "Fragrance compounds" },
  { label: "Petroleum", note: "Hydrocarbon chemistry" },
  { label: "Nano Substance", note: "Nanomaterial R&D" },
  { label: "Waste & Disposal Management", note: "Environmental chemistry" },
];

const syntheticCapabilities = [
  "API (Drug Substance)",
  "Intermediates (n-1, n-2)",
  "Impurities & Reference Standards",
  "Custom Synthesis",
  "Specialty Chemicals",
  "New Drug Development",
  "Process Infringement",
  "Isolation of Pure Product from Crude",
  "Isolation of Unknown Compound",
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-14">
        <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50">
            Projects
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Capabilities & project segments
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-foreground/55">
          Expertise in developing novel processes and manufacturing technologies
          across a wide range of chemical segments.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        {/* Project segments */}
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/40">
            Project capabilities
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {projectSegments.map((segment, index) => (
              <div
                key={segment.label}
                className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5">
                <div className="rounded-[calc(1rem-6px)] bg-card px-4 py-3.5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium leading-snug text-balance">{segment.label}</p>
                    <p className="mt-0.5 text-xs text-foreground/40">{segment.note}</p>
                  </div>
                  <span className="text-xs text-foreground/20 font-mono shrink-0 mt-0.5 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Synthetic capabilities */}
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/40">
            Synthetic capabilities
          </p>
          <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5">
            <div className="rounded-[calc(1rem-6px)] bg-card p-5">
              <ul className="divide-y divide-foreground/6">
                {syntheticCapabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center gap-2.5 py-3 text-sm text-foreground/60">
                    <span className="h-1 w-1 rounded-full bg-primary/50 shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </div>
  );
}
