const activate = document.querySelector('.menu-icon');
activate.addEventListener('click', (event) =>{
    document.querySelector('.real-menu').classList.replace('none','visible');
})
const hide = document.querySelector('.close-menu');
hide.addEventListener('click',(event) =>{
    document.querySelector('.real-menu').classList.replace('visible','none');
})