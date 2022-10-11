"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const totalList = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
  const listofEl = document.createElement("li");
  listofEl.textContent = ingredient;
  listofEl.classList.add("item");

  return listofEl;
});
  
console.log(elements);
totalList.append(...elements);