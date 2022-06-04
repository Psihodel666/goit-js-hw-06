const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('ul');

const itemList = ingredients.map(ingredient =>{
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;  
  return li;
})
console.log(itemList);

ulList.append(...itemList);


