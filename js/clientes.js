
let clientes = [];

document.getElementById("formAgregarCliente").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreCliente").value;
    const email = document.getElementById("emailCliente").value;
    const telefono = document.getElementById("telefonoCliente").value;

    clientes.push({ nombre, email, telefono });

    renderClientes();

    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("modalAgregarCliente"));
    modal.hide();

    e.target.reset();
});

function renderClientes() {
    const tabla = document.getElementById("tablaClientes");
    tabla.innerHTML = "";

    clientes.forEach((c, i) => {
        tabla.innerHTML += `
            <tr>
                <td>${c.nombre}</td>
                <td>${c.email}</td>
                <td>${c.telefono}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="eliminarCliente(${i})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function eliminarCliente(i) {
    clientes.splice(i, 1);
    renderClientes();
}
