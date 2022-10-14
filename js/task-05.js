

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel : document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.trim() === '') {
    refs.nameLabel.textContent = 'Anonymous';

    }
}