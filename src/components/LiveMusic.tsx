import { MediaFrame } from "./MediaFrame";

export function LiveMusic() {
  return (
    <section id="musica" className="bg-menu-texture px-4 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-stretch">
        <div className="w-full max-w-xs shrink-0 overflow-hidden rounded-2xl shadow-lg sm:max-w-sm">
          <MediaFrame name="Cantante en vivo" video="/videos/cantante-en-vivo.mp4" className="aspect-[9/16] w-full" />
        </div>

        <div className="flex flex-col justify-center text-center sm:text-left">
          <span className="mx-auto inline-block w-fit rounded-full bg-brand-pink px-4 py-1 font-body text-xs font-semibold uppercase tracking-wide text-cream-50 sm:mx-0">
            🎤 Tenemos cantante en vivo
          </span>
          <h2 className="font-display mt-3 text-3xl text-cream-50">La fiesta también se sirve en la mesa</h2>
          <p className="mt-3 max-w-md font-body text-cream-100/90">
            Ven a disfrutar de música en vivo mientras compartes en familia o con amigos: en Pueblito Viejo la
            tradición se vive con buena comida, buena compañía y un cantante que le pone sabor a la tarde.
          </p>
        </div>
      </div>
    </section>
  );
}
