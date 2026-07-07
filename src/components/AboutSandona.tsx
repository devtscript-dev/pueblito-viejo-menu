export function AboutSandona() {
  return (
    <section className="relative overflow-hidden bg-cream-100 px-4 py-14">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-umbrella-orange blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-umbrella-pink blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-terracotta-600">Nariño, Colombia</p>
        <h2 className="font-display mt-2 text-3xl text-terracotta-800">Con orgullo, desde Sandoná</h2>
        <p className="mt-4 font-body text-terracotta-700/90">
          Sandoná es conocida como la Capital Nacional del Sombrero de Iraca, cuna de artesanos que tejen a mano
          esta fibra vegetal desde hace generaciones. Rodeados de montañas y clima templado, en Pueblito Viejo
          ponemos ese mismo cariño artesanal en cada plato: comida hecha con calma, con tradición y con orgullo
          por lo nuestro.
        </p>
      </div>
    </section>
  );
}
