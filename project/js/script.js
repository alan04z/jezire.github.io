/* Safe animation setup: if GSAP fails to load (slow/blocked CDN), the site still shows everything */
(function(){
  try{
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduce && window.gsap && window.ScrollTrigger){
      gsap.registerPlugin(ScrollTrigger);
      document.documentElement.classList.add('gsap-ready');
    }
  }catch(e){ console.warn('Animations disabled:', e); }
})();

/* Phones / low-power devices: skip WebGL, heavy effects (prevents Safari "A problem repeatedly occurred" crashes) */
const LOW_POWER = (function(){
  try{
    var n = navigator;
    return window.innerWidth < 900 ||
      !!(n.hardwareConcurrency && n.hardwareConcurrency <= 4) ||
      !!(n.deviceMemory && n.deviceMemory <= 4) ||
      window.matchMedia('(pointer: coarse)').matches;
  }catch(e){ return true; }
})();
if(LOW_POWER){ var expSec = document.getElementById('experience'); if(expSec) expSec.style.display = 'none'; }

/* ============================================================
   EDIT ZONE — update your real business details here
   ============================================================ */
const SITE_CONFIG = {
  phoneKorekHref: "tel:+9647503256648",
  phoneKorekLabel: "Korek: 0750 325 6648",
  phoneKorek2Href: "tel:+9647503971877",
  phoneKorek2Label: "Korek: 0750 397 1877",
  phoneAsiacellHref: "tel:+9647733254848",
  phoneAsiacellLabel: "Asiacell: 0773 325 4848",
  email: "jeziraalkhair@gmail.com", // <-- your business email
  facebook: "https://www.facebook.com/share/19BbuXwRNA/?mibextid=wwXIfr",
  instagram: "https://instagram.com/jeziraalkhair.co",
};

// Apply config across the page
document.getElementById('phone-korek-link').href = SITE_CONFIG.phoneKorekHref;
document.getElementById('phone-korek-link').textContent = SITE_CONFIG.phoneKorekLabel;
document.getElementById('phone-korek2-link').href = SITE_CONFIG.phoneKorek2Href;
document.getElementById('phone-korek2-link').textContent = SITE_CONFIG.phoneKorek2Label;
document.getElementById('phone-asiacell-link').href = SITE_CONFIG.phoneAsiacellHref;
document.getElementById('phone-asiacell-link').textContent = SITE_CONFIG.phoneAsiacellLabel;
document.getElementById('foot-phone-korek').href = SITE_CONFIG.phoneKorekHref;
document.getElementById('foot-phone-korek').textContent = SITE_CONFIG.phoneKorekLabel;
document.getElementById('foot-phone-korek2').href = SITE_CONFIG.phoneKorek2Href;
document.getElementById('foot-phone-korek2').textContent = SITE_CONFIG.phoneKorek2Label;
document.getElementById('foot-phone-asiacell').href = SITE_CONFIG.phoneAsiacellHref;
document.getElementById('foot-phone-asiacell').textContent = SITE_CONFIG.phoneAsiacellLabel;
document.getElementById('email-label').textContent = SITE_CONFIG.email;
document.getElementById('email-link').href = 'mailto:' + SITE_CONFIG.email;
document.getElementById('foot-email').textContent = SITE_CONFIG.email;
document.getElementById('foot-email').href = 'mailto:' + SITE_CONFIG.email;
document.getElementById('fb-link').href = SITE_CONFIG.facebook;
document.getElementById('ig-link').href = SITE_CONFIG.instagram;
document.getElementById('foot-fb').href = SITE_CONFIG.facebook;
document.getElementById('foot-ig').href = SITE_CONFIG.instagram;

