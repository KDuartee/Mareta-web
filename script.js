const PHONE_NUMBER = '526221727191';
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

let builderStep = 0;
let selectedBase = ['Arroz'];
let selectedProtein = 'Atún';
let selectedToppings = [];
let selectedDressings = ['Ponzu'];
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
  const copy = translations[currentLang]; const values = [bases, proteins, toppings, dressings][builderStep]; const selected = [selectedBase, selectedProtein, selectedToppings, selectedDressings][builderStep]; const isSelected = (value) => Array.isArray(selected) ? selected.includes(value) : selected === value;
  options.innerHTML = `<h3>${copy.choose[builderStep]}</h3><p class="muted">${copy.instructions[builderStep]}</p><div class="pills">${values.map((value) => `<button class="pill ${isSelected(value) ? 'selected' : ''}" type="button" aria-pressed="${isSelected(value)}" data-option="${value}">${value}<span aria-hidden="true">${isSelected(value) ? '✓' : '+'}</span></button>`).join('')}</div>${builderStep < 3 ? `<button class="next-step" type="button">${copy.next}</button>` : ''}`;
  $$('.pill', options).forEach((button) => button.addEventListener('click', () => selectIngredient(button.dataset.option)));
  $('.next-step', options)?.addEventListener('click', () => setBuilderStep(builderStep + 1));
  $('.bowl-count').textContent = `${selectedToppings.length}/4 toppings`;
  $('.bowl-preview strong').textContent = `${selectedBase.length ? selectedBase.join(' + ') : (currentLang === 'en' ? 'Choose a base' : 'Elige una base')} + ${selectedProtein}`;
  $('.bowl-preview small').textContent = `${selectedToppings.length ? selectedToppings.join(' · ') : (currentLang === 'en' ? 'Choose your toppings' : 'Elige tus toppings favoritos')} · ${selectedDressings.length ? selectedDressings.join(' · ') : (currentLang === 'en' ? 'No dressing' : 'Sin aderezo')}`;
  updateOrderLink();
}

function selectIngredient(value) {
  if (builderStep === 0) selectedBase = selectedBase.includes(value) ? selectedBase.filter((item) => item !== value) : [...selectedBase, value];
  if (builderStep === 1) selectedProtein = value;
  if (builderStep === 2) selectedToppings = selectedToppings.includes(value) ? selectedToppings.filter((item) => item !== value) : selectedToppings.length < 4 ? [...selectedToppings, value] : selectedToppings;
  if (builderStep === 3) selectedDressings = selectedDressings.includes(value) ? selectedDressings.filter((item) => item !== value) : [...selectedDressings, value];
  renderBuilder();
}

function setBuilderStep(step) {
  builderStep = Math.max(0, Math.min(3, step));
  $$('.step').forEach((button) => { const active = Number(button.dataset.step) === builderStep; button.classList.toggle('active', active); button.setAttribute('aria-current', active ? 'step' : 'false'); });
  renderBuilder();
}

function updateOrderLink() {
  const english = currentLang === 'en';
  const message = [english ? 'Hi Mareta 🌊, I would like to order my custom bowl:' : 'Hola Mareta 🌊, quiero ordenar mi bowl personalizado:', `${english ? 'Bases' : 'Bases'}: ${selectedBase.length ? selectedBase.join(', ') : (english ? 'None selected' : 'Sin base seleccionada')}`, `${english ? 'Protein' : 'Proteína'}: ${selectedProtein}`, `${english ? 'Toppings' : 'Toppings'}: ${selectedToppings.length ? selectedToppings.join(', ') : (english ? 'None' : 'Ninguno')}`, `${english ? 'Dressings' : 'Aderezos'}: ${selectedDressings.length ? selectedDressings.join(', ') : (english ? 'None' : 'Ninguno')}`].join('\n');
  const orderLink = $('.bowl-preview .button'); if (orderLink) orderLink.href = waLink(message);
}

function setText(selector, value, html = false) { const node = $(selector); if (!node) return; if (html) node.innerHTML = value; else node.textContent = value; }

