$(document).ready(function () {
    const dotsCustomer = $('.msk-customer-dots');
    $('.msk-customers-slider').slick({
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'msk-customer-dot slick-dots',
        appendDots: dotsCustomer,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1,
    });

    const menuButton = $('#menu-button');
    const closeMenuButton = $('#close-menu-button');
    const menu = $("#msk-lateral-menu");
    const body = $('body');
    menuButton.click(() => {
        body[0].classList.add('no-scroll');
        menu[0].classList.add('open');
    })
    closeMenuButton.click(() => {
        body[0].classList.remove('no-scroll');
        menu[0].classList.remove('open');
    })

    const popUpBackdrop = $('.msk-popup');
    const popUp = $('.msk-card-popup');
    const openPopupButton = $('.msk-section-experience .form-experience .msk-button');
    const closePopupButton = $('.msk-card-popup .msk-button');

    openPopupButton.click(() => {
        popUpBackdrop[0].classList.add('msk-activate');
        popUpBackdrop[0].classList.remove('msk-disable');
        popUp[0].classList.add('msk-open');
        popUp[0].classList.remove('msk-close');
    })

    closePopupButton.click(() => {
        popUp[0].classList.replace('msk-open', 'msk-close');
        popUpBackdrop[0].classList.replace('msk-activate', 'msk-disable');
    })


    const stars = $('.msk-stars .fas.fa-star');
    stars.map((index, star) => {
        star.addEventListener('click', () => {
            console.log(`Click en la estrella ${index}`);
            stars.map((i, star) => {
                if (i > index) {
                    star.classList.remove('-color-yellow-dark');
                } else {
                    star.classList.add('-color-yellow-dark');
                }
            })

        })
    })
})