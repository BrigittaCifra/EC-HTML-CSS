// ELEMENT REFERENSER
const menuButton = document.getElementById('mobile-menu-toggle');
const mobileNavLinks = document.querySelector('.mobile-nav-links');
const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const mobileNav = document.querySelector('.mobile-nav');
const open = document.getElementById('modal-btn-open');
const modal_wrapper = document.getElementById('modal-wrapper');
const close = document.getElementById('modal-btn-close');

// MOBILMENY
menuButton.addEventListener('click', () => {
    //()=> ger addEventListener en funktion att köra

    mobileNavLinks.classList.toggle('hidden');
    mobileNavBtn.classList.toggle('hidden');
    mobileNav.classList.toggle('menu-open');
});

// MODAL
open.addEventListener('click', () => {
    modal_wrapper.classList.add('show');
});

close.addEventListener('click', () => {
    modal_wrapper.classList.remove('show');
});