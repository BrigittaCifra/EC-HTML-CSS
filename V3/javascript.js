document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.material-symbols-outlined:last-child');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    const mobileNavBtn = document.querySelector('.mobile-nav-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    console.log('Menu button:', menuButton);
    console.log('Nav links:', mobileNavLinks);
    console.log('Nav btn:', mobileNavBtn);

    if (menuButton) {
        menuButton.addEventListener('click', function () {
            console.log('Menu clicked!');

            mobileNavLinks.classList.toggle('hidden');
            mobileNavBtn.classList.toggle('hidden');
            mobileNav.classList.toggle('menu-open');
        });
    }
});