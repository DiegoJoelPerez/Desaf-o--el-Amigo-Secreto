

// Elementos y array
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// agrengando amigos
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert("Por favor ingresa un nombre de tu amigo");
        return;
    }

    listaAmigos.push(nombre);
    ulListAmigos.innerHTML += `<li class="amigo-item">${nombre}</li>`;

// Mejoras UX limpiando y enfocando
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Sortear amigo
function sortearAmigo() {
    if (!listaAmigos.length) {
        alert("Debes agregar al menos un amigo antes de sortear");
        return;
    }

    const amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    ulResultado.innerHTML = `<li>El amigo secreto es: 🎉 ${amigoSecreto}</li>`;
}

// Mejorando experiencia del usuario UX: soporte para tecla Enter elimando lo escribido
inputAmigo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

//funcion para limpiar la lista
function limpiarLista() {
    ulListAmigos.innerHTML="";
    ulResultado.innerHTML= "";
    listaAmigos.length= 0;

}