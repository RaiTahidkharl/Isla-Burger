import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { categories, businessInfo } from '../data/mock';

const UberEatsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 7v6.2c0 2.8 1.6 4.5 4.1 4.5s4.1-1.7 4.1-4.5V7h-2.5v6.2c0 1.4-.6 2.3-1.6 2.3s-1.6-.9-1.6-2.3V7H6Z" fill="currentColor" />
    <path d="M16.1 7h5.1v2.1h-2.7v2h2.4v2h-2.4v2.2h2.8v2.1h-5.2V7Z" fill="currentColor" />
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.2 6.6a5.9 5.9 0 0 1-1.3-3.8h-3.8v12.4a2.5 2.5 0 1 1-2-2.5V8.8a6.2 6.2 0 1 0 5.8 6.2V8.6a9.4 9.4 0 0 0 5.2 1.6V6.5a5.7 5.7 0 0 1-3.9.1Z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="16" height="16" x="4" y="4" rx="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14.6 8.1h2.3V4.4A19.1 19.1 0 0 0 13.5 4C10.1 4 8 6.1 8 9.9v3.2H4.2v4.1H8V24h4.5v-6.8h3.7l.7-4.1h-4.4V10.3c0-1.2.3-2.2 2.1-2.2Z" />
  </svg>
);

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
              <a href={businessInfo.mapsUrl} target="_blank" rel="noreferrer" aria-label="Isla Burger location" className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5">
                <MapPin className="w-5 h-5" />
              </a>
              <a href={businessInfo.uberEats} target="_blank" rel="noreferrer" aria-label="Order Isla Burger on Uber Eats" className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5">
                <UberEatsIcon className="w-6 h-6" />
              </a>
              <a href={`tel:${businessInfo.phoneTel}`} className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5 font-black text-sm">
                <Phone className="w-5 h-5" />
              </a>
              <a href={businessInfo.IslaTiktok} target="_blank" rel="noreferrer" aria-label="Isla Burger TikTok" className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href={businessInfo.IslaInstagram} target="_blank" rel="noreferrer" aria-label="Isla Burger Instagram" className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={businessInfo.IslaFacebook} target="_blank" rel="noreferrer" aria-label="Isla Burger Facebook" className="w-11 h-11 rounded-2xl bg-[#FFF8E7]/10 hover:bg-[#E63946] flex items-center justify-center transition-all hover:-translate-y-0.5">
                <FacebookIcon className="w-5 h-5" />
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
