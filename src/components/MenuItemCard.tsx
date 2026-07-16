import type { MenuItem } from "../data/types";
import { formatPrice } from "../utils/formatPrice";
import { MediaFrame } from "./MediaFrame";
import { FeaturedStars } from "./FeaturedStars";
import { useLanguage } from "../i18n/LanguageContext";
import { useMenuModal } from "../context/MenuModalContext";

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { language } = useLanguage();
  const { openItem } = useMenuModal();
  const name = item.name[language];

  return (
    <article
      onClick={() => openItem(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openItem(item);
      }}
      className="flex cursor-pointer gap-4 rounded-xl bg-white/90 p-3 shadow-sm ring-1 ring-terracotta-100 transition-shadow hover:shadow-md"
    >
      <div className="relative h-20 w-20 shrink-0">
        <MediaFrame name={name} image={item.image} video={item.video} className="h-20 w-20 rounded-lg" />
        <span
          aria-hidden="true"
          className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-terracotta-900 text-cream-50 shadow ring-2 ring-white"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg leading-tight text-terracotta-900">{name}</h3>
          <div className="flex shrink-0 flex-wrap justify-end gap-2">
            {item.prices.map((p, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                {p.label && (
                  <span className="text-center font-body text-[10px] font-medium leading-none text-terracotta-600">
                    {p.label[language]}
                  </span>
                )}
                <span className="price-tag rounded px-2 py-0.5 text-sm">{formatPrice(p.amount)}</span>
              </div>
            ))}
          </div>
        </div>
        {item.featured && <FeaturedStars className="mt-0.5" />}
        {item.description && (
          <p className="mt-1 font-body text-sm text-terracotta-700/80">{item.description[language]}</p>
        )}
      </div>
    </article>
  );
}
