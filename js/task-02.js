const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('ul');
const food = ingredients.forEach(el => {
  let itemList = document.createElement('li');
  ulList.append(itemList);
  itemList.innerHTML = el;
  itemList.classList.add("item")
})
console.log(food);


