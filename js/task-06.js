const inputRef = document.querySelector('#validation-input')
// const dataSetLenght = inputRef.dataset.length
const dataSetLenght = Number(inputRef.dataset.length)
// console.log(inputRef);
// console.log(inputRef);
// inputRef.addEventListener('input', (event) => {
//     console.log(event.target.value.length === dataSetLenght)
//     console.log(dataSetLenght);
//     if (event.target.value.length === dataSetLenght) {
//         event.target.classList.remove('invalid')
//         event.target.classList.add('valid')
//     } else {
//         event.target.classList.add('invalid')
//     }
//     // console.log(inputRef.dataset.length);
// })
const changeBorder = (event) => {
    console.log(event.target.value.length === dataSetLenght)
    console.log(dataSetLenght);
    let inputLength =  event.target.value.length
    inputLength  === dataSetLenght ? 
        event.target.classList.remove('invalid') &
        event.target.classList.add('valid') : 
        event.target.classList.add('invalid')
    // console.log(inputRef.dataset.length);
}

inputRef.addEventListener('blur', changeBorder)


