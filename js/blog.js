document.querySelectorAll(".blog-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".blog-card");
        const isOpen =card.classList.contains("open");

        // Cerrar demas cards
        document.querySelectorAll(".blog-card").forEach(c => {
            c.classList.remove("open");
            c.querySelector(".blog-toggle").textContent = "Leer más";
        });

        // Abrir solo clickeada
        if (!isOpen) {
            card.classList.add("open");
            btn.textContent = "Leer menos"
            
            card.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});