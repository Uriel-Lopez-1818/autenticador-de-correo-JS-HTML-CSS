
const form = document.querySelector(`.container__content__form`);
const inputEmail =document.querySelector(`.container__content__form__email`);
const error = document.querySelector(`.container__content__form__email--error`);

form.addEventListener(`submit`, (e)=>{

    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    regExp.test(inputEmail.value);
    
    console.log(  regExp.test(inputEmail.value))

    if(  regExp.test(inputEmail.value) == true){
        inputEmail.style.border=`1px solid hsl(0, 93%, 68%)`
        inputEmail.style.backgroundImage=`url("")`;
        error.innerHTML = ``;

    }else{
        e.preventDefault();
        inputEmail.style.border =`1px solid red`
        inputEmail.style.backgroundImage = `url("./images/icon-error.svg")`;
        error.innerHTML = `Please provide a valid email`;
    }
    
})