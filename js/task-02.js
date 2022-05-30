const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('ul');
const food = ingredients.map(ingredient =>{
    let item = document.createElement('li');
    item.innerHTML = ingredient;
    item.textContent = ingredient;
    ulList.append(item)
    item.classList.add('item')
    
  })

console.log(food);


