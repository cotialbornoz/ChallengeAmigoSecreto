//Array para almacenar nombres.

let amigos = [];

//Agregar amigos.

function agregarAmigo() {
  let nuevoNombre = document.getElementById("amigo").value;

  //3 condicionales if-else anidadas.
  if (nuevoNombre === "") {
    //1er if-else > Si el input se encuentra vacío o no.
    alert("Por favor, escriba un nombre.");
  } else {
    if (/\d/.test(nuevoNombre)) {
      //2do if-else > Si el texto ingresado contiene números o no.
      alert("No incluyas números.");
      limpiarCampos();
    } else {
      if (amigos.includes(nuevoNombre)) {
        //3er if-else > Si el nombre ingresado está repetido o no.
        alert("Nombre repetido. Escriba uno nuevo.");
        limpiarCampos();
      } else {
        amigos.push(nuevoNombre);
        limpiarCampos();
        actualizarLista();
      }
    }
  }
}

function limpiarCampos() {
  document.querySelector("#amigo").value = "";
}

//Actualizar amigos

function actualizarLista() {
  let listaDeNombres = document.getElementById("listaAmigos");
  listaDeNombres.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let itemNuevo = document.createElement("li");
    itemNuevo.textContent = amigos[i];
    listaDeNombres.appendChild(itemNuevo);
  }
}

//Sortear amigos

function sortearAmigo() {
  if (amigos.length <= 2) {
    alert(
      "No hay suficientes participantes para jugar. Ingrese al menos 3 nombres"
    );
  } else {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `${amigoSorteado}`;
  }
}

//Reiniciar juego

function reiniciarJuego() {
  //limpiar campos
  document.querySelector("#amigo").innerHTML = "";
  document.querySelector("#listaAmigos").innerHTML = "";
  document.querySelector("#resultado").innerHTML = "";

  //limpiar variable
  amigos.length = 0;
}