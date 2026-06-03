"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href !== "/#contact" && pathname === href;

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-5 pb-3 pointer-events-none sm:px-6">
        <div
          className={cn(
            "mx-auto flex w-full max-w-2xl items-center justify-between rounded-full px-5 py-2.5 pointer-events-auto",
            "border border-foreground/8 backdrop-blur-xl",
            "transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isScrolled
              ? "bg-background/92 shadow-[0_4px_32px_rgba(0,0,0,0.1)]"
              : "bg-background/75 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          )}>
          <Link
            href="/"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground transition-opacity duration-200 hover:opacity-70">
            Dr Nagar&apos;s Laboratories
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-full px-3.5 py-3 text-xs transition-[background-color,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  isActive(href)
                    ? "bg-primary/15 text-primary"
                    : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                )}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground active:scale-[0.96]">
            <span className="relative h-4 w-4">
              <Menu
                className={cn(
                  "absolute inset-0 h-4 w-4 transition-all duration-300",
                  menuOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                )}
                strokeWidth={1.75}
              />
              <X
                className={cn(
                  "absolute inset-0 h-4 w-4 transition-all duration-300",
                  menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                )}
                strokeWidth={1.75}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col md:hidden",
          "bg-background/96 backdrop-blur-2xl",
          "transition-opacity duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}>
        <nav className="flex flex-1 flex-col items-center justify-center gap-1 px-8">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "w-full py-4 text-center text-3xl font-semibold tracking-tight",
                "transition-[color] duration-200",
                isActive(href)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
              style={{
                transitionProperty: "opacity, transform, color",
                transitionDuration: menuOpen ? "400ms" : "200ms",
                transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                transitionDelay: menuOpen ? `${i * 55}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
              }}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact info at bottom */}
        <div
          className="px-8 pb-12 text-center text-xs text-foreground/40 space-y-1"
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: menuOpen ? "400ms" : "200ms",
            transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
            transitionDelay: menuOpen ? "220ms" : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(8px)",
          }}>
          <p>contact@drnl.in</p>
          <p>+91 98255 67007</p>
        </div>
      </div>
    </>
  );
}
