
function generateListdata() {
    const listRef = document.querySelectorAll('h2')
    // console.log(listRef);
    console.log(`В списке ${listRef.length} категории.`)
    const listItemsRef = document.querySelectorAll('.item')
    // console.log(listItemsRef);
    listItemsRef.forEach(item => {
        const title = item.querySelector('h2').innerText
        const items = item.querySelectorAll('li').length
        console.log(`Категория: ${title}\nКоличество элементов: ${items}`); 
    });
}
generateListdata()
