'use client';

import { useState, useRef, useEffect } from 'react';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0] as HTMLElement;
      if (cardWidth) {
        const width = cardWidth.offsetWidth + 24;
        trackRef.current.style.transform = `translateX(-${currentIndex * width}px)`;
      }
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < TESTIMONIALS.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section id="testimonials" className="bg-gray-100 py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <div className="section-label flex justify-center">Client Love</div>
          <h2 className="section-title">What Clients Say</h2>
        </div>

        {/* Carousel */}
        <div className="reveal">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500"
            >
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-80 bg-gray-200 border border-white/6 rounded-2xl p-8 flex-shrink-0"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500 text-sm">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base text-white/80 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-red font-bold text-white text-sm overflow-hidden flex-shrink-0">
                      {testimonial.avatar && testimonial.avatar.startsWith('http') ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        testimonial.avatar
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 justify-center mt-8">
            <button
              id="testiPrev"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-full border border-white/12 bg-transparent text-white flex items-center justify-center transition-all hover:border-red hover:bg-red-subtle disabled:opacity-50"
            >
              ←
            </button>
            <button
              id="testiNext"
              onClick={handleNext}
              disabled={currentIndex === TESTIMONIALS.length - 1}
              className="w-11 h-11 rounded-full border border-white/12 bg-transparent text-white flex items-center justify-center transition-all hover:border-red hover:bg-red-subtle disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
