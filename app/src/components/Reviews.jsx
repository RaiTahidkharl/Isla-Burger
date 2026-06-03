"use client";

import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews, businessInfo } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const Reviews = () => {
  const { t } = useLanguage();
  const [idx, setIdx] = useState(0);

  const localizedReviews = reviews.map((r, i) => ({
    ...r,
    text: t.reviews.items[i] || r.text
  }));

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % localizedReviews.length), 5000);
    return () => clearInterval(id);
  }, [localizedReviews.length]);

  const visibleReviews = [
    localizedReviews[idx % localizedReviews.length],
    localizedReviews[(idx + 1) % localizedReviews.length],
    localizedReviews[(idx + 2) % localizedReviews.length]
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #FFF8E7 0%, #FFE6B3 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="sticker mb-5">
              <Quote className="w-4 h-4" /> {t.reviews.sticker}
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-[#1A1206] leading-[0.95] mt-4">
              {t.reviews.line1} <br />
              <span className="text-[#E63946]">{t.reviews.line2}</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIdx((idx - 1 + localizedReviews.length) % localizedReviews.length)}
              className="w-12 h-12 rounded-2xl bg-[#1A1206] text-[#FFB627] flex items-center justify-center hover:-translate-y-0.5 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % localizedReviews.length)}
              className="w-12 h-12 rounded-2xl bg-[#E63946] text-white flex items-center justify-center hover:-translate-y-0.5 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visibleReviews.map((r, i) => (
            <div key={`${r.name}-${idx}-${i}`} className="card-pop p-7 reveal-up" style={{ animationDelay: `${i * 100}ms` }}>
              <Quote className="w-10 h-10 text-[#FFB627] mb-4" />
              <p className="text-[#1A1206] leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#1A1206]/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFB627] to-[#E63946] flex items-center justify-center text-white font-black">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1A1206]">{r.name}</div>
                    <div className="text-xs text-[#1A1206]/60">{r.date}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-[#FFB627] text-[#FFB627]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center font-black text-2xl">G</div>
            <div>
              <div className="font-display text-3xl text-[#1A1206]">{businessInfo.rating} / 5</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= Math.round(businessInfo.rating) ? 'fill-[#FFB627] text-[#FFB627]' : 'fill-[#1A1206]/20 text-[#1A1206]/20'}`} />
                ))}
                <span className="text-xs font-bold text-[#1A1206]/60 ml-2">{businessInfo.reviewCount} {t.reviews.google}</span>
              </div>
            </div>
          </div>
          <a
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-3d btn-3d-amber text-sm"
          >
            {t.reviews.seeAll}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
