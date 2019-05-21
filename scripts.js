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

console.log(doc);

// let navBar = document.querySelector("nav");

// console.log(navBar);

// function runOnScroll() {
//   if (document.body.scrollTop >= 120) {
//     nav.style.color = "blue";
//   }
// }

// window.addEventListener("scroll", runOnScroll);
