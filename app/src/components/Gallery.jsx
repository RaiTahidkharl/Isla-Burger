"use client";

import React, { useState } from 'react';
import { galleryImages } from '../data/mock';
import { Camera, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative py-24 bg-[#1A1206] text-[#FFF8E7] overflow-hidden">
      <div className="diagonal-stripes absolute inset-0 opacity-30" />
      <div className="absolute top-10 right-10 text-[#FFB627]/10 font-display text-[200px] leading-none select-none pointer-events-none">
        FOOD
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="sticker mb-5">
            <Camera className="w-4 h-4" /> {t.gallery.sticker}
          </span>
          <h2 className="font-display text-5xl md:text-7xl heading-underline">
            {t.gallery.title} <span className="text-[#FFB627]">{t.gallery.plate}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className={`group relative img-zoom rounded-3xl overflow-hidden border-[5px] border-[#FFF8E7]/10 hover:border-[#FFB627] transition-all duration-500 ${
                i % 5 === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <img src={src} alt="food" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1206] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="hot-tag">{t.gallery.view}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#E63946] text-white flex items-center justify-center hover:rotate-90 transition-transform">
            <X className="w-5 h-5" />
          </button>
          <img src={active} alt="" className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;
