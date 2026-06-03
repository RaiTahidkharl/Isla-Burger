export const LANGS = ['FR', 'EN', 'IT', 'ES'];

const shared = {
  brandTagline: { FR: 'Burgers & wings à Nice', EN: 'Burgers & Wings in Nice', IT: 'Burger & ali a Nizza', ES: 'Burgers y alitas en Niza' },
  badges: {
    'BEST SELLER': { FR: 'BEST-SELLER', EN: 'BEST SELLER', IT: 'BEST SELLER', ES: 'MÁS VENDIDO' },
    POPULAR: { FR: 'POPULAIRE', EN: 'POPULAR', IT: 'POPOLARE', ES: 'POPULAR' },
    HOT: { FR: 'ÉPICÉ', EN: 'HOT', IT: 'PICCANTE', ES: 'PICANTE' },
    TRENDING: { FR: 'TENDANCE', EN: 'TRENDING', IT: 'DI TENDENZA', ES: 'TENDENCIA' },
    HUGE: { FR: 'ÉNORME', EN: 'HUGE', IT: 'ENORME', ES: 'ENORME' },
    SHARE: { FR: 'À PARTAGER', EN: 'SHARE', IT: 'DA CONDIVIDERE', ES: 'PARA COMPARTIR' },
    LOADED: { FR: 'GARNI', EN: 'LOADED', IT: 'CARICATO', ES: 'CARGADO' },
    SWEET: { FR: 'SUCRÉ', EN: 'SWEET', IT: 'DOLCE', ES: 'DULCE' },
    HALAL: { FR: 'HALAL', EN: 'HALAL', IT: 'HALAL', ES: 'HALAL' },
    SIGNATURE: { FR: 'SIGNATURE', EN: 'SIGNATURE', IT: 'SIGNATURE', ES: 'SIGNATURE' }
  }
};

