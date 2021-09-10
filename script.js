// Script for responsive nav
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("hamburger");

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
})