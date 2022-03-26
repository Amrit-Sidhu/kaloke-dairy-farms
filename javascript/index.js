console.log("hello Amrit new  starts here..........");
var loading = document.querySelector(".loading");
console.log(loading);
function loader() {
  loading.style.display = "none";
  console.log("rty");
}
//toggle mobile navbar
(function toggleMobileNavBar() {
  let hamburger = document.querySelector(".hamburger");
  let navBarMobile = document.querySelector(".navBarMobile");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navBarMobile.classList.toggle("show-navBarMobile");
  });
})();

//function to close mobile menu after click on any menu link
(function closeMobileMenu() {
  let hamburger = document.querySelector(".hamburger");
  let navBarMobile = document.querySelector(".navBarMobile");
  let navLinksMobile = document.querySelectorAll(".navLinksMobile li a");
  navLinksMobile.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      console.log(this);
      hamburger.classList.toggle("is-active");
      navBarMobile.classList.toggle("show-navBarMobile");
    });
  });
})();

//function to change the background color of menu bar on scroll
function changeMenuBackground() {
  let menu = document.querySelector("#menuBar");
  let img = document.querySelector(".logo img");

  document.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      menu.style.paddingTop = "4px";
      menu.style.paddingBottom = "4px";
      menu.style.backgroundColor = "rgba(237, 241, 253, 0.9)";
      img.style.width = "100px";
    } else {
      menu.style.paddingTop = "10px";
      menu.style.paddingBottom = "10px";
      menu.style.backgroundColor = "transparent";
      img.style.width = "150px";
    }
  });
}
changeMenuBackground();
