
const boxesEl = document.querySelector('#boxes');
boxesEl.classList.add("js-gallery");

const amountEl = document.querySelector('#controls input');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");


btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);


const markup = [];

  
function createBoxes() {
  for (let i = 0; i < amountEl.value; i += 1){
  const marckupEl = `<div style="background-color: ${getRandomHexColor()};
  width: ${i * 10 + 30}px; height: ${i * 10 + 30}px"></div>`;
    
  
    markup.push(marckupEl);
  };
  
  boxesEl.innerHTML = markup.join('');
  markup.splice(0, amountEl.value);
  
}

function destroyBoxes() {
  boxesEl.innerHTML='';

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

