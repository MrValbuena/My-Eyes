// Intentar reproducir apenas cargue la página
const audio = document.getElementById("musicaFondo");

// Si el navegador lo bloquea, se activa este detector de clics en la pantalla
window.addEventListener('click', () => {
  // Solo reproduce si estaba pausado para no reiniciar el audio en cada clic
  if (audio.paused) {
    audio.play().catch(error => console.log("Autoplay bloqueado aún"));
  }
}, { once: true }); // '{ once: true }' hace que este truco solo funcione en el primer clic
