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
  console.log(getList);
  function createNewItem(item) {
    const newItem = document.createElement('li')
    newItem.textContent = item
    return newItem
  }
  // console.log(createNewItem(ingredients));
  const newList = ingredients.map(createNewItem)
  // console.log(newList);
  getList.append(...newList)
}
createNewList()