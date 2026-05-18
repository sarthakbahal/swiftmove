export default function Hero() {
  return (
    <section className="hero-grid relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Packers & Movers
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Shifting Made Simple.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            Professional packing, safe transit, and on-time delivery — across the
            city or across the country.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white"
            >
              See Our Services
            </a>
          </div>
        </div>
        <div className="mt-16 overflow-hidden border-y border-white/10 bg-black/30">
          <div className="animate-marquee flex min-w-[200%] items-center gap-6 py-3 text-sm uppercase tracking-[0.2em] text-white/70">
            <span>Local Shifting • Office Relocation • Vehicle Transport • Pan-India Service • Insured Cargo •</span>
            <span>Local Shifting • Office Relocation • Vehicle Transport • Pan-India Service • Insured Cargo •</span>
          </div>
        </div>
      </div>
    </section>
  );
}
