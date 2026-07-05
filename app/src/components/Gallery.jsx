"use client";

import React, { useState } from 'react';
import { galleryImages } from '../data/mock';
import { Camera, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(null);

  const hero = galleryImages.find(item => item.size === 'hero');
  const rest = galleryImages.filter(item => item.size !== 'hero');

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

        {hero && (
          <button
            onClick={() => setActive(hero)}
            className="group relative img-zoom w-full aspect-[25/17] rounded-3xl overflow-hidden border-[5px] border-[#FFF8E7]/10 hover:border-[#FFB627] transition-all duration-500 mb-4 md:mb-6"
          >
            <img src={hero.src} alt={hero.name} className="w-full h-full object-contain object-center bg-[#100b04]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1206] via-[#1A1206]/5 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute top-4 left-4 md:top-5 md:left-5">
              <span className="hot-tag">{hero.tag}</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5 flex items-end justify-between gap-2 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="font-display text-2xl md:text-4xl leading-none text-[#FFF8E7] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                {hero.name}
              </span>
              <span className="hidden sm:inline-block bg-[#FFF8E7]/15 text-[#FFF8E7] backdrop-blur-sm font-bold tracking-wider text-[11px] px-3 py-1.5 rounded-full border border-[#FFF8E7]/25">
                {t.gallery.view}
              </span>
            </div>
          </button>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[9rem] md:auto-rows-[10rem]">
          {rest.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item)}
              className={`group relative img-zoom rounded-3xl overflow-hidden border-[5px] border-[#FFF8E7]/10 hover:border-[#FFB627] transition-all duration-500 ${
                item.size === 'big' ? 'col-span-2 row-span-2' : 'col-span-1'
              }`}
            >
              <img src={item.src} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1206] via-[#1A1206]/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute top-3 left-3">
                <span className="hot-tag">{item.tag}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-display text-lg md:text-2xl leading-none text-[#FFF8E7] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  {item.name}
                </span>
                <span className="hidden sm:inline-block bg-[#FFF8E7]/15 text-[#FFF8E7] backdrop-blur-sm font-bold tracking-wider text-[11px] px-3 py-1.5 rounded-full border border-[#FFF8E7]/25">
                  {t.gallery.view}
                </span>
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
          <div className="relative max-w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img src={active.src} alt={active.name} className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl" />
            <div className="absolute bottom-5 left-5">
              <span className="hot-tag">{active.tag}</span>
              <p className="font-display text-2xl md:text-3xl text-[#FFF8E7] mt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                {active.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
