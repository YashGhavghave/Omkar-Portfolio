'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="loader"
      className={`fixed inset-0 bg-black z-[9998] flex flex-col items-center justify-center gap-6 transition-all duration-600 ${
        isHidden ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <div className="font-display text-5xl md:text-7xl font-bold tracking-wide text-white">
        ONKAR<span className="text-red">.</span>
      </div>
      <div className="w-52 h-0.5 bg-gray-300 rounded overflow-hidden">
        <div className="h-full bg-red rounded animate-load-bar" />
      </div>
    </div>
  );
}
