import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { MenuCategory } from "../data/types";
import { useLanguage } from "../i18n/LanguageContext";

const TAB_COLORS: Record<string, string> = {
  entradas: "bg-umbrella-pink",
  "platos-fuertes": "bg-umbrella-orange",
  cervezas: "bg-umbrella-yellow",
  otros: "bg-umbrella-turquoise",
  bebidas: "bg-umbrella-blue",
};

export function CategoryTabs({ categories }: { categories: MenuCategory[] }) {
  const { language } = useLanguage();
  const [active, setActive] = useState(categories[0]?.id);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-[68px] z-30 bg-cream-100 shadow-sm sm:top-[76px]">
      <div className="mx-auto flex max-w-6xl gap-1.5 overflow-x-auto px-3 pt-2.5">
        {categories.map((c) => {
          const isActive = active === c.id;
          const color = TAB_COLORS[c.id] ?? "bg-terracotta-400";
          return (
            <motion.button
              key={c.id}
              onClick={() => goTo(c.id)}
              animate={{ y: isActive ? -5 : 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
              style={{ zIndex: isActive ? 10 : 1 }}
              className={`relative shrink-0 whitespace-nowrap rounded-t-xl px-4 py-2.5 font-body text-sm font-semibold transition-colors ${color} ${
                isActive ? "text-terracotta-950 shadow-luxe" : "text-terracotta-950/60 opacity-60"
              }`}
            >
              {c.name[language]}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
