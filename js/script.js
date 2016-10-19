var btnSwitch = document.querySelector(".main-nav__switch");
var burgerIcon = document.querySelector(".main-nav__burger");
var crossIcon = document.querySelector(".main-nav__cross");
var mainMenu = document.querySelector(".main-menu");
var mainNav = document.querySelector(".main-nav");
btnSwitch.addEventListener ("click", function(event) {
  event.preventDefault();
  btnSwitch.classList.toggle("main-nav__switch--cross");
  burgerIcon.classList.toggle("main-nav--hide");
  crossIcon.classList.toggle("main-nav--hide");
  mainMenu.classList.toggle("main-menu--closed");
  mainNav.classList.toggle("main-nav--opacity");
});
