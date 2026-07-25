import { SERVICES } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="section-label flex justify-center">What I Do</div>
          <h2 className="section-title">Services</h2>
          <p className="section-desc mx-auto">
            Premium editing and content services tailored to grow your brand and engage your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`service-card bg-gray-200 border border-white/6 rounded-2xl p-8 transition-all duration-300 hover:border-red/30 hover:-translate-y-1 hover:shadow-xl reveal reveal-delay-${(index % 3) + 1}`}
              style={{
                backgroundColor: '#1a1a1a',
                borderTopColor: '#e63329',
                borderTopStyle: 'solid',
                borderTopWidth: '0px',
                transition: 'all 0.3s ease',
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-subtle flex items-center justify-center mb-5 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
