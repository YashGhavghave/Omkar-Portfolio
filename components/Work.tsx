'use client';

import { useState } from 'react';
import { WORK_ITEMS, WORK_CATEGORIES } from '@/lib/data';
import { ORIGINAL_VIDEO_1, ORIGINAL_VIDEO_2, ORIGINAL_VIDEO_3, ORIGINAL_VIDEO_4 } from '@/lib/original-assets';
import type { WorkItem } from '@/types';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'reels' | 'youtube' | 'ads' | 'brand'>('all');
  const [videoPlaying, setVideoPlaying] = useState<string | null>(null);

  const filteredItems = WORK_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const getPlaceholderEmoji = (category: string) => {
    const emojiMap: Record<string, string> = {
      youtube: '📺',
      ads: '🎯',
      brand: '✨',
      reels: '🎬',
    };
    return emojiMap[category] || '🎬';
  };

  return (
    <section id="work" className="bg-gray-100 py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-14 flex-wrap gap-6 reveal">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          {/* Filter Tags */}
          <div className="flex gap-2 flex-wrap">
            {WORK_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all ${
                  activeFilter === category
                    ? 'border-red text-white bg-red-subtle'
                    : 'border-white/12 text-gray-600 hover:border-red hover:text-white hover:bg-red-subtle'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`work-card group cursor-pointer rounded-xl overflow-hidden bg-gray-200 border border-white/6 transition-all duration-300 hover:border-red/40 hover:-translate-y-1.5 hover:shadow-2xl reveal reveal-delay-${(index % 4) + 1}`}
              >
              {/* Thumbnail */}
              <div className={`work-thumb relative bg-gray-300 overflow-hidden flex items-center justify-center ${item.isVideo ? 'aspect-[9/16]' : 'aspect-video'}`}>
                {item.thumbnail && (
                  item.isVideo ? (
                    <video
                      src={[
                        ORIGINAL_VIDEO_1,
                        ORIGINAL_VIDEO_2,
                        ORIGINAL_VIDEO_3,
                        ORIGINAL_VIDEO_4,
                      ][(Number(item.id) - 1) % 4]}
                      poster={item.thumbnail}
                      muted
                      playsInline
                      loop
                      autoPlay
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )
                )}
                {!item.thumbnail && (
                  <div className="text-5xl text-gray-500 group-hover:scale-105 transition-transform">
                    {getPlaceholderEmoji(item.category)}
                  </div>
                )}

                {/* Play Button */}
                {item.isVideo && (
                  <div className={`play-btn absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${
                    videoPlaying === item.id ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red shadow-lg" style={{boxShadow: '0 0 30px rgba(230, 51, 41, 0.25)'}}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" style={{marginLeft: '3px'}}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex justify-between items-center">
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-red mb-1">
                    {item.category}
                  </div>
                  <div className="text-base font-semibold text-white">
                    {item.title}
                  </div>
                </div>
                <span className="text-gray-500 group-hover:text-red group-hover:translate-x-1 transition-all text-xl">
                  →
                </span>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-400/40 bg-gray-200/60 py-12 text-center text-gray-600">
            No projects found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
