window.addEventListener("scroll", () => {
  var hero = document.getElementById("hero");
  var header = document.getElementById("header");
  var logo = document.querySelector(".logo > a > img");
  var links = document.querySelectorAll("#nav .links > a");
  var scroll = document.documentElement.scrollTop;

  // fix: a elements stay white after resizing
  if (window.innerWidth < 700) {
    links.forEach(a => {
      a.style.color = "#000";
    });
  }

  // on page content
  if (scroll > hero.clientHeight - header.clientHeight) {
    header.style.backgroundColor = "#FFF";
    header.style.borderBottom = "2px solid #000";
    logo.style.filter = "invert(100%)"

    if (window.innerWidth >= 700) {
      links.forEach(a => {
        a.style.color = "#000";
      });
    }
  }

  // on page hero
  if (scroll < hero.clientHeight - header.clientHeight) {
    header.style.backgroundColor = "#00000000";
    header.style.borderBottom = "none";
    logo.style.filter = "invert(0%)"

    if (window.innerWidth >= 700) {
      links.forEach(a => {
        a.style.color = "#FFF";
      });
    }
  }
})
