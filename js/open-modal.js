var linkCart = document.querySelector(".catalog-item__cart");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
window.addEventListener("load", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content--hidden");
});
linkCart.addEventListener("click", function (event) {
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
