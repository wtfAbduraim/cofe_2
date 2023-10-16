var elButton = document.querySelector(".btn");
var elButtonMenu = document.querySelector(".btn__menu");
var elButtonExit = document.querySelector(".btn__exit");
var elNav = document.querySelector(".nav__list");

elButton.addEventListener("click", () => {
    elButtonMenu.classList.toggle("btn__menu--exit")
    elButtonExit.classList.toggle("btn__exit--menu")
    elNav.classList.toggle("nav__blok")
})

