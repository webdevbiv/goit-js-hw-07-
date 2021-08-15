const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const listRef = document.querySelector('#gallery')
// function newItem(item) {
//   return `<li><img src='${item.url}' alt="${item.alt}"></li>`
// }
// newItem(images)
// const newList = images.map(newItem)
// console.log(newList);
// listRef.insertAdjacentHTML('afterbegin', newList)

const galleryRef = document.querySelector('#gallery')
console.log(galleryRef);
function createItem(item) {
  const newItem = document.createElement('li')
  const newImage = document.createElement('img')
  newImage.src = item.url
  newImage.alt = item.alt
  console.log(newImage);
  console.log(newImage);
  newItem.append(newImage)
  return newItem
}

const newList = images.map(createItem)
galleryRef.append(...newList)

