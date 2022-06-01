const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('ul');
ingredients.map(ingredient =>{
  const li = document.createElement('li');
  li.classList.add('item');
  ulList.append(li);
  li.textContent = ingredient;
 
  
})

// const food = ingredients.map(ingredient =>{
//     let item = document.createElement('li');
//     item.innerHTML = ingredient;
//     item.textContent = ingredient;
//     ulList.append(item)
//     item.classList.add('item')
    
//   })

// console.log(food);


