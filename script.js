window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
      scrollBtn.style.display = "block";
    } else {
      nav.classList.remove("sticky");
      scrollBtn.style.display = "none";
    }
  };
  // Side Navigation Menu
  let body = document.querySelector("body");
  let navBar = document.querySelector(".navbar");
  let menuBtn = document.querySelector(".menu-btn");
  let cancelBtn = document.querySelector(".cancel-btn");
  // Open side navigation
  menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
  };
  const hideNavMenu = () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  };
  // Close side navigation
  cancelBtn.onclick = hideNavMenu;
  // Close side navigation when a menu link is clicked
  let navLinks = document.querySelectorAll(".menu li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", hideNavMenu);
  });
  let lastScrollTop = 0; // Stores the last scroll position
const navbar = document.querySelector('.navbar'); // The navbar element

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // If we're scrolling down
  if (currentScroll > lastScrollTop) {
    navbar.classList.add('hidden'); // Hide the navbar
  } else {
    navbar.classList.remove('hidden'); // Show the navbar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});
