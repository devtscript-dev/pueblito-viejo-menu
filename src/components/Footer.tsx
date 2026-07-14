import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { photoCredits } from "../data/photoCredits";
import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, INSTAGRAM_URL, TIKTOK_URL } from "../data/contact";

export function Footer() {
  const { language } = useLanguage();
  const t = UI[language];

  return (
    <footer className="bg-terracotta-900 px-4 py-10 text-center text-cream-100">
      <p className="font-script text-2xl text-brand-pink">Pueblito Viejo</p>
      <p className="mt-1 font-body text-sm italic text-cream-100/80">{t.tagline}</p>

      <div className="mx-auto mt-6 flex max-w-md flex-col items-center gap-3 font-body text-sm text-cream-100/90">
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-yellow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.03-7-11a7 7 0 1 1 14 0c0 4.97-7 11-7 11Z" />
            <circle cx="12" cy="10" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {ADDRESS}
        </a>

        <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-brand-yellow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .97.76l.9 3.62a1 1 0 0 1-.5 1.11l-1.7.94a13.4 13.4 0 0 0 6.6 6.6l.94-1.7a1 1 0 0 1 1.11-.5l3.62.9a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2h-1C9.4 21 3 14.6 3 6.5Z"
            />
          </svg>
          {PHONE_DISPLAY}
        </a>

        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-yellow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
          </svg>
          @pueblitoviejo.rest
        </a>

        <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-yellow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.6 5.82a4.28 4.28 0 0 1-3.08-1.31V15.5a5.7 5.7 0 1 1-4.9-5.65v2.44a3.26 3.26 0 1 0 2.3 3.12V2h2.4a4.28 4.28 0 0 0 3.28 4.1z" />
          </svg>
          @pueblito.viejo.sa
        </a>
      </div>

      <p className="mt-6 font-body text-xs text-cream-100/60">{t.copyright(new Date().getFullYear())}</p>

      <details className="mx-auto mt-4 max-w-md text-left font-body text-xs text-cream-100/50">
        <summary className="cursor-pointer text-center hover:text-cream-100/80">{t.photoCredits}</summary>
        <ul className="mt-2 space-y-1">
          {photoCredits.map((credit) => (
            <li key={credit.url}>
              {credit.dish[language]} — {credit.author} ·{" "}
              <a href={credit.url} target="_blank" rel="noreferrer" className="underline hover:text-cream-100">
                {credit.license}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </footer>
  );
}
