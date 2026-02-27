import type { Metadata } from "next";
import { LineReveal } from "@/components/line-reveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      "Developing novel processes and manufacturing technology for intermediates, chemicals, and drug substances.",
    icon: FlaskConical,
    capabilities: [
      "New Drug Development",
      "Process Infringement",
      "Custom Synthesis",
      "Isolation of Pure Product from Crude",
      "Isolation of Unknown Compound",
    ],
  },
  {
    title: "Analytical Testing",
    description:
      "Complete Analytical Method Development, Validation, and Testing facility for various chemical segments.",
    icon: Microscope,
    capabilities: [
      "NMR",
      "Mass (GCMS)",
      "GC & HPLC",
      "IR & UV",
      "Preparative HPLC",
      "Flash Chromatography",
      "TGA & DSC",
      "XRD",
    ],
  },
  {
    title: "Technology Transfer & Documentation",
    description:
      "Comprehensive process technology transfer, documentation, and cost reduction strategies.",
    icon: FileText,
    capabilities: [
      "Technology Transfer Document",
      "Process Flow Diagram",
      "Process Manufacturing Cost Reduction",
      "GMP Documentation",
      "USFDA & ISO",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <div className="mb-14">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
          Services
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Comprehensive Chemistry Solutions
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
          We conduct Process Research & Development and Analytical Testing &
          Method Development projects to support clients according to their
          specific requirements.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="flex flex-col rounded-none border-foreground/15 py-0">
              <CardHeader className="border-b border-foreground/10 py-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-foreground/15 text-foreground/80">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col py-6">
                <div className="flex flex-wrap gap-2">
                  {service.capabilities.map((capability) => (
                    <Badge
                      key={capability}
                      variant="outline"
                      className="rounded-none px-3 text-xs text-foreground/70">
                      {capability}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-20">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </div>
  );
}
