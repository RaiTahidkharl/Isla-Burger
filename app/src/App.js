"use client";

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { ToastProvider, Toaster } from './components/ui/toaster';
import { LanguageProvider } from './context/LanguageContext';
import { businessInfo } from './data/mock';
import { ShoppingBag } from 'lucide-react';

const Home = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    const qtyToAdd = item.qty || 1;
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + qtyToAdd } : p);
      }
      return [...prev, { ...item, qty: qtyToAdd }];
    });
  };

  const inc = (id) => setCart(p => p.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  const dec = (id) => setCart(p => p.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i));
  const removeItem = (id) => setCart(p => p.filter(i => i.id !== id));

  const cartCount = cart.reduce((sum, it) => sum + it.qty, 0);
  const cartTotal = cart.reduce((sum, it) => {
    const num = parseFloat(String(it.price).replace(/[^\d.]/g, '')) || 0;
    return sum + num * it.qty;
  }, 0);

  return (
    <div className="App">
      <div className="noise-overlay" />
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <About />
      <Menu onAddToCart={addToCart} />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onInc={inc}
        onDec={dec}
        onRemove={removeItem}
        uberEatsUrl={businessInfo.uberEats}
      />
      {cartCount > 0 && (
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="fixed bottom-4 left-4 right-4 z-[70] flex items-center justify-between rounded-2xl bg-[#17120D] p-3 text-white shadow-[0_20px_45px_-20px_rgba(23,18,13,0.8)] md:hidden"
        >
          <span className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5B301] text-[#17120D]">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <span className="text-left">
              <span className="block text-sm font-black">{cartCount} item{cartCount === 1 ? '' : 's'}</span>
              <span className="block text-xs font-bold text-white/70">Ready for checkout</span>
            </span>
          </span>
          <span className="rounded-xl bg-[#D62828] px-4 py-3 text-sm font-black">
            €{cartTotal.toFixed(2)}
          </span>
        </button>
      )}
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <Home />
        <Toaster />
      </ToastProvider>
    </LanguageProvider>
  );
}

export default App;
