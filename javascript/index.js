console.log("hello Amrit new  starts here..........");

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
