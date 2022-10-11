
const inputRef = document.querySelector('#validation-input');
const inputRefLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', onInputCheck);

function onInputCheck(event) {
    const isValid = event.currentTarget.value.length === Number(inputRefLength);
   
    if (isValid) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
        
}