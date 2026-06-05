"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Beef,
  ChevronLeft,
  ChevronRight,
  Drumstick,
  Flame,
  Leaf,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Utensils,
  Wheat
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../context/LanguageContext';

const categoryTabs = [
  { id: 'burgers', label: 'Burgers', icon: Beef },
  { id: 'wraps', label: 'Wraps', icon: Utensils },
  { id: 'naan', label: 'Naan', icon: Wheat },
  { id: 'chicken', label: 'Chicken', icon: Drumstick },
  { id: 'palau', label: 'Palau', icon: Sparkles },
  { id: 'salads', label: 'Salads', icon: Leaf },
  { id: 'buckets', label: 'Buckets', icon: Package },
  { id: 'kids', label: 'Kids Menu', icon: Star },
  { id: 'fries', label: 'Fries', icon: Flame }
];

const filters = ['All', 'Beef', 'Chicken', 'Kebab', 'Spicy', 'Family Meals'];

const menuCopy = {
  EN: {
    heroKicker: 'Halal fast food in Nice',
    heroTitle: 'Isla Burger',
    heroSubtitle: 'Big burgers, crispy chicken, loaded naans and family buckets made for fast, easy ordering.',
    orderNow: 'Order Now',
    viewPopular: 'View Popular',
    favoritesKicker: 'Customer favorites',
    favoritesTitle: 'Best Sellers',
    searchPlaceholder: 'Search burgers, chicken, buckets...',
    sectionKicker: 'Choose your next bite',
    itemsLabel: 'items',
    noMatchTitle: 'No matching dishes',
    noMatchDescription: 'Try another category, search term, or filter.',
    startingAt: 'Starting at',
    add: 'Add',
    addedTitle: 'Added to cart',
    chooseSize: 'Choose size',
    categories: {
      burgers: 'Burgers',
      wraps: 'Wraps',
      naan: 'Naan',
      chicken: 'Chicken',
      palau: 'Palau',
      salads: 'Salads',
      buckets: 'Buckets',
      kids: 'Kids Menu',
      fries: 'Fries'
    },
    filters: {
      All: 'All',
      Beef: 'Beef',
      Chicken: 'Chicken',
      Kebab: 'Kebab',
      Spicy: 'Spicy',
      'Family Meals': 'Family Meals'
    },
    badges: { Popular: 'Popular', Spicy: 'Spicy' },
    sizes: { Solo: 'Solo', Menu: 'Menu', Regular: 'Regular' }
  },
  FR: {
    heroKicker: 'Fast-food halal a Nice',
    heroTitle: 'Isla Burger',
    heroSubtitle: 'Burgers genereux, poulet croustillant, naans garnis et buckets famille pour commander vite et bien.',
    orderNow: 'Commander',
    viewPopular: 'Voir les populaires',
    favoritesKicker: 'Favoris clients',
    favoritesTitle: 'Meilleures ventes',
    searchPlaceholder: 'Rechercher burgers, poulet, buckets...',
    sectionKicker: 'Choisissez votre prochaine envie',
    itemsLabel: 'articles',
    noMatchTitle: 'Aucun plat trouve',
    noMatchDescription: 'Essayez une autre categorie, recherche ou filtre.',
    startingAt: 'A partir de',
    add: 'Ajouter',
    addedTitle: 'Ajoute au panier',
    chooseSize: 'Choisir la taille',
    categories: {
      burgers: 'Burgers',
      wraps: 'Wraps',
      naan: 'Naan',
      chicken: 'Poulet',
      palau: 'Palau',
      salads: 'Salades',
      buckets: 'Buckets',
      kids: 'Menu enfant',
      fries: 'Frites'
    },
    filters: {
      All: 'Tous',
      Beef: 'Boeuf',
      Chicken: 'Poulet',
      Kebab: 'Kebab',
      Spicy: 'Epice',
      'Family Meals': 'Famille'
    },
    badges: { Popular: 'Populaire', Spicy: 'Epice' },
    sizes: { Solo: 'Solo', Menu: 'Menu', Regular: 'Regular' }
  },
  IT: {
    heroKicker: 'Fast food halal a Nizza',
    heroTitle: 'Isla Burger',
    heroSubtitle: 'Burger grandi, pollo croccante, naan farciti e bucket famiglia per ordinare in modo semplice.',
    orderNow: 'Ordina ora',
    viewPopular: 'Vedi popolari',
    favoritesKicker: 'Preferiti dai clienti',
    favoritesTitle: 'Piu venduti',
    searchPlaceholder: 'Cerca burger, pollo, bucket...',
    sectionKicker: 'Scegli il prossimo morso',
    itemsLabel: 'articoli',
    noMatchTitle: 'Nessun piatto trovato',
    noMatchDescription: 'Prova un altra categoria, ricerca o filtro.',
    startingAt: 'Da',
    add: 'Aggiungi',
    addedTitle: 'Aggiunto al carrello',
    chooseSize: 'Scegli formato',
    categories: {
      burgers: 'Burger',
      wraps: 'Wrap',
      naan: 'Naan',
      chicken: 'Pollo',
      palau: 'Palau',
      salads: 'Insalate',
      buckets: 'Bucket',
      kids: 'Menu bimbi',
      fries: 'Patatine'
    },
    filters: {
      All: 'Tutti',
      Beef: 'Manzo',
      Chicken: 'Pollo',
      Kebab: 'Kebab',
      Spicy: 'Piccante',
      'Family Meals': 'Famiglia'
    },
    badges: { Popular: 'Popolare', Spicy: 'Piccante' },
    sizes: { Solo: 'Solo', Menu: 'Menu', Regular: 'Regular' }
  },
  ES: {
    heroKicker: 'Fast food halal en Niza',
    heroTitle: 'Isla Burger',
    heroSubtitle: 'Burgers grandes, pollo crujiente, naans cargados y buckets familiares para pedir facil.',
    orderNow: 'Pedir ahora',
    viewPopular: 'Ver populares',
    favoritesKicker: 'Favoritos de clientes',
    favoritesTitle: 'Mas vendidos',
    searchPlaceholder: 'Buscar burgers, pollo, buckets...',
    sectionKicker: 'Elige tu proximo bocado',
    itemsLabel: 'articulos',
    noMatchTitle: 'No hay platos coincidentes',
    noMatchDescription: 'Prueba otra categoria, busqueda o filtro.',
    startingAt: 'Desde',
    add: 'Anadir',
    addedTitle: 'Anadido al carrito',
    chooseSize: 'Elegir tamano',
    categories: {
      burgers: 'Burgers',
      wraps: 'Wraps',
      naan: 'Naan',
      chicken: 'Pollo',
      palau: 'Palau',
      salads: 'Ensaladas',
      buckets: 'Buckets',
      kids: 'Menu infantil',
      fries: 'Patatas'
    },
    filters: {
      All: 'Todos',
      Beef: 'Ternera',
      Chicken: 'Pollo',
      Kebab: 'Kebab',
      Spicy: 'Picante',
      'Family Meals': 'Familia'
    },
    badges: { Popular: 'Popular', Spicy: 'Picante' },
    sizes: { Solo: 'Solo', Menu: 'Menu', Regular: 'Regular' }
  }
};

