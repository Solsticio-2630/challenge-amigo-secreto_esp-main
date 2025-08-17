// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []  // Array para almacenar los nombres de los amigos

function agregarAmigo() {
  const nombreInput = document.getElementById("amigo"); // Obtener el campo de entrada por ID
  // const nombreInput = document.querySelector("#nombre"); // O usar querySelector
  const nombre = nombreInput.value;

  if (nombre.trim() === "") { // Validar que el campo no esté vacío (considerando espacios en blanco)
    alert("Por favor, inserte un nombre.");
    return; // Salir de la función si está vacío
  }

  amigos.push(nombre); // Añadir el nombre al array
  nombreInput.value = ""; // Limpiar el campo de entrada
  console.log(amigos); // Mostrar el array actualizado
}
//Asociar la función al botón
document.getElementById("agregarAmigo").addEventListener("click", agregarAmigo);

