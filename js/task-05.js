const inpRef = document.querySelector('#name-input')
const outRef = document.querySelector('#name-output')

const updOut = (event) => {
  if (event.target.value === '') {
    return outRef.textContent = 'незнакомец'
  }
  outRef.textContent = event.target.value
}

inpRef.addEventListener('input', updOut)