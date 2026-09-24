const PHONE_NUMBER = '526221727191';
const ADDRESS_TEXT = 'Plaza del Mar, Col Miramar Guaymas, Son';
const MAP_URL = 'https://maps.app.goo.gl/ZG3u5W4pVrV2Nu2w7';
const MAP_EMBED_URL = MAP_URL;
const menu = [
  { category: 'Favoritos Mareta', items: [
    ['Bowl Mareta', 'Arroz, salmón, mango, edamames, aguacate y aderezo ponzu.', '$189', 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', 'Más pedido'],
    ['Poke Mar Abierto', 'Quinoa, atún, piña, pepino, aguacate y chipotle.', '$179', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85', 'Fresco'],
    ['Bowl Pollo Grill', 'Espinaca, pollo grill, champiñones, elote y ajo-cebolla.', '$159', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85', 'Nuevo'],
  ] },
  { category: 'Arma tu bowl', items: [
    ['Bowl personalizado', 'Base + proteína + 4 toppings + aderezo + crujiente.', '$149', 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85', 'Tu manera'],
    ['Poke personalizado', 'Combina bases y crea una mezcla tan única como tú.', '$169', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85', 'A tu gusto'],
  ] },
  { category: 'Snacks & extras', items: [
    ['Edamames', 'Con limón, chile y sal de mar.', '$69', 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85', ''],
    ['Extra proteína', 'Atún, salmón, marlín ahumado o pollo grill.', '+$49', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85', ''],
  ] },
];

const sortIngredients = (items) => [...items].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
const bases = sortIngredients(['Arroz', 'Espinaca', 'Lechuga', 'Pepino', 'Quinoa']);
const proteins = sortIngredients(['Atún', 'Salmón', 'Marlín ahumado', 'Pollo grill', 'Pollo encacahuatado', 'Tampico', 'Papada']);
const toppings = sortIngredients(['Pepino', 'Zanahoria', 'Piña', 'Mango', 'Cebolla morada', 'Edamames', 'Tomate cherry', 'Elote amarillo', 'Champiñones', 'Brócoli', 'Cebollín', 'Betabel', 'Aguacate', 'Philadelphia', 'Arándanos', 'Quinoa', 'Chile güero', 'Toreado', 'Espinaca', 'Lechuga']);
const dressings = sortIngredients(['Chipotle', 'Serrano y cebolla tatemada', 'Ajo y cebolla', 'Habanero', 'Ponzu']);
const crunch = sortIngredients(['Betabel crispy', 'Cebolla crispy', 'Coco tostado', 'Crutones', 'Jalapeño crispy']);
const spritePositions = {
  bases: { Arroz: 0, Espinaca: 1, Lechuga: 2, Pepino: 3, Quinoa: 4 },
  proteins: { Atún: 0, Salmón: 1, 'Marlín ahumado': 2, 'Pollo grill': 3, 'Pollo encacahuatado': 4, Tampico: 5, Papada: 6 },
  toppings: { Pepino: 0, Zanahoria: 1, Piña: 2, Mango: 3, 'Cebolla morada': 4, Edamames: 5, 'Tomate cherry': 6, 'Elote amarillo': 7, Champiñones: 8, Brócoli: 9, Cebollín: 10, Betabel: 11, Aguacate: 12, Philadelphia: 13, Arándanos: 14, Quinoa: 15, 'Chile güero': 16, Toreado: 16, Espinaca: 17, Lechuga: 17 },
  dressings: { Chipotle: 0, 'Serrano y cebolla tatemada': 1, 'Ajo y cebolla': 2, Habanero: 3, Ponzu: 4 },
  crunch: { 'Cebolla crispy': 0, 'Betabel crispy': 1, Crutones: 2, 'Jalapeño crispy': 3, 'Coco tostado': 4 },
};

const translations = {
  es: {
    nav: ['Menú', 'Arma tu bowl', 'Visítanos', 'Instagram ↗'], order: '☏ Pedir ahora', langButton: 'EN',
    heroEyebrow: 'Sabor fresco · Guaymas, Sonora', heroTitle: 'Tu bowl.<br><em>Tus reglas.</em>', heroText: 'Arma una mezcla deliciosa con ingredientes frescos, sabor de mar y el toque que se te antoje.', heroOrder: '☏ Pedir por WhatsApp →', menuLink: 'Ver menú ↓', builderEyebrow: 'Hazlo muy tú', builderText: 'Elige tus favoritos y descubre una combinación hecha a tu medida.', menuEyebrow: 'Para cada antojo', menuTitle: 'Lo que se te antoja', experienceEyebrow: 'Mareta es más que un bowl', experienceTitle: 'Una pausa con sabor a playa.', reviewsEyebrow: 'Lo dicen nuestros clientes', reviewsTitle: 'Buen sabor, buena vibra.', visitEyebrow: 'Nos vemos en Guaymas', visitTitle: 'Ven por tu mezcla.', pickup: '☏ Ordene y recoja', pokeEyebrow: 'Para los curiosos', pokeTitle: '¿Qué es un poke?', pokeButton: 'Arma el tuyo →', next: 'Siguiente →', choose: ['Elige tu base', 'Elige tu proteína', 'Agrega tus toppings', 'Elige tus aderezos'], instructions: ['Puedes combinar varias bases.', 'Elige la proteína principal de tu bowl.', 'Elige hasta 4 toppings.', 'Puedes combinar todos los aderezos que quieras.'],
  },
  en: {
    nav: ['Menu', 'Build your bowl', 'Visit us', 'Instagram ↗'], order: '☏ Order now', langButton: 'ES',
    heroEyebrow: 'Fresh flavor · Guaymas, Sonora', heroTitle: 'Your bowl.<br><em>Your rules.</em>', heroText: 'Build a delicious mix with fresh ingredients, ocean flavor and your favorite finishing touches.', heroOrder: '☏ Order on WhatsApp →', menuLink: 'View menu ↓', builderEyebrow: 'Make it yours', builderText: 'Choose your favorites and create a combination made just for you.', menuEyebrow: 'For every craving', menuTitle: 'What are you craving?', experienceEyebrow: 'Mareta is more than a bowl', experienceTitle: 'A break with beach flavor.', reviewsEyebrow: 'What our guests say', reviewsTitle: 'Good flavor, good vibes.', visitEyebrow: 'See you in Guaymas', visitTitle: 'Come build your mix.', pickup: '☏ Order and pick up', pokeEyebrow: 'For the curious', pokeTitle: 'What is a poke?', pokeButton: 'Build yours →', next: 'Next →', choose: ['Choose your base', 'Choose your protein', 'Add your toppings', 'Choose your dressings'], instructions: ['You can combine multiple bases.', 'Choose the main protein for your bowl.', 'Choose up to 4 toppings.', 'Combine as many dressings as you like.'],
  },
};

const menuEnglish = {
  'Bowl Mareta': ['Mareta Bowl', 'Rice, salmon, mango, edamame, avocado and ponzu dressing.'], 'Poke Mar Abierto': ['Open Sea Poke', 'Quinoa, tuna, pineapple, cucumber, avocado and chipotle.'], 'Bowl Pollo Grill': ['Grilled Chicken Bowl', 'Spinach, grilled chicken, mushrooms, corn and garlic-onion dressing.'], 'Bowl personalizado': ['Build-your-own bowl', 'Base + protein + 4 toppings + dressing + crunch.'], 'Poke personalizado': ['Build-your-own poke', 'Combine bases and create a mix as unique as you are.'], Edamames: ['Edamame', 'With lime, chili and sea salt.'], 'Extra proteína': ['Extra protein', 'Tuna, salmon, smoked marlin or grilled chicken.'],
};

const ingredientEnglish = {
  Arroz: 'Rice', Espinaca: 'Spinach', Lechuga: 'Lettuce', Pepino: 'Cucumber', Quinoa: 'Quinoa', Atún: 'Tuna', Salmón: 'Salmon', 'Marlín ahumado': 'Smoked marlin', 'Pollo grill': 'Grilled chicken', 'Pollo encacahuatado': 'Peanut chicken', Tampico: 'Tampico', Papada: 'Pork jowl', Zanahoria: 'Carrot', Piña: 'Pineapple', Mango: 'Mango', 'Cebolla morada': 'Red onion', Edamames: 'Edamame', 'Tomate cherry': 'Cherry tomato', 'Elote amarillo': 'Sweet corn', Champiñones: 'Mushrooms', Brócoli: 'Broccoli', Cebollín: 'Green onion', Betabel: 'Beet', Aguacate: 'Avocado', Philadelphia: 'Cream cheese', Arándanos: 'Cranberries', 'Chile güero': 'Yellow chili', Toreado: 'Toreado pepper', 'Betabel crispy': 'Crispy beet', 'Cebolla crispy': 'Crispy onion', 'Coco tostado': 'Toasted coconut', Crutones: 'Croutons', 'Jalapeño crispy': 'Crispy jalapeño', Chipotle: 'Chipotle', 'Serrano y cebolla tatemada': 'Serrano and charred onion', 'Ajo y cebolla': 'Garlic and onion', Habanero: 'Habanero', Ponzu: 'Ponzu',
};

const ingredientTone = (ingredient) => {
  const name = ingredient.toLowerCase();
  if (/atún|salmón|marlín|papada/.test(name)) return 'red';
  if (/pollo|tampico|chipotle|habanero|toreado|jalapeño|serrano/.test(name)) return 'orange';
  if (/cebolla|arándano|betabel/.test(name)) return 'purple';
  if (/pepino|espinaca|lechuga|brócoli|edamame|aguacate|cebollín/.test(name)) return 'green';
  if (/mango|piña|zanahoria|elote|coco/.test(name)) return 'yellow';
  if (/arroz|quinoa|crutón|ajo|philadelphia/.test(name)) return 'cream';
  return 'dark';
};

const spriteClass = (step, ingredient) => {
  const category = ['bases', 'proteins', 'toppings', 'dressings', 'crunch'][step];
  return `sprite-${category}-${spritePositions[category]?.[ingredient] ?? 0}`;
};

const uiCopy = {
  es: {
    navMenu: 'Menú', navBuilder: 'Arma tu bowl', navVisit: 'Visítanos', headerOrder: '☏ Pedir ahora', heroEyebrow: 'Sabor fresco · Guaymas, Sonora', heroTitle: 'Tu bowl.<br><em>Tus reglas.</em>', heroText: 'Arma una mezcla deliciosa con ingredientes frescos, sabor de mar y el toque que se te antoje.', heroOrder: '☏ Pedir por WhatsApp <span>→</span>', menuLink: 'Ver menú <span>↓</span>', heroMeta: 'Bowls hechos al momento', heroNote: 'Fresco<br><b>como el mar</b>', marquee: 'ATÚN FRESCO <span>✦</span> SALMÓN <span>✦</span> MANGO <span>✦</span> PONZU <span>✦</span> AJONJOLÍ <span>✦</span> ATÚN FRESCO <span>✦</span> SALMÓN', builderEyebrow: 'Hazlo muy tú', builderTitle: 'Arma tu bowl', builderText: 'Elige tus favoritos y descubre una combinación hecha a tu medida.', stepBase: 'Base', stepProtein: 'Proteína', stepToppings: 'Toppings', stepDressings: 'Aderezos', previewLabel: 'Tu combinación', previewHint: 'Elige toppings y aderezos', builderOrder: 'Ordenar esta idea →', menuEyebrow: 'Para cada antojo', menuTitle: 'Lo que se te antoja', menuQuestions: '¿Tienes dudas? Escríbenos <span>↗</span>', experienceEyebrow: 'Mareta es más que un bowl', experienceTitle: 'Una pausa con sabor a playa.', experienceText: 'Somos ese lugar al que llegas por un antojo y vuelves por la mezcla perfecta. Ingredientes frescos, combinaciones inesperadas y una vibra relajada para disfrutar Guaymas a tu manera.', experienceCaption: 'Hecho al momento<br><b>con sabor local</b>', experiencePoints: '<span>✦ Ingredientes frescos</span><span>✦ Preparado al momento</span><span>✦ Sabor que sí se siente</span>', directions: 'Cómo llegar →', reviewsEyebrow: 'Lo dicen nuestros clientes', reviewsTitle: 'Buen sabor, buena vibra.', reviewScore: 'Reseñas de clientes', review1: '“Fresco, rápido y delicioso. El bowl de salmón se volvió mi nuevo favorito.”', review2: '“Me encanta poder armarlo a mi gusto. Todo se siente súper fresco.”', review3: '“La combinación de mango con ponzu está increíble. 100% recomendado.”', reviewAuthor: '— Cliente Mareta', visitEyebrow: 'Nos vemos en Guaymas', visitTitle: 'Ven por tu mezcla.', locationLabel: 'Ubicación', locationName: 'Mareta Barra express · Guaymas, Sonora', locationButton: 'Ver en Google Maps →', ordersLabel: 'Pedidos', hoursLabel: 'Horario', hoursValue: 'Lunes a sábado · 11:00 AM — 8:30 PM', pickup: '☏ Ordene y recoja', pokeBadge: 'Descubre', pokeBadgeTitle: 'el<br>poke', pokeEyebrow: 'Para los curiosos', pokeTitle: '¿Qué es un poke?', pokeText1: 'El poke es un platillo de origen hawaiano que combina cubos de proteína fresca con una base, vegetales, aderezos y toppings. Es ligero, colorido y se arma al gusto de cada persona.', pokeText2: 'En Mareta lo llevamos a nuestra manera: eliges cada ingrediente, mezclas tus favoritos y creas un bowl lleno de sabor, textura y frescura.', pokePartBase: 'Base', pokePartBaseText: 'Arroz, quinoa o verdes.', pokePartProtein: 'Proteína', pokePartProteinText: 'Atún, salmón, marlín o pollo.', pokePartToppings: 'Toppings', pokePartToppingsText: 'Fruta, vegetales y extras.', pokePartTouch: 'Tu toque', pokePartTouchText: 'Aderezos y crujientes.', pokeButton: 'Arma el tuyo →', privacyTitle: 'Aviso de privacidad', privacyText: 'Placeholder informativo. Reemplaza este texto con el aviso de privacidad oficial de Mareta Barra express antes de publicar.', privacyLink: 'Aviso de privacidad', footerText: 'Tu bowl. Tus reglas.<br>Tu lugar en Guaymas.', footerCredit: 'Hecho con sabor en Guaymas', floatingWhatsapp: 'Pedir por WhatsApp',
  },
  en: {
    navMenu: 'Menu', navBuilder: 'Build your bowl', navVisit: 'Visit us', headerOrder: '☏ Order now', heroEyebrow: 'Fresh flavor · Guaymas, Sonora', heroTitle: 'Your bowl.<br><em>Your rules.</em>', heroText: 'Build a delicious mix with fresh ingredients, ocean flavor and your favorite finishing touches.', heroOrder: '☏ Order on WhatsApp <span>→</span>', menuLink: 'View menu <span>↓</span>', heroMeta: 'Bowls made to order', heroNote: 'Fresh<br><b>like the sea</b>', marquee: 'FRESH TUNA <span>✦</span> SALMON <span>✦</span> MANGO <span>✦</span> PONZU <span>✦</span> SESAME <span>✦</span> FRESH TUNA <span>✦</span> SALMON', builderEyebrow: 'Make it yours', builderTitle: 'Build your bowl', builderText: 'Choose your favorites and create a combination made just for you.', stepBase: 'Base', stepProtein: 'Protein', stepToppings: 'Toppings', stepDressings: 'Dressings', previewLabel: 'Your combination', previewHint: 'Choose toppings and dressings', builderOrder: 'Order this idea →', menuEyebrow: 'For every craving', menuTitle: 'What are you craving?', menuQuestions: 'Have questions? Message us <span>↗</span>', experienceEyebrow: 'Mareta is more than a bowl', experienceTitle: 'A break with beach flavor.', experienceText: 'We are the place you visit for a craving and return to for the perfect mix. Fresh ingredients, unexpected combinations and a relaxed vibe to enjoy Guaymas your way.', experienceCaption: 'Made to order<br><b>with local flavor</b>', experiencePoints: '<span>✦ Fresh ingredients</span><span>✦ Made to order</span><span>✦ Flavor you can feel</span>', directions: 'Get directions →', reviewsEyebrow: 'What our guests say', reviewsTitle: 'Good flavor, good vibes.', reviewScore: 'Guest reviews', review1: '“Fresh, fast and delicious. The salmon bowl became my new favorite.”', review2: '“I love being able to build it my way. Everything tastes so fresh.”', review3: '“The mango and ponzu combination is incredible. 100% recommended.”', reviewAuthor: '— Mareta guest', visitEyebrow: 'See you in Guaymas', visitTitle: 'Come build your mix.', locationLabel: 'Location', locationName: 'Mareta Barra express · Guaymas, Sonora', locationButton: 'View on Google Maps →', ordersLabel: 'Orders', hoursLabel: 'Hours', hoursValue: 'Monday to Saturday · 11:00 AM — 8:30 PM', pickup: '☏ Order and pick up', pokeBadge: 'Discover', pokeBadgeTitle: 'the<br>poke', pokeEyebrow: 'For the curious', pokeTitle: 'What is a poke?', pokeText1: 'Poke is a Hawaiian dish that combines cubes of fresh protein with a base, vegetables, dressings and toppings. It is light, colorful and built to each person’s taste.', pokeText2: 'At Mareta, we make it our own: choose every ingredient, mix your favorites and create a bowl full of flavor, texture and freshness.', pokePartBase: 'Base', pokePartBaseText: 'Rice, quinoa or greens.', pokePartProtein: 'Protein', pokePartProteinText: 'Tuna, salmon, marlin or chicken.', pokePartToppings: 'Toppings', pokePartToppingsText: 'Fruit, vegetables and extras.', pokePartTouch: 'Your touch', pokePartTouchText: 'Dressings and crunchy toppings.', pokeButton: 'Build yours →', privacyTitle: 'Privacy notice', privacyText: 'Placeholder. Replace this text with Mareta Barra express’s official privacy notice before publishing.', privacyLink: 'Privacy notice', footerText: 'Your bowl. Your rules.<br>Your place in Guaymas.', footerCredit: 'Made with flavor in Guaymas', floatingWhatsapp: 'Order on WhatsApp',
  },
};

let builderStep = 0;
let selectedBase = ['Arroz'];
let selectedProtein = 'Atún';
let selectedToppings = [];
let selectedDressings = ['Ponzu'];
let selectedCrunch = [];
let currentLang = 'es';

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const waLink = (message) => `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

function renderMenu(category = menu[0].category) {
  const tabs = $('.category-tabs'); const grid = $('.menu-grid');
  if (!tabs || !grid) return;
  const names = currentLang === 'en' ? { 'Favoritos Mareta': 'Mareta favorites', 'Arma tu bowl': 'Build your bowl', 'Snacks & extras': 'Snacks & extras' } : { 'Favoritos Mareta': 'Favoritos Mareta', 'Arma tu bowl': 'Arma tu bowl', 'Snacks & extras': 'Snacks & extras' };
  const activeGroup = menu.find((group) => group.category === category) || menu[0];
  tabs.innerHTML = menu.map((group) => `<button class="category ${group.category === activeGroup.category ? 'active' : ''}" type="button" role="tab" aria-selected="${group.category === activeGroup.category}" data-category="${group.category}">${names[group.category]}<span aria-hidden="true">→</span></button>`).join('');
  grid.innerHTML = activeGroup.items.map((item) => { const copy = currentLang === 'en' && menuEnglish[item[0]] ? menuEnglish[item[0]] : [item[0], item[1]]; const tag = item[4] ? `<span class="tag">${item[4]}</span>` : ''; return `<article class="menu-card"><div class="menu-image"><img src="${item[3]}" alt="${copy[0]}" loading="lazy" decoding="async">${tag}</div><div class="menu-card-body"><div><h3>${copy[0]}</h3><p>${copy[1]}</p></div><strong class="price">${item[2]}</strong></div></article>`; }).join('');
  $$('.category', tabs).forEach((button) => button.addEventListener('click', () => renderMenu(button.dataset.category)));
}

function renderBuilder() {
  const options = $('.builder-options');
  if (!options) return;
  const copy = translations[currentLang]; const values = [bases, proteins, toppings, dressings, crunch][builderStep]; const selected = [selectedBase, selectedProtein, selectedToppings, selectedDressings, selectedCrunch][builderStep]; const title = builderStep === 4 ? (currentLang === 'en' ? 'Choose your crunch' : 'Elige tu crujiente') : copy.choose[builderStep]; const instructions = builderStep === 4 ? (currentLang === 'en' ? 'Add texture with your favorite crunchy topping.' : 'Agrega textura con tu crujiente favorito.') : copy.instructions[builderStep]; const isSelected = (value) => Array.isArray(selected) ? selected.includes(value) : selected === value;
  options.innerHTML = `<h3>${title}</h3><p class="muted">${instructions}</p><div class="pills">${values.map((value) => { const label = currentLang === 'en' ? (ingredientEnglish[value] || value) : value; return `<button class="pill ingredient-option ${isSelected(value) ? 'selected' : ''}" type="button" aria-pressed="${isSelected(value)}" data-option="${value}"><span class="ingredient-thumb sprite ${spriteClass(builderStep, value)} tone-${ingredientTone(value)}" aria-hidden="true"></span><span class="ingredient-label">${label}</span><span class="pill-check" aria-hidden="true">${isSelected(value) ? '✓' : ''}</span></button>`; }).join('')}</div>${builderStep < 4 ? `<button class="next-step" type="button">${copy.next}</button>` : ''}`;
  $$('.pill', options).forEach((button) => button.addEventListener('click', () => selectIngredient(button.dataset.option)));
  $('.next-step', options)?.addEventListener('click', () => setBuilderStep(builderStep + 1));
  $('.bowl-count').textContent = `${selectedToppings.length}/4 toppings`;
  const translateIngredients = (items) => items.map((item) => currentLang === 'en' ? (ingredientEnglish[item] || item) : item).join(' · ');
  $('.bowl-preview strong').textContent = `${selectedBase.length ? translateIngredients(selectedBase).replaceAll(' · ', ' + ') : (currentLang === 'en' ? 'Choose a base' : 'Elige una base')} + ${currentLang === 'en' ? ingredientEnglish[selectedProtein] : selectedProtein}`;
  $('.bowl-preview small').textContent = `${selectedToppings.length ? translateIngredients(selectedToppings) : (currentLang === 'en' ? 'Choose your toppings' : 'Elige tus toppings favoritos')} · ${selectedDressings.length ? translateIngredients(selectedDressings) : (currentLang === 'en' ? 'No dressing' : 'Sin aderezo')} · ${selectedCrunch.length ? translateIngredients(selectedCrunch) : (currentLang === 'en' ? 'Choose your crunch' : 'Elige tu crujiente')}`;
  updateOrderLink();
}

function selectIngredient(value) {
  if (builderStep === 0) selectedBase = selectedBase.includes(value) ? selectedBase.filter((item) => item !== value) : [...selectedBase, value];
  if (builderStep === 1) selectedProtein = value;
  if (builderStep === 2) selectedToppings = selectedToppings.includes(value) ? selectedToppings.filter((item) => item !== value) : selectedToppings.length < 4 ? [...selectedToppings, value] : selectedToppings;
  if (builderStep === 3) selectedDressings = selectedDressings.includes(value) ? selectedDressings.filter((item) => item !== value) : [...selectedDressings, value];
  if (builderStep === 4) selectedCrunch = selectedCrunch.includes(value) ? selectedCrunch.filter((item) => item !== value) : [...selectedCrunch, value];
  renderBuilder();
}

function setBuilderStep(step) {
  builderStep = Math.max(0, Math.min(4, step));
  $$('.step').forEach((button) => { const active = Number(button.dataset.step) === builderStep; button.classList.toggle('active', active); button.setAttribute('aria-current', active ? 'step' : 'false'); });
  renderBuilder();
}

function updateOrderLink() {
  const message = [
    'Hola Mareta, quiero ordenar mi bowl personalizado:',
    `Bases: ${selectedBase.length ? selectedBase.join(', ') : 'Sin base seleccionada'}`,
    `Proteína: ${selectedProtein}`,
    `Toppings: ${selectedToppings.length ? selectedToppings.join(', ') : 'Ninguno'}`,
    `Aderezos: ${selectedDressings.length ? selectedDressings.join(', ') : 'Ninguno'}`,
    `Crujiente: ${selectedCrunch.length ? selectedCrunch.join(', ') : 'Ninguno'}`,
  ].join('\n');
  const orderLink = $('.bowl-preview .button'); if (orderLink) orderLink.href = waLink(message);
}

function normalizeWhatsAppLinks() {
  const defaultMessage = waLink('Hola Mareta, quiero hacer un pedido.');
  const questionMessage = waLink('Hola Mareta, tengo una duda.');
  $$('a[href*="wa.me/"]').forEach((link) => {
    if (link.matches('.bowl-preview .button')) return;
    link.href = link.closest('.menu-section') ? questionMessage : defaultMessage;
  });
}

function normalizeMapLinks() {
  $$('a[href*="maps.app.goo.gl"], a[href*="google.com/maps"]').forEach((link) => { link.href = MAP_URL; });
  const frame = $('.map-card iframe');
  if (frame) frame.src = MAP_EMBED_URL;
  setText('.location-name', ADDRESS_TEXT);
}

function setText(selector, value, html = false) { const node = $(selector); if (!node) return; if (html) node.innerHTML = value; else node.textContent = value; }

function applyLanguage(lang) {
  currentLang = lang; const copy = translations[lang]; document.documentElement.lang = lang;
  try { localStorage.setItem('mareta-language', lang); } catch { /* File previews may not expose storage. */ }
  const ui = uiCopy[lang];
  $$('.nav a').forEach((link, index) => { if (copy.nav[index]) link.textContent = copy.nav[index]; });
  setText('.header-cta', copy.order); setText('.hero .eyebrow', copy.heroEyebrow); setText('.hero h1', copy.heroTitle, true); setText('.hero-copy > p', copy.heroText); setText('.hero-actions .button', copy.heroOrder); setText('.hero-actions .text-link', copy.menuLink); setText('.builder .eyebrow', copy.builderEyebrow); setText('.builder .section-heading > p', copy.builderText); setText('.menu-section .eyebrow', copy.menuEyebrow); setText('.menu-section h2', copy.menuTitle); setText('.experience-copy .eyebrow', copy.experienceEyebrow); setText('.experience-copy h2', copy.experienceTitle); setText('.reviews .eyebrow', copy.reviewsEyebrow); setText('.reviews h2', copy.reviewsTitle); setText('.visit-copy .eyebrow', copy.visitEyebrow); setText('.visit-copy h2', copy.visitTitle); setText('.visit-copy > .button', copy.pickup); setText('.poke-copy .eyebrow', copy.pokeEyebrow); setText('.poke-copy h2', copy.pokeTitle); setText('.poke-copy .button', copy.pokeButton);
  setText('.hero-meta', lang === 'en' ? '<strong>4.9</strong> ★★★★★ &nbsp; Bowls made to order' : '<strong>4.9</strong> ★★★★★ &nbsp; Bowls hechos al momento', true); setText('.marquee div', lang === 'en' ? 'FRESH TUNA <span>✦</span> SALMON <span>✦</span> MANGO <span>✦</span> PONZU <span>✦</span> SESAME <span>✦</span> FRESH TUNA <span>✦</span> SALMON' : 'ATÚN FRESCO <span>✦</span> SALMÓN <span>✦</span> MANGO <span>✦</span> PONZU <span>✦</span> AJONJOLÍ <span>✦</span> ATÚN FRESCO <span>✦</span> SALMÓN', true);
  setText('.experience-copy > p', lang === 'en' ? 'We are the place you visit for a craving and return to for the perfect mix. Fresh ingredients, unexpected combinations and a relaxed vibe to enjoy Guaymas your way.' : 'Somos ese lugar al que llegas por un antojo y vuelves por la mezcla perfecta. Ingredientes frescos, combinaciones inesperadas y una vibra relajada para disfrutar Guaymas a tu manera.');
  setText('.experience-points', lang === 'en' ? '<span>✦ Fresh ingredients</span><span>✦ Made to order</span><span>✦ Flavor you can feel</span>' : '<span>✦ Ingredientes frescos</span><span>✦ Preparado al momento</span><span>✦ Sabor que sí se siente</span>', true);
  const reviews = lang === 'en' ? ['“Fresh, fast and delicious. The salmon bowl became my new favorite.”', '“I love being able to build it my way. Everything tastes so fresh.”', '“The mango and ponzu combination is incredible. 100% recommended.”'] : ['“Fresco, rápido y delicioso. El bowl de salmón se volvió mi nuevo favorito.”', '“Me encanta poder armarlo a mi gusto. Todo se siente súper fresco.”', '“La combinación de mango con ponzu está increíble. 100% recomendado.”']; $$('.review-grid blockquote p').forEach((node, index) => { node.textContent = reviews[index]; });
  setText('.map-label small', 'Guaymas, Sonora ↗'); setText('#lang-toggle', copy.langButton); $('#lang-toggle')?.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés');
  $$('[data-i18n]').forEach((node) => { const value = ui[node.dataset.i18n]; if (value !== undefined) node.textContent = value; });
  $$('[data-i18n-html]').forEach((node) => { const value = ui[node.dataset.i18nHtml]; if (value !== undefined) node.innerHTML = value; });
  const crunchStep = $('.step[data-step="4"] .step-label');
  if (crunchStep) crunchStep.textContent = lang === 'en' ? 'Crunch' : 'Crujiente';
  const heroCta = $('.hero-actions .button');
  if (heroCta) { heroCta.textContent = currentLang === 'en' ? 'Build yours →' : 'Arma el tuyo →'; heroCta.href = '#arma'; heroCta.removeAttribute('target'); heroCta.removeAttribute('rel'); }
  normalizeWhatsAppLinks();
  normalizeMapLinks();
  renderMenu(); renderBuilder();
}

function init() {
  let savedLanguage = 'es'; try { savedLanguage = localStorage.getItem('mareta-language') === 'en' ? 'en' : 'es'; } catch { /* Ignore unavailable storage. */ }
  const builderSteps = $('.builder-steps');
  if (builderSteps && !$('.step[data-step="4"]', builderSteps)) builderSteps.insertAdjacentHTML('beforeend', '<button class="step" type="button" data-step="4"><span>05</span><span class="step-label">Crujiente</span></button>');
  $$('.step').forEach((button) => button.addEventListener('click', () => setBuilderStep(Number(button.dataset.step))));
  const menuToggle = $('.menu-toggle'); const nav = $('.nav');
  if (nav) nav.id = 'primary-nav';
  if (menuToggle) menuToggle.setAttribute('aria-controls', 'primary-nav');
  menuToggle?.addEventListener('click', () => { const open = nav?.classList.toggle('open') ?? false; menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
  $$('.nav a').forEach((link) => link.addEventListener('click', () => { nav?.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false'); }));
  $('#lang-toggle')?.addEventListener('click', () => applyLanguage(currentLang === 'es' ? 'en' : 'es'));
  setBuilderStep(0); applyLanguage(savedLanguage);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
