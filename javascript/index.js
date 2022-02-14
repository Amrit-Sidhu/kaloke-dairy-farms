console.log("hello Amrit new  starts here..........");

//toggle mobile navbar
let hamburger = document.querySelector(".hamburger");
let navBarMobile = document.querySelector(".navBarMobile");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navBarMobile.classList.toggle("show-navBarMobile");
  console.log("working");
});
