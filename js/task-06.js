const inputRef = document.querySelector('#validation-input')
console.dir(inputRef);
const lengthRef = Number(inputRef.dataset.length)
console.log(lengthRef);

const borderColor = (event) => {
    let inputLength = event.target.value.length
    console.log();
    inputLength === lengthRef ?
        event.target.classList.remove('invalid') & event.target.classList.add('valid') :
        event.target.classList.add('invalid')
}

inputRef.addEventListener('blur', borderColor)

