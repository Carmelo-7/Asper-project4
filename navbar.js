const ham=document.querySelector('.fas');
const navLinks=document.querySelectorAll('.off');

ham.addEventListener('click',() => {
    navLinks.forEach((navLink) => {
        navLink.classList.toggle('off');
        navLink.classList.toggle('on');
    });
   

})