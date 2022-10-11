const refs = {
    slider: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

// const INIT_FONT_SIZE = parseInt(getComputedStyle(refs.text).fontSize);
// refs.slider.value = INIT_FONT_SIZE;

// refs.slider.addEventListener('input', onSliderInput);

// function onSliderInput({ currentTarget: { value } }) {
//     refs.text.style.fontSize = `${value}px`;

// }

refs.text.style.fontSize = refs.slider.value + `px`;



refs.slider.addEventListener('input', onSliderChange);

function onSliderChange(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
  

}