/* Real uploaded logo, embedded as data URIs (mark = icon only, full = icon + wordmark) */
const LOGO_MARK = "assets/images/logo-mark.png";
const LOGO_FULL = "assets/images/logo-full.png";
const STOREFRONT_PHOTO = "assets/images/storefront.jpg";
(function applyStorefrontPhoto(){
  const el = document.getElementById('about-storefront-photo');
  if(el) el.src = STOREFRONT_PHOTO;
})();
(function applyLogo(){
  const navMark = document.getElementById('nav-logo-mark');
  const footMark = document.getElementById('footer-logo-mark');
  const heroFull = document.getElementById('hero-logo-full');
  if(navMark) navMark.src = LOGO_MARK;
  if(footMark) footMark.src = LOGO_MARK;
  if(heroFull) heroFull.src = LOGO_FULL;
})();

/* ============================================================
   REAL PRODUCT PHOTOS — uploaded by the business owner.
   Add more keys here, then reference them from PRODUCTS below as: img: REAL_IMAGES.yourKey
   ============================================================ */
const REAL_IMAGES = {
  teekaPop: "assets/images/teeka-pop.jpg",
  teekaMarshPie: "assets/images/teeka-marsh-pie.jpg",
  chickpeas: "assets/images/chickpeas.jpg",
  redLentils: "assets/images/red-lentils.jpg",
  wizoFun: "assets/images/wizo-fun.jpg",
  mamuto: "assets/images/mamuto.jpg",
  popMaxGold: "assets/images/popmax-gold.jpg",
  damaRose: "assets/images/dama-rose.jpg",
  cocoJonas: "assets/images/coco-jonas.jpg",
  bissroll: "assets/images/bissroll.jpg",
  laVera: "assets/images/lavera.jpg",
  cozmoCono: "assets/images/cozmo-cono.jpg",
};

/* ============================================================
   PRODUCT DATA — add, remove or edit products here.
   Each product needs: id, category, name, origin, desc. img is optional
   (a real product photo); leave it out to use the default icon artwork.
   Categories must be one of: biscuits, sweets, food, snacks
   ============================================================ */
const PRODUCTS = [
  { id:1, category:'biscuits', name:'Mamuto Chocolate Cream Biscuits', origin:'Country of Origin', desc:'Cocoa biscuits filled with hazelnut cream and covered in chocolate, by Fooda Food.', img: REAL_IMAGES.mamuto },
  { id:101, category:'biscuits', name:'Dama Rose Biscuits', origin:'Country of Origin', desc:'Cream-filled sandwich biscuits, available in strawberry, chocolate and vanilla cream varieties.', img: REAL_IMAGES.damaRose },
  { id:102, category:'snacks', name:'Coco Jonas', origin:'Country of Origin', desc:'Coconut-flavoured bar with a soft milky filling, covered in a rich compound coating.', img: REAL_IMAGES.cocoJonas },
  { id:103, category:'biscuits', name:'Bissroll', origin:'Country of Origin', desc:'Swirled biscuit roll filled with rich cocoa cream, by Saida.', img: REAL_IMAGES.bissroll },
  { id:104, category:'biscuits', name:'LaVera Crunchy Tea Biscuits', origin:'Country of Origin', desc:'Crunchy sandwich tea biscuits, perfect alongside a hot cup of tea.', img: REAL_IMAGES.laVera },
  { id:105, category:'biscuits', name:'Cozmo Cono', origin:'Country of Origin', desc:'Cone-shaped biscuit treat topped with chocolate and colourful candy pieces, by Pyramids.', img: REAL_IMAGES.cozmoCono },
  { id:5, category:'sweets', name:'Teeka Pop XXXL Lollipop', origin:'Country of Origin', desc:'Extra-large lollipops in chocolate, orange, cola and mixed fruit flavours.', img: REAL_IMAGES.teekaPop },
  { id:7, category:'food', name:'PopMax Gold Popcorn Kernels', origin:'Turkey', desc:'Premium gourmet popping corn kernels by Bahar Gıda, sold in a 25kg bulk bag — makes light, fluffy popcorn.', img: REAL_IMAGES.popMaxGold },
  { id:8, category:'food', name:'Red Lentils', origin:'Country of Origin', desc:'Premium quality red lentils, cleaned and sorted — a kitchen staple for soups and stews.', img: REAL_IMAGES.redLentils },
  { id:9, category:'food', name:'Chickpeas', origin:'Country of Origin', desc:'Premium quality dried chickpeas, cleaned and sorted for cooking.', img: REAL_IMAGES.chickpeas },
  { id:10, category:'snacks', name:'Wizo Fun', origin:'Country of Origin', desc:'Fun character-shaped chocolate lollipop on a stick, by Fooda Food — a playful treat for kids.', img: REAL_IMAGES.wizoFun },
  { id:11, category:'snacks', name:'Teeka Marsh Pie — Strawberry', origin:'Country of Origin', desc:'Center-filled strawberry marshmallow pie, 24 pieces per box, by MO Group.', img: REAL_IMAGES.teekaMarshPie },
];

