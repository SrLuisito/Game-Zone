const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const itemWidth = carouselItems[0].clientWidth;
let currentIndex = 0;

carouselPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

carouselNext.addEventListener('click', () => {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
    carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

window.addEventListener('resize', () => {
  currentIndex = 0;
  carouselTrack.style.transform = `translateX(0)`;
});