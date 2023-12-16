// SEARCH
const btnSearchOpen = document.querySelector('.navbar__btn-search');
const btnSearchClose = document.querySelector('.search__close');
const menuSearch = document.querySelector('.search');

btnSearchOpen.addEventListener('click', () => {
    menuSearch.classList.add('search--open');
});

btnSearchClose.addEventListener('click', () => {
    menuSearch.classList.remove('search--open');
});

// FILTER
const btnsFilter = document.querySelectorAll('.recommended__btn-filter');

btnsFilter.forEach(btn => {
    btn.addEventListener('click', () => {
        btnsFilter.forEach(button => {
            button.classList.remove('btn-filter--active');
        });

        btn.classList.add('btn-filter--active');
    });
});

/* HEADER AND FOOTER EFFECT SCROLL */
let isScrolling;
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > 0) {
        header.style.opacity = '0.1';
        footer.style.opacity = '0.1';
    } else {
        header.style.opacity = '1';
        footer.style.opacity = '1';
    }

    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        header.style.opacity = '1';
        footer.style.opacity = '1';
    }, 500);
});

/* LATERAL MENU */
const btnLateralMenu = document.querySelector('.navbar__btn-menu');
const lateralMenu = document.querySelector('.lateral-menu');
const overlay = document.querySelector('.overlay');

btnLateralMenu.addEventListener('click', () => {
    lateralMenu.classList.toggle('lateral-menu--open');
    overlay.classList.toggle('overlay--open');
    document.body.classList.toggle('body-scroll');
    btnLateralMenu.classList.toggle('navbar__btn-menu--open');
});
