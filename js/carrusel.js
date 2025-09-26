
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".avisos-wrapper");
  const slides = document.querySelectorAll(".avisos-slide");
  const prevBtn = document.querySelector(".avisos-prev");
  const nextBtn = document.querySelector(".avisos-next");
  
  let index = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto-play
  setInterval(nextSlide, 5000);
});

