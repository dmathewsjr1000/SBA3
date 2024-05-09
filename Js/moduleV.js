// Declaring Variables and functions for exporting modules
export const descreaseBtn = document.getElementById("decreaseBtn");
export const resetBtn = document.getElementById("resetBtn");
export const increaseBtn = document.getElementById("increaseBtn");
const inputField = document.querySelector(".number-input");
const imageScreen = document.querySelector(".pokemon-picture");
const nameScreen = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const type1 = document.getElementById("type-1");
const type2 = document.getElementById("type-2");

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
  resetFields();
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

// Increasing Counter of the input data of pokemon id
export function increase(num) {
  inputField.value++;
  if (inputField.value > 898) {
    alert(
      "The pokedex does not have pokemon ids greater than 898 as of yet please enter a new id:"
    );
    reset(inputField.value);
  }
  console.log(inputField.value);
  getPokemon(inputField.value);
}

// Decreasing Counter of the input data of pokemon id
export function decrease(num) {
  inputField.value--;
  if (inputField.value <= 0) {
    alert("The pokedex does not have 0 or negative ids please enter a new id:");
    reset(inputField.value);
  }
  console.log(inputField.value);
  getPokemon(inputField.value);
}

// Resetting Counter to the first pokemon id
export function reset(num) {
  inputField.value = 1;
  console.log(inputField.value);
  getPokemon(inputField.value);
}
