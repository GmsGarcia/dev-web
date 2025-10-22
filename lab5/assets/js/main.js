// elements
var hoverEl = document.getElementById("hover");
var colorEl = document.getElementById("color");
var typerEl = document.getElementById("typer");
var selectEl = document.getElementById("select");

var nameEl = document.getElementById("name");
var ageEl = document.getElementById("age");
var labelEl = document.getElementById("label");

var counterEl = document.getElementById("counter");
var autoEl = document.getElementById("auto");

var colors = ["#CEF7A0", "#D7A6B3", "#AEECEF", "#FFE19C"];

var c = 0;
var ac = 0;


window.addEventListener("load", () => {
  counterEl.innerText = c;
  autoEl.innerText = ac;

  setInterval(() => {
    ac++;
    autoEl.innerText = ac;
  }, 1000)

})

hoverEl.addEventListener("mouseover", () => {
  hoverEl.innerText = "Obrigado por passares!";
})

hoverEl.addEventListener("mouseleave", () => {
  hoverEl.innerText = "Passa por aqui!";
})

// rgb buttons
function color(color) {
  colorEl.style.color = color;
}

typerEl.addEventListener("input", () => {
  var rn = Math.floor(Math.random() * 4);
  typerEl.style.backgroundColor = colors[rn];
})

selectEl.onchange = () => {
  document.body.style.backgroundColor = selectEl.value;
}

// label
function label() {
  labelEl.innerText = `Olá, o ${nameEl.value} tem ${ageEl.value}!`;
}

// counter
function count() {
  c++;
  counterEl.innerText = c;
}
