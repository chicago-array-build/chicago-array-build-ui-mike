let doc, bod, htm;

addEventListener("load", function() {
  doc = document;
  bod = doc.body;
  htm = doc.documentElement;
  addEventListener("scroll", function() {
    doc.querySelector("nav").style.backgroundColor =
      htm.scrollTop > 0 ? "#008FD3" : "transparent";
  });
});

let homepageText = ["breathe easier", "travel safer", "make decisions"];

let counter = 0;

let inst = setInterval(change, 2500);

let textAnimation = document.querySelector(".homepage-text-animation");

function change() {
  textAnimation.innerHTML = homepageText[counter];
  counter++;
  if (counter >= homepageText.length) {
    counter = 0;
  }
}
