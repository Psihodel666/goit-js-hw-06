
const form = document.querySelector('.login-form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const {
        elements : {email, password},
    } = e.currentTarget;
    
    if(email.value == '' && password.value === ''){
        alert('Введите почту и пароль')
    }else if(email.value === ''){
        alert('Введите почту')
    }else if(password.value === ''){
        alert('Введите пароль')
    }

    const refs = {
        email:email.value,
        password:password.value,
    };

    console.log(refs);
    form.reset();
    
})