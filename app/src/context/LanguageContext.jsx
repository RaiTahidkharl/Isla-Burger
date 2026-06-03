"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, LANGS } from '../i18n/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang');
      if (saved && LANGS.includes(saved)) return saved;
    }
    return 'FR';
  });

  const setLang = (code) => {
    if (!LANGS.includes(code)) return;
    setLangState(code);
    localStorage.setItem('lang', code);
    document.documentElement.lang = code.toLowerCase();
  };

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = translations[lang] || translations.FR;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, langs: LANGS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
