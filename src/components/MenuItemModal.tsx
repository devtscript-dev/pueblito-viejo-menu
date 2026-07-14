import { useEffect } from "react";
import { useMenuModal } from "../context/MenuModalContext";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { formatPrice } from "../utils/formatPrice";
import { MediaFrame } from "./MediaFrame";
import { FeaturedStars } from "./FeaturedStars";

export function MenuItemModal() {
  const { activeItem, closeItem } = useMenuModal();
  const { language } = useLanguage();
  const t = UI[language];

  useEffect(() => {
    if (!activeItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeItem();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeItem, closeItem]);

  if (!activeItem) return null;
  const name = activeItem.name[language];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
      onClick={closeItem}
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl bg-cream-50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <MediaFrame name={name} image={activeItem.image} video={activeItem.video} className="h-72 w-full" />
          <button
            type="button"
            onClick={closeItem}
            aria-label={t.closeModal}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-lg text-cream-50 transition-colors hover:bg-black/70"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl leading-tight text-terracotta-900">{name}</h3>
            <div className="flex shrink-0 flex-wrap justify-end gap-1">
              {activeItem.prices.map((p, i) => (
                <span key={i} className="price-tag rounded px-2 py-0.5 text-sm">
                  {formatPrice(p.amount)}
                </span>
              ))}
            </div>
          </div>

          {activeItem.featured && <FeaturedStars className="mt-2" />}

          {activeItem.description && (
            <p className="mt-3 font-body text-terracotta-700/80">{activeItem.description[language]}</p>
          )}
        </div>
      </div>
    </div>
  );
}
