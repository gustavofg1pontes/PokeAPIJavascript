const URL = 'https://pokeapi.co/api/v2/pokemon/';

function $(element) {
    return document.querySelector(element);
}

const searchInput = $('.search-input'),
    searchButton = $('.search-button'),
    container = $('.pokemon'),
    erroMessage = $('.error');
let pokemon,
    pokeName = $(".name"),
    pokeImg = $(".sprite");

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        erroMessage.style.display = "none"
        pokemon = await searchPokemon(searchInput.value.toLowerCase());

        pokeName.innerHTML = pokemon.name;
        pokeImg.src = pokemon.sprites.front_default;
    } catch {
        pokeName.innerHTML = "";
        pokeImg.src = "";
        erroMessage.style.display = "block"
    }
})

function searchPokemon(poke) {
    return fetch(URL + poke)
        .then(response => response.json())
        .then(data => { return data })
        .catch(_ => erroMessage.style.display = "block");
}

