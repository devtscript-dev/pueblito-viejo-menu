import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { INSTAGRAM_URL, TIKTOK_URL, MAPS_URL } from "../data/contact";
import { Logo } from "./Logo";

interface LandingOverlayProps {
  onDismiss: () => void;
}

export function LandingOverlay({ onDismiss }: LandingOverlayProps) {
  const { language } = useLanguage();
  const t = UI[language];

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-terracotta-900/60 p-4">
      <div className="w-full max-w-sm rounded-3xl bg-terracotta-900/95 p-8 text-center shadow-2xl ring-1 ring-cream-100/10">
        <Logo className="mx-auto h-24 w-auto" />
        <p className="mt-1 font-body text-sm italic text-cream-100/80">{t.tagline}</p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            onClick={onDismiss}
            className="rounded-full bg-brand-pink px-6 py-3 font-body font-semibold text-cream-50 shadow-lg transition-transform hover:scale-105"
          >
            🍽️ {t.landingMenu}
          </button>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              onClick={onDismiss}
              className="flex-1 rounded-full border border-cream-100/30 bg-white/10 px-4 py-3 font-body font-semibold text-cream-50 backdrop-blur transition-transform hover:scale-105"
            >
              📷 Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              onClick={onDismiss}
              className="flex-1 rounded-full border border-cream-100/30 bg-white/10 px-4 py-3 font-body font-semibold text-cream-50 backdrop-blur transition-transform hover:scale-105"
            >
              🎵 TikTok
            </a>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            onClick={onDismiss}
            className="rounded-full border border-cream-100/30 bg-white/10 px-6 py-3 font-body font-semibold text-cream-50 backdrop-blur transition-transform hover:scale-105"
          >
            📍 {t.landingLocation}
          </a>
        </div>
      </div>
    </div>
  );
}
