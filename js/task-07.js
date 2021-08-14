const inputRef = document.querySelector('#font-size-control')
console.log(inputRef.value);
const spanRef = document.querySelector('#text')
// spanRef.style.fontSize = `${inputRef.value}px`
console.dir(inputRef)

inputRef.value = Number.parseInt(window.getComputedStyle(spanRef).fontSize)
    
const updateSize = (event) => {
    spanRef.style.fontSize = `${event.target.value}px`
    console.log(event.target.value);
}
inputRef.addEventListener('input', updateSize)

console.log(Number.parseInt(window.getComputedStyle(spanRef).fontSize));
