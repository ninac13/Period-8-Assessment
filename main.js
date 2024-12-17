import { pokemons } from "/V24D";
const array = pokemons;

function getGrass(array){
    const newArrayGrass = array.filter((pokemon)=>pokemon.type.includes("Grass"));
    newArrayGrass.forEach((pokemon) => {
        console.log(pokemon.name);
    });
}

getGrass(array);

function getHP(array){
    const newArrayHP = array.filter((pokemon)=>pokemon.type > (75));
    newArrayHP.forEach((pokemon) => {
        console.log(pokemon.name);
    });
}

getHP(array);