const imageByCategory = {
  burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  wraps: 'https://images.unsplash.com/photo-1627564803215-ad55bad5c5ea',
  naan: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
  chicken: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f',
  palau: 'https://images.unsplash.com/photo-1596797038530-2c107229654b',
  salads: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
  buckets: 'https://images.unsplash.com/photo-1608039755401-742074f0548d',
  kids: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  fries: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752'
};

const rawMenu = {
  burgers: [
    ['cheese-burger', 'Cheese Burger', 'Beef patty, cheddar, pickles and house burger sauce.', 5.5, 8.5, ['Beef']],
    ['double-cheese-burger', 'Double Cheese Burger', 'Two beef patties, cheddar, lettuce, burger sauce.', 6.9, 10.5, ['Beef']],
    ['triple-cheese-burger', 'Triple Cheese Burger', 'Triple beef, cheddar, onion, lettuce, tomato and burger sauce.', 7.9, 11.9, ['Beef']],
    ['ib-supreme', 'IB Supreme', 'Double beef, bacon, cheddar, egg, salad, tomato and your sauce.', 7.9, 11.9, ['Beef']],
    ['cheezy-bacon', 'Cheezy Bacon', 'Beef, cheddar, bacon, pickles, onion, salad, tomato and sauce.', 6.9, 9.5, ['Beef']],
    ['country-max', 'Country Max', '110g beef, potato rosti, cheddar, onion, salad, tomato and sauce.', 7.9, 11.9, ['Beef']],
    ['pak-burger-classic', 'Pak Burger Classic', 'Two 110g beef patties, cheddar, green chili, onion, egg and salad.', 8.9, 12.9, ['Beef', 'Spicy']],
    ['big-tasty', 'Big Tasty', '110g beef, two tenders, cheddar, egg, onion, salad, tomato and sauce.', 8.9, 13.9, ['Beef', 'Chicken']],
    ['spicy-beef-burger', 'Spicy Beef Burger', 'Kefta, bacon, cheddar, green chili, egg, salad, tomato and sauce.', 8.9, 12.9, ['Beef', 'Spicy']],
    ['chicken-burger', 'Chicken Burger', 'Crispy chicken, cheddar, salad and your choice of sauce.', 5.9, 9.9, ['Chicken']],
    ['chicken-royal', 'Chicken Royal', 'Crispy chicken breast, cheddar, potato rosti, salad and sauce.', 7.9, 11.9, ['Chicken']],
    ['fish-burger', 'Fish Burger', 'Crispy fish, cheddar, salad and creamy sauce.', 6.9, 9.9, ['All']]
  ],
  wraps: [
    ['sandwich-kebab', 'Sandwich Kebab', 'Kebab, onion, salad, tomato and sauce in soft bread.', 6.9, 9.5, ['Kebab']],
    ['kebab-wrap', 'Kebab Wrap', 'Kebab, onion, salad, tomato and sauce wrapped in a tortilla.', 6.5, 9.5, ['Kebab']],
    ['chicken-wrap', 'Chicken Wrap', 'Crispy chicken, cheddar, salad, tomato and sauce.', 6.9, 9.9, ['Chicken']],
    ['tikka-wrap', 'Tikka Wrap', 'Grilled tikka chicken, cheddar, salad, tomato and sauce.', 6.9, 10.5, ['Chicken', 'Spicy']]
  ],
  naan: [
    ['naan-kofta', 'Sandwich Naan Kofta', 'Naan bread with kefta, onion, egg, bacon, salad, tomato and sauce.', 9.5, 14.9, ['Beef']],
    ['naan-mix', 'Naan Mix', 'Naan with two beef patties, tenders, cheddar, salad, tomato and sauce.', 8.9, 13.9, ['Beef', 'Chicken']],
    ['naan-kebab', 'Naan Kebab', 'Naan with kebab, egg, bacon, onion, salad, tomato and sauce.', 8.9, 12.9, ['Kebab']],
    ['naan-grill-tikka', 'Naan Grill Tikka', 'Naan with grilled tikka chicken, onion, salad, tomato and sauce.', 8.9, 11.9, ['Chicken', 'Spicy']],
    ['sandwich-curry', 'Sandwich Curry', 'Bakery bread, curry-marinated chicken, cheddar, salad, tomato and sauce.', 7.9, 11.9, ['Chicken']],
    ['sandwich-supreme', 'Sandwich Supreme', 'Bakery bread, two beef patties, cheddar, egg, bacon, salad and sauce.', 9.5, 12.9, ['Beef']]
  ],
  chicken: [
    ['chicken-mixte', 'Chicken Mixte', 'Two large fried chicken pieces with four spicy wings.', 11.9, null, ['Chicken', 'Spicy']],
    ['hot-spicy-wings', 'Hot Spicy Wings', 'Six or ten crispy spicy chicken wings.', 10.9, 12.9, ['Chicken', 'Spicy']],
    ['3x-chicken', '3 x Chicken', 'Three large golden fried chicken pieces.', 9.9, null, ['Chicken']],
    ['chicken-tenders', 'Chicken Tenders', 'Six crispy breaded chicken tenders.', 11.9, null, ['Chicken']],
    ['chicken-nuggets', 'Chicken Nuggets', 'Six or ten crispy breaded chicken nuggets.', 9.5, 10.9, ['Chicken']],
    ['chicken-pop-corn', 'Chicken Pop Corn', 'Twelve or twenty crispy chicken popcorn bites.', 10.9, 12.9, ['Chicken']],
    ['chicken-tikka', 'Chicken Tikka', 'Six grilled chicken pieces marinated in tandoori tikka sauce.', 11.5, null, ['Chicken', 'Spicy']],
    ['samosas', 'Samosas', 'Four samosas with chicken, lamb or vegetables.', 9.9, null, ['Chicken']]
  ],
  palau: [
    ['tikka-palau', 'Tikka Palau', 'Steamed basmati rice with vegetables, grilled tikka chicken and onion.', 9.5, null, ['Chicken', 'Spicy']],
    ['chicken-palau', 'Chicken Palau', 'Basmati rice with vegetables and four tenders or spicy wings.', 9.5, null, ['Chicken']],
    ['kebab-palau', 'Kebab Palau', 'Basmati rice with vegetables, kebab and onion.', 9.9, null, ['Kebab']],
    ['palau-2-viandes', 'Palau 2 Viandes', 'Basmati rice with vegetables, kebab, kofta, onion and egg.', 12.9, null, ['Beef', 'Kebab']]
  ],
  salads: [
    ['salade-caesar', 'Salade Caesar', 'Composed salad with three pieces of marinated chicken, fries and drink.', 9.5, null, ['Chicken']],
    ['kebab-salade', 'Kebab Salade', 'Composed salad with kebab, fries and drink.', 9.9, null, ['Kebab']],
    ['salade-poulet-tandoori', 'Salade Poulet Tandoori', 'Composed salad with three grilled tikka chicken pieces, fries and drink.', 9.9, null, ['Chicken', 'Spicy']]
  ],
  buckets: [
    ['menu-famille-bucket', 'Menu Famille Bucket', 'Ten chicken pieces, four fries and one 1.5L drink.', 28.9, null, ['Chicken', 'Family Meals']],
    ['bucket-mixte', 'Bucket Mixte', 'Six chicken pieces, ten wings, four fries and one 1.5L drink.', 29.9, null, ['Chicken', 'Family Meals']],
    ['bucket-wings', 'Bucket Wings', 'Twenty-five spicy wings, four fries and one 1.5L drink.', 32.9, null, ['Chicken', 'Spicy', 'Family Meals']],
    ['bucket-tenders', 'Bucket Tenders', 'Twenty-five tenders, four fries and one 1.5L drink.', 32.9, null, ['Chicken', 'Family Meals']],
    ['mega-bucket-mixte', 'Mega Bucket Mixte', 'Chicken pieces, spicy wings, tenders, four fries and one 1.5L drink.', 35.9, null, ['Chicken', 'Spicy', 'Family Meals']],
    ['bucket-burgers-party', 'Bucket & Burgers Party', 'Tenders, spicy wings, three cheeseburgers, four fries and one 1.5L drink.', 45.9, null, ['Chicken', 'Beef', 'Family Meals']]
  ],
  kids: [
    ['menu-enfant', 'Menu Enfant', 'Cheeseburger, fries and drink for younger burger fans.', 7.5, null, ['Beef']]
  ],
  fries: [
    ['petite-frites', 'Petite Frites', 'Small portion of crisp golden fries.', 3.5, null, ['All']],
    ['grandes-frites', 'Grandes Frites', 'Large portion of crisp golden fries.', 4.5, null, ['All']]
  ]
};

