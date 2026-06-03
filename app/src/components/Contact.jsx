import React from 'react';
import { MapPin, Phone, Clock, Bike, Package } from 'lucide-react';
import { hours, businessInfo } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 bg-[#FFFBF1]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="sticker mb-5">
            <MapPin className="w-4 h-4" /> {t.contact.sticker}
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-[#1A1206] heading-underline">
            {t.contact.title} <span className="text-[#E63946]">{t.contact.hi}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card-pop p-3 overflow-hidden">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
              <iframe
                title="Isla Burger Map"
                src={businessInfo.mapsEmbed}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 glass-card rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E63946] flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-xl leading-none text-[#1A1206]">Isla Burger</div>
                    <div className="text-xs font-bold text-[#1A1206]/70 mt-1">7 Rue d'Italie, 06000 Nice, France</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-pop p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFB627]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#D62828]" />
                </div>
                <h3 className="font-display text-2xl text-[#1A1206]">{t.contact.callUs}</h3>
              </div>
              <a href={`tel:${businessInfo.phoneTel}`} className="text-2xl font-bold text-[#1A1206] hover:text-[#D62828] transition-colors">
                {businessInfo.phone}
              </a>
              <p className="text-xs text-[#1A1206]/60 mt-2 uppercase tracking-wider font-bold">{t.contact.callSub}</p>
            </div>

            <div className="card-pop p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFB627]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#D62828]" />
                </div>
                <h3 className="font-display text-2xl text-[#1A1206]">{t.contact.hours}</h3>
              </div>
              <ul className="space-y-1.5">
                {hours.map((h, i) => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="font-bold text-[#1A1206]">{t.contact.days[i]}</span>
                    <span className="text-[#1A1206]/70 font-mono">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={businessInfo.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="card-pop p-4 text-center hover:bg-[#06C167]/15 hover:border-[#06C167]/40 border-2 border-transparent block transition-colors"
              >
                <Bike className="w-7 h-7 mx-auto text-[#06C167] mb-2" />
                <div className="font-display text-lg text-[#1A1206]">{t.contact.delivery}</div>
                <div className="text-[10px] font-bold text-[#1A1206]/60 mt-1 uppercase tracking-wider">
                  {businessInfo.uberEatsStore} · Nice
                </div>
              </a>
              <a href="#menu" className="card-pop p-4 text-center hover:bg-[#FFB627]/10 block">
                <Package className="w-7 h-7 mx-auto text-[#D62828] mb-2" />
                <div className="font-display text-lg text-[#1A1206]">{t.contact.pickup}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
