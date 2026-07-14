import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

export function FeaturedStars({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  const t = UI[language];

  return (
    <span className={`inline-flex items-center gap-1 font-body text-xs font-semibold text-amber-600 ${className}`}>
      <span aria-hidden="true" className="tracking-tight text-brand-yellow">
        ★★★★★
      </span>
      {t.mostOrdered}
    </span>
  );
}
