document.querySelector("#loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const pass  = document.querySelector("#pass").value;

    // SIMULACIÓN (por ahora sin backend)
    if (email === "admin@estudio.com" && pass === "123456") {
        // Redirige al dashboard interno
        window.location.href = "dashboard.html";
    } else {
        alert("Credenciales incorrectas");
    }
});
