// Script for responsive nav
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    hamburger.classList.toggle('active');
});