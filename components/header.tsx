"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        isScrolled
          ? "border-foreground/15 bg-background/85 backdrop-blur-sm"
          : "border-foreground/10 bg-background/70"
      )}>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          DRNL
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/services"
            className="text-foreground/75 transition-all duration-150 ease-out hover:text-foreground active:scale-[0.98]">
            Services
          </Link>
          <Link
            href="/projects"
            className="text-foreground/75 transition-all duration-150 ease-out hover:text-foreground active:scale-[0.98]">
            Projects
          </Link>
          <Link
            href="/about"
            className="text-foreground/75 transition-all duration-150 ease-out hover:text-foreground active:scale-[0.98]">
            About
          </Link>
          <Link
            href="/#contact"
            className="text-foreground/75 transition-all duration-150 ease-out hover:text-foreground active:scale-[0.98]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
