import type { Metadata } from "next";
import Link from "next/link";
import { LineReveal } from "@/components/line-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

const experience = [
  {
    role: "Founder & CEO",
    org: "Dr Nagar's Laboratories",
    location: "Vadodara, Gujarat",
    period: "June 2015 – Present",
  },
  {
    role: "Research Chemist",
    org: "Jubilant Organosys",
    location: "Gajraula",
    period: "Industry tenure",
  },
  {
    role: "Research Chemist",
    org: "Alembic Research Centre",
    location: "Vadodara",
    period: "Industry tenure",
  },
  {
    role: "Research Chemist",
    org: "Uma Laboratories",
    location: "Vadodara",
    period: "Industry tenure",
  },
  {
    role: "Research Chemist",
    org: "Chemical Research Laboratory",
    location: "Rajkot",
    period: "Industry tenure",
  },
];

const documentationCapabilities = [
  "GMP",
  "USFDA",
  "ISO",
  "Technology Transfer Document",
  "Process Flow Diagram",
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <div className="mb-14">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
          About Us
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Research-focused chemistry solutions
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
          Dr Nagar&apos;s Laboratories is a Research and Development based
          company located at Vadodara in Gujarat, India. We conduct Process
          Research & Development and Analytical Testing & Method Development
          projects to support clients according to their specific requirements.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75">
          Our team is dedicated to creating a healthier society through
          innovation, with expertise in developing novel processes and
          manufacturing technologies for Intermediates, Chemicals, and Drug
          Substances.
        </p>
      </div>

      <LineReveal direction="horizontal" className="h-px w-full" />

      <div className="mt-14 grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/60">
            Founder & Director
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Dr Divyesh Nagar
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            MSc, PhD — Pharmaceutical Chemistry, Saurashtra University, Rajkot
          </p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
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
              manufacturing support — bringing together deep industry expertise
              and a commitment to client-specific delivery.
            </p>
            <p>
              We have the capability to deliver quality products within
              established timelines, at affordable cost, without compromising on
              quality. Our well-trained and experienced chemists have a proven
              track record for delivering Custom Synthesis Projects, Analogues,
              and Specially Designed lead molecules.
            </p>
          </div>

          <div className="mt-8">
            <Button asChild variant="outline" className="rounded-none">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="rounded-none border-foreground/15 py-0">
            <CardHeader className="border-b border-foreground/10 py-6">
              <CardTitle className="text-base">Experience</CardTitle>
              <CardDescription>18+ years across leading labs</CardDescription>
            </CardHeader>
            <CardContent className="py-0">
              {experience.map((item, index) => (
                <div key={index}>
                  <div className="py-4">
                    <p className="text-sm font-medium">{item.org}</p>
                    <p className="mt-0.5 text-xs text-foreground/60">
                      {item.role} · {item.location}
                    </p>
                    <p className="mt-0.5 text-xs text-foreground/50">
                      {item.period}
                    </p>
                  </div>
                  {index < experience.length - 1 && (
                    <Separator className="bg-foreground/8" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/60">
            Project Capabilities
          </p>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="rounded-none px-3 text-xs font-normal text-foreground/80">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/60">
            Documentation Capabilities
          </p>
          <div className="flex flex-wrap gap-2">
            {documentationCapabilities.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="rounded-none px-3 text-xs font-normal text-foreground/80">
                {item}
              </Badge>
            ))}
          </div>

          <div className="mt-8 space-y-1 text-sm text-foreground/60">
            <p className="font-medium text-foreground/75">Established</p>
            <p>June 15, 2015</p>
            <p className="mt-3 font-medium text-foreground/75">Location</p>
            <p>Vadodara, Gujarat, India</p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </div>
  );
}
