window.addEventListener("DOMContentLoaded", () => {
  //initialize swiper when document ready
  var FirstSwiper = new Swiper(".swiper1", {
    loop: true,
    centeredSlides: true,
    slideActiveClass: "active",
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
  });

  var SecondSwiper = new Swiper(".swiper2", {
    loop: true,
    centeredSlides: true,
    slideActiveClass: "active",
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
  });
});

