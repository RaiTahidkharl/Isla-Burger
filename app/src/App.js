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

const Home = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const inc = (id) => setCart(p => p.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  const dec = (id) => setCart(p => p.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i));
  const removeItem = (id) => setCart(p => p.filter(i => i.id !== id));

  const cartCount = cart.reduce((sum, it) => sum + it.qty, 0);

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
      />
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
