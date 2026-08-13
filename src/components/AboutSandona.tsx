import { withBase } from "../utils/publicUrl";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { Reveal } from "./Reveal";

export function AboutSandona() {
  const { language } = useLanguage();
  const t = UI[language];

  return (
    <section
      className="media-tone relative overflow-hidden bg-cover bg-center px-4 py-16"
      style={{ backgroundImage: `url(${withBase("/images/interior-panoramica-2.jpg")})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-terracotta-900/90 via-terracotta-900/80 to-terracotta-900/90" />

      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-umbrella-orange blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-umbrella-pink blur-3xl" />
      </div>

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-brand-yellow">{t.sandonaEyebrow}</p>
        <h2 className="font-display mt-2 text-3xl text-cream-50">{t.sandonaHeading}</h2>
        <p className="mt-4 font-body text-cream-100/90">{t.sandonaBody}</p>
      </Reveal>
    </section>
  );
}
