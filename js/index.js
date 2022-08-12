// start Nav
const icon = document.getElementById("myClick"),
  image = document.querySelector("nav .image"),
  myList = document.querySelector(".myList"),
  myLinks = document.querySelectorAll(".myList ul li a"),
  navLis = document.querySelectorAll(".myList ul li"),
  home = document.getElementById("Home"),
  services = document.getElementById("Services"),
  portfolio = document.getElementById("Portfolio"),
  myPointer = document.querySelector(".myPointer"),
  myLargePointer = document.querySelector(".myLargePointer");
//my pointer
navLis[0].addEventListener("click", () => {
  myPointer.style.cssText = "left:5px; width:59px;";
  myLargePointer.style.cssText = "left:13px; width:59px;";
});
navLis[1].addEventListener("click", () => {
  myPointer.style.cssText = "left:80px; width:82px;";
  myLargePointer.style.cssText = "left:103px; width:82px;";
});
navLis[2].addEventListener("click", () => {
  myPointer.style.cssText = "left:177px; width:82px;";
  myLargePointer.style.cssText = "left:217px; width:82px;";
});
navLis[3].addEventListener("click", () => {
  myPointer.style.cssText = "left:275px; width:60px;";
  myLargePointer.style.cssText = "left:332px; width:60px;";
});
navLis[4].addEventListener("click", () => {
  myPointer.style.cssText = "left:351px; width:73px;";
  myLargePointer.style.cssText = "left:424px; width:73px;";
});
// end my pointer
let toggle = false;
icon.addEventListener("click", () => {
  if (toggle) {
    image.style.marginBottom = "-345px ";
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
//
navLis.forEach((li) => {
  li.addEventListener("click", (ele) => {
    navLis.forEach((item) => {
      item.classList.remove("padd");
    });
    li.classList.add("padd");
  });
});
// aaa
myLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    myLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// end Nav
// start portfolio
const lis = document.querySelectorAll(".portfolio ul li"),
  images = document.querySelectorAll(".portfolio .all");
lis.forEach((li) => {
  li.addEventListener("click", (element) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    element.target.classList.add("active");
    console.log(element.target.classList.contains("design"));
    if (element.target.classList.contains("design")) {
      images.forEach((image) => {
        if (image.classList.contains("design")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
    if (element.target.classList.contains("code")) {
      images.forEach((image) => {
        if (image.classList.contains("code")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
    if (element.target.classList.contains("photo")) {
      images.forEach((image) => {
        if (image.classList.contains("photo")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
    if (element.target.classList.contains("app")) {
      images.forEach((image) => {
        if (image.classList.contains("app")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
    if (element.target.classList.contains("All")) {
      images.forEach((image) => {
        if (image.classList.contains("all")) {
          image.style.cssText = "display:block;";
        } else {
          image.style.cssText = "display:none;";
        }
      });
    }
  });
});
// end portfolio
// start services
const fromRight = document.querySelectorAll(".fromRight"),
  fromLeft = document.querySelectorAll(".fromLeft"),
  fromTop = document.querySelectorAll(".fromTop"),
  fromBottom = document.querySelectorAll(".fromBottom");
window.onscroll = function () {
  fromRight.forEach((item) => {
    if (scrollY > item.offsetTop - 400) {
      item.style.cssText = "    left: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    left: 195px;opacity: 0;";
    }
  });
  fromLeft.forEach((item) => {
    if (scrollY > item.offsetTop - 400) {
      item.style.cssText = "    right: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    right: 195px;opacity: 0;";
    }
  });
  fromTop.forEach((item) => {
    if (scrollY > item.offsetTop - 150) {
      item.style.cssText = "    bottom: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    bottom: 195px;opacity: 0;";
    }
  });
  fromBottom.forEach((item) => {
    if (scrollY > item.offsetTop - 500) {
      item.style.cssText = "top: 0px;opacity: 1;";
    } else {
      item.style.cssText = "top: 100px;opacity: 0;";
    }
  });
  if (scrollY < home.offsetTop) {
    myLinks.forEach((a) => {
      a.classList.remove("active");
      myLinks[0].classList.add("active");
    });
    navLis.forEach((li) => {
      li.classList.remove("padd");
      navLis[0].classList.add("padd");
    });
    myPointer.style.cssText = "left:5px; width:59px;";
    myLargePointer.style.cssText = "left:13px; width:59px;";
  } else if (scrollY >= services.offsetTop && scrollY < portfolio.offsetTop) {
    myLinks.forEach((a) => {
      a.classList.remove("active");
      myLinks[1].classList.add("active");
    });
    navLis.forEach((li) => {
      li.classList.remove("padd");
      navLis[1].classList.add("padd");
    });
    myPointer.style.cssText = "left:80px;  width:82px;";
    myLargePointer.style.cssText = "left:103px; width:82px;";
  } else if (scrollY >= portfolio.offsetTop) {
    myLinks.forEach((a) => {
      a.classList.remove("active");
      myLinks[2].classList.add("active");
    });
    navLis.forEach((li) => {
      li.classList.remove("padd");
      navLis[2].classList.add("padd");
    });
    myPointer.style.cssText = "left:177px;  width:82px;";
    myLargePointer.style.cssText = "left:217px; width:82px;";
  }
};
// end services
console.log(scrollY);
