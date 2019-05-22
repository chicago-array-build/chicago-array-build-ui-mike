let doc, bod, htm;

addEventListener("load", function() {
  doc = document;
  bod = doc.body;
  htm = doc.documentElement;
  navBar = doc.querySelector(".home-nav");
  addEventListener("scroll", function() {
    // doc.querySelector("nav").style.backgroundColor =
    //   htm.scrollTop > 0 ? "#008FD3" : "transparent";
    if (htm.scrollTop > 0) {
      navBar.classList.add("nav-show");
    } else {
      navBar.classList.remove("nav-show");
    }
  });
});

let homepageText = ["breathe easier", "travel safer", "make decisions"];

let counter = 0;

let inst = setInterval(change, 2500);

const textAnimation = document.querySelector(".homepage-text-animation");

function change() {
  textAnimation.innerHTML = homepageText[counter];
  counter++;
  if (counter >= homepageText.length) {
    counter = 0;
  }
}

const navSlide = () => {
  const burgerButton = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burgerButton.addEventListener("click", function() {
    burgerButton.classList.toggle("is-active");
    navMenu.classList.toggle("nav-active");
    navLinks.forEach((el, index) => {
      if (el.style.animation) {
        el.style.animation = "";
      } else {
        el.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 +
          0.2}s`;
      }
    });
  });
};

navSlide();
