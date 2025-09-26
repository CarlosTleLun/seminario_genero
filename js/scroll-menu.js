// --- Selección de elementos a animar ---
const elementosAnimar = [
  ...document.querySelectorAll('.memoria-item'), // todas las cards
  document.querySelector('#cierre'),             // sección específica
  document.querySelector('#otra-section')       // otra sección específica
].filter(el => el !== null); // filtramos elementos que existan

// --- Configuración del Intersection Observer ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); // deja de observar después de animar
    }
  });
}, {
  threshold: 0.2 // 20% del elemento visible
});

// --- Inicialización: ocultos y desplazados ---
elementosAnimar.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  observer.observe(el);
});
