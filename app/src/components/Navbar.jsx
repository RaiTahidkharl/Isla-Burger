"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/mock';

const Navbar = ({ cartCount = 0, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t, langs } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.visit, href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#FFF8E7]/95 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(122,13,23,0.25)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
        <a href="#home" className="flex min-w-0 flex-1 sm:flex-none items-center gap-2 sm:gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[#FFB627] to-[#E63946] flex items-center justify-center shadow-[0_8px_18px_-6px_rgba(230,57,70,0.5)] group-hover:rotate-12 transition-transform duration-500">
            <span className="text-xl sm:text-2xl">🍔</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></span>
          </div>
          <div className="leading-tight min-w-0 max-w-[8rem] min-[380px]:max-w-[10rem] sm:max-w-none">
            <div className="font-display text-lg sm:text-xl lg:text-2xl text-[#1A1206] whitespace-nowrap">Isla Burger</div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.25em] text-[#D62828] font-bold truncate">
              {t.brandTagline}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink min-w-0">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="relative shrink-0 whitespace-nowrap px-2.5 xl:px-3 py-2 font-bold text-xs xl:text-sm uppercase tracking-wide text-[#1A1206] hover:text-[#D62828] transition-colors group"
            >
              {l.label}
              <span className="absolute left-1/2 -bottom-1 w-0 h-1 bg-[#E63946] rounded-full group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden min-[769px]:flex items-center bg-[#FFF8E7] rounded-full p-1 border-2 border-[#FCE4B6]">
            {langs.map(l => (
              <button key={l} onClick={() => setLang(l)} className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                lang === l ? 'bg-[#E63946] text-white shadow-md' : 'text-[#1A1206] hover:text-[#D62828]'
              }`}>{l}</button>
            ))}
          </div>

          <button onClick={onCartOpen} className="relative p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#FFF8E7] border-2 border-[#FCE4B6] hover:border-[#FFB627] hover:-translate-y-0.5 transition-all">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#1A1206]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E63946] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">{cartCount}</span>
            )}
          </button>

          <a
            href={businessInfo.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-[769px]:inline-flex btn-3d text-xs xl:text-sm whitespace-nowrap shrink-0 items-center gap-1.5"
          >
            <span className="flex flex-col items-start leading-tight">
              <span>{t.nav.orderNow}</span>
              <span className="text-[9px] font-bold opacity-80 normal-case tracking-wide">{t.nav.orderVia}</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-90" />
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-xl bg-[#FFF8E7] border-2 border-[#FCE4B6]">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#FFF8E7] border-t-2 border-[#FCE4B6] px-4 sm:px-5 py-4">
          <div className="flex items-center gap-1 mb-4 md:hidden">
            {langs.map(l => (
              <button key={l} onClick={() => setLang(l)} className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                lang === l ? 'bg-[#E63946] text-white' : 'text-[#1A1206]'
              }`}>{l}</button>
            ))}
          </div>
          <nav className="flex flex-col gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-[#FFB627]/20">
                {l.label}
              </a>
            ))}
            <a
              href={businessInfo.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="hidden min-[769px]:flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-[#E63946] text-white font-bold uppercase text-sm tracking-wider"
            >
              <span>{t.nav.orderNow}</span>
              <span className="text-[10px] font-bold opacity-90">{t.nav.orderVia}</span>
            </a>
            <a href="tel:+33981531414" className="flex items-center gap-2 px-4 py-3 text-[#D62828] font-bold">
              <Phone className="w-4 h-4" /> +33 9 81 53 14 14
            </a>
            <a href="#contact" className="flex items-center gap-2 px-4 py-3 text-[#1A1206] font-bold">
              <MapPin className="w-4 h-4" /> 7 Rue d&apos;Italie, Nice
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
