var linkOrder = document.querySelector(".promo-block__btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var toggler = document.querySelector(".main-nav__toggler");
var menu = document.querySelector(".main-nav__wrapper");
window.addEventListener("load", function (event) {
  event.preventDefault();
  menu.classList.remove("main-nav__wrapper--no-js");
  menu.classList.add("main-nav__wrapper--close");
  popup.classList.add("modal-content--hidden");
});
linkOrder.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("modal-content--show");
  overlay.classList.add("modal-overlay--show");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content--show")) {
      popup.classList.remove("modal-content--show");
      overlay.classList.remove("modal-overlay--show");
    }
  }
});
overlay.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content--show");
  overlay.classList.remove("modal-overlay--show");
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
