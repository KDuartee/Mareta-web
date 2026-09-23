const menu = [
  { category: 'Favoritos Mareta', items: [
    ['Bowl Mareta','Arroz, salmón, mango, edamames, aguacate y aderezo ponzu.','$189','https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85','Más pedido'],
    ['Poke Mar Abierto','Quinoa, atún, piña, pepino, aguacate y chipotle.','$179','https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85','Fresco'],
    ['Bowl Pollo Grill','Espinaca, pollo grill, champiñones, elote y ajo-cebolla.','$159','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85','Nuevo'] ]},
  { category: 'Arma tu bowl', items: [
    ['Bowl personalizado','Base + proteína + 4 toppings + aderezo + crujiente.','$149','https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85','Tu manera'],
    ['Poke personalizado','Combina bases y crea una mezcla tan única como tú.','$169','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85','A tu gusto'] ]},
  { category: 'Snacks & extras', items: [
    ['Edamames','Con limón, chile y sal de mar.','$69','https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85',''],
    ['Extra proteína','Atún, salmón, marlín ahumado o pollo grill.','+$49','https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85',''] ]}
];
const sortEs = function(a,b){ return a.localeCompare(b,'es',{sensitivity:'base'}); };
const bases = ['Arroz','Espinaca','Lechuga','Pepino','Quinoa'].sort(sortEs);
const proteins = ['Atún','Salmón','Marlín ahumado','Pollo grill','Pollo encacahuatado','Tampico','Papada'].sort(sortEs);
const toppings = ['Pepino','Zanahoria','Piña','Mango','Cebolla morada','Edamames','Tomate cherry','Elote amarillo','Champiñones','Brócoli','Cebollín','Betabel','Aguacate','Philadelphia','Arándanos','Quinoa','Chile güero','Toreado'].sort(sortEs);
const dressings = ['Chipotle','Serrano y cebolla tatemada','Ajo y cebolla','Habanero','Ponzu'].sort(sortEs);
let step = 0, selectedBase = ['Arroz'], selectedProtein = 'Atún', selectedToppings = [], selectedDressing = ['Ponzu'];
const tabs = document.querySelector('.category-tabs'), grid = document.querySelector('.menu-grid');
function renderMenu(category) {
  category = category || menu[0].category;
  tabs.innerHTML = menu.map(function(group){ return '<button class="category '+(group.category === category ? 'active' : '')+'" data-category="'+group.category+'">'+group.category+'<span>→</span></button>'; }).join('');
  const group = menu.find(function(item){ return item.category === category; });
  grid.innerHTML = group.items.map(function(item){ return '<article class="menu-card"><div class="menu-image"><img src="'+item[3]+'" alt="'+item[0]+'">'+(item[4] ? '<span class="tag">'+item[4]+'</span>' : '')+'</div><div class="menu-card-body"><div><h3>'+item[0]+'</h3><p>'+item[1]+'</p></div><strong class="price">'+item[2]+'</strong></div></article>'; }).join('');
  tabs.querySelectorAll('.category').forEach(function(button){ button.addEventListener('click', function(){ renderMenu(button.dataset.category); }); });
}
function renderBuilder() {
  const options = document.querySelector('.builder-options');
  const values = step === 0 ? bases : step === 1 ? proteins : step === 2 ? toppings : dressings;
  const title = step === 0 ? 'Elige tu base' : step === 1 ? 'Elige tu proteína' : step === 2 ? 'Agrega tus toppings' : 'Elige tu aderezo';
  const selected = step === 0 ? selectedBase : step === 1 ? selectedProtein : step === 2 ? selectedToppings : selectedDressing;
  const isSelected = function(item){ return Array.isArray(selected) ? selected.includes(item) : selected === item; };
  options.innerHTML = '<h3>'+title+'</h3><p class="muted">'+(step === 2 ? 'Elige hasta 4 toppings.' : step === 3 ? 'Puedes combinar todos los aderezos que quieras.' : step === 0 ? 'Puedes combinar varias bases.' : 'La parte más importante del bowl.')+'</p><div class="pills">'+values.map(function(item){ return '<button class="pill '+(isSelected(item) ? 'selected' : '')+'" data-option="'+item+'">'+item+'<span>'+(isSelected(item) ? '✓' : '+')+'</span></button>'; }).join('')+'</div>'+(step < 3 ? '<button class="next-step">Siguiente →</button>' : '');
  options.querySelectorAll('.pill').forEach(function(button){ button.addEventListener('click', function(){ const item = button.dataset.option; if(step === 0) selectedBase = selectedBase.includes(item) ? selectedBase.filter(function(x){return x !== item;}) : selectedBase.concat(item); else if(step === 1) selectedProtein = item; else if(step === 2 && selectedToppings.includes(item)) selectedToppings = selectedToppings.filter(function(x){return x !== item;}); else if(step === 2 && selectedToppings.length < 4) selectedToppings.push(item); else if(step === 3 && selectedDressing.includes(item)) selectedDressing = selectedDressing.filter(function(x){return x !== item;}); else if(step === 3) selectedDressing.push(item); renderBuilder(); }); });
  const next = options.querySelector('.next-step'); if(next) next.addEventListener('click', function(){ step++; setActiveStep(); renderBuilder(); });
  document.querySelector('.bowl-count').textContent = selectedToppings.length+'/4 toppings';
  document.querySelector('.bowl-preview strong').textContent = (selectedBase.length ? selectedBase.join(' + ') : 'Elige una base')+' + '+selectedProtein;
  document.querySelector('.bowl-preview small').textContent = (selectedToppings.length ? selectedToppings.join(' · ') : 'Elige tus toppings favoritos')+' · '+(selectedDressing.length ? selectedDressing.join(' · ') : 'Sin aderezo');
  updateOrderLink();
}
function setActiveStep(){ document.querySelectorAll('.step').forEach(function(item){ item.classList.toggle('active', Number(item.dataset.step) === step); }); }
function updateOrderLink(){
  const message = ['Hola Mareta 🌊, quiero ordenar mi bowl personalizado:','Bases: '+(selectedBase.length ? selectedBase.join(', ') : 'Sin base seleccionada'),'Proteína: '+selectedProtein,'Toppings: '+(selectedToppings.length ? selectedToppings.join(', ') : 'Ninguno'),'Aderezos: '+(selectedDressing.length ? selectedDressing.join(', ') : 'Ninguno')].join(String.fromCharCode(10));
  document.querySelector('.bowl-preview .button').href = 'https://wa.me/526221727191?text='+encodeURIComponent(message);
}
document.querySelectorAll('.step').forEach(function(item){ item.addEventListener('click', function(){ step = Number(item.dataset.step); setActiveStep(); renderBuilder(); }); });
document.querySelector('.menu-toggle').addEventListener('click', function(){ const nav = document.querySelector('.nav'); const open = nav.classList.toggle('open'); document.querySelector('.menu-toggle').setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav a').forEach(function(link){ link.addEventListener('click', function(){ document.querySelector('.nav').classList.remove('open'); }); });
renderMenu(); renderBuilder();
const locationInfo = document.querySelector('.visit-copy .info-row div');
if(locationInfo) locationInfo.innerHTML = '<strong>Ubicación</strong><span>Plaza del Mar · Col. Miramar<br><small>Guaymas, Sonora</small></span><a href="https://maps.app.goo.gl/GTLqwEfcvjtAbFo48" target="_blank" rel="noreferrer">Abrir en Google Maps →</a>';
