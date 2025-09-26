// js/leer-mas.js
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-leer-mas");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const descripcion = btn.previousElementSibling; // el <p> antes del botón
      descripcion.classList.toggle("mostrar");
      btn.textContent = descripcion.classList.contains("mostrar")
        ? "Leer menos"
        : "Leer más";
    });
  });
});
