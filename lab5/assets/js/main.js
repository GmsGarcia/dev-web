// elements
var hoverEl = document.getElementById("hover");
var colorEl = document.getElementById("color");
var typerEl = document.getElementById("typer");
var colorTextEl = document.getElementById("colorText");
var counterEl = document.getElementById("counter");

var c = 0;

window.addEventListener("load", () => {
  counterEl.innerText = c;

})

hoverEl.addEventListener("mouseover", () => {
  hoverEl.innerText = "Obrigado por passares!";
})

hoverEl.addEventListener("mouseleave", () => {
  hoverEl.innerText = "Passa por aqui!";
})

typerEl.addEventListener("input", () => {
  var random = Math.floor(Math.random()*16777215).toString(16);
  typerEl.style.backgroundColor = `#${random}`;
}) 

function count() {
  c++;
  counterEl.innerText = c;
}

function color(color) {
  colorEl.style.color = color;
}

function colorText() {
  document.body.style.backgroundColor = colorTextEl.value;
}

function count() {
  c++;
  counterEl.innerText = c;
}

function type(color) {
  colorEl.style.color = color;
}
