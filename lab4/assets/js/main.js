var hover = document.getElementById("hover");;
var click = document.getElementById("click");;
var dbclick = document.getElementById("dbclick");;
var counter = document.getElementById("counter");;

var c = 0;

window.addEventListener("load", () => {
  counter.innerText = c;
})

hover.addEventListener("mouseover", () => {
  console.log("aaaaaa")
  hover.innerText = "Take it :D 🎂";
})

hover.addEventListener("mouseleave", () => {
  hover.innerText = "Hover Me!";
})

click.addEventListener("click", () => {
  var cText = "Ouch!";
  click.innerText = click.innerText == cText ? "Click Me!" : cText;
})

dbclick.addEventListener("dblclick", () => {
  var cText = "Ouch! Ouch!";
  dbclick.innerText = dbclick.innerText == cText ? "Double Click Me!" : cText;
})

function count() {
  c++;
  counter.innerText = c;
}
