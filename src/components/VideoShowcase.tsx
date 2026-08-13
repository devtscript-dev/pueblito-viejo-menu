import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { MediaFrame } from "./MediaFrame";
import { Reveal } from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

const AUTO_ADVANCE_MS = 3200;
const STEP_X = 108;
const MAX_VISIBLE_DELTA = 3;

// Vitrina de fotos y video cortos. Mientras no existan los assets reales en public/
// (con esos nombres exactos), cada tarjeta cae automaticamente en el placeholder negro.
export function VideoShowcase() {
  const { language } = useLanguage();
  const t = UI[language];

  const clips = [
    { id: "ambiente", title: t.ambiente, image: "/images/interior-panoramica-1.jpg" },
    { id: "cocina", title: t.cocina, video: "/videos/preparacion-lena.mp4" },
    { id: "plato-estrella", title: t.platoEstrella, video: "/videos/cocina-llamas.mp4" },
    { id: "gente", title: t.gente, image: "/images/familia-comiendo.jpg" },
    { id: "atencion", title: t.atencion, image: "/images/mesero-5-estrellas.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number) => setIndex((next + clips.length) % clips.length);

  useEffect(() => {
    if (lightbox) return;
    timerRef.current = setInterval(() => go(index + 1), AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, lightbox]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) go(index + 1);
    else if (info.offset.x > 50) go(index - 1);
  };

  const active = clips[index];

  // distancia circular mas corta entre i y el activo, para que el abanico se
  // "enrolle" hacia el lado mas cercano en vez de siempre ir hacia la derecha
  const relDelta = (i: number) => {
    const raw = i - index;
    const n = clips.length;
    const wrapped = ((raw + n / 2 + n) % n) - n / 2;
    return wrapped;
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <Reveal>
        <h2 className="font-display text-center text-3xl text-terracotta-800">{t.showcaseHeading}</h2>
      </Reveal>

      <div className="relative mt-8">
        <motion.div
          className="relative flex h-64 items-center justify-center sm:h-80"
          style={{ perspective: 1200 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {clips.map((clip, i) => {
            const rel = relDelta(i);
            const abs = Math.abs(rel);
            const isActive = rel === 0;
            if (abs > MAX_VISIBLE_DELTA) return null;

            return (
              <motion.div
                key={clip.id}
                className="absolute cursor-pointer select-none touch-none"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  x: rel * STEP_X,
                  rotateY: isActive ? 0 : rel > 0 ? -44 : 44,
                  scale: isActive ? 1 : Math.max(0.6, 1 - abs * 0.16),
                  opacity: Math.max(0, 1 - abs * 0.3),
                  zIndex: 50 - abs,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => (isActive ? setLightbox(true) : go(i))}
              >
                <div
                  className={`overflow-hidden rounded-xl bg-black ${
                    isActive ? "shadow-luxe w-36 sm:w-48" : "w-32 shadow-md sm:w-44"
                  }`}
                >
                  <MediaFrame name={clip.title} image={clip.image} video={clip.video} className="aspect-square w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mt-3 text-center font-body text-sm font-medium text-terracotta-700">{active.title}</p>

        <button
          type="button"
          aria-label="Anterior"
          onClick={() => go(index - 1)}
          className="absolute left-0 top-[40%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta-900/70 text-lg text-cream-50 backdrop-blur transition-colors hover:bg-terracotta-900/90"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => go(index + 1)}
          className="absolute right-0 top-[40%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta-900/70 text-lg text-cream-50 backdrop-blur transition-colors hover:bg-terracotta-900/90"
        >
          ›
        </button>

        <div className="mt-3 flex justify-center gap-2">
          {clips.map((c, i) => (
            <button
              key={c.id}
              aria-label={c.title}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-pink" : "w-2 bg-terracotta-200"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="shadow-luxe w-full max-w-md overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <MediaFrame name={active.title} image={active.image} video={active.video} className="aspect-square max-h-[75vh] w-full" />
              <p className="bg-terracotta-800 py-3 text-center font-body text-sm font-medium text-cream-100">
                {active.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
