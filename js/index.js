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
  submit = document.querySelector("input.submit"),
  goUp = document.getElementById("goUp");
// go up
submit.preventDefault;
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
//
// loacal storage
let localItem = localStorage.getItem("ccolor1");
console.log(localItem);
if (localItem !== null) {
  document.documentElement.style.setProperty(
    "--dark-color",
    localStorage.getItem("ccolor1")
  );
  document.documentElement.style.setProperty(
    "--icons-color",
    localStorage.getItem("ccolor2")
  );
  document.documentElement.style.setProperty(
    "--roundedLink-color",
    localStorage.getItem("ccolor3")
  );
  document.documentElement.style.setProperty(
    "--linkText-color",
    localStorage.getItem("ccolor4")
  );
  document.documentElement.style.setProperty(
    "--section-color",
    localStorage.getItem("ccolor5")
  );
  document.documentElement.style.setProperty(
    "--theme-text",
    localStorage.getItem("ccolor6")
  );
  document.documentElement.style.setProperty(
    "--mix-section",
    localStorage.getItem("ccolor7")
  );
}
spans.forEach((span) => {
  span.addEventListener("click", (e) => {
    spans.forEach((span) => {
      span.classList.remove("spanActive");
    });
    // set item
    console.log(e.target.dataset.ccolor1);
    console.log(e.target.dataset.ccolor2);
    console.log(e.target.dataset.ccolor3);
    console.log(e.target.dataset.ccolor4);
    console.log(e.target.dataset.ccolor5);
    localStorage.setItem("ccolor2", e.target.dataset.ccolor2);
    localStorage.setItem("ccolor1", e.target.dataset.ccolor1);
    localStorage.setItem("ccolor3", e.target.dataset.ccolor3);
    localStorage.setItem("ccolor4", e.target.dataset.ccolor4);
    localStorage.setItem("ccolor5", e.target.dataset.ccolor5);
    localStorage.setItem("ccolor6", e.target.dataset.ccolor6);
    localStorage.setItem("ccolor7", e.target.dataset.ccolor7);
    // set item
    e.target.classList.add("spanActive");
    //
    document.documentElement.style.setProperty(
      "--dark-color",
      e.target.dataset.ccolor1
    );
    document.documentElement.style.setProperty(
      "--icons-color",
      e.target.dataset.ccolor2
    );
    document.documentElement.style.setProperty(
      "--roundedLink-color",
      e.target.dataset.ccolor3
    );
    document.documentElement.style.setProperty(
      "--linkText-color",
      e.target.dataset.ccolor4
    );
    document.documentElement.style.setProperty(
      "--section-color",
      e.target.dataset.ccolor5
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      e.target.dataset.ccolor6
    );
    document.documentElement.style.setProperty(
      "--mix-section",
      e.target.dataset.ccolor7
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
    icon.click();
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
  images = document.querySelectorAll(".portfolio .all"),
  imgs = document.querySelectorAll(".portfolio .all img");
// overLay = document.querySelectorAll(".overLay");

imgs.forEach((img) => {
  // console.log(img);
  img.addEventListener("click", (e) => {
    // console.log(img);
    // overlay//
    let over = document.createElement("div");
    over.className = "overLay";
    document.body.prepend(over);
    //  popup
    let popup = document.createElement("img");
    console.log(e.target.src);
    popup.setAttribute("src", e.target.src);

    popup.className = "imgOver";
    over.prepend(popup);
    //
    let span = document.createElement("span");
    let text = document.createTextNode("X");
    span.style.cssText =
      "position: absolute;z-index: 5002;   background: #111;  color: white; left: 50%; top: 20%;padding: 10px;border-radius: 50%; cursor:pointer;";
    span.appendChild(text);
    over.append(span);
    span.addEventListener("click", () => {
      over.remove();
    });
  });
});
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

// console.log("more than");
window.onscroll = function () {
  fromRight.forEach((item) => {
    if (scrollY > item.offsetTop + item.offsetHeight - window.innerHeight) {
      item.style.cssText = "    left: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    left: 195px;opacity: 0;";
    }
  });
  fromLeft.forEach((item) => {
    if (scrollY > item.offsetTop + item.offsetHeight - window.innerHeight) {
      item.style.cssText = "    right: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    right: 195px;opacity: 0;";
    }
  });
  fromTop.forEach((item) => {
    if (scrollY > item.offsetTop + item.offsetHeight - window.innerHeight) {
      item.style.cssText = "    bottom: 0px;opacity: 1;";
    } else {
      item.style.cssText = "    bottom: 195px;opacity: 0;";
    }
  });
  fromBottom.forEach((item) => {
    if (scrollY > item.offsetTop + item.offsetHeight - window.innerHeight) {
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
  if (scrollY < home.offsetTop + home.offsetHeight - window.innerHeight) {
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
    scrollY >=
      services.offsetTop + services.offsetHeight - window.innerHeight &&
    scrollY < portfolio.offsetTop + portfolio.offsetHeight - window.innerHeight
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
    scrollY >=
      portfolio.offsetTop + portfolio.offsetHeight - window.innerHeight &&
    scrollY < about.offsetTop + about.offsetHeight - window.innerHeight
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
  } else if (
    scrollY >= about.offsetTop + about.offsetHeight - window.innerHeight &&
    scrollY < contact.offsetTop + contact.offsetHeight - window.innerHeight
  ) {
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
  } else if (
    scrollY >=
    about.offsetTop + about.offsetHeight - window.innerHeight
  ) {
    myLinks.forEach((a) => {
      a.classList.remove("active");
      myLinks[4].classList.add("active");
    });
    navLis.forEach((li) => {
      li.classList.remove("padd");
      navLis[4].classList.add("padd");
    });
    myPointer.style.cssText = "left:351px; width:73px;";
    myLargePointer.style.cssText = "left:424px; width:73px;";
  }
};

// onload = media;
// onresize = media;
//
