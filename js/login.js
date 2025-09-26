// Mostrar login con Ctrl+Alt+L
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'l') {
    e.preventDefault();
    document.getElementById('login-oculto').style.display = 'flex';
  }
});

// Cerrar login
document.getElementById('cerrarLogin').addEventListener('click', () => {
  document.getElementById('login-oculto').style.display = 'none';
});
