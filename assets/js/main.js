/* ====== Rok w stopce ====== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ====== Menu mobilne ====== */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // zamknij menu po kliknięciu w link
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ====== Animacja pojawiania (scroll reveal) ====== */
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

/* ====== Lightbox galerii ====== */
(function () {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  var lbImg = lb.querySelector('.lb-img');
  var btnClose = lb.querySelector('.lb-close');
  var btnPrev = lb.querySelector('.lb-prev');
  var btnNext = lb.querySelector('.lb-next');

  var items = [];      // aktualna lista zdjęć (jedna galeria)
  var index = 0;

  // wszystkie odnośniki do zdjęć w blokach [data-gallery]
  function collect(scope) {
    return Array.prototype.slice.call(
      scope.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".webp"]')
    );
  }

  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var links = collect(gallery);
    links.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        items = links;
        index = i;
        open();
      });
    });
  });

  function open() {
    show();
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function show() {
    var link = items[index];
    if (!link) return;
    lbImg.src = link.getAttribute('href');
    var img = link.querySelector('img');
    lbImg.alt = img ? img.alt : '';
  }
  function next() { index = (index + 1) % items.length; show(); }
  function prev() { index = (index - 1 + items.length) % items.length; show(); }

  btnClose.addEventListener('click', close);
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
  });
})();
