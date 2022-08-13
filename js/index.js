// start Nav
const icon = document.getElementById("myClick"),
  image = document.querySelector("nav .image"),
  myList = document.querySelector(".myList"),
  myLinks = document.querySelectorAll(".myList ul li a"),
  navLis = document.querySelectorAll(".myList ul li"),
  home = document.getElementById("Home"),
  services = document.getElementById("Services"),
  portfolio = document.getElementById("Portfolio"),
  about = document.getElementById("About"),
  contact = document.getElementById("Contact"),
  myPointer = document.querySelector(".myPointer"),
  myLargePointer = document.querySelector(".myLargePointer"),
  option = document.querySelector(".option"),
  show = document.querySelector(".option .show"),
  spans = document.querySelectorAll(".option .colors span"),
  goUp = document.getElementById("goUp");
// go up
goUp.addEventListener("click", () => {
  window.scrollTo({
    left: "0px",
    top: "0px",
    behavior: "smooth",
  });
});
// go up
// option
let optionToggle = true;
show.addEventListener("click", (e) => {
  if (optionToggle) {
    option.style.left = "0px";
    optionToggle = !optionToggle;
    show.innerHTML = "hide";
  } else {
    option.style.left = "-25%";
    optionToggle = !optionToggle;
    show.innerHTML = "show";
  }
});
// loacal storage
let localItem = localStorage.getItem("color1");
if (localItem !== null) {
  document.documentElement.style.setProperty(
    "--dark-color",
    localStorage.getItem("color1")
  );
  document.documentElement.style.setProperty(
    "--icons-color",
    localStorage.getItem("color2")
  );
  document.documentElement.style.setProperty(
    "--roundedLink-color",
    localStorage.getItem("color3")
  );
  document.documentElement.style.setProperty(
    "--linkText-color",
    localStorage.getItem("color4")
  );
  document.documentElement.style.setProperty(
    "--section-color",
    localStorage.getItem("color5")
  );
  document.documentElement.style.setProperty(
    "--theme-text",
    localStorage.getItem("color6")
  );
  document.documentElement.style.setProperty(
    "--mix-section",
    localStorage.getItem("color7")
  );
}
spans.forEach((span) => {
  span.addEventListener("click", (e) => {
    spans.forEach((span) => {
      span.classList.remove("spanActive");
    });
    // set item
    localStorage.setItem("color1", e.target.dataset.color1);
    localStorage.setItem("color2", e.target.dataset.color2);
    localStorage.setItem("color3", e.target.dataset.color3);
    localStorage.setItem("color4", e.target.dataset.color4);
    localStorage.setItem("color5", e.target.dataset.color5);
    localStorage.setItem("color6", e.target.dataset.color6);
    localStorage.setItem("color7", e.target.dataset.color7);
    // set item
    e.target.classList.add("spanActive");
    //
    document.documentElement.style.setProperty(
      "--dark-color",
      e.target.dataset.color1
    );
    document.documentElement.style.setProperty(
      "--icons-color",
      e.target.dataset.color2
    );
    document.documentElement.style.setProperty(
      "--roundedLink-color",
      e.target.dataset.color3
    );
    document.documentElement.style.setProperty(
      "--linkText-color",
      e.target.dataset.color4
    );
    document.documentElement.style.setProperty(
      "--section-color",
      e.target.dataset.color5
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      e.target.dataset.color6
    );
    document.documentElement.style.setProperty(
      "--mix-section",
      e.target.dataset.color7
    );
  });
});
// end option

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

// end services

// tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 2000,
});
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 2000,
});
VanillaTilt.init(document.querySelectorAll(".tiltG"), {
  max: 25,
  speed: 600,
  glare: true,
  "max-glare": 0.5,
});
VanillaTilt.init(document.querySelectorAll(".glare"), {
  max: 0,
  glare: true,
  "max-glare": 0.25,
});

const media = () => {
  let q = matchMedia("(max-width:768px)");
  if (q.matches) {
    document.querySelector("body").style.cssText = "background-color:#fff;";
    //
    // 
    window.onscroll = function () {
      fromRight.forEach((item) => {
        if (scrollY > item.offsetTop - 800) {
          item.style.cssText = "    left: 0px;opacity: 1;";
        } else {
          item.style.cssText = "    left: 195px;opacity: 0;";
        }
      });
      fromLeft.forEach((item) => {
        if (scrollY > item.offsetTop - 800) {
          item.style.cssText = "    right: 0px;opacity: 1;";
        } else {
          item.style.cssText = "    right: 195px;opacity: 0;";
        }
      });
      fromTop.forEach((item) => {
        if (scrollY > item.offsetTop - 550) {
          item.style.cssText = "    bottom: 0px;opacity: 1;";
        } else {
          item.style.cssText = "    bottom: 195px;opacity: 0;";
        }
      });
      fromBottom.forEach((item) => {
        if (scrollY > item.offsetTop - 900) {
          item.style.cssText = "top: 0px;opacity: 1;";
        } else {
          item.style.cssText = "top: 100px;opacity: 0;";
        }
      });
      if (window.scrollY > 1000) {
        goUp.style.cssText = "opacity:1; bottom:62px;";
      } else {
        goUp.style.cssText = "opacity:0; bottom:42px;";
      }
      if (scrollY < home.offsetTop - 400) {
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
      } else if (
        scrollY >= services.offsetTop - 400 &&
        scrollY < portfolio.offsetTop - 400
      ) {
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
      } else if (
        scrollY >= portfolio.offsetTop - 400 &&
        scrollY < about.offsetTop - 400
      ) {
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
      } else if (scrollY >= about.offsetTop) {
        myLinks.forEach((a) => {
          a.classList.remove("active");
          myLinks[3].classList.add("active");
        });
        navLis.forEach((li) => {
          li.classList.remove("padd");
          navLis[3].classList.add("padd");
        });
        myPointer.style.cssText = "left:275px; width:60px;";
        myLargePointer.style.cssText = "left:332px; width:60px;";
      }
    };
    console.log("less than");
    //
  } else {
    console.log("more than");
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
      if (window.scrollY > 200) {
        goUp.style.cssText = "opacity:1; bottom:62px;";
      } else {
        goUp.style.cssText = "opacity:0; bottom:42px;";
      }
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
      } else if (
        scrollY >= services.offsetTop &&
        scrollY < portfolio.offsetTop
      ) {
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
      } else if (scrollY >= portfolio.offsetTop && scrollY < about.offsetTop) {
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
      } else if (scrollY >= about.offsetTop) {
        myLinks.forEach((a) => {
          a.classList.remove("active");
          myLinks[3].classList.add("active");
        });
        navLis.forEach((li) => {
          li.classList.remove("padd");
          navLis[3].classList.add("padd");
        });
        myPointer.style.cssText = "left:275px; width:60px;";
        myLargePointer.style.cssText = "left:332px; width:60px;";
      }
    };
    document.querySelector("body").style.cssText = "background-color:blue;";
  }
};
onload = media;
onresize = media;
