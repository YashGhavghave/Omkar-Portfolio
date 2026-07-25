import { PROCESS_STEPS } from '@/lib/data';

export default function Process() {
  return (
    <section id="process" className="bg-black py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="section-label flex justify-center">How It Works</div>
          <h2 className="section-title">The Editing Process</h2>
          <p className="section-desc mx-auto">
            Simple, transparent, and built around getting you the best result with zero headaches.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 relative">
          {/* Connecting Line */}
          <div
            className="absolute top-7 left-0 right-0 h-px bg-white/6 hidden lg:block"
            style={{ zIndex: 0 }}
          />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${(index % 4) + 1} relative md:p-6 md:border md:border-white/6 md:rounded-xl group`}
            >
              {/* Step Number */}
              <div className="w-14 h-14 rounded-full bg-gray-200 border border-white/10 flex items-center justify-center font-display text-lg font-bold text-red mb-4 transition-all group-hover:bg-red group-hover:text-white group-hover:border-red group-hover:shadow-lg relative z-10" style={{boxShadow: 'group-hover:0 0 20px rgba(230, 51, 41, 0.25)'}}>
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
