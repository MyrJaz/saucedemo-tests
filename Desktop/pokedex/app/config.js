

/* En vez de escribir "https://pokeapi.co/api/v2" en cada
archivo, lo guardamos aquí una sola vez. Si algún día
cambia la URL, solo lo editamos en este lugar*/

const API_BASE = "https://pokeapi.co/api/v2";

// Cuántos Pokémon cargar por página.
const POR_PAGINA = 20;


// Lista de tipos de Pokémon.
const TIPOS = [
  "fire", "water", "grass", "electric", "psychic",
  "poison", "ghost", "dragon", "normal", "ice",
  "fighting", "fairy", "rock", "bug", "steel",
  "flying", "ground", "dark"
];