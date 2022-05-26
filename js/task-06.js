const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);


input.addEventListener('blur', validationInput);

function validationInput (e){
    if(e.currentTarget.value.length === dataLength){
        input.style.borderColor = 'green';
    }else{
        input.style.borderColor = 'red';
        
    }
    
}
