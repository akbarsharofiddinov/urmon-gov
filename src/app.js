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
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    document.querySelector(".to-top_btn").style.transform = "translateX(0)";
  } else {
    document.querySelector(".to-top_btn").style.transform = "translateX(200%)";
  }
});
