const inputRef = document.querySelector('#name-input')
console.log(inputRef);
const spanRef = document.querySelector('#name-output')
console.log(spanRef);

const updateValue = (event) => {
    console.log(event.target.value);
    if (event.target.value === '') {
      return  spanRef.textContent = 'незнакомец'
    }
    spanRef.textContent = event.target.value
}

// inputRef.addEventListener('input', (event) => {
//     console.log(event.target.value);
//     if (event.target.value === '') {
//       return  spanRef.textContent = 'незнакомец'
//     }
//     spanRef.textContent = event.target.value
// })

inputRef.addEventListener('input', updateValue)