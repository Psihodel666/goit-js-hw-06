const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);


input.addEventListener('blur', validationInput);

function validationInput (e){
    if(e.currentTarget.value.length === dataLength){
        input.classList.remove('invalid');
        input.classList.add('valid')
    }else{
        input.classList.remove('valid');
        input.classList.add('invalid')
    
    }
    
}
