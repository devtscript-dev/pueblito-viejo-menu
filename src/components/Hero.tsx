import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { withBase } from "../utils/publicUrl";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { Logo } from "./Logo";

export function Hero() {
  const { language } = useLanguage();
  const t = UI[language];
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden bg-menu-texture px-4 pb-20 pt-16 text-center"
    >
      <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <video
          className="media-tone h-full w-full object-cover"
          src={withBase("/videos/ambiente-restaurante.mp4")}
          poster={withBase("/images/interior-panoramica-2.jpg")}
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
      {/* velo oscuro para que el texto resalte sobre la foto del salon, mas fuerte abajo para el texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-terracotta-900/70 via-terracotta-900/60 to-terracotta-900/85" />

      {/* acentos inspirados en las sombrillas de colores del salon */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-umbrella-pink blur-3xl" />
        <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-umbrella-turquoise blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-40 w-40 rounded-full bg-umbrella-yellow blur-3xl" />
      </div>

      <motion.div
        className="relative mx-auto max-w-2xl"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
        >
          <Logo className="mx-auto h-40 w-auto drop-shadow-lg sm:h-52" />
        </motion.div>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-foil font-display mt-3 italic"
        >
          {t.tagline}
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#entradas"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="shadow-luxe inline-block rounded-full bg-brand-pink px-8 py-3 font-body font-semibold text-cream-50"
          >
            {t.viewMenu}
          </motion.a>
          <motion.a
            href="#musica"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block rounded-full border border-cream-100/40 bg-white/10 px-6 py-3 font-body font-semibold text-cream-50 backdrop-blur"
          >
            {t.liveSinger}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