function buildLang(code) {
  const b = (key) => shared.badges[key]?.[code] || key;
  const tagline = shared.brandTagline[code];

  const texts = {
    FR: {
      nav: { home: 'Accueil', menu: 'Menu', about: 'Histoire', gallery: 'Galerie', visit: 'Contact', orderNow: 'Commander', orderVia: 'Uber Eats' },
      hero: {
        sticker: 'Nice · France · Halal · €1–10',
        ourStory: 'Notre histoire',
        stars: '3,6 étoiles · 649 avis',
        years: 'Avis Google',
        scroll: 'Défiler',
        pressure: 'Comptoir', crispy: 'Service rapide', rated: 'Noté', findUs: 'Nous trouver', orderVia: 'via Uber Eats',
        slides: [
          { title: 'Burgers & Wings', subtitle: 'Croustillant. Frais. Inoubliable.', description: 'Burgers et ailes de poulet dans un restaurant comptoir avec tables en terrasse, rue d\'Italie.', cta: 'Commander' },
          { title: 'Ouvert tard', subtitle: 'Un rayon de lumière à minuit.', description: 'Quand tous les restaurants sont fermés et que vous avez faim, Isla Burger vous accueille encore à Nice.', cta: 'Voir le menu' },
          { title: 'Halal & abordable', subtitle: '€1–10 par personne.', description: 'Équipe super sympa, portions généreuses pour le prix. Sur place, à emporter et livraison.', cta: 'Découvrir' }
        ]
      },
      menu: {
        sticker: 'Notre menu', title: 'Choisissez votre', obsession: 'obsession',
        subtitle: 'Préparé chaque jour, servi frais. Chaque plat avec la même passion qu\'au début.',
        add: 'Ajouter', addedTitle: '🍔 Ajouté au panier !',
        categories: { 'best-sellers': 'Populaires', burgers: 'Burgers', chicken: 'Poulet', wraps: 'Wraps', wings: 'Ailes', sides: 'Accompagnements' }
      },
      about: {
        marquee: ['🍔 Isla Burger', 'Burgers & wings', '100 % Halal', '7 Rue d\'Italie, Nice'],
        sticker: 'Notre histoire', title: 'Nous ne plaisantons pas avec le', flavor: 'goût',
        p1: 'Chez Isla Burger, burgers et ailes de poulet sont servis dans un restaurant comptoir simple avec tables en terrasse — idéal pour une pause rapide, en famille ou tard le soir.',
        p2: 'Notre secret ? Des ingrédients frais, des options halal, un service amical et des prix honnêtes (€1–10). Sur place, à emporter ou en livraison via Uber Eats.',
        features: [
          { title: 'Sur place', desc: 'Comptoir avec terrasse extérieure' },
          { title: 'À emporter', desc: 'Rapide et pratique' },
          { title: 'Livraison', desc: 'Commandez via Uber Eats' },
          { title: 'Halal', desc: 'Burgers et poulet halal' }
        ]
      },
      gallery: { sticker: 'Galerie', title: 'Un régal pour les', plate: 'yeux', view: 'Voir' },
      reviews: {
        sticker: 'Avis clients', line1: 'Ils sont venus affamés.', line2: 'Ils sont repartis conquis.',
        google: 'sur Google Avis', seeAll: 'Voir tous les avis',
        items: [
          'Poulet fire original et nourriture si fraîche. À minuit quand tout est fermé, c\'était comme un rayon de lumière dans la nuit.',
          'Meilleur endroit en ville — équipe super sympa et très copieux pour le prix. Je suis venu 3 fois. Je recommande !',
          'Très pratique et très adapté aux familles avec enfants. La nourriture est bonne aussi.',
          'Excellent burger poulet halal, terrasse agréable, ouvert tard quand on en a besoin.',
          'Restaurant comptoir simple avec portions honnêtes et prix justes. Parfait fast-food à Nice.',
          'Nourriture fraîche, service aimable et bons prix. Le cheeseburger et les frites sont mes favoris.'
        ]
      },
      contact: {
        sticker: 'Nous trouver', title: 'Venez nous', hi: 'dire bonjour',
        callUs: 'Appelez-nous', callSub: 'Commandes & infos', hours: 'Horaires',
        delivery: 'Uber Eats', deliverySub: 'Burger Avenue', pickup: 'À emporter',
        days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
      },
      footer: {
        hungry: 'Encore faim ?', hungrySub: 'Commandez en 2 clics. Livré chaud. Ou venez le chercher.',
        delivery: 'Commander · Uber Eats', collect: 'Voir le menu',
        desc: '🍔 Isla Burger — burgers, ailes de poulet et frites dans un comptoir convivial avec terrasse, 7 Rue d\'Italie, Nice.',
        menuTitle: 'Menu', contactTitle: 'Contact',
        rights: '©2026 Isla Burger · 7 Rue d\'Italie, Nice · Tous droits réservés',
        made: 'Fait avec', madeIn: 'à Nice, France'
      },
      cart: {
        title: 'Votre panier', items: 'articles', item: 'article',
        empty: 'Assiette vide', emptySub: 'Ajoutez de délicieuses bouchées pour commencer.',
        total: 'Total', checkout: 'Finaliser sur Uber Eats'
      }
    },
    EN: {
      nav: { home: 'Home', menu: 'Menu', about: 'About', gallery: 'Gallery', visit: 'Contact', orderNow: 'Order', orderVia: 'Uber Eats' },
      hero: {
        sticker: 'Nice · France · Halal · €1–10',
        ourStory: 'Our Story',
        stars: '3.6 Stars · 649 Reviews',
        years: 'Google Reviews',
        scroll: 'Scroll',
        pressure: 'Counter', crispy: 'Fast Serve', rated: 'Rated', findUs: 'Find us', orderVia: 'via Uber Eats',
        slides: [
          { title: 'Burgers & Wings', subtitle: 'Crispy. Fresh. Unforgettable.', description: 'Burgers and chicken wings in a straightforward counter-serve venue with outdoor tables on Rue d\'Italie.', cta: 'Order Now' },
          { title: 'Open Late', subtitle: 'A beam of light at midnight.', description: 'When every other restaurant is closed and you\'re hungry, Isla Burger is still serving fresh halal food in Nice.', cta: 'View Menu' },
          { title: 'Halal & Affordable', subtitle: '€1–10 per person.', description: 'Super friendly staff, very filling for the price. Dine-in, takeout and delivery available.', cta: 'Discover' }
        ]
      },
      menu: {
        sticker: 'Our Menu', title: 'Pick your', obsession: 'obsession',
        subtitle: 'Crafted daily, served fresh. Every dish made with the same passion that started it all.',
        add: 'Add', addedTitle: '🍔 Added to cart!',
        categories: { 'best-sellers': 'Popular', burgers: 'Burgers', chicken: 'Chicken', wraps: 'Wraps', wings: 'Wings', sides: 'Sides & Fries' }
      },
      about: {
        marquee: ['🍔 Isla Burger', 'Burgers & Wings', '100% Halal', '7 Rue d\'Italie, Nice'],
        sticker: 'Our Story', title: 'We don\'t play with', flavor: 'flavor',
        p1: 'At Isla Burger, burgers and chicken wings are served in a straightforward counter-serve venue with outdoor tables — perfect for a quick bite, family meal, or late-night hunger.',
        p2: 'Our secret? Fresh ingredients, halal options, friendly service, and honest prices (€1–10). Dine-in, takeout, or delivery via Uber Eats.',
        features: [
          { title: 'Dine-in', desc: 'Counter-serve with outdoor tables' },
          { title: 'Takeout', desc: 'Fast and easy to go' },
          { title: 'Delivery', desc: 'Order via Uber Eats' },
          { title: 'Halal', desc: 'Halal burgers and chicken' }
        ]
      },
      gallery: { sticker: 'Gallery', title: 'Eye candy, on a', plate: 'plate', view: 'View' },
      reviews: {
        sticker: 'Real Reviews', line1: 'They came hungry.', line2: 'Left amazed.',
        google: 'on Google Reviews', seeAll: 'See all reviews',
        items: [
          'Original fire chicken and the food so fresh. At midnight when all restaurants were closed, it was like a beam of light in the night.',
          'Best place in town — super friendly staff and very filling for the price. I came here 3 times. Highly recommended!',
          'Very convenient and very kids/family friendly. Food is also good.',
          'Great halal chicken burger, clean outdoor space, and open late when you need it most.',
          'Simple counter-serve spot with honest portions and fair prices. Perfect fast food in Nice.',
          'Fresh food, kind service and nice prices. The cheeseburger and fries are my go-to.'
        ]
      },
      contact: {
        sticker: 'Visit Us', title: 'Come', hi: 'say hi',
        callUs: 'Call us', callSub: 'For orders & info', hours: 'Hours',
        delivery: 'Uber Eats', deliverySub: 'Burger Avenue', pickup: 'Pickup',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      footer: {
        hungry: 'Hungry yet?', hungrySub: 'Order in 2 clicks. Delivered hot. Or come grab it.',
        delivery: 'Order · Uber Eats', collect: 'View menu',
        desc: '🍔 Isla Burger — burgers, chicken wings and fries in a friendly counter-serve spot with outdoor tables, 7 Rue d\'Italie, Nice.',
        menuTitle: 'Menu', contactTitle: 'Contact',
        rights: '©2026 Isla Burger · 7 Rue d\'Italie, Nice · All rights reserved',
        made: 'Made with', madeIn: 'in Nice, France'
      },
      cart: {
        title: 'Your basket', items: 'items', item: 'item',
        empty: 'Empty plate', emptySub: 'Add some delicious bites to start.',
        total: 'Total', checkout: 'Checkout on Uber Eats'
      }
    },
    IT: {
      nav: { home: 'Home', menu: 'Menu', about: 'Storia', gallery: 'Galleria', visit: 'Contatti', orderNow: 'Ordina', orderVia: 'Uber Eats' },
      hero: {
        sticker: 'Nizza · Francia · Halal · €1–10',
        ourStory: 'La nostra storia',
        stars: '3,6 stelle · 649 recensioni',
        years: 'Recensioni Google',
        scroll: 'Scorri',
        pressure: 'Bancone', crispy: 'Servizio rapido', rated: 'Valutato', findUs: 'Trovaci', orderVia: 'su Uber Eats',
        slides: [
          { title: 'Burger & Ali', subtitle: 'Croccante. Fresco. Indimenticabile.', description: 'Burger e ali di pollo in un locale a bancone con tavoli all\'aperto, in Rue d\'Italie.', cta: 'Ordina ora' },
          { title: 'Aperto tardi', subtitle: 'Un raggio di luce a mezzanotte.', description: 'Quando tutti i ristoranti sono chiusi e hai fame, Isla Burger ti accoglie ancora a Nizza.', cta: 'Vedi menu' },
          { title: 'Halal & conveniente', subtitle: '€1–10 a persona.', description: 'Staff super cordiale, porzioni generose per il prezzo. Sul posto, asporto e consegna.', cta: 'Scopri' }
        ]
      },
      menu: {
        sticker: 'Il nostro menu', title: 'Scegli la tua', obsession: 'ossessione',
        subtitle: 'Preparato ogni giorno, servito fresco. Ogni piatto con la stessa passione di sempre.',
        add: 'Aggiungi', addedTitle: '🍔 Aggiunto al carrello!',
        categories: { 'best-sellers': 'Popolari', burgers: 'Burger', chicken: 'Pollo', wraps: 'Wrap', wings: 'Ali', sides: 'Contorni' }
      },
      about: {
        marquee: ['🍔 Isla Burger', 'Burger & ali', '100% Halal', '7 Rue d\'Italie, Nizza'],
        sticker: 'La nostra storia', title: 'Non scherziamo con il', flavor: 'sapore',
        p1: 'Da Isla Burger, burger e ali di pollo sono serviti in un locale a bancone con tavoli all\'aperto — perfetto per uno spuntino veloce, in famiglia o a tarda notte.',
        p2: 'Il nostro segreto? Ingredienti freschi, opzioni halal, servizio cordiale e prezzi onesti (€1–10). Sul posto, asporto o consegna via Uber Eats.',
        features: [
          { title: 'Sul posto', desc: 'Bancone con tavoli all\'aperto' },
          { title: 'Asporto', desc: 'Veloce e pratico' },
          { title: 'Consegna', desc: 'Ordina via Uber Eats' },
          { title: 'Halal', desc: 'Burger e pollo halal' }
        ]
      },
      gallery: { sticker: 'Galleria', title: 'Una delizia per gli', plate: 'occhi', view: 'Vedi' },
      reviews: {
        sticker: 'Recensioni vere', line1: 'Sono arrivati affamati.', line2: 'Sono partiti stupiti.',
        google: 'su Google Recensioni', seeAll: 'Vedi tutte le recensioni',
        items: [
          'Pollo fire originale e cibo così fresco. A mezzanotte quando tutto era chiuso, è stato come un raggio di luce nella notte.',
          'Il miglior posto in città — staff super cordiale e porzioni generose per il prezzo. Ci sono venuto 3 volte. Consigliato!',
          'Molto comodo e adatto alle famiglie con bambini. Anche il cibo è buono.',
          'Ottimo burger di pollo halal, terrazza pulita, aperto tardi quando serve.',
          'Locale a bancone semplice con porzioni oneste e prezzi giusti. Fast food perfetto a Nizza.',
          'Cibo fresco, servizio gentile e buoni prezzi. Cheeseburger e patatine sono i miei preferiti.'
        ]
      },
      contact: {
        sticker: 'Trovaci', title: 'Vieni a', hi: 'salutarci',
        callUs: 'Chiamaci', callSub: 'Ordini e informazioni', hours: 'Orari',
        delivery: 'Uber Eats', deliverySub: 'Burger Avenue', pickup: 'Ritiro',
        days: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']
      },
      footer: {
        hungry: 'Ancora fame?', hungrySub: 'Ordina in 2 clic. Consegnato caldo. O vieni a prenderlo.',
        delivery: 'Ordina · Uber Eats', collect: 'Vedi menu',
        desc: '🍔 Isla Burger — burger, ali di pollo e patatine in un locale a bancone con terrazza, 7 Rue d\'Italie, Nizza.',
        menuTitle: 'Menu', contactTitle: 'Contatti',
        rights: '©2026 Isla Burger · 7 Rue d\'Italie, Nizza · Tutti i diritti riservati',
        made: 'Fatto con', madeIn: 'a Nizza, Francia'
      },
      cart: {
        title: 'Il tuo carrello', items: 'articoli', item: 'articolo',
        empty: 'Piatto vuoto', emptySub: 'Aggiungi qualche boccone delizioso per iniziare.',
        total: 'Totale', checkout: 'Paga su Uber Eats'
      }
    },
    ES: {
      nav: { home: 'Inicio', menu: 'Menú', about: 'Historia', gallery: 'Galería', visit: 'Contacto', orderNow: 'Pedir', orderVia: 'Uber Eats' },
      hero: {
        sticker: 'Niza · Francia · Halal · €1–10',
        ourStory: 'Nuestra historia',
        stars: '3,6 estrellas · 649 opiniones',
        years: 'Opiniones Google',
        scroll: 'Desplazar',
        pressure: 'Mostrador', crispy: 'Servicio rápido', rated: 'Valorado', findUs: 'Encuéntranos', orderVia: 'en Uber Eats',
        slides: [
          { title: 'Burgers y Alitas', subtitle: 'Crujiente. Fresco. Inolvidable.', description: 'Burgers y alitas de pollo en un local de mostrador con mesas al aire libre, en Rue d\'Italie.', cta: 'Pedir ahora' },
          { title: 'Abierto tarde', subtitle: 'Un rayo de luz a medianoche.', description: 'Cuando todos los restaurantes están cerrados y tienes hambre, Isla Burger sigue sirviendo comida halal fresca en Niza.', cta: 'Ver menú' },
          { title: 'Halal y asequible', subtitle: '€1–10 por persona.', description: 'Personal súper amable, muy abundante para el precio. Comer aquí, para llevar y entrega a domicilio.', cta: 'Descubrir' }
        ]
      },
      menu: {
        sticker: 'Nuestro menú', title: 'Elige tu', obsession: 'obsesión',
        subtitle: 'Hecho cada día, servido fresco. Cada plato con la misma pasión del primer día.',
        add: 'Añadir', addedTitle: '🍔 ¡Añadido al carrito!',
        categories: { 'best-sellers': 'Populares', burgers: 'Burgers', chicken: 'Pollo', wraps: 'Wraps', wings: 'Alitas', sides: 'Guarniciones' }
      },
      about: {
        marquee: ['🍔 Isla Burger', 'Burgers y alitas', '100% Halal', '7 Rue d\'Italie, Niza'],
        sticker: 'Nuestra historia', title: 'No jugamos con el', flavor: 'sabor',
        p1: 'En Isla Burger, burgers y alitas de pollo se sirven en un local de mostrador con mesas al aire libre — perfecto para un bocado rápido, en familia o de madrugada.',
        p2: '¿Nuestro secreto? Ingredientes frescos, opciones halal, servicio amable y precios honestos (€1–10). Comer aquí, para llevar o entrega vía Uber Eats.',
        features: [
          { title: 'Comer aquí', desc: 'Mostrador con mesas al aire libre' },
          { title: 'Para llevar', desc: 'Rápido y fácil' },
          { title: 'Entrega', desc: 'Pide vía Uber Eats' },
          { title: 'Halal', desc: 'Burgers y pollo halal' }
        ]
      },
      gallery: { sticker: 'Galería', title: 'Un festín para los', plate: 'ojos', view: 'Ver' },
      reviews: {
        sticker: 'Opiniones reales', line1: 'Llegaron con hambre.', line2: 'Se fueron asombrados.',
        google: 'en Google Reviews', seeAll: 'Ver todas las opiniones',
        items: [
          'Pollo fire original y comida tan fresca. A medianoche cuando todo estaba cerrado, fue como un rayo de luz en la noche.',
          'El mejor lugar de la ciudad — personal súper amable y muy abundante para el precio. Vine 3 veces. ¡Recomendado!',
          'Muy conveniente y muy apto para familias con niños. La comida también es buena.',
          'Gran burger de pollo halal, terraza limpia, abierto tarde cuando más lo necesitas.',
          'Local de mostrador simple con porciones honestas y precios justos. Fast food perfecto en Niza.',
          'Comida fresca, servicio amable y buenos precios. El cheeseburger y las patatas son mis favoritos.'
        ]
      },
      contact: {
        sticker: 'Visítanos', title: 'Ven a', hi: 'saludarnos',
        callUs: 'Llámanos', callSub: 'Pedidos e información', hours: 'Horario',
        delivery: 'Uber Eats', deliverySub: 'Burger Avenue', pickup: 'Recoger',
        days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
      },
      footer: {
        hungry: '¿Todavía con hambre?', hungrySub: 'Pide en 2 clics. Entregado caliente. O recógelo.',
        delivery: 'Pedir · Uber Eats', collect: 'Ver menú',
        desc: '🍔 Isla Burger — burgers, alitas de pollo y patatas en un local de mostrador con terraza, 7 Rue d\'Italie, Niza.',
        menuTitle: 'Menú', contactTitle: 'Contacto',
        rights: '©2026 Isla Burger · 7 Rue d\'Italie, Niza · Todos los derechos reservados',
        made: 'Hecho con', madeIn: 'en Niza, Francia'
      },
      cart: {
        title: 'Tu cesta', items: 'artículos', item: 'artículo',
        empty: 'Plato vacío', emptySub: 'Añade unos bocados deliciosos para empezar.',
        total: 'Total', checkout: 'Pagar en Uber Eats'
      }
    }
  };

  const menuItems = {
    FR: {
      bs1: { name: 'Frites', description: 'Frites dorées et croustillantes — l\'accompagnement parfait.', badge: b('POPULAR') },
      bs2: { name: 'Nuggets', description: 'Nuggets de poulet tendres et croustillants avec sauce au choix.', badge: b('POPULAR') },
      bs3: { name: 'Cheeseburger', description: 'Steak juteux, fromage fondu, garnitures fraîches dans un bun moelleux.', badge: b('BEST SELLER') },
      bs4: { name: 'Hamburger Halal', description: 'Burger halal classique — simple, honnête et savoureux.', badge: b('HALAL') },
      bg1: { name: 'Cheeseburger', description: 'Steak juteux, fromage fondu, salade, tomate et sauce.' },
      bg2: { name: 'Hamburger Halal', description: 'Steak 100 % halal avec garnitures classiques.' },
      bg3: { name: 'Double Cheeseburger', description: 'Deux steaks halal, double fromage, copieux et généreux.' },
      bg4: { name: 'Chicken Burger', description: 'Filet de poulet croustillant, salade fraîche et sauce maison.' },
      ch1: { name: 'Master Chef Poulet', description: 'Poulet grillé signature — tendre, assaisonné et généreusement servi.', badge: b('SIGNATURE') },
      ch2: { name: 'Steak de poulet, frites et salade', description: 'Steak de poulet grillé avec frites dorées et salade fraîche.' },
      ch3: { name: 'Fire Chicken', description: 'Poulet épicé original — frais, audacieux et inoubliable.', badge: b('HOT') },
      ch4: { name: 'Assiette poulet croustillant', description: 'Poulet frit croustillant avec frites — comfort food réussi.' },
      wr1: { name: 'Wrap poulet mozzarella sticks et frites', description: 'Wrap poulet avec mozzarella sticks, bien garni et servi avec frites.', badge: b('LOADED') },
      wr2: { name: 'Wrap poulet curry bien garni', description: 'Wrap poulet curry généreusement garni — plein de saveur.' },
      wr3: { name: 'Wrap poulet classique', description: 'Poulet grillé, légumes frais et sauce crémeuse.' },
      w1: { name: '6 ailes épicées', description: 'Ailes croustillantes enrobées de notre sauce épicée maison.' },
      w2: { name: 'Seau 12 ailes', description: 'Choisissez 2 sauces. À partager ou pas.', badge: b('SHARE') },
      w3: { name: 'Ailes BBQ', description: 'BBQ collant et sucré — serviettes incluses.' },
      w4: { name: 'Bouchées Buffalo', description: 'Morceaux sans os enrobés de sauce buffalo.' },
      s1: { name: 'Frites', description: 'Croustillantes dehors, moelleuses dedans.' },
      s2: { name: 'Nuggets (10)', description: 'Tendres, croustillants, addictifs. Avec votre sauce.' },
      s3: { name: 'Mozzarella Sticks', description: 'Bâtonnets de mozzarella dorés avec sauce.' },
      s4: { name: 'Oignons frits', description: 'Dorés, croustillants, trempés dans notre sauce maison.' }
    },
    EN: {
      bs1: { name: 'Frites', description: 'Golden, crispy French fries — the perfect side or snack.', badge: b('POPULAR') },
      bs2: { name: 'Nuggets', description: 'Tender, crispy chicken nuggets with your choice of sauce.', badge: b('POPULAR') },
      bs3: { name: 'Cheeseburger', description: 'Juicy beef patty, melted cheese, fresh toppings in a soft bun.', badge: b('BEST SELLER') },
      bs4: { name: 'Hamburger Halal', description: 'Classic halal burger — simple, honest, and full of flavor.', badge: b('HALAL') },
      bg1: { name: 'Cheeseburger', description: 'Juicy beef patty, melted cheese, fresh lettuce, tomato and sauce.' },
      bg2: { name: 'Hamburger Halal', description: '100% halal beef patty with classic toppings.' },
      bg3: { name: 'Double Cheeseburger', description: 'Two halal patties, double cheese, loaded and filling.' },
      bg4: { name: 'Chicken Burger', description: 'Crispy chicken fillet, fresh salad and house sauce in a brioche bun.' },
      ch1: { name: 'Master Chef Poulet', description: 'Signature grilled chicken plate — tender, seasoned and generously served.', badge: b('SIGNATURE') },
      ch2: { name: 'Chicken Steak with Fries and Salad', description: 'Grilled chicken steak with golden fries and a fresh side salad.' },
      ch3: { name: 'Fire Chicken', description: 'Original spicy fire chicken — fresh, bold and unforgettable.', badge: b('HOT') },
      ch4: { name: 'Crispy Chicken Plate', description: 'Crispy fried chicken with fries — comfort food done right.' },
      wr1: { name: 'Mozzarella Sticks Chicken Wrap and Fries', description: 'Chicken wrap with mozzarella sticks, loaded and served with fries.', badge: b('LOADED') },
      wr2: { name: 'Wrap Poulet Curry Bien Garni', description: 'Generously filled curry chicken wrap — bien garni, full of flavor.' },
      wr3: { name: 'Classic Chicken Wrap', description: 'Grilled chicken, fresh veggies and creamy sauce wrapped tight.' },
      w1: { name: '6 Hot Wings', description: 'Crispy chicken wings tossed in our house spicy glaze.' },
      w2: { name: '12 Wings Bucket', description: 'Choose 2 sauces. Share or keep them all.', badge: b('SHARE') },
      w3: { name: 'BBQ Glazed Wings', description: 'Sticky, sweet, finger-licking BBQ — napkins included.' },
      w4: { name: 'Buffalo Bites', description: 'Boneless tender bites tossed in buffalo glaze.' },
      s1: { name: 'Frites', description: 'Crispy outside, fluffy inside. The classic sidekick.' },
      s2: { name: 'Nuggets (10 pcs)', description: 'Tender, crispy, addictive. Served with your sauce.' },
      s3: { name: 'Mozzarella Sticks', description: 'Golden, stretchy mozzarella sticks with dipping sauce.' },
      s4: { name: 'Onion Rings', description: 'Golden, crunchy rings dunked in our house dip.' }
    },
    IT: {
      bs1: { name: 'Patatine fritte', description: 'Patatine dorate e croccanti — il contorno perfetto.', badge: b('POPULAR') },
      bs2: { name: 'Nuggets', description: 'Nuggets di pollo teneri e croccanti con salsa a scelta.', badge: b('POPULAR') },
      bs3: { name: 'Cheeseburger', description: 'Hamburger succoso, formaggio fuso, guarnizioni fresche.', badge: b('BEST SELLER') },
      bs4: { name: 'Hamburger Halal', description: 'Burger halal classico — semplice, onesto e saporito.', badge: b('HALAL') },
      bg1: { name: 'Cheeseburger', description: 'Hamburger succoso, formaggio fuso, lattuga, pomodoro e salsa.' },
      bg2: { name: 'Hamburger Halal', description: 'Hamburger 100% halal con guarnizioni classiche.' },
      bg3: { name: 'Double Cheeseburger', description: 'Due hamburger halal, doppio formaggio, abbondante.' },
      bg4: { name: 'Chicken Burger', description: 'Filetto di pollo croccante, insalata fresca e salsa della casa.' },
      ch1: { name: 'Master Chef Poulet', description: 'Piatto di pollo grigliato signature — tenero e generoso.', badge: b('SIGNATURE') },
      ch2: { name: 'Steak di pollo con patatine e insalata', description: 'Steak di pollo grigliato con patatine dorate e insalata fresca.' },
      ch3: { name: 'Fire Chicken', description: 'Pollo piccante originale — fresco, audace e indimenticabile.', badge: b('HOT') },
      ch4: { name: 'Piatto pollo croccante', description: 'Pollo fritto croccante con patatine — comfort food perfetto.' },
      wr1: { name: 'Wrap pollo mozzarella sticks e patatine', description: 'Wrap di pollo con mozzarella sticks, servito con patatine.', badge: b('LOADED') },
      wr2: { name: 'Wrap pollo curry bien garni', description: 'Wrap di pollo al curry generosamente farcito.' },
      wr3: { name: 'Wrap pollo classico', description: 'Pollo grigliato, verdure fresche e salsa cremosa.' },
      w1: { name: '6 ali piccanti', description: 'Ali croccanti con la nostra glassa piccante.' },
      w2: { name: 'Secchio 12 ali', description: 'Scegli 2 salse. Condividi o no.', badge: b('SHARE') },
      w3: { name: 'Ali BBQ', description: 'BBQ appiccicoso e dolce — tovaglioli inclusi.' },
      w4: { name: 'Bocconcini Buffalo', description: 'Bocconcini senza osso in glassa buffalo.' },
      s1: { name: 'Patatine fritte', description: 'Croccanti fuori, morbide dentro.' },
      s2: { name: 'Nuggets (10)', description: 'Teneri, croccanti, irresistibili. Con la tua salsa.' },
      s3: { name: 'Mozzarella Sticks', description: 'Bastoncini di mozzarella dorati con salsa.' },
      s4: { name: 'Anelli di cipolla', description: 'Dorati, croccanti, con la nostra salsa.' }
    },
    ES: {
      bs1: { name: 'Patatas fritas', description: 'Patatas doradas y crujientes — el acompañamiento perfecto.', badge: b('POPULAR') },
      bs2: { name: 'Nuggets', description: 'Nuggets de pollo tiernos y crujientes con salsa a elegir.', badge: b('POPULAR') },
      bs3: { name: 'Cheeseburger', description: 'Hamburguesa jugosa, queso fundido, toppings frescos.', badge: b('BEST SELLER') },
      bs4: { name: 'Hamburguesa Halal', description: 'Burger halal clásica — simple, honesta y sabrosa.', badge: b('HALAL') },
      bg1: { name: 'Cheeseburger', description: 'Hamburguesa jugosa, queso fundido, lechuga, tomate y salsa.' },
      bg2: { name: 'Hamburguesa Halal', description: 'Hamburguesa 100% halal con toppings clásicos.' },
      bg3: { name: 'Double Cheeseburger', description: 'Dos hamburguesas halal, doble queso, abundante.' },
      bg4: { name: 'Chicken Burger', description: 'Filete de pollo crujiente, ensalada fresca y salsa de la casa.' },
      ch1: { name: 'Master Chef Poulet', description: 'Plato de pollo a la parrilla signature — tierno y generoso.', badge: b('SIGNATURE') },
      ch2: { name: 'Steak de pollo con patatas y ensalada', description: 'Steak de pollo a la parrilla con patatas doradas y ensalada fresca.' },
      ch3: { name: 'Fire Chicken', description: 'Pollo picante original — fresco, audaz e inolvidable.', badge: b('HOT') },
      ch4: { name: 'Plato pollo crujiente', description: 'Pollo frito crujiente con patatas — comfort food perfecto.' },
      wr1: { name: 'Wrap pollo mozzarella sticks y patatas', description: 'Wrap de pollo con mozzarella sticks, servido con patatas.', badge: b('LOADED') },
      wr2: { name: 'Wrap pollo curry bien garni', description: 'Wrap de pollo al curry generosamente relleno.' },
      wr3: { name: 'Wrap pollo clásico', description: 'Pollo a la parrilla, verduras frescas y salsa cremosa.' },
      w1: { name: '6 alitas picantes', description: 'Alitas crujientes con nuestro glaseado picante.' },
      w2: { name: 'Cubo 12 alitas', description: 'Elige 2 salsas. Comparte o no.', badge: b('SHARE') },
      w3: { name: 'Alitas BBQ', description: 'BBQ pegajoso y dulce — servilletas incluidas.' },
      w4: { name: 'Bocados Buffalo', description: 'Bocados sin hueso en glaseado buffalo.' },
      s1: { name: 'Patatas fritas', description: 'Crujientes por fuera, esponjosas por dentro.' },
      s2: { name: 'Nuggets (10)', description: 'Tiernos, crujientes, adictivos. Con tu salsa.' },
      s3: { name: 'Mozzarella Sticks', description: 'Palitos de mozzarella dorados con salsa.' },
      s4: { name: 'Aros de cebolla', description: 'Dorados, crujientes, con nuestra salsa de la casa.' }
    }
  };

  const base = texts[code];
  return {
    ...base,
    brandTagline: tagline,
    menuItems: menuItems[code]
  };
}

export const translations = {
  FR: buildLang('FR'),
  EN: buildLang('EN'),
  IT: buildLang('IT'),
  ES: buildLang('ES')
};

/** Merge base mock menu item with localized strings */
export function localizeMenuItem(item, t) {
  const loc = t.menuItems?.[item.id];
  if (!loc) return item;
  return {
    ...item,
    name: loc.name ?? item.name,
    description: loc.description ?? item.description,
    ...(loc.badge ? { badge: loc.badge } : {})
  };
}
