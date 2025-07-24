const typeTarget = document.getElementById("typewriter");
const words = ["React Enthusiast", "Full-Stack Developer", "Open Source Contributor"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const typedText = currentWord.substring(0, charIndex);
  typeTarget.textContent = typedText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();

// Mobile Menu Toggle
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
