// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo"); // Obtener el campo de entrada por ID
const listaAmigos = []; // Array para almacenar los nombres de los amigos
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");



///////////////////////Implementa una función para agregar amigos//////////////////////////////
function agregarAmigo() {
    // const nombreInput = document.querySelector("#nombre"); // O usar querySelector
  ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
  //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;

  if (inputAmigo.value == ""){ // Validar que el campo no esté vacío + alerta
    alert("Por favor, inserte un nombre.")
  }

  listaAmigos.push(inputAmigo.value); // Añadir el nombre al array, 
console.log(listaAmigos); // Mostrar el array actualizado
}

//Asociar la función al botón
//document.getElementById("agregarAmigo").addEventListener("click", agregarAmigo);


///////////////////////Implementa una función para actualizar la lista de amigos//////////////////////////////

function mostrarAmigos(amigo) {
  let listaAmigos = document.getElementById("listaAmigos"); //Obtiene el elemento de la lista HTML con el ID listaAmigos

   for (let i = 0; i < amigo.length; i++) { // Itera sobre cada elemento del array amigos.
    let amigo = amigo[i];
    let elementoLista = document.createElement('li'); // Crea un nuevo elemento de lista ( <li> ) para cada amigo.
    elementoLista.textContent = amigo; // Establece el texto del elemento de lista con el nombre del amigo actual
    listaAmigos.appendChild(elementoLista); // Agrega el nuevo elemento de lista ( <li> ) como un hijo del elemento de la lista HTML. 
  }
}

/////////////////////Implementa una función para sortear los amigos//////////////////////////////

function sortearAmigo() {
  // Generar un índice aleatorio
    const random = Math.floor(Math.random() * listaAmigos.length);
  // Validar si el array de amigos está vacío
  if (amigo.length === 0) {
    return "No hay amigos disponibles para sortear.";
  }
  // Obtener el nombre del amigo sorteado
  const amigoSecreto = listaAmigos[random];

  // Mostrar el resultado
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
  
}
