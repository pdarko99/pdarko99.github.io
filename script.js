// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav__toggle--active");
  navMenu.classList.toggle("nav__menu--open");
});

// Close mobile menu when a link is clicked
navMenu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("nav__toggle--active");
    navMenu.classList.remove("nav__menu--open");
  });
});

// Nav shadow on scroll
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("nav--scrolled");
  } else {
    nav.classList.remove("nav--scrolled");
  }
});

// Active nav link highlighting based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

function updateActiveLink() {
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("nav__link--active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("nav__link--active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// Fade-in on scroll using IntersectionObserver
const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in--visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));
