'use strict';

(function () {
  var KEY_CODES = {
    ESC: 27
  };
  var field = document.querySelector("#catalogg");
  var popup = document.querySelector(".modal-content");
  var inputName = document.querySelector("#product");
  var overlay = document.querySelector(".modal-overlay");

  var closePopup = function (event) {
    if (event.keyCode === KEY_CODES.ESC) {
      if (popup.classList.contains("modal-content--show")) {
        popup.classList.remove("modal-content--show");
        overlay.classList.remove("modal-overlay--show");
      }
    } else {
      event.preventDefault();
      popup.classList.remove("modal-content--show");
      overlay.classList.remove("modal-overlay--show");
    }
  };

  field.onclick = function (event) {
    var target = event.target;
    if (target.classList.contains("catalog-item__cart-pic")) {
      inputName.value = target.parentNode.text;
      popup.classList.toggle("modal-content--show");
      overlay.classList.add("modal-overlay--show");
    }
  };
  document.addEventListener("keydown", closePopup);
  overlay.addEventListener("click", closePopup);
})();
