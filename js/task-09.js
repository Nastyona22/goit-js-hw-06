
const refs = {
  btnClick: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
  body: document.querySelector('body'),
}

refs.btnClick.addEventListener('click', changeColor);


function changeColor(event) {
  const newColor = getRandomHexColor();
  refs.colorValue.textContent = newColor;
  refs.body.style.backgroundColor = newColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
