{
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#nav');
    const close = document.querySelector('#nav-close');

    burger.addEventListener('click', event => {
        event.preventDefault();

        nav.classList.add('show');
    });

    close.addEventListener('click', event => {
       event.preventDefault();

       nav.classList.remove('show');
    });
}

const price = document.querySelector('.price');
const check = document.querySelector('.check');

check.addEventListener('click', ()=>{
    const current = check.querySelector('[name="size"]:checked');
    if(current){
        price.innerText =  current.value
    }
});