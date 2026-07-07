import { useState } from "react";
import { withBase } from "../utils/publicUrl";

interface MediaFrameProps {
  name: string;
  image?: string;
  video?: string;
  className?: string;
}

// Muestra la imagen/video real si el archivo existe en public/; si no (o mientras no
// se ha subido el asset real), cae en un placeholder negro con la inicial del plato.
export function MediaFrame({ name, image, video, className = "" }: MediaFrameProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = failed || (!image && !video);

  if (showPlaceholder) {
    return (
      <div className={`flex items-center justify-center bg-black ${className}`} aria-hidden="true">
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
