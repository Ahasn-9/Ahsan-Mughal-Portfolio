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
  // active section
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectionbtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  // togle theme
  const themebtn = document.querySelector(".theme-btn");
  themebtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}
pageTransition();
