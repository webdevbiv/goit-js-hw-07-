const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function createNewList() {
  const getList = document.querySelector('#ingredients')
  function createNewItem(item) {
    const newItem = document.createElement('li')
    newItem.textContent = item
    return newItem
  }
  const createNewList = ingredients.map(createNewItem)
  console.log();
  getList.append(...createNewList)
}
createNewList()
