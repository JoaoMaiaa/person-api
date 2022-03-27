let burger = document.querySelector('.navbar-burger')
let navMenu = document.querySelector('.navbar-menu')

burger.addEventListener('click', (e)=>{
    e.target.classList.toggle('is-active')
    navMenu.classList.toggle('is-active')
})