document.addEventListener('DOMContentLoaded', function () {
    //Väntar tills hela DOM-trädet är laddat innan koden körs

    //MOBILMENY ELEMENT - skappar konstanter med HTML elementen
    const menuButton = document.getElementById('menu-toggle');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    const mobileNavBtn = document.querySelector('.mobile-nav-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    //MODAL ELEMENT
    const open = document.getElementById('modal-btn-open');
    const modal_wrapper = document.getElementById('modal-wrapper');
    const close = document.getElementById('modal-btn-close');

    /*______________________________________________________________*/

    //OBILMENY FUNKTIONALITET

    /*Lägger till en eventlyssnare för 'click'-händelser på menuButton-elementet
    (hamburgarikonen). Funktionen körs när användaren klickar på ikonen*/
    menuButton.addEventListener('click', function () {

        /*Växlar synligheten på HTML elementen genom att lägga 
        till/ta bort klassen hidden*/
        mobileNavLinks.classList.toggle('hidden');
        mobileNavBtn.classList.toggle('hidden');
        /*Växlar klassen menu-open på mobileNav-elementet*/
        mobileNav.classList.toggle('menu-open');
    });


    /*Modalen öppnas och stängs med olika knappar, därför behövs två olika 
    eventlyssnare. Den här eventlyssnaren kommer att lyssna efter om 
    användaren trycker på 'logga in' knappen. i menyn*/
    open.addEventListener('click', () => {
        modal_wrapper.classList.add('show');
    });

    /*Den här eventlyssnaren lyssnar efter om användaren trycker på
    stänga knappen när modalen är synlig*/
    close.addEventListener('click', () => {
        modal_wrapper.classList.remove('show');
    });


});