'use client';

import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Here you would typically send the form data to a server
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Contact Info */}
          <div className="reveal">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let's Create Something Worth Watching.</h2>
            <p className="section-desc mt-6">
              Ready to level up your content? Drop a message and let's talk about how we can grow your brand together.
            </p>

            {/* Contact Links */}
            <div className="flex flex-col gap-4 mt-8">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="flex items-center gap-3 text-gray-600 hover:text-white p-4 border border-white/6 hover:border-red/40 rounded-xl bg-gray-200 transition-all hover:translate-x-1"
              >
                <div className="w-9 h-9 rounded-lg bg-red-subtle flex items-center justify-center text-red flex-shrink-0">
                  ✉️
                </div>
                <span className="text-sm">{PORTFOLIO_DATA.email}</span>
              </a>

              <a
                href={PORTFOLIO_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-white p-4 border border-white/6 hover:border-red/40 rounded-xl bg-gray-200 transition-all hover:translate-x-1"
              >
                <div className="w-9 h-9 rounded-lg bg-red-subtle flex items-center justify-center text-red flex-shrink-0">
                  📸
                </div>
                <span className="text-sm">{PORTFOLIO_DATA.instagramHandle} on Instagram</span>
              </a>

              <a
                href={PORTFOLIO_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-white p-4 border border-white/6 hover:border-red/40 rounded-xl bg-gray-200 transition-all hover:translate-x-1"
              >
                <div className="w-9 h-9 rounded-lg bg-red-subtle flex items-center justify-center text-red flex-shrink-0">
                  💬
                </div>
                <span className="text-sm">WhatsApp: +91 8767053939</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal reveal-delay-2">
            {!isSubmitted ? (
              <form id="contactForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold tracking-widest uppercase text-gray-600">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold tracking-widest uppercase text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@brand.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-600">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div
                id="formSuccess"
                className="text-center p-8 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 font-medium"
              >
                ✓ Thank you! I'll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
