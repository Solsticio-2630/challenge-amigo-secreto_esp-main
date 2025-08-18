// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = []; // Array para almacenar los nombres de los amigos
const ulListaAmigos = document.getElementById("listaAmigos");

///////////////////////Implementa una función para agregar amigos//////////////////////////////
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo"); // Obtener el campo de entrada por ID
  // const nombreInput = document.querySelector("#nombre"); // O usar querySelector
  ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
  //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;


  if (inputAmigo.value == ""){ // Validar que el campo no esté vacío + alerta
    alert("Por favor, inserte un nombre.")
  }

  listaAmigos.push(inputAmigo.value); // Añadir el nombre al array, 
  nombreInput.value = ""; // Limpiar el campo de entrada
  
  console.log(listaAmigos); // Mostrar el array actualizado
}

//Asociar la función al botón
document.getElementById("agregarAmigo").addEventListener("click", agregarAmigo);


///////////////////////Implementa una función para actualizar la lista de amigos//////////////////////////////

function mostrarAmigos(amigos) {
  let listaDeAmigos = document.getElementById("lista-Amigos"); //Obtiene el elemento de la lista HTML con el ID listaAmigos

  listaDeAmigos.innerHTML = ""; // Limpia la lista

  for (let i = 0; i < amigos.length; i++) { // Itera sobre cada elemento del array amigos.
    let amigos = amigos[i];
    let elementoLista = document.createElement('li'); // Crea un nuevo elemento de lista ( <li> ) para cada amigo.
    elementoLista.textContent = amigos; // Establece el texto del elemento de lista con el nombre del amigo actual
    listaDeAmigos.appendChild(elementoLista); // Agrega el nuevo elemento de lista ( <li> ) como un hijo del elemento de la lista HTML. 
  }
}
// Ejemplo de uso:

let listaDeAmigos = ["Lucca", "Brandon", "Diego", "Pedro"];
mostrarAmigos(amigos); // Define la función que acepta un array de nombres de amigos como argumento.

///////////////////////Implementa una función para sortear los amigos//////////////////////////////