const CAT_LABEL = { biscuits:'Biscuits', sweets:'Sweets & Candy', food:'Food Products', snacks:'Snacks & Premium Goods' };

const CAT_ICON = {
  biscuits: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#E9C77A"/><circle cx="34" cy="40" r="6" fill="#8A5A2B"/><circle cx="60" cy="34" r="5" fill="#8A5A2B"/><circle cx="66" cy="58" r="5.5" fill="#8A5A2B"/><circle cx="40" cy="66" r="4.5" fill="#8A5A2B"/><circle cx="52" cy="58" r="4" fill="#8A5A2B"/></svg>`,
  sweets: `<svg viewBox="0 0 100 100"><polygon points="50,4 90,27 90,73 50,96 10,73 10,27" fill="#B33B2E"/><polygon points="50,20 76,34 76,66 50,80 24,66 24,34" fill="#E2833F"/><circle cx="50" cy="50" r="12" fill="#FBF3E3"/></svg>`,
  food: `<svg viewBox="0 0 100 100"><rect x="14" y="30" width="72" height="56" rx="10" fill="#6C8A57"/><rect x="14" y="30" width="72" height="16" rx="8" fill="#8AAE72"/><circle cx="50" cy="62" r="14" fill="#FBF3E3"/></svg>`,
  snacks: `<svg viewBox="0 0 100 100"><path d="M30 15 L70 15 L78 90 L22 90 Z" fill="#C79A44"/><path d="M30 15 L70 15 L67 40 L33 40 Z" fill="#A87A28"/><circle cx="50" cy="62" r="10" fill="#FBF3E3"/></svg>`,
};

/* -------------------- media helper (real photo vs icon artwork) -------------------- */
function mediaContent(p, imgClass){
  if(p.img) return `<img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async" class="${imgClass||''}">`;
  return CAT_ICON[p.category];
}
function mediaStyleAttr(p){
  return p.img ? '' : `background:${mediaBg(p.category)}`;
}

/* -------------------- render product grid -------------------- */
const prodGrid = document.getElementById('prod-grid');
function renderProducts(filter){
  prodGrid.innerHTML = '';
  const list = filter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.category===filter);
  list.forEach((p,i)=>{
    const card = document.createElement('div');
    card.className = 'prod-card card';
    card.innerHTML = `
      <div class="prod-media" style="${mediaStyleAttr(p)}">
        <span class="prod-origin">${p.origin}</span>
        ${mediaContent(p)}
      </div>
      <div class="prod-body">
        <div class="p-cat">${CAT_LABEL[p.category]}</div>
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <span class="view">View details →</span>
      </div>`;
    card.addEventListener('click', ()=>openModal(p));
    card.addEventListener('mousemove', tiltCard);
    card.addEventListener('mouseleave', resetTilt);
    prodGrid.appendChild(card);
    if(document.documentElement.classList.contains('gsap-ready') && !LOW_POWER){
      gsap.from(card, { opacity:0, y:30, duration:0.6, delay:i*0.04, scrollTrigger:{ trigger: card, start:'top 92%' } });
    }
  });
}
function mediaBg(cat){
  const map = {
    biscuits:'linear-gradient(160deg,#F2E4C8,#E9C77A)',
    sweets:'linear-gradient(160deg,#E2833F,#B33B2E)',
    food:'linear-gradient(160deg,#8AAE72,#6C8A57)',
    snacks:'linear-gradient(160deg,#C79A44,#A87A28)',
  };
  return map[cat];
}
function tiltCard(e){
  const r = this.getBoundingClientRect();
  const x = (e.clientX - r.left)/r.width - 0.5;
  const y = (e.clientY - r.top)/r.height - 0.5;
  this.style.transform = `translateY(-8px) rotateX(${y*-8}deg) rotateY(${x*10}deg)`;
}
function resetTilt(){ this.style.transform = ''; }
renderProducts('all');

