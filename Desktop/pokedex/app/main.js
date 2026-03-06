

//funcion para cargar pokemons, dependiendo de los filtros que el usuario haya seleccionado, se hacen diferentes llamados a la API
async function cargarPokemons() {
  if (estado.cargando) return;
  estado.cargando = true;

  // Mostramos los skeletons mientras esperamos la API
  renderSkeletons(POR_PAGINA);

  try {
    let lista = [];
    if (estado.busqueda !== "") {
      // El usuario buscó un Pokémon por nombre o ID
      const pokemon = await fetchDetalle(estado.busqueda);

      // Si no encontró nada (null), lista queda vacía
      if (pokemon) lista = [pokemon];

    } else if (estado.tipo !== "") {
      //El usuario filtró por tipo
      const todos = await fetchPorTipo(estado.tipo);
      const pedazo = todos.slice(estado.offset, estado.offset + POR_PAGINA);

      lista = await Promise.all(
        pedazo.map(p => fetchDetalle(p.name))
      );
      estado.hayMas = estado.offset + POR_PAGINA < todos.length;

    } else {
      //Sin filtros
      const nombres = await fetchLista(estado.offset);
      lista = await Promise.all(
        nombres.map(p => fetchDetalle(p.name))
      );
      estado.hayMas = nombres.length === POR_PAGINA;
    }
    limpiarSkeletons();

    const listaOrdenada = ordenarPokemons(lista);
    renderCartas(listaOrdenada);
    marcarFavoritosGuardados();
    estado.offset += POR_PAGINA;

    btnCargarMas.hidden = !estado.hayMas;

  } catch (error) {
    // Si algo salió mal 

    limpiarSkeletons();
    console.error("Error al cargar Pokémon:", error);
  }

  // Ya terminamos de cargar
  estado.cargando = false;
}


// Limpia el grid y empieza desde cero con los filtros
async function nuevaBusqueda() {
  leerFiltros();
  limpiarGrid()
  await cargarPokemons();
}

//muestra solo los favoritos
async function mostrarFavoritos() {
  limpiarGrid();
  const favoritos = obtenerFavoritos();

  if (favoritos.length === 0) {
    grid.innerHTML = `
      <p style="color: var(--muted); font-family: 'IBM Plex Mono', monospace;
      font-size: .85rem; padding: 1rem;">
        Todavía no tienes favoritos
      </p>
    `;
    return;
  }

  renderSkeletons(favoritos.length);
  const lista = await Promise.all(
    favoritos.map(nombre => fetchDetalle(nombre))
  );

  limpiarSkeletons();
  renderCartas(lista);

  marcarFavoritosGuardados();

  btnCargarMas.hidden = true;
}



document.addEventListener("DOMContentLoaded", () => {

  llenarSelectTipos();
  actualizarContador();
  cargarPokemons();
});

//Botón "Buscar" nueva búsqueda con los filtros actuales
document.getElementById("btn-buscar").addEventListener("click", () => {
  nuevaBusqueda();
});

// Botón "Cargar más" carga la siguiente página
document.getElementById("btn-cargar-mas").addEventListener("click", () => {
  cargarPokemons();
});

// Botón "Favoritos" en el header
document.getElementById("btn-favoritos").addEventListener("click", () => {
  mostrarFavoritos();
});

// Botón "Todos" en el header 
document.getElementById("btn-todos").addEventListener("click", () => {
  nuevaBusqueda();
});

// Si el usuario presiona Enter en el buscador
document.getElementById("input-busqueda").addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    nuevaBusqueda();
  }
});

// Si el usuario cambia el orden
document.getElementById("select-orden").addEventListener("change", () => {
  nuevaBusqueda();
});