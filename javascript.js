document.addEventListener('DOMContentLoaded', function () {

    // ELEMENT REFERENSER
    const menuButton = document.getElementById('mobile-menu-toggle');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    const mobileNavBtn = document.querySelector('.mobile-nav-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const open = document.getElementById('modal-btn-open');
    const modal_wrapper = document.getElementById('modal-wrapper');
    const close = document.getElementById('modal-btn-close');

    // DYNAMISK HEADER HÖJD
    function setHeroHeight() {
        const header = document.querySelector('header');

        if (header) {
            const headerHeight = header.offsetHeight;

            if (headerHeight > 0) {
                document.documentElement.style.setProperty('--navbar-height', headerHeight + 'px');
            }
        }
    }

    // MOBILMENY
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            mobileNavLinks.classList.toggle('hidden');
            mobileNavBtn.classList.toggle('hidden');
            mobileNav.classList.toggle('menu-open');

            setTimeout(setHeroHeight, 100);
        });
    }

    // MODAL
    if (open) {
        open.addEventListener('click', () => {
            modal_wrapper.classList.add('show');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            modal_wrapper.classList.remove('show');
        });
    }

    // INITIALISERING
    setTimeout(setHeroHeight, 100);
    window.addEventListener('load', setHeroHeight);
    window.addEventListener('resize', setHeroHeight);
});