"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles, Star, MapPin } from 'lucide-react';
import { heroSlides, businessInfo } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const slides = heroSlides.map((s, i) => ({
    ...s,
    ...(t.hero.slides[i] || {})
  }));

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const handleMouseMove = (e) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  const slide = slides[active];

  return (
    <section id="home" ref={wrapRef} onMouseMove={handleMouseMove} className="relative min-h-screen overflow-hidden" style={{
      background: 'radial-gradient(ellipse at top right, #FFE6B3 0%, #FFF8E7 40%, #FFFBF1 80%)'
    }}>
      <div className="blob bg-[#FFB627] w-[480px] h-[480px] -top-20 -left-20" />
      <div className="blob bg-[#E63946] w-[420px] h-[420px] top-1/2 -right-32" style={{ opacity: 0.35 }} />
      <div className="blob bg-[#FCBF49] w-[300px] h-[300px] bottom-0 left-1/3" />

      <div className="absolute top-32 left-10 text-6xl float-slow opacity-70 select-none pointer-events-none">🍔</div>
      <div className="absolute top-48 right-20 text-5xl float-fast opacity-60 select-none pointer-events-none">🍟</div>
      <div className="absolute bottom-40 left-20 text-5xl float-slow opacity-60 select-none pointer-events-none">🌮</div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="reveal-up relative z-10" key={`text-${active}-${t.hero.slides[0]?.title}`}>
          <div className="sticker mb-6">
            <Sparkles className="w-4 h-4" />
            {t.hero.sticker}
          </div>
          <h1 className="font-display text-[68px] md:text-[110px] leading-[0.9] text-[#1A1206] mb-4">
            <span className="block">{slide.title.split(' ')[0]}</span>
            <span className="block bg-gradient-to-r from-[#E63946] via-[#F77F00] to-[#FFB627] bg-clip-text text-transparent">
              {slide.title.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="font-script text-3xl text-[#D62828] mb-2">{slide.subtitle}</p>
          <p className="text-base md:text-lg text-[#1A1206]/70 max-w-md mb-8 leading-relaxed">
            {slide.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={slide.ctaTarget === 'uber' ? businessInfo.uberEats : '#menu'}
              {...(slide.ctaTarget === 'uber' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="btn-3d inline-flex flex-col items-center sm:items-start leading-tight"
            >
              <span>{slide.cta}</span>
              {slide.ctaTarget === 'uber' && (
                <span className="text-[10px] font-bold opacity-85 normal-case tracking-wide mt-0.5">
                  {t.hero.orderVia} · {businessInfo.uberEatsStore}
                </span>
              )}
            </a>
            <a href="#about" className="btn-3d btn-3d-amber">
              {t.hero.ourStory}
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-[#FFB627] to-[#E63946]" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-[#FFB627] text-[#FFB627]" />)}
                </div>
                <p className="text-xs font-bold text-[#1A1206]">{t.hero.stars}</p>
              </div>
            </div>
            <div className="h-10 w-px bg-[#1A1206]/15" />
            <div>
              <p className="font-display text-3xl text-[#E63946] leading-none">{businessInfo.reviewCount}+</p>
              <p className="text-xs uppercase tracking-wider text-[#1A1206]/60 font-bold">{t.hero.years}</p>
            </div>
          </div>

          <div className="flex gap-2 mt-10">
            {slides.map((s, i) => (
              <button key={s.id} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all ${
                i === active ? 'w-10 bg-[#E63946]' : 'w-2 bg-[#1A1206]/20 hover:bg-[#1A1206]/40'
              }`} />
            ))}
          </div>
        </div>

        <div className="relative h-[520px] md:h-[640px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="spin-slow w-[480px] h-[480px] md:w-[560px] md:h-[560px] rounded-full border-[14px] border-dashed border-[#FFB627]/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="spin-slow w-[380px] h-[380px] md:w-[440px] md:h-[440px] rounded-full border-2 border-[#E63946]/30" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="dish-3d relative" style={{
              transform: `perspective(1200px) rotateX(${tilt.y * -8}deg) rotateY(${tilt.x * 8}deg)`,
              transition: 'transform 0.2s ease-out'
            }}>
              <div className="relative w-[360px] h-[360px] md:w-[460px] md:h-[460px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFB627] to-[#E63946] blur-3xl opacity-40" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative w-full h-full object-cover rounded-full border-[10px] border-white shadow-[0_40px_80px_-20px_rgba(214,40,40,0.45)]"
                />
              </div>

              <div className="absolute -top-2 -left-6 glass-card rounded-2xl px-4 py-3 float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#E63946] flex items-center justify-center text-white font-black">🔥</div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A1206]/60">{t.hero.pressure}</div>
                    <div className="text-sm font-black text-[#1A1206]">{t.hero.crispy}</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 glass-card rounded-2xl px-4 py-3 float-fast">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#FFB627] flex items-center justify-center text-white font-black">★</div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A1206]/60">{t.hero.rated}</div>
                    <div className="text-sm font-black text-[#1A1206]">{businessInfo.rating} / 5</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 left-2 glass-card rounded-2xl px-4 py-3 float-slow">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D62828]" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A1206]/60">{t.hero.findUs}</div>
                    <div className="text-sm font-black text-[#1A1206]">Rue d&apos;Italie</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#1A1206]/60 hover:text-[#D62828] transition-colors">
        <span className="text-xs uppercase tracking-[0.3em] font-bold mb-2">{t.hero.scroll}</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
