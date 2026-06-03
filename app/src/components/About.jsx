import React from 'react';
import { BadgeCheck, Store, Home, Award, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = { BadgeCheck, Store, Home, Award };

const About = () => {
  const { t } = useLanguage();
  const marqueeParts = t.about.marquee;

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bg-[#1A1206] text-[#FFB627] py-3 overflow-hidden border-y-4 border-[#E63946]">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-6 font-display text-2xl whitespace-nowrap">
              {marqueeParts.map((text, j) => (
                <React.Fragment key={j}>
                  <span>{text}</span>
                  {j < marqueeParts.length - 1 && <span className="text-[#E63946]">★</span>}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[560px]">
            <div className="absolute top-0 left-0 w-[60%] h-[60%] img-zoom rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(214,40,40,0.35)] border-[6px] border-white">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd" alt="Isla Burger" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] img-zoom rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(247,127,0,0.4)] border-[6px] border-white">
              <img src="https://images.unsplash.com/photo-1627564803215-ad55bad5c5ea" alt="Wraps" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFB627] to-[#E63946] flex items-center justify-center text-white shadow-[0_20px_40px_-10px_rgba(230,57,70,0.6)] stamp-rotate float-slow">
              <div className="text-center">
                <div className="font-display text-3xl leading-none">100%</div>
                <div className="font-bold text-xs uppercase tracking-wider">Halal</div>
              </div>
            </div>
          </div>

          <div>
            <span className="sticker mb-6">
              <Heart className="w-4 h-4" /> {t.about.sticker}
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-[#1A1206] leading-[0.95] mb-6">
              {t.about.title} <span className="text-[#E63946]">{t.about.flavor}</span>.
            </h2>
            <p className="text-[#1A1206]/75 leading-relaxed mb-4">
              {t.about.p1}
            </p>
            <p className="text-[#1A1206]/75 leading-relaxed mb-8">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {t.about.features.map((f, i) => {
                const icons = ['BadgeCheck', 'Store', 'Home', 'Award'];
                const Icon = iconMap[icons[i]] || BadgeCheck;
                return (
                  <div key={i} className="card-pop p-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB627]/20 to-[#E63946]/20 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-[#D62828]" />
                    </div>
                    <h3 className="font-display text-xl text-[#1A1206] leading-none">{f.title}</h3>
                    <p className="text-xs text-[#1A1206]/60 mt-2">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
