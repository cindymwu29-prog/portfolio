document.addEventListener("DOMContentLoaded", () => {
  // Año automático en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mensaje bonito en la consola
  console.log(
    "Hi! Thanks for checking my code. – Cindy Williams Urena, Software Developer in progress."
  );

  // Efecto extra: clase activa en secciones hover-section
  const hoverSections = document.querySelectorAll(".hover-section");
  hoverSections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.classList.add("section-active");
    });
    section.addEventListener("mouseleave", () => {
      section.classList.remove("section-active");
    });
  });

  // Parallax simple en el universe banner
  const banner = document.querySelector(".universe-banner");
  if (banner) {
    banner.addEventListener("mousemove", (e) => {
      const rect = banner.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const moveX = (x - 0.5) * 18;
      const moveY = (y - 0.5) * 18;
      banner.style.backgroundPosition = `${50 - moveX}% ${50 - moveY}%`;
    });

    banner.addEventListener("mouseleave", () => {
      banner.style.backgroundPosition = "center";
    });
  }

  // MODAL: abrir/cerrar presentación de Quotiva
  const modal = document.getElementById("quotiva-modal");
  const openButtons = document.querySelectorAll("[data-modal-target='quotiva-modal']");
  const closeButtons = document.querySelectorAll("[data-modal-close]");

  function openModal() {
    if (modal) {
      modal.classList.add("is-open");
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("is-open");
    }
  }

  openButtons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
      document.addEventListener("DOMContentLoaded", () => {
  const postImageInput = document.getElementById("postImage");
  const imagePreview = document.getElementById("imagePreview");

  if (postImageInput && imagePreview) {
    postImageInput.addEventListener("change", (event) => {
      const file = event.target.files[0];

      if (!file) {
        imagePreview.style.display = "none";
        imagePreview.removeAttribute("src");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.src = e.target.result;   // aquí se ve la imagen
        imagePreview.style.display = "block";
      };
      reader.readAsDataURL(file); // lee la imagen del dispositivo del usuario
    });
  }
});

    });
  }
});

