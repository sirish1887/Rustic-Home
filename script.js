const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  },
  { threshold: 0.15 }
);
reveals.forEach((el) => io.observe(el));

const testimonials = [...document.querySelectorAll(".testimonial")];
let activeIndex = 0;

setInterval(() => {
  if (testimonials.length === 0) return;
  testimonials[activeIndex].classList.remove("active");
  activeIndex = (activeIndex + 1) % testimonials.length;
  testimonials[activeIndex].classList.add("active");
}, 5000);

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hero-bg", {
    yPercent: 16,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils.toArray(".parallax").forEach((img, i) => {
    gsap.to(img, {
      y: i % 2 === 0 ? -28 : -15,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });
}