document.querySelectorAll('.cat-tab[data-filter]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.cat-tab[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

/* -------------------- product modal -------------------- */
const modal = document.getElementById('product-modal');
function openModal(p){
  document.getElementById('modal-media').style.background = p.img ? '#20120A' : mediaBg(p.category);
  document.getElementById('modal-media').innerHTML = mediaContent(p);
  document.getElementById('modal-cat').textContent = CAT_LABEL[p.category];
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-origin').textContent = p.origin;
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){ modal.classList.remove('open'); document.body.style.overflow=''; }
document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });
document.getElementById('modal-contact-btn').addEventListener('click', closeModal);

/* -------------------- showcase track -------------------- */
const showcaseTrack = document.getElementById('showcase-track');
PRODUCTS.slice(0,8).forEach(p=>{
  const el = document.createElement('div');
  el.className = 'showcase-card';
  if(!p.img) el.style.background = mediaBg(p.category);
  el.innerHTML = `<div class="sc-bg">${mediaContent(p)}</div>${p.img ? '<div class="sc-scrim"></div>' : ''}<div class="sc-label">${p.name}<small>${CAT_LABEL[p.category]} · ${p.origin}</small></div>`;
  showcaseTrack.appendChild(el);
});

/* -------------------- gallery masonry -------------------- */
const masonry = document.getElementById('masonry');
function renderGallery(filter){
  masonry.innerHTML = '';
  const list = filter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.category===filter);
  list.forEach(p=>{
    const item = document.createElement('div');
    item.className = 'mas-item';
    if(!p.img) item.style.background = mediaBg(p.category);
    item.innerHTML = `<div class="mi-media" style="min-height:${180+Math.floor(Math.random()*90)}px;">${mediaContent(p)}</div><div class="mi-cap"><span>${p.name} — ${CAT_LABEL[p.category]}</span></div>`;
    item.addEventListener('click', ()=>openLightbox(p));
    masonry.appendChild(item);
  });
}
renderGallery('all');
document.querySelectorAll('.cat-tab[data-gfilter]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.cat-tab[data-gfilter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.gfilter);
  });
});

const lightbox = document.getElementById('lightbox');
function openLightbox(p){
  const media = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;border-radius:var(--radius-md);">`
    : CAT_ICON[p.category];
  document.getElementById('lb-content').innerHTML = `<div style="text-align:center;">${media}<h4 style="margin-top:18px;font-family:var(--font-display);font-size:1.3rem;">${p.name}</h4><p style="margin-top:6px;color:var(--text-soft);">${CAT_LABEL[p.category]} · ${p.origin}</p></div>`;
  lightbox.classList.add('open');
}
document.getElementById('lb-close').addEventListener('click', ()=>lightbox.classList.remove('open'));
lightbox.addEventListener('click', e=>{ if(e.target===lightbox) lightbox.classList.remove('open'); });

/* -------------------- nav scroll behavior -------------------- */
const navEl = document.getElementById('nav');
const navContactBtn = document.getElementById('nav-contact-btn');
window.addEventListener('scroll', ()=>{
  const sc = window.scrollY > 40;
  navEl.classList.toggle('scrolled', sc);
  navContactBtn.style.display = sc ? 'inline-flex' : 'none';
}, { passive:true });

/* -------------------- mobile menu -------------------- */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
burger.addEventListener('click', ()=>{
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  mobileMenu.setAttribute('aria-hidden', !open);
});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

