const getCategories = document.querySelectorAll('h2')
console.log(`В списке ${getCategories.length} категории`)

const getItems = document.querySelectorAll('.item')
// console.log(getItems);

// getItems.forEach(elem => {
//     console.log(elem)
// })

getItems.forEach(elem => {
    const title = elem.querySelector('h2').innerText
    const listLength = elem.querySelectorAll('li').length
    console.log(`Категория: ${title}\nКоличество элементов: ${listLength}`);
})


