// toggling menu
const navToggle = document.querySelector(
  '[aria-controls="primary-navigation"]'
);

const header = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");

  if (navOpened === "false") {
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
  }

  header.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", false);
    header.classList.remove("nav-open");
  });
});
// toggling menu end

// Initializing SwiperJS
const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  autoplay: {
    delay: 4000
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
