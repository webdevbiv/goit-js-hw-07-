let counterValue = 0
const btnDec = document.querySelector('button[data-action="decrement"]')
const btnInc = document.querySelector('button[data-action="increment"]')
const spanVal = document.querySelector('#value')

const dec = () => {
    counterValue -= 1
    spanVal.textContent = counterValue
}

const inc = () => {
    counterValue += 1
    spanVal.textContent = counterValue
}

btnDec.addEventListener('click', dec)
btnInc.addEventListener('click', inc)













































// let counterValue = 0
// const decrementRef = document.querySelector('button[data-action="decrement"]')

// const incrementRef = document.querySelector('button[data-action="increment"]')

// const spanRef = document.querySelector('#value')

// const decremet = () => {
//     counterValue -= 1
//     spanRef.textContent = counterValue
// }

// const increment = () => {
//     counterValue += 1
//     spanRef.textContent = counterValue
// }

// decrementRef.addEventListener('click', decremet)
// incrementRef.addEventListener('click', increment)