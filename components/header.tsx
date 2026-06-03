"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-6 pt-5 pb-3 pointer-events-none">
      <div
        className={cn(
          "mx-auto flex max-w-2xl items-center justify-between rounded-full px-5 py-2.5 pointer-events-auto",
          "border border-white/8 backdrop-blur-xl",
          "transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isScrolled
            ? "bg-background/92 shadow-[0_4px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-background/75 shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
        )}>
        <Link
          href="/"
          className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground transition-opacity duration-200 hover:opacity-70">
          DRNL
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/#contact" ? false : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-full px-3.5 py-3 text-xs transition-[background-color,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-foreground/60 hover:bg-white/5 hover:text-foreground"
                )}>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