/* -------------------- animated counters -------------------- */
const counters = document.querySelectorAll('.stat .num');
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = parseInt(el.dataset.count,10);
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = Math.max(1, target/40);
      const tick = ()=>{
        cur += step;
        if(cur >= target){ el.textContent = target + suffix; return; }
        el.textContent = Math.floor(cur) + suffix;
        requestAnimationFrame(tick);
      };
      tick();
      counterObserver.unobserve(el);
    }
  });
}, { threshold:0.6 });
counters.forEach(c=>counterObserver.observe(c));

/* -------------------- scroll reveals (GSAP) -------------------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(document.documentElement.classList.contains('gsap-ready')){
  document.querySelectorAll('.reveal').forEach((el)=>{
    gsap.to(el, {
      opacity:1, y:0, duration:0.9, ease:'power3.out',
      scrollTrigger:{ trigger:el, start:'top 88%' }
    });
  });
  // trade line draw animation
  document.querySelectorAll('.trade-line').forEach((line,i)=>{
    const len = line.getTotalLength ? line.getTotalLength() : 400;
    line.style.strokeDasharray = len;
    line.style.strokeDashoffset = len;
    gsap.to(line, {
      strokeDashoffset:0, duration:1.6, ease:'power2.inOut', delay:i*0.15,
      scrollTrigger:{ trigger:'#trade-svg', start:'top 80%' }
    });
  });
} else {
  document.querySelectorAll('.reveal').forEach(el=>{ el.style.opacity=1; el.style.transform='none'; });
}

/* -------------------- contact form (front-end only) -------------------- */
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const note = document.getElementById('form-note');
  note.classList.add('show');
  this.reset();
  // To receive real messages, connect this form to a service such as
  // Formspree, Getform, or your own backend endpoint, e.g.:
  // fetch('https://formspree.io/f/your-id', { method:'POST', body:new FormData(this), headers:{Accept:'application/json'} })
});

/* ============================================================
   THREE.JS — hero floating objects (wrapped safely; degrades to
   CSS-only floating icons if WebGL / Three.js is unavailable)
   ============================================================ */
(function initHeroScene(){
  try{
    if(reduceMotion || LOW_POWER || typeof THREE==='undefined') return;
    const canvas = document.getElementById('hero-canvas');
    const isSmall = window.innerWidth < 720;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
    camera.position.set(0,0,9);

    const group = new THREE.Group();
    scene.add(group);

    const colors = [0xC79A44,0xE2833F,0xB33B2E,0x6C8A57,0xF2E4C8];
    const count = isSmall ? 5 : 9;
    const geoms = [
      new THREE.TorusGeometry(0.55,0.2,16,32),
      new THREE.IcosahedronGeometry(0.6,0),
      new THREE.BoxGeometry(0.85,0.85,0.85),
      new THREE.SphereGeometry(0.55,20,20),
    ];
    const meshes = [];
    for(let i=0;i<count;i++){
      const geo = geoms[i%geoms.length];
      const mat = new THREE.MeshStandardMaterial({ color:colors[i%colors.length], roughness:0.4, metalness:0.15 });
      const m = new THREE.Mesh(geo, mat);
      m.position.set((Math.random()-0.5)*10,(Math.random()-0.5)*6,(Math.random()-0.5)*4);
      m.userData.speed = 0.15 + Math.random()*0.3;
      m.userData.offset = Math.random()*Math.PI*2;
      group.add(m);
      meshes.push(m);
    }
    const light1 = new THREE.DirectionalLight(0xffe6c2,1.1); light1.position.set(4,5,6); scene.add(light1);
    const light2 = new THREE.AmbientLight(0xffffff,0.55); scene.add(light2);

    function resize(){
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      renderer.setSize(w,h,false);
      camera.aspect = w/h; camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize); resize();

    let mouseX=0, mouseY=0;
    window.addEventListener('mousemove', e=>{
      mouseX = (e.clientX/window.innerWidth - 0.5);
      mouseY = (e.clientY/window.innerHeight - 0.5);
    });

    const clock = new THREE.Clock();
    function animate(){
      const t = clock.getElapsedTime();
      meshes.forEach(m=>{
        m.rotation.x = t*m.userData.speed + m.userData.offset;
        m.rotation.y = t*m.userData.speed*0.8;
        m.position.y += Math.sin(t*0.6+m.userData.offset)*0.0025;
      });
      group.rotation.y += (mouseX*0.4 - group.rotation.y)*0.02;
      group.rotation.x += (mouseY*0.2 - group.rotation.x)*0.02;
      renderer.render(scene,camera);
    }
    let heroVisible = true;
    function loop(){ if(heroVisible && !document.hidden) animate(); requestAnimationFrame(loop); }
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(es){ heroVisible = es[0].isIntersecting; }).observe(document.getElementById('hero'));
    }
    loop();
  }catch(err){ /* silently fall back to CSS floating icons */ console.warn('Hero 3D scene unavailable:', err); }
})();

