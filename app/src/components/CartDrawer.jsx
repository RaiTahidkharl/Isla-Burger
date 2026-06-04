"use client";

import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/mock';

const UBER_EATS_URL =
  'https://www.ubereats.com/fr/store/burger-avenue/mZVUmE5CVG6suLGI28MISg?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnGsK8kmqW2uSOB';

const CartDrawer = ({
  open,
  onClose,
  items = [],
  onInc,
  onDec,
  onRemove,
  uberEatsUrl = businessInfo?.uberEats || UBER_EATS_URL
}) => {
  const { t } = useLanguage();
  const handleClose = () => onClose();

  const total = items.reduce((sum, it) => {
    const num = parseFloat(it.price.replace(/[^\d.]/g, '')) || 0;
    return sum + num * it.qty;
  }, 0);

  const itemLabel = items.length === 1 ? t.cart.item : t.cart.items;

  if (!open) return null;

  return (
    <>
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t.cart.title}
        onClick={(e) => e.stopPropagation()}
        className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-[#FFFBF1] z-[100] shadow-2xl flex flex-col"
      >
        <div className="flex items-center justify-between p-5 border-b-2 border-[#FCE4B6] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB627] to-[#E63946] flex items-center justify-center text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-2xl text-[#1A1206] leading-none">{t.cart.title}</div>
              <div className="text-xs text-[#1A1206]/60 mt-1">{items.length} {itemLabel}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-10 h-10 rounded-xl bg-[#1A1206] text-white flex items-center justify-center hover:rotate-90 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <div className="text-6xl mb-4">🍔</div>
              <p className="font-display text-2xl text-[#1A1206]">{t.cart.empty}</p>
              <p className="text-sm text-[#1A1206]/60 mt-2">{t.cart.emptySub}</p>
            </div>
          ) : (
            items.map(it => (
              <div key={it.id} className="card-pop p-3 flex gap-3 items-center">
                <img src={it.image} alt={it.name} className="w-20 h-20 rounded-2xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[#1A1206] text-sm truncate">{it.name}</div>
                  <div className="font-display text-xl text-[#D62828]">{it.price}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => onDec(it.id)}
                      className="w-7 h-7 rounded-lg bg-[#FFF8E7] border border-[#FCE4B6] flex items-center justify-center hover:border-[#E63946] transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold text-sm w-6 text-center">{it.qty}</span>
                    <button
                      type="button"
                      onClick={() => onInc(it.id)}
                      className="w-7 h-7 rounded-lg bg-[#1A1206] text-white flex items-center justify-center hover:bg-[#E63946] transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(it.id)}
                  className="w-9 h-9 rounded-xl bg-[#E63946]/10 text-[#E63946] flex items-center justify-center hover:bg-[#E63946] hover:text-white transition-colors flex-shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="flex-shrink-0 p-5 border-t-2 border-[#FCE4B6] bg-[#FFF8E7]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-[#1A1206]/70">{t.cart.total}</span>
              <span className="font-display text-3xl text-[#D62828]">€{total.toFixed(2)}</span>
            </div>
            <a
              href={uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d w-full justify-center relative z-[110]"
              style={{ display: 'flex' }}
            >
              {t.cart.checkout}
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
            </a>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
