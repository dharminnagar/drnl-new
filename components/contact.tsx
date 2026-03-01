import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-6 pb-20 pt-8 md:pb-24">
      <ScrollReveal className="mb-10">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
          Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Let&apos;s discuss your project
        </h2>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2">
        <ScrollReveal>
          <form className="space-y-5 rounded-none border border-foreground/15 p-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project details"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirements"
                rows={5}
              />
            </div>
            <Button type="submit" variant="outline" className="rounded-none">
              Send Message
            </Button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="space-y-4">
          <div className="overflow-hidden rounded-none border border-foreground/15 transition-all duration-150 ease-out hover:border-foreground/30 hover:-translate-y-[1px]">
            <iframe
              title="Dr Nagar's Laboratories location map"
              src="https://maps.google.com/maps?q=Vadodara%2C%20Gujarat&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-1 text-sm text-foreground/75">
            <p>Vadodara, Gujarat, India</p>
            <p>Phone: +91 98255 67007</p>
            <p>Email: contact@drnl.in</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
