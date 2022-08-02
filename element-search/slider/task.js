// Zadacha 3. Слайды

"use strict";
let slides = Array.from(document.querySelectorAll(".slider__item"));
let arrows = Array.from(document.querySelectorAll(".slider__arrow"));
let prev = document.querySelector(".slider__arrow_prev");
let next = document.querySelector(".slider__arrow_next");
let index = slides.findIndex((slide) =>
  slide.classList.contains("slider__item_active")
);

for (let i = 0; i < arrows.length; i++) {
  arrows[i].onclick = function () {
    slides[index].classList.remove("slider__item_active");
    arrows[i] === next ? index++ : index--;
    index === slides.length ? (index = 0) : "";
    index === -1 ? (index = slides.length - 1) : "";
    slides[index].classList.add("slider__item_active");
  };
}