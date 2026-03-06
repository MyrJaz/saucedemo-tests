
/*guardar y mostrar favoritos
Usa localStorage para que los favoritos se mantengan*/



//función para obtener el array de favoritos guardados en local
function obtenerFavoritos() {
  const guardados = localStorage.getItem("favoritos");
  if (guardados === null) return [];

  return JSON.parse(guardados);
}

//Guarda los favoritos en local 
function guardarFavoritos(array) {
  localStorage.setItem("favoritos", JSON.stringify(array));
}

//llama a obtenerFavoritos para revisar si el pokemon ya es favorito
function esFavorito(nombre) {
  const favoritos = obtenerFavoritos();

  return favoritos.includes(nombre);
}

/*Agrega o quita un Pokémon de favoritos según su estado actual.
y actualiza el texto del botón (☆ o ★) y el contador.*/
function toggleFavorito(nombre, boton) {
  let favoritos = obtenerFavoritos();

  if (esFavorito(nombre)) {
    favoritos = favoritos.filter(fav => fav !== nombre);
    boton.textContent = "☆";

    boton.classList.remove("on");
  } else {
    favoritos.push(nombre);
    boton.textContent = "★";
    boton.classList.add("on");
  }

  guardarFavoritos(favoritos);
  actualizarContador();
}


// Actualiza el texto del botón "Favoritos" con la cantidad actual.
function actualizarContador() {
  const favoritos = obtenerFavoritos();
  const btnFavoritos = document.getElementById("btn-favoritos");
  btnFavoritos.textContent = `Favoritos (${favoritos.length})`;
}

//pone estrella a los favoritos 
function marcarFavoritosGuardados() {
  const favoritos = obtenerFavoritos();
  document.querySelectorAll(".btn-fav").forEach(boton => {
    const nombre = boton.dataset.nombre;

    if (favoritos.includes(nombre)) {
      boton.textContent = "★";
      boton.classList.add("on");
    }
  });
}