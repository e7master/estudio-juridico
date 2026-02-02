document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".servicio-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const item = toggle.parentElement;
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector("span");
      const isOpen = item.classList.contains("open");

      // Cerrar todos
      document.querySelectorAll(".servicio-item").forEach(i => {
        i.classList.remove("open");
        const c = i.querySelector(".servicio-content");
        if (c) {
          c.style.maxHeight = null;
          c.style.opacity = 0;
        }
        const s = i.querySelector("span");
        if (s) s.textContent = "+";
      });

      // Abrir solo el clickeado
      if (!isOpen) {
        item.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
        icon.textContent = "–";
      }
    });
  });
});