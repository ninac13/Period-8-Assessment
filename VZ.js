const pokemons = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/2/", type: "Grass" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/", type: "Grass" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/", type: "Grass" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/", type: "Fire" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/", type: "Fire" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/", type: "Fire" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/", type: "Water" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/", type: "Water" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/", type: "Water" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/", type: "Bug" },
    { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/", type: "Bug" },
    { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/", type: "Bug" },
    { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/", type: "Bug" },
    { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/", type: "Bug" },
    { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/", type: "Bug" },
    { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/", type: "Normal" },
    { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/", type: "Normal" },
    { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/", type: "Normal" },
    { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/", type: "Normal" },
    { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/", type: "Normal" },
];

//Create a new array of pokemon who have a new property called ID that is their current position in the ORIGINAL array plus 1 plus and match the type "Normal"