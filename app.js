const sections = document.querySelectorAll(".section");
const sectionbtns = document.querySelectorAll(".controls");
const sectionbtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-container");

function pageTransition() {
  // Button click active class
  for (i = 0; i < sectionbtn.length; i++) {
    sectionbtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.className = currentBtn.className.replace(" active-btn", "");
      this.className += " active-btn";
    });
  }
}
pageTransition();
