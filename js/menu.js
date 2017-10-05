'use strict';

(function () {
  var menu = document.querySelector(".main-nav__wrapper");
  var toggler = document.querySelector(".main-nav__toggler");

  var hideMenu = function (event) {
    event.preventDefault();
    menu.classList.remove("main-nav__wrapper--no-js");
    menu.classList.add("main-nav__wrapper--close");
  };
  var toggleMenu = function () {
    if (menu.classList.contains("main-nav__wrapper--close")) {
      menu.classList.remove("main-nav__wrapper--close");
      menu.classList.add("main-nav__wrapper--open");
    } else {
      menu.classList.remove("main-nav__wrapper--open");
      menu.classList.add("main-nav__wrapper--close");
    }
  };

  window.addEventListener("load", hideMenu);
  toggler.addEventListener("click", toggleMenu);
}) ();
