(function () {
  var field = document.querySelector("#catalogg");
  var popup = document.querySelector(".modal-content");
  var inputName = document.querySelector("#names");
  var overlay = document.querySelector(".modal-overlay");

  field.onclick = function (event) {
    var target = event.target;
    if (target.classList.contains("catalog-item__cart-pic")) {
      inputName.value = target.parentNode.text;
      popup.classList.toggle("modal-content--show");
      overlay.classList.add("modal-overlay--show");
    }
  };

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

}) ();
