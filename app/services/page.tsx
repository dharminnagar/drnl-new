import type { Metadata } from "next";
import { LineReveal } from "@/components/line-reveal";
import { FlaskConical, Microscope, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Dr Nagar's Laboratories",
  description:
    "Process Research & Development, Analytical Testing, and Technology Transfer services.",
};

const services = [
  {
    title: "Process Research & Development",
    description:
      "Developing novel processes and manufacturing technology for intermediates, chemicals, and drug substances. We deliver custom synthesis and new drug development with proven quality and timeline adherence.",
    icon: FlaskConical,
    capabilities: [
      "New Drug Development",
      "Process Infringement",
      "Custom Synthesis",
      "Isolation of Pure Product",
      "Isolation of Unknown Compound",
    ],
    featured: true,
  },
  {
    title: "Analytical Testing",
    description:
      "Complete Analytical Method Development, Validation, and Testing for various chemical segments.",
    icon: Microscope,
    capabilities: ["NMR", "Mass (GCMS)", "GC & HPLC", "IR & UV", "Preparative HPLC", "Flash Chromatography", "TGA & DSC", "XRD"],
    featured: false,
  },
  {
    title: "Technology Transfer & Documentation",
    description:
      "Comprehensive process technology transfer, documentation, and cost reduction strategies.",
    icon: FileText,
    capabilities: [
      "Technology Transfer Document",
      "Process Flow Diagram",
      "Manufacturing Cost Reduction",
      "GMP Documentation",
      "USFDA & ISO",
    ],
    featured: false,
  },
];

export default function ServicesPage() {
  const [featured, ...rest] = services;
  const FeaturedIcon = featured.icon;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-14">
        <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50">
            Services
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Comprehensive chemistry solutions
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-foreground/55">
          Process Research & Development and Analytical Testing & Method
          Development to support clients with specific requirements.
        </p>
      </div>

      {/* Asymmetric grid: featured left, stacked right */}
      <div className="grid gap-4 md:grid-cols-[3fr_2fr] md:grid-rows-2">
        {/* Featured service — spans full height */}
        <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5 md:row-span-2">
          <div className="rounded-[calc(1rem-6px)] bg-card p-8 h-full flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8 text-primary">
                <FeaturedIcon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary/70">Primary service</span>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance">{featured.title}</h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/55">{featured.description}</p>
            </div>

            <div className="flex-1">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-foreground/40">Capabilities</p>
              <ul className="space-y-2.5">
                {featured.capabilities.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/65">
                    <span className="h-px w-4 bg-primary/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary services — stacked */}
        {rest.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5">
              <div className="rounded-[calc(1rem-6px)] bg-card p-6 h-full flex flex-col gap-5">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/10 bg-foreground/5 text-foreground/60">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </div>

                <div>
                  <h2 className="text-base font-semibold tracking-tight text-balance">{service.title}</h2>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/50">{service.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.capabilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-xs text-foreground/55">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </div>
  );
}
