import { useEffect, useState } from "react";
import type { MenuCategory } from "../data/types";

interface HeaderProps {
  categories: MenuCategory[];
}

export function Header({ categories }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled ? "bg-terracotta-900/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-script text-2xl text-brand-pink drop-shadow-sm">
          Pueblito Viejo
        </a>

        <nav className="hidden gap-6 md:flex">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => goTo(c.id)}
              className="font-body text-sm font-medium text-cream-100 hover:text-brand-yellow transition-colors"
            >
              {c.name}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-cream-100"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 bg-terracotta-900 px-4 pb-4 md:hidden">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => goTo(c.id)}
              className="rounded-lg px-3 py-2 text-left text-cream-100 hover:bg-terracotta-700"
            >
              {c.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
