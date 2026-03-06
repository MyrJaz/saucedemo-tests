


//Agrupamos todas las variables relacionadas con los filtros 
const estado = {
  offset: 0,          
  busqueda: "",       
  tipo: "",           
  orden: "id-asc",    
  cargando: false,    
  hayMas: true,       
};

// Recibe un array de Pokémon y lo devuelve ordenado
function ordenarPokemons(lista) {
  const copia = [...lista];

  switch (estado.orden) {
    case "id-asc":
      // Ordenar por ID de menor a mayor
      copia.sort((a, b) => a.id - b.id);
      break;

    case "id-desc":
      // Ordenar por ID de mayor a menor
      copia.sort((a, b) => b.id - a.id);
      break;

    case "name-asc":
      // Ordenar por nombre de A a Z
      copia.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "name-desc":
      // Ordenar por nombre de Z a A
      copia.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  return copia;
}




// Usa el array TIPOS que definimos en config.js.
function llenarSelectTipos() {
  const select = document.getElementById("select-tipo");
  TIPOS.forEach(tipo => {
    const opcion = document.createElement("option");

    opcion.value = tipo;
    opcion.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);

    select.appendChild(opcion);
  });
}



//Lee los valores actuales de los controles del HTML y los guarda en el objeto "estado".
function leerFiltros() {
  estado.busqueda = document
    .getElementById("input-busqueda")
    .value.trim()
    .toLowerCase();

  // Leemos el tipo seleccionado
  estado.tipo = document.getElementById("select-tipo").value;

  // Leemos el orden seleccionado
  estado.orden = document.getElementById("select-orden").value;

  
  estado.offset = 0;
  estado.hayMas = true;
}