// Basic interactivity script for your pastel kawai aesthetic website

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-btn");
  const menu = document.querySelector("#mobile-menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Button animation example
  const buttons = document.querySelectorAll(".cute-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      btn.classList.add("wiggle");
    });

    btn.addEventListener("mouseout", () => {
      btn.classList.remove("wiggle");
    });
  });

  // Simple character fade-in animation
  const characters = document.querySelectorAll(".anime-character");

  const revealCharacters = () => {
    characters.forEach((char) => {
      const rect = char.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        char.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealCharacters);
  revealCharacters();
});