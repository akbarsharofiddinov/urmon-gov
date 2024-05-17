var swiper = new Swiper(".swiper-links", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1140: {
      slidesPerView: 3,
    },

    720: {
      slidesPerView: 2,
    },

    300: {
      slidesPerView: 1,
    },
  },
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    document.querySelector(".to-top_btn").style.transform = "translateX(0)";
  } else {
    document.querySelector(".to-top_btn").style.transform = "translateX(200%)";
  }
});

const headerBar = document.querySelector(".header-bar");

headerBar.addEventListener("click", (e) => {
  document.querySelector(".footer-nav").classList.toggle("active");
});
  