"use client";

import React, { useState, useRef } from 'react';
import { Plus, Star, Flame, Beef, Sandwich, Drumstick, Salad, IceCream } from 'lucide-react';
import { categories, menuItems } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../context/LanguageContext';
import { localizeMenuItem } from '../i18n/translations';

const iconMap = { Flame, Beef, Sandwich, Drumstick, Salad, IceCream };

const MenuItemCard = ({ item, onAdd, addLabel }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="card-pop overflow-hidden group cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 4}deg)`,
        transition: 'transform 0.25s ease-out, box-shadow 0.4s'
      }}
    >
      <div className="relative img-zoom rounded-3xl m-3 mb-0 aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
        {item.badge && (
          <span className="absolute top-3 left-3 hot-tag">{item.badge}</span>
        )}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-full px-2 py-1 shadow-md">
          <Star className="w-3 h-3 fill-[#FFB627] text-[#FFB627]" />
          <span className="text-xs font-black text-[#1A1206]">{item.rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl text-[#1A1206] leading-none mb-2">{item.name}</h3>
        <p className="text-sm text-[#1A1206]/60 leading-relaxed mb-4 line-clamp-2 min-h-[40px]">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-3xl text-[#D62828]">{item.price}</span>
          <button
            onClick={() => onAdd(item)}
            className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#1A1206] text-[#FFF8E7] font-bold text-sm hover:bg-[#E63946] transition-all hover:-translate-y-0.5 shadow-[0_6px_0_rgba(0,0,0,0.15)] active:translate-y-0.5"
          >
            <Plus className="w-4 h-4 transition-transform group-hover/btn:rotate-90" /> {addLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

const Menu = ({ onAddToCart }) => {
  const { t } = useLanguage();
  const [activeCat, setActiveCat] = useState('best-sellers');
  const { toast } = useToast();

  const handleAdd = (item) => {
    onAddToCart && onAddToCart(item);
    toast({
      title: t.menu.addedTitle,
      description: `${item.name} — ${item.price}`
    });
  };

  const items = (menuItems[activeCat] || []).map(item => localizeMenuItem(item, t));

  return (
    <section id="menu" className="relative py-24 bg-gradient-to-b from-[#FFFBF1] via-[#FFF8E7] to-[#FFFBF1]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="sticker mb-5">
            <Flame className="w-4 h-4" /> {t.menu.sticker}
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-[#1A1206] heading-underline">
            {t.menu.title} <span className="text-[#E63946]">{t.menu.obsession}</span>
          </h2>
          <p className="max-w-xl mx-auto mt-8 text-[#1A1206]/70">
            {t.menu.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-3 mb-12 scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center mt-10">
          {categories.map(cat => {
            const Icon = iconMap[cat.icon] || Flame;
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 border-2 ${
                  isActive
                    ? 'bg-[#1A1206] text-[#FFB627] border-[#1A1206] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] -translate-y-1'
                    : 'bg-white text-[#1A1206] border-[#FCE4B6] hover:border-[#FFB627] hover:-translate-y-0.5'
                }`}
              >
                <Icon className="w-4 h-4" style={{ color: isActive ? cat.color : cat.color }} />
                {t.menu.categories[cat.id] || cat.name}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {items.map((item, i) => (
            <div key={item.id} className="reveal-up" style={{ animationDelay: `${i * 80}ms` }}>
              <MenuItemCard item={item} onAdd={handleAdd} addLabel={t.menu.add} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
