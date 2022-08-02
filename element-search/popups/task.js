// zadacha 1. Всплывающие окна

"use strict";
let modalWindow = Array.from(document.getElementsByClassName("modal"));
let modalClose = Array.from(document.querySelectorAll(".modal__close"));
let showSuccess = Array.from(document.getElementsByClassName("show-success"));

modalWindow[0].classList.add("modal_active");
for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function () {
    if (modalClose[i].closest(".modal_active")) {
      modalClose[i].closest(".modal_active").classList.remove("modal_active");
    }
  };
}
showSuccess[0].onclick = function () {
  modalWindow[0].classList.remove("modal_active");
  modalWindow[1].classList.add("modal_active");
};