const menuItems = Object.entries(rawMenu).reduce((acc, [category, items]) => {
  acc[category] = items.map(([id, name, description, smallPrice, largePrice, tags], index) => ({
    id,
    category,
    name,
    description,
    tags,
    image: `${imageByCategory[category]}?auto=format&fit=crop&w=900&q=80&sig=${index}`,
    rating: 4.5 + ((index + category.length) % 4) / 10,
    badge: index === 0 ? 'Popular' : tags.includes('Spicy') ? 'Spicy' : '',
    sizes: largePrice
      ? [
          { label: 'Solo', price: smallPrice },
          { label: 'Menu', price: largePrice }
        ]
      : [{ label: 'Regular', price: smallPrice }]
  }));
  return acc;
}, {});

const itemCopy = {
  FR: {
    'double-cheese-burger': ['Double Cheese Burger', 'Deux steaks boeuf, cheddar, salade, tomate et sauce burger.'],
    'bucket-mixte': ['Bucket Mixte', 'Six pieces de poulet, dix wings, quatre frites et une boisson 1,5 L.'],
    'hot-spicy-wings': ['Hot Spicy Wings', 'Six ou dix wings de poulet croustillantes et epicees.'],
    'naan-mix': ['Naan Mix', 'Naan avec deux steaks, tenders, cheddar, salade, tomate et sauce.'],
    'chicken-wrap': ['Chicken Wrap', 'Poulet croustillant, cheddar, salade, tomate et sauce.'],
    'cheese-burger': ['Cheese Burger', 'Steak boeuf, cheddar, cornichons et sauce burger maison.'],
    'triple-cheese-burger': ['Triple Cheese Burger', 'Triple boeuf, cheddar, oignon, salade, tomate et sauce burger.'],
    'ib-supreme': ['IB Supreme', 'Double boeuf, bacon, cheddar, oeuf, salade, tomate et sauce au choix.'],
    'cheezy-bacon': ['Cheezy Bacon', 'Boeuf, cheddar, bacon, cornichons, oignon, salade, tomate et sauce.'],
    'country-max': ['Country Max', 'Boeuf 110g, galette de pomme de terre, cheddar, oignon, salade, tomate et sauce.'],
    'pak-burger-classic': ['Pak Burger Classic', 'Deux steaks 110g, cheddar, piment vert, oignon, oeuf et salade.'],
    'big-tasty': ['Big Tasty', 'Boeuf 110g, deux tenders, cheddar, oeuf, oignon, salade, tomate et sauce.'],
    'spicy-beef-burger': ['Spicy Beef Burger', 'Kefta, bacon, cheddar, piment vert, oeuf, salade, tomate et sauce.'],
    'chicken-burger': ['Chicken Burger', 'Poulet croustillant, cheddar, salade et sauce au choix.'],
    'chicken-royal': ['Chicken Royal', 'Filet de poulet croustillant, cheddar, galette de pomme de terre, salade et sauce.'],
    'fish-burger': ['Fish Burger', 'Poisson croustillant, cheddar, salade et sauce cremeuse.'],
    'sandwich-kebab': ['Sandwich Kebab', 'Kebab, oignon, salade, tomate et sauce dans un pain moelleux.'],
    'kebab-wrap': ['Kebab Wrap', 'Kebab, oignon, salade, tomate et sauce dans une tortilla.'],
    'tikka-wrap': ['Tikka Wrap', 'Poulet tikka grille, cheddar, salade, tomate et sauce.'],
    'naan-kofta': ['Sandwich Naan Kofta', 'Naan avec kefta, oignon, oeuf, bacon, salade, tomate et sauce.'],
    'naan-kebab': ['Naan Kebab', 'Naan avec kebab, oeuf, bacon, oignon, salade, tomate et sauce.'],
    'naan-grill-tikka': ['Naan Grill Tikka', 'Naan avec poulet tikka grille, oignon, salade, tomate et sauce.'],
    'sandwich-curry': ['Sandwich Curry', 'Pain boulanger, poulet marine curry, cheddar, salade, tomate et sauce.'],
    'sandwich-supreme': ['Sandwich Supreme', 'Pain boulanger, deux steaks, cheddar, oeuf, bacon, salade et sauce.'],
    'chicken-mixte': ['Chicken Mixte', 'Deux grandes pieces de poulet frit avec quatre wings epicees.'],
    '3x-chicken': ['3 x Chicken', 'Trois grandes pieces de poulet dore et croustillant.'],
    'chicken-tenders': ['Chicken Tenders', 'Six tenders de poulet panes et croustillants.'],
    'chicken-nuggets': ['Chicken Nuggets', 'Six ou dix nuggets de poulet panes et croustillants.'],
    'chicken-pop-corn': ['Chicken Pop Corn', 'Douze ou vingt bouchees de poulet pop corn croustillantes.'],
    'chicken-tikka': ['Chicken Tikka', 'Six morceaux de poulet grille marines sauce tikka tandoori.'],
    samosas: ['Samosas', 'Quatre samosas au poulet, agneau ou legumes.'],
    'tikka-palau': ['Tikka Palau', 'Riz basmati vapeur avec legumes, poulet tikka grille et oignon.'],
    'chicken-palau': ['Chicken Palau', 'Riz basmati avec legumes et quatre tenders ou wings epicees.'],
    'kebab-palau': ['Kebab Palau', 'Riz basmati avec legumes, kebab et oignon.'],
    'palau-2-viandes': ['Palau 2 Viandes', 'Riz basmati avec legumes, kebab, kofta, oignon et oeuf.'],
    'salade-caesar': ['Salade Caesar', 'Salade composee avec trois morceaux de poulet marine, frites et boisson.'],
    'kebab-salade': ['Kebab Salade', 'Salade composee avec kebab, frites et boisson.'],
    'salade-poulet-tandoori': ['Salade Poulet Tandoori', 'Salade composee avec trois morceaux de poulet tikka grille, frites et boisson.'],
    'menu-famille-bucket': ['Menu Famille Bucket', 'Dix pieces de poulet, quatre frites et une boisson 1,5 L.'],
    'bucket-wings': ['Bucket Wings', 'Vingt-cinq wings epicees, quatre frites et une boisson 1,5 L.'],
    'bucket-tenders': ['Bucket Tenders', 'Vingt-cinq tenders, quatre frites et une boisson 1,5 L.'],
    'mega-bucket-mixte': ['Mega Bucket Mixte', 'Pieces de poulet, wings epicees, tenders, quatre frites et une boisson 1,5 L.'],
    'bucket-burgers-party': ['Bucket & Burgers Party', 'Tenders, wings epicees, trois cheeseburgers, quatre frites et une boisson 1,5 L.'],
    'menu-enfant': ['Menu Enfant', 'Cheeseburger, frites et boisson pour les jeunes fans de burgers.'],
    'petite-frites': ['Petite Frites', 'Petite portion de frites dorees et croustillantes.'],
    'grandes-frites': ['Grandes Frites', 'Grande portion de frites dorees et croustillantes.']
  }
};

