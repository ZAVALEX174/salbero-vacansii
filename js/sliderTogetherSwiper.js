var swiper = new Swiper(".sliderTogetherSwiper", {
  cssMode: true,
  spaceBetween: 10,
  centeredSlides: true,
  speed: 3500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

