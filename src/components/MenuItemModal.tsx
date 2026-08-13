import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMenuModal } from "../context/MenuModalContext";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { formatPrice } from "../utils/formatPrice";
import { MediaFrame } from "./MediaFrame";

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

  const name = activeItem?.name[language];

  return (
    <AnimatePresence>
      {activeItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
          onClick={closeItem}
          role="dialog"
          aria-modal="true"
          aria-label={name}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="shadow-luxe w-full max-w-md overflow-hidden rounded-2xl bg-cream-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <MediaFrame name={name ?? ""} image={activeItem.image} video={activeItem.video} className="h-72 w-full" />
              {activeItem.featured && (
                <span className="shadow-luxe absolute left-3 top-3 flex items-center gap-1 rounded-full bg-brand-pink px-3 py-1 font-body text-xs font-semibold text-cream-50">
                  ★ {t.mostOrdered}
                </span>
              )}
              <button
                type="button"
                onClick={closeItem}
                aria-label={t.closeModal}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-lg text-cream-50 transition-colors hover:bg-black/70"
              >
                ✕
              </button>
              <div className="absolute -bottom-3 right-4 flex flex-col items-end gap-1.5">
                {activeItem.prices.map((p, i) => (
                  <span
                    key={i}
                    className="price-tag shadow-luxe whitespace-nowrap rounded px-2.5 py-1 text-sm font-semibold ring-2 ring-white"
                  >
                    {p.label && `${p.label[language]} `}
                    {formatPrice(p.amount)}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 pt-3">
              <h3 className="font-display text-2xl leading-tight text-terracotta-900">{name}</h3>

              {activeItem.description && (
                <p className="mt-3 font-body text-terracotta-700/80">{activeItem.description[language]}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
