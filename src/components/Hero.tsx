import { withBase } from "../utils/publicUrl";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

export function Hero() {
  const { language } = useLanguage();
  const t = UI[language];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-menu-texture bg-cover bg-center px-4 pb-20 pt-16 text-center"
      style={{ backgroundImage: `url(${withBase("/images/interior-panoramica-2.jpg")})` }}
    >
      {/* velo oscuro para que el texto resalte sobre la foto del salon, mas fuerte abajo para el texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-terracotta-900/70 via-terracotta-900/60 to-terracotta-900/85" />

      {/* acentos inspirados en las sombrillas de colores del salon */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-umbrella-pink blur-3xl" />
        <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-umbrella-turquoise blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-40 w-40 rounded-full bg-umbrella-yellow blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-brand-yellow">{t.restaurant}</p>
        <h1 className="font-script mt-2 text-6xl text-cream-50 drop-shadow-md sm:text-7xl">Pueblito Viejo</h1>
        <p className="font-display mt-3 italic text-cream-100/90">{t.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#porciones"
            className="inline-block rounded-full bg-brand-pink px-8 py-3 font-body font-semibold text-cream-50 shadow-lg transition-transform hover:scale-105"
          >
            {t.viewMenu}
          </a>
          <a
            href="#musica"
            className="inline-block rounded-full border border-cream-100/40 bg-white/10 px-6 py-3 font-body font-semibold text-cream-50 backdrop-blur transition-transform hover:scale-105"
          >
            {t.liveSinger}
          </a>
        </div>
      </div>
    </section>
  );
}
