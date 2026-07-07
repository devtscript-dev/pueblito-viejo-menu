export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-menu-texture px-4 pb-20 pt-16 text-center">
      {/* acentos inspirados en las sombrillas de colores del salon */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-umbrella-pink blur-3xl" />
        <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-umbrella-turquoise blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-40 w-40 rounded-full bg-umbrella-yellow blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-brand-yellow">Restaurante</p>
        <h1 className="font-script mt-2 text-6xl text-cream-50 drop-shadow-md sm:text-7xl">Pueblito Viejo</h1>
        <p className="font-display mt-3 italic text-cream-100/90">Sabor y Tradición</p>

        <a
          href="#porciones"
          className="mt-8 inline-block rounded-full bg-brand-pink px-8 py-3 font-body font-semibold text-cream-50 shadow-lg transition-transform hover:scale-105"
        >
          Ver el menú
        </a>
      </div>
    </section>
  );
}
