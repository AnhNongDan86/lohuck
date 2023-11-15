// Back to top
let mybutton = document.getElementById("back-to-top");

// add class fixed
let fixedScroll = document.getElementById("fixed-Scroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    fixedScroll.classList.add("fixed");
  } else {
    mybutton.style.display = "none";
    fixedScroll.classList.remove("fixed");
  }
}
