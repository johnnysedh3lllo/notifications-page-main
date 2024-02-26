"use strict";
const notifContainer = document.querySelector(".notif__container");
const notifCount = document.querySelector(".notif__header__title__span");
const notifItems = document.querySelectorAll(".notif__item");
const markBtn = document.querySelector(".btn--mark");

let count = 0;

notifItems.forEach((element) => {
  if (!element.classList.contains("unread")) return;

  count++;
  notifCount.textContent = count;
  element.querySelector(".unread-span").classList.remove("no-display");
});

notifContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".notif__item");
  if (!clicked) return;

  if (clicked.classList.contains("unread")) {
    clicked.classList.remove("unread");
    clicked.querySelector(".unread-span").classList.add("no-display");
    count--;
    notifCount.textContent = count;
  }
});

markBtn.addEventListener("click", function (event) {
  console.log(event.target);

  if (event) {
    notifItems.forEach((element) => {
      element.classList.remove("unread");
      element.querySelector(".unread-span").classList.add("no-display");
    });
    notifCount.textContent = 0;
  }
});
