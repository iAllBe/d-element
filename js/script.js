//toggle site menu
const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".site-menu");
burger.addEventListener("click", function () {
    burger.classList.toggle("burger-menu__active");
    menu.classList.toggle("site-menu__active");
})