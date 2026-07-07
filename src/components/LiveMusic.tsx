import { MediaFrame } from "./MediaFrame";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

export function LiveMusic() {
  const { language } = useLanguage();
  const t = UI[language];

  return (
    <section id="musica" className="bg-menu-texture px-4 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-stretch">
        <div className="w-full max-w-xs shrink-0 overflow-hidden rounded-2xl shadow-lg sm:max-w-sm">
          <MediaFrame name={t.liveSinger} video="/videos/cantante-en-vivo.mp4" className="aspect-[9/16] w-full" />
        </div>

        <div className="flex flex-col justify-center text-center sm:text-left">
          <span className="mx-auto inline-block w-fit rounded-full bg-brand-pink px-4 py-1 font-body text-xs font-semibold uppercase tracking-wide text-cream-50 sm:mx-0">
            {t.musicBadge}
          </span>
          <h2 className="font-display mt-3 text-3xl text-cream-50">{t.musicHeading}</h2>
          <p className="mt-3 max-w-md font-body text-cream-100/90">{t.musicBody}</p>
        </div>
      </div>
    </section>
  );
}