/* ============================================================
   THREE.JS — dedicated 3D experience section
   ============================================================ */
(function initExperienceScene(){
  try{
    if(reduceMotion || LOW_POWER || typeof THREE==='undefined') return;
    const holder = document.getElementById('exp-canvas');
    const canvas = document.createElement('canvas');
    canvas.style.width='100%'; canvas.style.height='100%'; canvas.style.display='block'; canvas.style.borderRadius='30px';
    holder.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, holder.clientWidth/holder.clientHeight, 0.1, 100);
    camera.position.set(0,0.4,7);

    const items = [
      { geo:new THREE.TorusGeometry(0.9,0.32,20,40), color:0xE9C77A, pos:[-2.6,0.4,0] },
      { geo:new THREE.IcosahedronGeometry(0.9,0), color:0xB33B2E, pos:[0,0.2,-0.5] },
      { geo:new THREE.BoxGeometry(1.3,1.3,1.3), color:0x6C8A57, pos:[2.6,-0.1,0] },
      { geo:new THREE.SphereGeometry(0.7,24,24), color:0xC79A44, pos:[1.1,1.4,-1] },
      { geo:new THREE.OctahedronGeometry(0.7,0), color:0xE2833F, pos:[-1.2,-1.3,-1] },
    ];
    const meshes = items.map(it=>{
      const mat = new THREE.MeshStandardMaterial({ color:it.color, roughness:0.35, metalness:0.2 });
      const m = new THREE.Mesh(it.geo, mat);
      m.position.set(...it.pos);
      scene.add(m);
      return m;
    });
    scene.add(new THREE.DirectionalLight(0xffe6c2,1.2)).position.set(5,6,7);
    scene.add(new THREE.AmbientLight(0xffffff,0.5));

    function resize(){
      const w = holder.clientWidth, h = holder.clientHeight;
      renderer.setSize(w,h,false);
      camera.aspect = w/h; camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize); resize();

    let mx=0,my=0;
    holder.addEventListener('mousemove', e=>{
      const r = holder.getBoundingClientRect();
      mx = ((e.clientX-r.left)/r.width - 0.5);
      my = ((e.clientY-r.top)/r.height - 0.5);
    });

    const clock = new THREE.Clock();
    function animate(){
      const t = clock.getElapsedTime();
      meshes.forEach((m,i)=>{
        m.rotation.x = t*0.3 + i;
        m.rotation.y = t*0.4 + i;
        m.position.y += Math.sin(t+i)*0.0018;
      });
      camera.position.x += (mx*2 - camera.position.x)*0.03;
      camera.position.y += (0.4 - my*1.2 - camera.position.y)*0.03;
      camera.lookAt(0,0,0);
      renderer.render(scene,camera);
    }
    let expVisible = false;
    function expLoop(){ if(expVisible && !document.hidden) animate(); requestAnimationFrame(expLoop); }
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(es){ expVisible = es[0].isIntersecting; }, { threshold:0.1 }).observe(holder);
    } else { expVisible = true; }
    expLoop();
  }catch(err){
    console.warn('Experience 3D scene unavailable:', err);
    document.getElementById('exp-canvas').style.background = 'linear-gradient(150deg,rgba(199,154,68,0.25),rgba(226,131,63,0.15))';
  }
})();
