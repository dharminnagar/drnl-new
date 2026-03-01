export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center px-6 text-xs text-foreground/60 transition-colors duration-150 ease-out hover:text-foreground/80">
        © {new Date().getFullYear()} Dr Nagar&apos;s Laboratories
      </div>
    </footer>
  );
}
