const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const navlinkEl = document.querySelector(".nav__link");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
});

navEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
})