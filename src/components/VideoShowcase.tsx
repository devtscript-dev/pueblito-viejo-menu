import { MediaFrame } from "./MediaFrame";

const CLIPS = [
  { id: "ambiente", title: "El ambiente", video: "/videos/ambiente.mp4" },
  { id: "cocina", title: "En la cocina", video: "/videos/cocina.mp4" },
  { id: "plato-estrella", title: "Plato estrella", video: "/videos/plato-estrella.mp4" },
];

// Vitrina de video cortos. Mientras no existan los .mp4 reales en public/videos/
// (con esos nombres exactos), cada tarjeta cae automaticamente en el placeholder de color.
export function VideoShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="font-display text-center text-3xl text-terracotta-800">Así se vive Pueblito Viejo</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {CLIPS.map((clip) => (
          <div key={clip.id} className="overflow-hidden rounded-2xl shadow-lg">
            <MediaFrame name={clip.title} video={clip.video} className="h-64 w-full" />
            <p className="bg-terracotta-800 py-3 text-center font-body text-sm font-medium text-cream-100">
              {clip.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
