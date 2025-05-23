const modal = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let current = 0;

const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggles navigation for medium and small screens
toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close the menu when a link is clicked on mobile
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Display or close login or sign up form
openBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // show modal
  document.body.style.overflow = "hidden"; // prevent background scroll
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Toggles between login and sign up form
function toggleForms() {
  document.getElementById("signup-form").classList.toggle("hidden");
  document.getElementById("login-form").classList.toggle("hidden");
}

// Changes slides in testimonial
function showTestimonial(index) {
  testimonials.forEach((t) => t.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

let autoSlide = setInterval(nextTestimonial, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(autoSlide); // stop auto slide on manual click
    showTestimonial(index);
    autoSlide = setInterval(nextTestimonial, 3000); // restart auto slide
  });
});

showTestimonial(current); // Initial display
