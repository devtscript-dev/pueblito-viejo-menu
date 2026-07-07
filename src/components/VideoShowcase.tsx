import { MediaFrame } from "./MediaFrame";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

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

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="font-display text-center text-3xl text-terracotta-800">{t.showcaseHeading}</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {clips.map((clip) => (
          <div key={clip.id} className="overflow-hidden rounded-2xl shadow-lg">
            <MediaFrame name={clip.title} image={clip.image} video={clip.video} className="h-64 w-full" />
            <p className="bg-terracotta-800 py-3 text-center font-body text-sm font-medium text-cream-100">
              {clip.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
