var awardsSwiper = new Swiper(".awardsSwiper", {
  slidesPerView: 4.5,
  spaceBetween: 30,
  loop: true,
  // centeredSlides: true,
  // autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    }
    , 621: {
      slidesPerView: 4.5,
    }
  }
});