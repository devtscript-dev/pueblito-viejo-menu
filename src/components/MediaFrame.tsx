import { useEffect, useRef, useState } from "react";
import { withBase } from "../utils/publicUrl";

interface MediaFrameProps {
  name: string;
  image?: string;
  video?: string;
  className?: string;
}

// Muestra la imagen/video real si el archivo existe en public/; si no (o mientras no
// se ha subido el asset real), cae en un placeholder negro con la inicial del plato.
//
// Los videos solo empiezan a cargar/reproducirse cuando entran (o estan por entrar) al
// viewport: con decenas de miniaturas con video en la misma pagina, reproducirlas todas
// de una sola vez satura el ancho de banda y hace que el resto del contenido cargue lento
// (visible sobre todo en conexiones lentas / Firefox, que es mas estricto con la concurrencia).
export function MediaFrame({ name, image, video, className = "" }: MediaFrameProps) {
  const [failed, setFailed] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!video || inView) return;
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [video, inView]);

  const showPlaceholder = failed || (!image && !video) || (video && !inView);

  if (showPlaceholder) {
    return (
      <div ref={containerRef} className={`flex items-center justify-center bg-black ${className}`} aria-hidden="true">
        <span className="font-display text-3xl text-cream-50/90 select-none">{name.charAt(0)}</span>
      </div>
    );
  }

  if (video) {
    return (
      <video
        className={`object-cover ${className}`}
        src={withBase(video)}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <img
      className={`object-cover ${className}`}
      src={withBase(image)}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
