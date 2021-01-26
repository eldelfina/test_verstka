(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());

//burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
       menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active')
    });
}());

//autorisation window 

(function () {
    const signupButton = document.querySelector('.header__signup');
    const autorisation = document.querySelector('.autorisation');
    const autorisationCloseItem = document.querySelector('.autorisation__window-close');
    signupButton.addEventListener('click', () => {
        autorisation.classList.add('autorisation__active');
     });
     autorisationCloseItem .addEventListener('click', () => {
        autorisation.classList.remove('autorisation__active')
    });
}());