const localizeItems = (lang, copy) => Object.fromEntries(
  Object.entries(menuItems).map(([category, items]) => [
    category,
    items.map((item) => {
      const localized = itemCopy[lang]?.[item.id] || (lang !== 'EN' ? itemCopy.FR?.[item.id] : null);
      const name = localized?.[0];
      const description = localized?.[1];
      return {
        ...item,
        ...(localized ? {
          name: translateText(name, lang),
          description: translateText(description, lang)
        } : {}),
        badge: copy.badges[item.badge] || item.badge,
        sizes: item.sizes.map((size) => ({
          ...size,
          label: copy.sizes[size.label] || size.label
        }))
      };
    })
  ])
);

const translateText = (text, lang) => {
  if (lang === 'FR' || lang === 'EN') return text;

  const dictionaries = {
    IT: {
      'Deux': 'Due',
      'Trois': 'Tre',
      'Six': 'Sei',
      'Dix': 'Dieci',
      'Vingt-cinq': 'Venticinque',
      boeuf: 'manzo',
      poulet: 'pollo',
      croustillant: 'croccante',
      croustillants: 'croccanti',
      salade: 'insalata',
      tomate: 'pomodoro',
      oignon: 'cipolla',
      frites: 'patatine',
      sauce: 'salsa',
      cheddar: 'cheddar',
      bacon: 'bacon',
      oeuf: 'uovo',
      legumes: 'verdure',
      epicees: 'piccanti',
      grille: 'grigliato',
      marine: 'marinato'
    },
    ES: {
      'Deux': 'Dos',
      'Trois': 'Tres',
      'Six': 'Seis',
      'Dix': 'Diez',
      'Vingt-cinq': 'Veinticinco',
      boeuf: 'ternera',
      poulet: 'pollo',
      croustillant: 'crujiente',
      croustillants: 'crujientes',
      salade: 'ensalada',
      tomate: 'tomate',
      oignon: 'cebolla',
      frites: 'patatas',
      sauce: 'salsa',
      cheddar: 'cheddar',
      bacon: 'bacon',
      oeuf: 'huevo',
      legumes: 'verduras',
      epicees: 'picantes',
      grille: 'a la parrilla',
      marine: 'marinado'
    }
  };

  return Object.entries(dictionaries[lang] || {}).reduce(
    (result, [from, to]) => result.replaceAll(from, to),
    text
  );
};

