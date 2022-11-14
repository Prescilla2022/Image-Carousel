let next = document.getElementById("next");
let previous = document.getElementById("previous");
let container = document.getElementById("container");
let slide = document.getElementById("slide");
let stop = document.getElementById("stop");
let angle = 0;
let seconds = 0;

next.addEventListener("click", () => {
  angle -= 60;
  container.style.transform = `rotateY(${angle}deg)`;
});
previous.addEventListener("click", () => {
  angle += 60;
  container.style.transform = `rotateY(${angle}deg)`;
});
