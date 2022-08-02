// Zadacha 2. Меню

"use strict";
let menuSub = Array.from(document.querySelectorAll("ul.menu.menu_sub"));
let menuLink = Array.from(document.querySelectorAll(".menu__link"));

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    const subMenu = menuLink[i]
      .closest(".menu__item")
      .querySelector(".menu_sub");
    const result = menuSub.find((elems) =>
      elems.classList.contains("menu_active")
    );
    if (subMenu) {
      if (result === undefined) {
        subMenu.classList.add("menu_active");
      } else {
        if (result !== subMenu) {
          subMenu.classList.add("menu_active");
        }
        result.classList.remove("menu_active");
      }
      return false;
    }
  };
}