function applyLanguage(lang) {
  currentLang = lang; const copy = translations[lang]; document.documentElement.lang = lang;
  try { localStorage.setItem('mareta-language', lang); } catch { /* File previews may not expose storage. */ }
  $$('.nav a').forEach((link, index) => { if (copy.nav[index]) link.textContent = copy.nav[index]; });
  setText('.header-cta', copy.order); setText('.hero .eyebrow', copy.heroEyebrow); setText('.hero h1', copy.heroTitle, true); setText('.hero-copy > p', copy.heroText); setText('.hero-actions .button', copy.heroOrder); setText('.hero-actions .text-link', copy.menuLink); setText('.builder .eyebrow', copy.builderEyebrow); setText('.builder .section-heading > p', copy.builderText); setText('.menu-section .eyebrow', copy.menuEyebrow); setText('.menu-section h2', copy.menuTitle); setText('.experience-copy .eyebrow', copy.experienceEyebrow); setText('.experience-copy h2', copy.experienceTitle); setText('.reviews .eyebrow', copy.reviewsEyebrow); setText('.reviews h2', copy.reviewsTitle); setText('.visit-copy .eyebrow', copy.visitEyebrow); setText('.visit-copy h2', copy.visitTitle); setText('.visit-copy > .button', copy.pickup); setText('.poke-copy .eyebrow', copy.pokeEyebrow); setText('.poke-copy h2', copy.pokeTitle); setText('.poke-copy .button', copy.pokeButton);
  setText('.hero-meta', lang === 'en' ? '<strong>4.9</strong> ★★★★★ &nbsp; Bowls made to order' : '<strong>4.9</strong> ★★★★★ &nbsp; Bowls hechos al momento', true); setText('.marquee div', lang === 'en' ? 'FRESH TUNA <span>✦</span> SALMON <span>✦</span> MANGO <span>✦</span> PONZU <span>✦</span> SESAME <span>✦</span> FRESH TUNA <span>✦</span> SALMON' : 'ATÚN FRESCO <span>✦</span> SALMÓN <span>✦</span> MANGO <span>✦</span> PONZU <span>✦</span> AJONJOLÍ <span>✦</span> ATÚN FRESCO <span>✦</span> SALMÓN', true);
  setText('.experience-copy > p', lang === 'en' ? 'We are the place you visit for a craving and return to for the perfect mix. Fresh ingredients, unexpected combinations and a relaxed vibe to enjoy Guaymas your way.' : 'Somos ese lugar al que llegas por un antojo y vuelves por la mezcla perfecta. Ingredientes frescos, combinaciones inesperadas y una vibra relajada para disfrutar Guaymas a tu manera.');
  setText('.experience-points', lang === 'en' ? '<span>✦ Fresh ingredients</span><span>✦ Made to order</span><span>✦ Flavor you can feel</span>' : '<span>✦ Ingredientes frescos</span><span>✦ Preparado al momento</span><span>✦ Sabor que sí se siente</span>', true);
  const reviews = lang === 'en' ? ['“Fresh, fast and delicious. The salmon bowl became my new favorite.”', '“I love being able to build it my way. Everything tastes so fresh.”', '“The mango and ponzu combination is incredible. 100% recommended.”'] : ['“Fresco, rápido y delicioso. El bowl de salmón se volvió mi nuevo favorito.”', '“Me encanta poder armarlo a mi gusto. Todo se siente súper fresco.”', '“La combinación de mango con ponzu está increíble. 100% recomendado.”']; $$('.review-grid blockquote p').forEach((node, index) => { node.textContent = reviews[index]; });
  setText('.map-label small', 'Guaymas, Sonora ↗'); setText('#lang-toggle', copy.langButton); $('#lang-toggle')?.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'); renderMenu(); renderBuilder();
}

function init() {
  let savedLanguage = 'es'; try { savedLanguage = localStorage.getItem('mareta-language') === 'en' ? 'en' : 'es'; } catch { /* Ignore unavailable storage. */ }
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
