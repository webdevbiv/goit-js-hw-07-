const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function createList() {
  const getList = document.querySelector('#ingredients')
  function createItem(item) {
    const newItem = document.createElement('li')
    newItem.textContent = item
    return newItem
  }
  const newList = ingredients.map(createItem)
  getList.append(...newList)
}
createList()