// start Nav
const icon = document.getElementById("myClick"),
  image = document.querySelector("nav .image"),
  myList = document.querySelector(".myList"),
  myLinks = document.querySelectorAll(".myList ul li a");
let toggle = false;
icon.addEventListener("click", () => {
  if (toggle) {
    image.style.marginBottom = "-264px ";
    myList.style.pointerEvents = "none";
    myList.style.opacity = "0";
    toggle = !toggle;
  } else {
    image.style.marginBottom = "0";
    myList.style.pointerEvents = "auto";
    myList.style.opacity = "1";
    toggle = !toggle;
  }
});
myLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    myLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// end Nav
// start services
let fromRight = document.querySelectorAll(".fromRight");
let fromLeft = document.querySelectorAll(".fromLeft");
let fromTop = document.querySelectorAll(".fromTop");
let fromBottom = document.querySelectorAll(".fromBottom");
window.onscroll = function () {
  fromRight.forEach((item) => {
    if (scrollY > item.offsetTop - 250) {
      item.style.cssText = "    left: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    left: 195px;opacity: 0;";
    }
  });
  fromLeft.forEach((item) => {
    if (scrollY > item.offsetTop - 250) {
      item.style.cssText = "    right: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    right: 195px;opacity: 0;";
    }
  });
  fromTop.forEach((item) => {
    if (scrollY > item.offsetTop +150) {
      item.style.cssText = "    bottom: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    bottom: 195px;opacity: 0;";
    }
  });
  fromBottom.forEach((item) => {
    if (scrollY > item.offsetTop - 250) {
      item.style.cssText = "    top: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    top: 25px;opacity: 0;";
    }
  });
};
// end services
