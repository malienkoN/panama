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
const strike = document.querySelector('#strike');

check.addEventListener('click', ()=>{
    const current = check.querySelector('[name="size"]:checked');
    if(current){
        const [currentPrice, oldPrice] = current.value.split(',')
        price.innerText =  currentPrice;
        strike.innerText =  oldPrice;
    }
});


function readMore() {
    const dots = document.getElementById('dots');
    const more = document.getElementById('more');
    const btn = document.getElementById('btn');

    if(dots.style.display === 'none') {
        dots.style.display = 'inline';
        btn.innerHTML = 'Полный текст';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btn.innerHTML = 'Скрыть';
        more.style.display = 'inline';
    }
}