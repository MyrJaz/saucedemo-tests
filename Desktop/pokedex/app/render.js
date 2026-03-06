
// modifica lo que se ve en pantalla
const grid = document.getElementById("grid");
const btnCargarMas = document.getElementById("btn-cargar-mas");

//revibe el array de pokemos y los deja acomodados ya en el grid
function renderCartas(listaDePokemons) {
  listaDePokemons.forEach(pokemon => {
    const carta = crearCarta(pokemon);
    grid.appendChild(carta);
  });
}


// crearCarta(pokemon)
function crearCarta(pokemon) {

  const tipoPrincipal = pokemon.types[0].type.name;
  const imagen =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

//aqui es para poner un porcentaje en la estadistica del pokemon
  const hp = pokemon.stats[0].base_stat;
  const porcentajeHP = Math.round((hp / 255) * 100);

  let colorBarra = "";
  if (hp < 50) colorBarra = "low";
  else if (hp < 80) colorBarra = "mid";

  const carta = document.createElement("article");
  carta.classList.add("card");

  carta.innerHTML = `
    <div class="card-stripe ${tipoPrincipal}"></div>

    <button class="btn-fav" data-nombre="${pokemon.name}">☆</button>

    <div class="card-img-wrap">
      <img src="${imagen}" alt="${pokemon.name}" loading="lazy"/>
    </div>

    <div class="card-body">

      <div class="card-meta">
        <span class="card-name">${pokemon.name}</span>
        <span class="card-id">#${String(pokemon.id).padStart(3, "0")}</span>
      </div>

      <div class="types">
        ${pokemon.types.map(t =>
          `<span class="chip ${t.type.name}">${t.type.name}</span>`
        ).join("")}
      </div>

      <div class="hp-row">
        <span class="hp-label">HP</span>
        <span class="hp-val">${hp}</span>
      </div>
      <div class="hp-track">
        <div class="hp-fill ${colorBarra}" style="width:${porcentajeHP}%"></div>
      </div>

      <hr class="divider"/>

      <p class="ab-label">Habilidades</p>
      <div class="ab-row">
        ${pokemon.abilities.map(a =>
          `<span class="ab-tag">${a.ability.name}</span>`
        ).join("")}
      </div>

    </div>
  `;

//Cuando el usuario presione el boton de favoritos, se llama a favoritos.js
  const btnFav = carta.querySelector(".btn-fav");
  btnFav.addEventListener("click", () => {
    toggleFavorito(pokemon.name, btnFav);
  });

  return carta;
}

/*Muestra tarjetas "fantasma" animadas mientras
se están cargando los datos reales de la API.*/
function renderSkeletons(cantidad) {
  for (let i = 0; i < cantidad; i++) {
    const skeleton = document.createElement("article");
    skeleton.classList.add("card", "skeleton");
    skeleton.innerHTML = `
      <div class="card-stripe normal"></div>
      <div class="sk sk-img"></div>
      <div class="card-body">
        <div class="sk sk-line sk-w60"></div>
        <div class="sk sk-line sk-w40"></div>
        <div class="sk sk-line sk-w75"></div>
        <div class="sk sk-line sk-w60"></div>
      </div>
    `;
    grid.appendChild(skeleton);
  }
}

// Elimina todas las tarjetas skeleton del grid.
function limpiarSkeletons() {
  document.querySelectorAll(".skeleton").forEach(el => el.remove());
}

//limpia el frid para cuando se hace una nueva busqueda
function limpiarGrid() {
  grid.innerHTML = "";
}