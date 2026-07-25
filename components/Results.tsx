import { STATS } from '@/lib/data';

export default function Results() {
  return (
    <section id="results" className="bg-black py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="reveal">
            <div className="section-label">By The Numbers</div>
            <h2 className="section-title leading-tight">
              Results That<br/>Speak for<br/>Themselves
            </h2>
            <p className="section-desc mt-6">
              Every project is driven by one goal — measurable growth for your brand or channel.
            </p>
            <a href="#contact" className="btn-primary inline-block mt-8">
              Let's Work Together
            </a>
          </div>

          {/* Right Column - Stats */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className={`bg-gray-100 border border-white/6 rounded-2xl p-7 transition-all duration-300 hover:border-red/30 hover:-translate-y-1 reveal reveal-delay-${(index % 4) + 1} ${
                    stat.big ? 'col-span-2 md:col-span-1 flex flex-col' : ''
                  }`}
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-red leading-none">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium mt-2">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <p className="text-sm text-gray-600 leading-relaxed mt-4 flex-1">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
