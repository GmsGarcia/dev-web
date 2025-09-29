window.addEventListener("scroll", () => {
  var hero = document.getElementById("hero");
  var header = document.getElementById("header");
  var scroll = document.documentElement.scrollTop;

  if (scroll > hero.clientHeight - header.clientHeight) {
    header.style.backgroundColor = "#000";
  }

  if (scroll < hero.clientHeight - header.clientHeight) {
    header.style.backgroundColor = "#00000000";
  }
})
