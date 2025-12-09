// Set current year in footer & pequeño mensajito
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  console.log(
    "Hi! Thanks for checking my code. – Cindy Williams Urena, Software Developer in progress."
  );

  // Efecto extra: al pasar el mouse por una sección hover-section, añade una clase
  const hoverSections = document.querySelectorAll(".hover-section");
  hoverSections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.classList.add("section-active");
    });
    section.addEventListener("mouseleave", () => {
      section.classList.remove("section-active");
    });
  });
});