const formatPrice = (price) => `\u20AC${price.toFixed(2)}`;

const ProductCard = ({ item, onOpen, onQuickAdd, copy }) => {
  const imageSrc = typeof item.image === 'string' && item.image.startsWith('/menu/')
    ? encodeURI(item.image)
    : item.image;

  return (
  <motion.article
    layout
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8, rotate: -0.4 }}
    className="card-pop group h-full overflow-hidden bg-[#FFF8E7] shadow-[0_18px_36px_-24px_rgba(122,13,23,0.28)]"
  >
    <button type="button" onClick={() => onOpen(item)} className="block w-full text-left">
      <div className="img-zoom relative aspect-[4/3] overflow-hidden bg-[#FFE6B3]">
        <img
          src={imageSrc}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {item.badge && (
          <span className="hot-tag absolute left-3 top-3">
            {item.badge}
          </span>
        )}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/60 bg-[#FFF8E7]/95 px-2.5 py-1 text-xs font-black text-[#1A1206] shadow-md backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-[#FFB627] text-[#FFB627]" />
          {item.rating.toFixed(1)}
        </span>
      </div>
    </button>
    <div className="flex min-h-[188px] flex-col p-4">
      <button type="button" onClick={() => onOpen(item)} className="text-left">
        <h3 className="text-lg font-black leading-tight text-[#1A1206]">{item.name}</h3>
        <p className="mt-2 line-clamp-2 min-h-10 text-sm font-medium leading-5 text-[#1A1206]/65">{item.description}</p>
      </button>
      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-[#B25700]">{copy.startingAt}</p>
          <p className="text-xl font-black text-[#E63946]">{formatPrice(item.sizes[0].price)}</p>
        </div>
        <button
          type="button"
          onClick={() => onQuickAdd(item)}
          className="btn-3d min-h-0 rounded-xl px-4 py-3 text-xs"
        >
          <Plus className="h-4 w-4" />
          {copy.add}
        </button>
      </div>
    </div>
  </motion.article>
  );
};

