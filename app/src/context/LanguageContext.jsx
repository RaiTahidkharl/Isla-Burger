"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
import { translations, LANGS } from '../i18n/translations';

const LanguageContext = createContext(null);
const DEFAULT_LANG = 'FR';
const LANGUAGE_EVENT = 'isla-language-change';

const getStoredLanguage = () => {
  if (typeof window === 'undefined') return DEFAULT_LANG;

  try {
    const saved = localStorage.getItem('lang');
    return saved && LANGS.includes(saved) ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
};

const subscribeToLanguage = (callback) => {
  window.addEventListener('storage', callback);
  window.addEventListener(LANGUAGE_EVENT, callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(LANGUAGE_EVENT, callback);
  };
};

export function LanguageProvider({ children }) {
  const lang = useSyncExternalStore(subscribeToLanguage, getStoredLanguage, () => DEFAULT_LANG);

  const setLang = (code) => {
    if (!LANGS.includes(code)) return;

    try {
      localStorage.setItem('lang', code);
      document.documentElement.lang = code.toLowerCase();
      window.dispatchEvent(new Event(LANGUAGE_EVENT));
    } catch {
      // Ignore storage access errors in restricted browser contexts.
    }
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
