window.addEventListener("DOMContentLoaded", () => {
  //initialize swiper when document ready
  var FirstSwiper = new Swiper(".swiper1", {
    loop: true,
    centeredSlides: true,
    slideActiveClass: "active",
    slidesPerView: 2,
    spaceBetween: 120,
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1"
    },

    breakpoints: {
      1445: {
        spaceBetween: 0
      }
    }
  });

  var SecondSwiper = new Swiper(".swiper2", {
    loop: true,
    centeredSlides: true,
    slideActiveClass: "active",
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2"
    }
  });

  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});
