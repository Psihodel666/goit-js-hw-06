const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

const min = input.getAttribute('min');
const max = input.getAttribute('max');

input.addEventListener('input', () => {
   
    span.style.fontSize = `${input.value}px`;
})
input.dispatchEvent(new Event('input'));