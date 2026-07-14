import { useEffect, useRef, useState } from "react";
import { withBase } from "../utils/publicUrl";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

const TRACK = withBase("/audio/pote-mideros-evocaciones.mp3");

export function BackgroundMusic() {
  const { language } = useLanguage();
  const t = UI[language];
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    // Los navegadores bloquean el autoplay con sonido; intentamos con audio
    // y si el navegador lo rechaza, caemos a silenciado (siempre permitido).
    audio.play().then(() => setMuted(false)).catch(() => {
      audio.muted = true;
      setMuted(true);
      audio.play().catch(() => {});
    });
  }, []);

  if (failed) return null;

  const toggleMuted = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    if (!next) audio.play().catch(() => {});
    setMuted(next);
  };

  return (
    <>
      <audio ref={audioRef} src={TRACK} loop onError={() => setFailed(true)} />
      <button
        type="button"
        onClick={toggleMuted}
        aria-label={muted ? t.unmuteMusic : t.muteMusic}
        title={muted ? t.unmuteMusic : t.muteMusic}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink text-cream-50 shadow-lg transition-transform hover:scale-110"
      >
        {muted ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m16 9 5 6m0-6-5 6" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12" />
          </svg>
        )}
      </button>
    </>
  );
}
