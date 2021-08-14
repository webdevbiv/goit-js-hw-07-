let counterValue = 0
const decrementValue = document.querySelector('button[data-action="decrement"]')
const incrementValue = document.querySelector('button[data-action="increment"]')

const value = document.querySelector('#value')

decrementValue.addEventListener('click', () => {
    counterValue -= 1
    console.log(counterValue);
    value.textConent = counterValue
})

const decrement = () => {
    counterValue -= 1
    console.log(counterValue);
}

// let counterValue = 0;
// const decrementValue = document.querySelector('button[data-action="decrement"]')
// // console.log(decrementValue);
// const incrementValue = document.querySelector('button[data-action="increment"]')
// // console.log(incrementValue);
// const value = document.querySelector('#value')
// // console.log(value);

// const decrement = () => {
//     counterValue -= 1
//     // console.log(counterValue);
//     value.textContent = counterValue
// }

// const increment = () => {
//     counterValue += 1
//     // console.log(counterValue);
//     value.textContent = counterValue
// }

// decrementValue.addEventListener('click', decrement)
// incrementValue.addEventListener('click', increment)

