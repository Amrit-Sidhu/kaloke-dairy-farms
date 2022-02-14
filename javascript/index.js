console.log("hello Amrit new  starts here..........");

//toggle mobile navbar
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  console.log("working");
});
