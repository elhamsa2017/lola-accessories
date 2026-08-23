const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === index);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === index);
  });
  currentIndex = index;
}

function nextSlide() {
  showSlide((currentIndex + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 3000);
}

if (slides.length > 0) {
  showSlide(0);
  startSlider();

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval);
    startSlider();
  });

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    clearInterval(slideInterval);
    startSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      clearInterval(slideInterval);
      startSlider();
    });
  });
}
