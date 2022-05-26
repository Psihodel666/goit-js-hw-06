let counterValue = Number(document.querySelector("#value").textContent);


const bthMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');

const counterPlus = () => {
    document.querySelector('#value').textContent = counterValue += 1;
};
const counterMinus = () => {
    document.querySelector('#value').textContent = counterValue -= 1;
}

btnPlus.addEventListener('click', counterPlus)
bthMinus.addEventListener('click', counterMinus)


console.log(counterValue)
console.log(btnPlus)