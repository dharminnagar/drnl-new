import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <p className="text-xs text-foreground/50">
          © {new Date().getFullYear()} Dr Nagar&apos;s Laboratories
        </p>
        <nav className="flex items-center gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-2 py-2.5 text-xs text-foreground/40 transition-colors duration-200 hover:text-foreground/70">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
