// Declarining Variables and function and the ones that are imported
const searchBtn = document.querySelector(".black-button");
const inputField = document.querySelector(".number-input");
const imageScreen = document.querySelector(".pokemon-picture");
const nameScreen = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const type1 = document.getElementById("type-1");
const type2 = document.getElementById("type-2");
import { descreaseBtn, increaseBtn, increase, decrease } from "./moduleV.js";

// Resetting function that reset fields on Pokedex
const resetFields = () => {
  nameScreen.innerHTML = "";
  height.innerHTML = "";
  weight.innerHTML = "";
  type1.innerHTML = "";
  type2.innerHTML = "";
};

// Function that retreived data from api and convert to json data and displaying data
async function getPokemon(num) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
  const data = await response.json();
  const placeHolder = "---";
  imageScreen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
  nameScreen.innerHTML = data.name.toUpperCase();
  height.innerHTML = `${data.height * 10} CM`;
  weight.innerHTML = `${data.weight / 10} KG`;
  if (data.types[1] !== undefined) {
    type1.innerHTML = data.types[0].type.name.toUpperCase();
    type2.innerHTML = data.types[1].type.name.toUpperCase();
  } else {
    type1.innerHTML = data.types[0].type.name.toUpperCase();
    type2.innerHTML = placeHolder;
  }
}

// Event listener that catches enter keydown for other modes of entering data
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

// Event listeners that catches clicks on buttons three different buttons that activate a increasing poke id feature, decreasing poke id, and retreive data
searchBtn.addEventListener("click", () => getPokemon(inputField.value));
descreaseBtn.addEventListener("click", () => decrease(inputField.value));
increaseBtn.addEventListener("click", () => increase(inputField.value));
