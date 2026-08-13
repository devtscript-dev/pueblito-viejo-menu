import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { MenuCategory } from "../data/types";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { Logo } from "./Logo";

interface HeaderProps {
  categories: MenuCategory[];
}

function LanguageToggle() {
  const { language, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label="Cambiar idioma / Switch language"
      className="rounded-full border border-cream-100/40 px-3 py-1 font-body text-xs font-semibold text-cream-100 transition-colors hover:bg-cream-100/10"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}

export function Header({ categories }: HeaderProps) {
  const { language } = useLanguage();
  const t = UI[language];
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
        <a href="#top" className="shrink-0">
          <Logo className="h-12 w-auto sm:h-14" />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => goTo(c.id)}
              className="group relative font-body text-sm font-medium text-cream-100 hover:text-brand-yellow transition-colors"
            >
              {c.name[language]}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand-yellow transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button className="text-cream-100" aria-label={t.openMenu} onClick={() => setOpen((v) => !v)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1 overflow-hidden bg-terracotta-900 px-4 md:hidden"
          >
            <div className="flex flex-col gap-1 pb-4">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => goTo(c.id)}
                  className="rounded-lg px-3 py-2 text-left text-cream-100 hover:bg-terracotta-700"
                >
                  {c.name[language]}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
