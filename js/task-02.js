const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')
console.log(list);

function createElement(ingredient) {
    const itemRef = document.createElement('li')
    itemRef.textContent = ingredient
    // console.log(itemRef);
    return itemRef
}

const elementsListRef = ingredients.map(ingridient =>
    createElement(ingridient)
)

console.log(elementsListRef);

list.append(...elementsListRef)
