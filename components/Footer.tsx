import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/6 py-12 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-6">
        {/* Logo */}
        <Link href="#hero" className="font-display text-2xl font-bold tracking-wider text-white">
          ONKAR<span className="text-red">.</span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {currentYear} Onkar Raut. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com/omie.e_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-gray-500 hover:border-red hover:text-white hover:bg-red-subtle transition-all text-sm"
          >
            📸
          </a>
          <a
            href="https://wa.me/918767053939"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-gray-500 hover:border-red hover:text-white hover:bg-red-subtle transition-all text-sm"
          >
            💬
          </a>
          <a
            href="mailto:rautonkar07@gmail.com"
            className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-gray-500 hover:border-red hover:text-white hover:bg-red-subtle transition-all text-sm"
          >
            ✉️
          </a>
        </div>
      </div>
    </footer>
  );
}
