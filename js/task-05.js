const input = document.querySelector('input');
const span = document.querySelector('#name-output');


input.addEventListener('input', inputChange);

function inputChange(event)  {
    console.log(event.currentTarget.value);
    if(event.currentTarget.value === ''){
        span.textContent = 'Anonymous'
    }else{
        span.textContent = event.currentTarget.value;
    }

}