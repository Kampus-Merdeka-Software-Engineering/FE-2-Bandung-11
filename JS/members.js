var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    spaceBetween: 30,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  