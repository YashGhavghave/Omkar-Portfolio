import { PORTFOLIO_DATA } from '@/lib/data';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow Effect */}
      <div className="absolute w-96 h-96 md:w-full md:h-full max-w-2xl max-h-2xl rounded-full pointer-events-none animate-pulse-glow" style={{
        background: 'radial-gradient(circle, rgba(230, 51, 41, 0.25) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -60%)',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="text-xs font-semibold tracking-widest uppercase text-red mb-6 flex items-center justify-center gap-3 opacity-0 animate-[fadeUp_0.7s_1.9s_ease_forwards]">
          <span className="inline-block w-8 h-px bg-red opacity-60" />
          {PORTFOLIO_DATA.tagline}
          <span className="inline-block w-8 h-px bg-red opacity-60" />
        </div>

        {/* Logo */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider leading-none mb-4 text-white opacity-0 animate-[fadeUp_0.8s_2s_ease_forwards]">
          OM<span className="text-red">I</span>E
        </h1>

        {/* Headline */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-white/85 max-w-2xl mx-auto mb-4 leading-relaxed opacity-0 animate-[fadeUp_0.8s_2.2s_ease_forwards]">
          Let's create reels & videos people <strong className="font-bold text-white">actually stop and watch.</strong>
        </h2>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-8 opacity-0 animate-[fadeUp_0.8s_2.35s_ease_forwards]">
          {PORTFOLIO_DATA.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap opacity-0 animate-[fadeUp_0.8s_2.5s_ease_forwards]">
          <a href="#work" className="btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn-secondary">
            Hire Me →
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_1s_3s_ease_forwards]">
        <span className="text-xs tracking-widest uppercase text-gray-500">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}
