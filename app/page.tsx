'use client';

import {
  Cursor,
  Loader,
  Navigation,
  Hero,
  Work,
  Divider,
  About,
  Services,
  Results,
  Testimonials,
  Process,
  Contact,
  Footer,
  ScrollAnimations,
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Cursor */}
      <Cursor />

      {/* Loader */}
      <Loader />

      {/* Navigation */}
      <Navigation />

      {/* Scroll Animations Handler */}
      <ScrollAnimations />

      {/* Hero Section */}
      <Hero />
      <Divider />

      {/* Work Section */}
      <Work />
      <Divider />

      {/* About Section */}
      <About />
      <Divider />

      {/* Services Section */}
      <Services />
      <Divider />

      {/* Results Section */}
      <Results />
      <Divider />

      {/* Testimonials Section */}
      <Testimonials />
      <Divider />

      {/* Process Section */}
      <Process />
      <Divider />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
