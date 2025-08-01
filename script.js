// === Typewriter Effect ===
const typeTarget = document.getElementById("typewriter");
const words = ["React Enthusiast", "Full-Stack Developer", "Open Source Contributor"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeEffect() {
  const currentWord = words[wordIndex];
  const typedText = currentWord.substring(0, charIndex);
  // Update text with blinking cursor span
  typeTarget.innerHTML = typedText + '<span class="cursor">|</span>';

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    typingTimeout = setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typingTimeout = setTimeout(typeEffect, 60);
  } else {
    // Switch between typing and deleting after the word is fully typed/deleted
    isDeleting = !isDeleting;
    if (!isDeleting) {
      // Move to the next word after deletion cycle completes
      wordIndex = (wordIndex + 1) % words.length;
    }
    typingTimeout = setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// === Mobile Menu Toggle ===
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  // Click event to toggle menu open/close
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // Accessibility: allow toggle on keyboard Enter or Space keypress
  menuToggle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      menuToggle.click();
    }
  });
}
