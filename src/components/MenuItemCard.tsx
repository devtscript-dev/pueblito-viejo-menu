import { motion } from "motion/react";
import type { MenuItem } from "../data/types";
import { formatPrice } from "../utils/formatPrice";
import { MediaFrame } from "./MediaFrame";
import { useLanguage } from "../i18n/LanguageContext";
import { useMenuModal } from "../context/MenuModalContext";
import { revealItem } from "./Reveal";

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { language } = useLanguage();
  const { openItem } = useMenuModal();
  const name = item.name[language];

  return (
    <motion.article
      variants={revealItem}
      onClick={() => openItem(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openItem(item);
      }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`shadow-luxe flex cursor-pointer gap-4 rounded-xl bg-white/90 p-3 ring-1 ${
        item.featured ? "ring-2 ring-brand-yellow" : "ring-terracotta-100"
      }`}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-visible">
        <MediaFrame name={name} image={item.image} video={item.video} className="h-20 w-20 rounded-lg" />
        <span
          aria-hidden="true"
          className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-terracotta-900 text-cream-50 shadow ring-2 ring-white"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
        <div className="absolute -top-2 right-1 flex flex-col items-end gap-1">
          {item.prices.map((p, i) => (
            <span
              key={i}
              className="price-tag shadow-luxe whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-semibold ring-2 ring-white"
            >
              {p.label && `${p.label[language]} `}
              {formatPrice(p.amount)}
            </span>
          ))}
        </div>
        {item.featured && (
          <span
            aria-hidden="true"
            className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-pink text-xs text-cream-50 shadow-luxe ring-2 ring-white"
          >
            ★
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-lg leading-tight text-terracotta-900">{name}</h3>
        {item.description && (
          <p className="mt-1 font-body text-sm text-terracotta-700/80">{item.description[language]}</p>
        )}
      </div>
    </motion.article>
  );
}
