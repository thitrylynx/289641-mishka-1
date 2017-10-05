var toggler = document.querySelector(".main-nav__toggler");
var menu = document.querySelector(".main-nav__wrapper");
window.addEventListener("load", function (event) {
  event.preventDefault();
  menu.classList.remove("main-nav__wrapper--no-js");
  menu.classList.add("main-nav__wrapper--close");
});
toggler.addEventListener("click", function (event) {
  if (menu.classList.contains("main-nav__wrapper--close")) {
    menu.classList.remove("main-nav__wrapper--close");
    menu.classList.add("main-nav__wrapper--open");
  } else {
    menu.classList.remove("main-nav__wrapper--open");
    menu.classList.add("main-nav__wrapper--close");
  }
});
