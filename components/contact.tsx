import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8 md:pb-32">
      <ScrollReveal className="mb-12">
        <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50">
            Contact
          </span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Let&apos;s discuss your project
        </h2>
        <p className="mt-4 max-w-md text-pretty text-base text-foreground/55">
          Send us details about your requirements and we&apos;ll get back to you
          within one business day.
        </p>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2">
        <ScrollReveal>
          <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5">
            <form
              className="rounded-[calc(1rem-6px)] bg-card p-6 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-medium text-foreground/60 uppercase tracking-[0.12em]">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-medium text-foreground/60 uppercase tracking-[0.12em]">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs font-medium text-foreground/60 uppercase tracking-[0.12em]">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project details"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-medium text-foreground/60 uppercase tracking-[0.12em]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="group btn-primary w-full justify-center">
                Send message
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="space-y-4">
          <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5 overflow-hidden">
            <div className="rounded-[calc(1rem-6px)] overflow-hidden">
              <iframe
                title="Dr Nagar's Laboratories location map"
                src="https://maps.google.com/maps?q=Vadodara%2C%20Gujarat&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-[360px] w-full grayscale"
                style={{ outline: "1px solid rgba(0,0,0,0.08)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-1.5">
            <div className="rounded-[calc(1rem-6px)] bg-card p-5 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-foreground/45 mb-1 uppercase tracking-[0.1em]">Location</p>
                  <p className="text-foreground/80">Vadodara, Gujarat, India</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/45 mb-1 uppercase tracking-[0.1em]">Phone</p>
                  <p className="text-foreground/80 tabular-nums">+91 98255 67007</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-foreground/45 mb-1 uppercase tracking-[0.1em]">Email</p>
                  <p className="text-foreground/80">contact@drnl.in</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
