const refs = {
  boxesforEl: document.querySelector('#boxes'),
  amountEl: document.querySelector('#controls input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
}

// refs.btnCreate.addEventListener('click', createBoxes);
// refs.btnDestroy.addEventListener('click', destroyBoxes);

refs.amountEl.addEventListener('input', event => {
  
  const amount = event.currentTarget.value;
  refs.amountEl = amount;
  
});


console.log(refs.amountEl);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
