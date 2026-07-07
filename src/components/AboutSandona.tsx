import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

export function AboutSandona() {
  const { language } = useLanguage();
  const t = UI[language];

  return (
    <section className="relative overflow-hidden bg-cream-100 px-4 py-14">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-umbrella-orange blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-umbrella-pink blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-terracotta-600">{t.sandonaEyebrow}</p>
        <h2 className="font-display mt-2 text-3xl text-terracotta-800">{t.sandonaHeading}</h2>
        <p className="mt-4 font-body text-terracotta-700/90">{t.sandonaBody}</p>
      </div>
    </section>
  );
}
