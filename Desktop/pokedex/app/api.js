
//Funciones para pedir datos a PokeAPI

//nombre 
async function fetchLista(offset = 0) {
  const url = `${API_BASE}/pokemon?limit=${POR_PAGINA}&offset=${offset}`;
  const respuesta = await fetch(url);

//Convertimos la respuesta a formato JSON 
  const datos = await respuesta.json();
  return datos.results;
}

//todo lo demas 
async function fetchDetalle(nombre) {
  const url = `${API_BASE}/pokemon/${nombre}`;
  const respuesta = await fetch(url);

//si no existe retorna error
  if (!respuesta.ok) {
    return null; 
  }

  const datos = await respuesta.json();
  return datos;
}

//fetch por tipo
async function fetchPorTipo(tipo) {
  const url = `${API_BASE}/type/${tipo}`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  return datos.pokemon.map(entrada => entrada.pokemon);
}