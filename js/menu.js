const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('.nav');

// Toggle menú hamburguesa
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
  });
});

// Scroll efecto
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
});
