import { LineReveal } from "@/components/line-reveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const capabilities = [
  "Pharmaceutical API",
  "Intermediates",
  "Custom Synthesis",
  "Analytical Testing",
  "Specialty Chemicals",
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
            About Us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Research-focused chemistry solutions
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
            Dr Nagar&apos;s Laboratories is a research and development company
            based in Vadodara, Gujarat. We support clients with process R&amp;D,
            analytical testing, and method development for pharmaceutical and
            chemical projects.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75">
            Our team focuses on delivering quality outcomes within practical
            timelines and cost, while maintaining strict quality standards for
            each project requirement.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <Badge key={item} variant="outline" className="rounded-none px-3">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="rounded-none border-foreground/15 py-0">
          <CardHeader className="border-b border-foreground/10 py-6">
            <CardTitle className="text-xl">Dr Divyesh Nagar</CardTitle>
            <CardDescription>
              MSc, PhD - Pharmaceutical Chemistry
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 py-6 text-sm leading-relaxed text-foreground/75">
            <p>
              Founder and Director of Dr Nagar&apos;s Laboratories with over 18
              years of industry and research experience in chemical and
              pharmaceutical development.
            </p>
            <p>
              Established DRNL in 2015 to deliver process innovation, analytical
              precision, and dependable manufacturing support for diverse
              chemistry projects.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-14">
        <LineReveal direction="horizontal" className="h-px w-full" />
      </div>
    </section>
  );
}
