const cards = document.querySelectorAll('.card');

function animateCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom && !card.classList.contains('scroll-in')) {
      card.classList.add('scroll-in');

      // Animación desde izquierda/derecha alternada
      if(index % 2 === 0){
        card.style.transform = "translateX(-20px)";
        setTimeout(()=> card.style.transform = "translateX(0)", 10);
      } else {
        card.style.transform = "translateX(20px)";
        setTimeout(()=> card.style.transform = "translateX(0)", 10);
      }
    }
  });
}

window.addEventListener('scroll', animateCards);
animateCards();
