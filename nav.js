const closeBtn = document.querySelector('.closeBtn')
const menuBtn = document.querySelector('.menuBtn')
const navlinks = document.querySelector('.navLinks')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobileMenu')
})

closeBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobileMenu')
})