/* const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click',() =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else {
        menu.classList.add('hidden');
    }
}) */
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener('click', () => {
    // Toggles the 'hidden' class without needing an if condition
    menu.classList.toggle('hidden');
});