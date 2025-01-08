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
