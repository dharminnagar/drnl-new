import type { Metadata } from "next";
import { LineReveal } from "@/components/line-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects & Capabilities | Dr Nagar's Laboratories",
  description:
    "Explore our project segments and synthetic capabilities across pharmaceuticals, chemicals, and specialized materials.",
};

const projectSegments = [
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

const syntheticCapabilities = [
  "API (Drug Substance)",
  "Intermediates (n-1, n-2)",
  "Impurities & Reference Standards",
  "Custom Synthesis",
  "Specialty Chemicals",
  "New Drug Development",
  "Process Infringement",
  "Isolation of Pure Product from Crude",
  "Isolation of Unknown compound",
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <div className="mb-14">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
          Projects
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Capabilities & Project Segments
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
          Our team has expertise in developing novel processes and manufacturing
          technologies across a wide range of project segments. We deliver
          custom synthesis projects with the quantity and quality required by
          our clients.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-10">
          <section>
            <h2 className="mb-6 text-xl font-semibold tracking-tight">
              Project Capabilities
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {projectSegments.map((segment) => (
                <Card
                  key={segment}
                  className="rounded-none border-foreground/15 py-0 shadow-none">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm font-medium leading-relaxed">
                      {segment}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-10">
          <section>
            <h2 className="mb-6 text-xl font-semibold tracking-tight">
              Synthetic Capabilities
            </h2>
            <Card className="rounded-none border-foreground/15 py-0 shadow-none">
              <CardContent className="flex flex-wrap gap-2 p-6">
                {syntheticCapabilities.map((capability) => (
                  <Badge
                    key={capability}
                    variant="outline"
                    className="rounded-none px-3 py-1 text-xs font-normal text-foreground/80">
                    {capability}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <div className="mt-20">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </div>
  );
}
