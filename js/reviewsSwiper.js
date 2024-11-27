var employeeReviewsSwiper = new Swiper(".reviewsSwiper", {
  cssMode: true,
  spaceBetween: 10,
  centeredSlides: true,
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

document.querySelectorAll('.scroll-box2').forEach(el => new SimpleBar(el));