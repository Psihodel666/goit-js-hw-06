const listItem = document.querySelectorAll('.item');
const lengthListItem =  listItem.length;
console.log(`Number of categories: ${lengthListItem}`);

listItem.forEach((el,index, arr) => {

    
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements ${el.lastElementChild.children.length}`);

})
