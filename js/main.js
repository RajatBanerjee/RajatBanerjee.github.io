/* ============================================
   Nav: transparent → frosted glass on scroll
   ============================================ */
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* ============================================
   Typed text animation in hero
   ============================================ */
const typedEl = document.getElementById('typed-text');
const phrases = [
  'Software Engineer',
  'Backend Developer',
  'Systems Thinker',
  'Problem Solver',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const TYPE_SPEED = 80;
const DELETE_SPEED = 45;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

  if (!isDeleting && charIndex === current.length) {
    delay = PAUSE_AFTER_TYPE;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = PAUSE_AFTER_DELETE;
  }

  setTimeout(typeLoop, delay);
}

typeLoop();

/* ============================================
   Fade-in sections on scroll (IntersectionObserver)
   ============================================ */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach((el) => observer.observe(el));

/* ============================================
   Smooth-highlight active nav link on scroll
   ============================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNavLink() {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--text)';
    }
  });
}

window.addEventListener('scroll', highlightNavLink, { passive: true });
