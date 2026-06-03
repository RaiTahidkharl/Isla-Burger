import React from 'react';
import { Globe, Share2, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { categories, businessInfo } from '../data/mock';

const Footer = () => {
  const { t } = useLanguage();
  const catIds = ['best-sellers', 'burgers', 'chicken', 'wraps', 'wings', 'sides'];

  return (
    <footer className="relative bg-[#1A1206] text-[#FFF8E7] pt-20 pb-8 overflow-hidden">
      <div className="diagonal-stripes absolute inset-0 opacity-20" />
      <div className="absolute -right-20 -bottom-20 text-[#FFB627]/5 font-display text-[300px] leading-none select-none pointer-events-none">
        🍔
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="rounded-3xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#FFB627] to-[#FFE6B3]">
          <div>
            <h3 className="font-display text-3xl md:text-5xl leading-none text-[#1A1206]">{t.footer.hungry}</h3>
            <p className="text-[#1A1206]/80 mt-2">{t.footer.hungrySub}</p>
          </div>
          <div className="flex gap-3">
            <a href={businessInfo.uberEats} target="_blank" rel="noopener noreferrer" className="btn-3d">
              {t.footer.delivery}
            </a>
            <a href="#menu" className="btn-3d btn-3d-amber">{t.footer.collect}</a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB627] to-[#E63946] flex items-center justify-center text-2xl shadow-lg">🍔</div>
              <div>
                <div className="font-display text-2xl">Isla Burger</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#FFB627] font-bold">{t.brandTagline}</div>
              </div>
            </div>
            <p className="text-[#FFF8E7]/70 max-w-md leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex gap-3">
              <a href={businessInfo.mapsUrl} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5">
                <Globe className="w-5 h-5" />
              </a>
              <a href={businessInfo.uberEats} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5">
                <Share2 className="w-5 h-5" />
              </a>
              <a href={`tel:${businessInfo.phoneTel}`} className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5 font-black text-sm">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-4 text-[#FFB627]">{t.footer.menuTitle}</h4>
            <ul className="space-y-2 text-sm text-[#FFF8E7]/70">
              {catIds.map(id => (
                <li key={id}>
                  <a href="#menu" className="hover:text-[#FFB627] transition-colors">
                    {t.menu.categories[id] || categories.find(c => c.id === id)?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-4 text-[#FFB627]">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-[#FFF8E7]/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#E63946] flex-shrink-0" /> {businessInfo.addressShort}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E63946] flex-shrink-0" /> {businessInfo.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E63946] flex-shrink-0" /> {businessInfo.priceRange} per person
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FFF8E7]/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#FFF8E7]/50">{t.footer.rights}</p>
          <p className="text-xs text-[#FFF8E7]/50 flex items-center gap-1">
            {t.footer.made} <Heart className="w-3 h-3 fill-[#E63946] text-[#E63946]" /> {t.footer.madeIn}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
