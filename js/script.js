"use strict";

const btns = document.querySelectorAll(".cols");

const makeSound = function (option) {
  let div;
  div = document.querySelector(`.${option}`);
  switch (option) {
    case "w":
      const tom1 = new Audio("../sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("../sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("../sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("../sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const kick = new Audio("../sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      const snare = new Audio("../sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      const crash = new Audio("../sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log("not a valid key");
      div = document.querySelector(".l");
      break;
  }

  div.classList.add("kick");
  setTimeout(() => {
    div.classList.remove("kick");
  }, 100);
};

for (let i = 0; i < btns.length; i++) {
  document.querySelectorAll(".cols")[i].addEventListener("click", function () {
      makeSound(btns[i].textContent);
      console.log(btns[i].textContent);
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key == "w" || "a" || "s" || "d" || "k" || "l" || "j") {
    makeSound(e.key);
  }
});