const SkeletonCard = () => (
  <div className="overflow-hidden rounded-[28px] border border-[#F3E2C3] bg-white">
    <div className="aspect-[4/3] animate-pulse bg-[#F4DFC0]" />
    <div className="space-y-3 p-4">
      <div className="h-5 w-2/3 animate-pulse rounded-full bg-[#F4DFC0]" />
      <div className="h-4 w-full animate-pulse rounded-full bg-[#F4DFC0]" />
      <div className="h-4 w-4/5 animate-pulse rounded-full bg-[#F4DFC0]" />
      <div className="flex items-center justify-between pt-4">
        <div className="h-7 w-20 animate-pulse rounded-full bg-[#F4DFC0]" />
        <div className="h-11 w-24 animate-pulse rounded-full bg-[#F4DFC0]" />
      </div>
    </div>
  </div>
);

const ProductModal = ({ item, onClose, onAdd, copy, categories }) => {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const selectedSize = item.sizes[sizeIndex];
  const total = selectedSize.price * quantity;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[120] flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm sm:items-center sm:p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.name}
          onClick={(event) => event.stopPropagation()}
          initial={{ y: 60, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="max-h-[92vh] w-full overflow-hidden rounded-t-[28px] bg-[#FFF8E7] shadow-2xl sm:max-w-2xl sm:rounded-[28px]"
        >
          <div className="max-h-[92vh] overflow-y-auto">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#FFE6B3]">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#FCE4B6] bg-[#FFF8E7]/95 text-xl font-black text-[#1A1206] shadow-lg transition hover:border-[#FFB627]"
              >
                ×
              </button>
            </div>
            <div className="p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E63946]">{categories.find((cat) => cat.id === item.category)?.label}</p>
                  <h3 className="mt-1 text-3xl font-black leading-none text-[#1A1206] sm:text-4xl">{item.name}</h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border-2 border-[#FCE4B6] bg-white px-3 py-1.5 text-sm font-black text-[#1A1206]">
                  <Star className="h-4 w-4 fill-[#FFB627] text-[#FFB627]" />
                  {item.rating.toFixed(1)}
                </span>
              </div>
              <p className="mt-4 text-base font-medium leading-7 text-[#1A1206]/70">{item.description}</p>

              <div className="mt-6">
                <p className="mb-3 text-sm font-black uppercase tracking-wide text-[#1A1206]">{copy.chooseSize}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {item.sizes.map((size, index) => (
                    <button
                      key={size.label}
                      type="button"
                      onClick={() => setSizeIndex(index)}
                      className={`flex items-center justify-between rounded-2xl border-2 p-4 text-left transition ${
                        sizeIndex === index
                          ? 'border-[#E63946] bg-[#FFE6B3]'
                          : 'border-[#FCE4B6] bg-white hover:border-[#FFB627]'
                      }`}
                    >
                      <span className="font-black text-[#1A1206]">{size.label}</span>
                      <span className="font-black text-[#E63946]">{formatPrice(size.price)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-4 rounded-3xl border-2 border-[#FCE4B6] bg-white p-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#FCE4B6] text-[#1A1206] transition hover:border-[#FFB627]"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-lg font-black">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => value + 1)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A1206] text-white transition hover:bg-[#E63946]"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => onAdd(item, selectedSize, quantity)}
                  className="btn-3d h-12 flex-1 justify-center rounded-xl px-5 py-0 text-sm "
                >
                  <ShoppingBag className="h-4 w-4" />
                  {copy.add} {formatPrice(total)}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Menu = ({ onAddToCart }) => {
  const { toast } = useToast();
  const { lang } = useLanguage();
  const copy = menuCopy[lang] || menuCopy.EN;
  const [activeCat, setActiveCat] = useState('burgers');
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 550);
    return () => window.clearTimeout(timer);
  }, []);

  const localizedCategoryTabs = useMemo(() => categoryTabs.map((category) => ({
    ...category,
    label: copy.categories[category.id] || category.label
  })), [copy]);

  const localizedMenuItems = useMemo(() => localizeItems(lang, copy), [copy, lang]);

  const bestSellers = useMemo(() => [
    localizedMenuItems.burgers[1],
    localizedMenuItems.buckets[1],
    localizedMenuItems.chicken[1],
    localizedMenuItems.naan[1],
    localizedMenuItems.wraps[2]
  ], [localizedMenuItems]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return (localizedMenuItems[activeCat] || []).filter((item) => {
      const matchesQuery = !normalizedQuery ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery);
      const matchesFilter = activeFilter === 'All' || item.tags.includes(activeFilter);
      return matchesQuery && matchesFilter;
    });
  }, [activeCat, activeFilter, localizedMenuItems, query]);

  const addItem = (item, size = item.sizes[0], quantity = 1) => {
    if (onAddToCart) {
      onAddToCart({
        ...item,
        id: `${item.id}-${size.label.toLowerCase().replace(/\s+/g, '-')}`,
        baseId: item.id,
        size: size.label,
        price: formatPrice(size.price),
        qty: quantity
      });
    }
    toast({
      title: copy.addedTitle,
      description: `${quantity} x ${item.name} (${size.label})`
    });
    setSelectedItem(null);
  };

  const scrollBestSellers = (direction) => {
    const track = document.getElementById('best-seller-track');
    track?.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  return (
    <section id="menu" className="relative bg-[#FFF8ED] pb-24 text-[#17120D] lg:pb-28">
      <div className="relative isolate min-h-[86vh] overflow-hidden bg-[#17120D] pt-28 text-white">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=85"
          alt="Isla Burger premium burger banner"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,18,13,0.92)_0%,rgba(23,18,13,0.58)_50%,rgba(23,18,13,0.18)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(86vh-7rem)] max-w-7xl items-center px-5 lg:px-8">
          <div className="max-w-2xl pb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] backdrop-blur">
              {copy.heroKicker}
            </span>
            <h2 className="mt-6 text-6xl font-black leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl">
              {copy.heroTitle}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/86 sm:text-xl">
              {copy.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu-ordering"
                className="btn-3d btn-3d-amber h-14 justify-center px-7 py-0"
              >
                {copy.orderNow}
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#best-sellers"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-sm font-black uppercase tracking-wide text-white backdrop-blur"
              >
                {copy.viewPopular}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="menu-ordering" className="mx-auto max-w-7xl px-5 lg:px-8">
        <section id="best-sellers" className="-mt-14 relative z-20 overflow-hidden rounded-[24px] border-2 border-[#FCE4B6] bg-[#FFF8E7] p-4 shadow-[0_24px_70px_-42px_rgba(122,13,23,0.6)] sm:p-5">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#FFB627] via-[#F77F00] to-[#E63946]" />
          <div className="mb-5 flex items-center justify-between gap-4 px-1 pt-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#E63946]">{copy.favoritesKicker}</p>
              <h3 className="heading-underline mt-1 text-3xl font-black leading-none sm:text-4xl">{copy.favoritesTitle}</h3>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button type="button" onClick={() => scrollBestSellers(-1)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#FCE4B6] bg-white transition hover:border-[#FFB627] hover:-translate-y-0.5">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => scrollBestSellers(1)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A1206] text-white transition hover:-translate-y-0.5 hover:bg-[#E63946]">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div id="best-seller-track" className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
            {bestSellers.map((item, index) => (
              <div key={item.id} className={`${index === 0 ? 'w-[86vw] sm:w-[360px]' : 'w-[78vw] sm:w-[300px]'} max-w-[360px] shrink-0 snap-start`}>
                <ProductCard item={item} onOpen={setSelectedItem} onQuickAdd={addItem} copy={copy} />
              </div>
            ))}
          </div>
        </section>

        <div className="sticky top-20 z-40 -mx-5 border-y border-[#FCE4B6] bg-[#FFF8E7]/95 px-5 py-3 backdrop-blur-xl lg:mx-0 lg:rounded-3xl lg:border-2 lg:shadow-[0_18px_45px_-36px_rgba(122,13,23,0.7)]">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {localizedCategoryTabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveCat(id)}
                className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-black transition ${
                  activeCat === id
                    ? 'bg-[#E63946] text-white shadow-[0_8px_18px_-10px_rgba(230,57,70,0.8)]'
                    : 'bg-white text-[#1A1206]/65 hover:text-[#1A1206] hover:ring-2 hover:ring-[#FFB627]/40'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9D6B2C]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              className="h-14 w-full rounded-2xl border-2 border-[#FCE4B6] bg-white pl-12 pr-4 text-base font-bold text-[#1A1206] outline-none transition placeholder:text-[#AA9B8A] focus:border-[#E63946] focus:ring-4 focus:ring-[#E63946]/10"
            />
          </label>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`h-11 shrink-0 rounded-full px-4 text-sm font-black transition ${
                  activeFilter === filter
                    ? 'bg-[#E63946] text-white shadow-[0_8px_18px_-12px_rgba(230,57,70,0.8)]'
                    : 'bg-white text-[#1A1206]/65 ring-1 ring-[#FCE4B6] hover:text-[#1A1206] hover:ring-[#FFB627]'
                }`}
              >
                {copy.filters[filter] || filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#E63946]">{copy.sectionKicker}</p>
            <h3 className="mt-1 text-3xl font-black leading-none sm:text-4xl">
              {localizedCategoryTabs.find((cat) => cat.id === activeCat)?.label}
            </h3>
          </div>
          <p className="hidden text-sm font-bold text-[#1A1206]/60 sm:block">{filteredItems.length} {copy.itemsLabel}</p>
        </div>

        <motion.div layout className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
            : filteredItems.map((item) => (
                <ProductCard key={item.id} item={item} onOpen={setSelectedItem} onQuickAdd={addItem} copy={copy} />
              ))}
        </motion.div>

        {!loading && filteredItems.length === 0 && (
          <div className="mt-8 rounded-[24px] border-2 border-dashed border-[#FFB627] bg-white p-8 text-center">
            <p className="text-xl font-black text-[#1A1206]">{copy.noMatchTitle}</p>
            <p className="mt-2 text-sm font-medium text-[#1A1206]/65">{copy.noMatchDescription}</p>
          </div>
        )}
      </div>

      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} onAdd={addItem} copy={copy} categories={localizedCategoryTabs} />
    </section>
  );
};

export default Menu;
