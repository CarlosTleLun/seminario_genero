// Función para abrir el modal
function abrirModalCreditos() {
  document.getElementById('creditos').style.display = 'flex';
}

// Asignar evento al botón del menú
document.getElementById('btnCreditos').addEventListener('click', function(event) {
  event.preventDefault();
  abrirModalCreditos();
});

// Asignar evento al botón del footer
document.getElementById('btnCreditosFooter').addEventListener('click', function(event) {
  event.preventDefault();
  abrirModalCreditos();
});

// Cerrar el modal al hacer clic en el botón de cerrar
document.getElementById('cerrarCreditos').addEventListener('click', function() {
  document.getElementById('creditos').style.display = 'none';
});

// Cerrar el modal si haces clic fuera del contenido
document.getElementById('creditos').addEventListener('click', function(event) {
  if (event.target === document.getElementById('creditos')) {
    document.getElementById('creditos').style.display = 'none';
  }
});
