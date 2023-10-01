$(document).ready(function () {
    const dots = $('.msk-slider-dots');
    $('.msk-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'msk-slider-dot slick-dots',
        appendDots: dots,
        useCss: true
    });
    const dotsNews = $('.msk-news-dots');
    $('.msk-slider-news').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'msk-new-dot slick-dots',
        appendDots: dotsNews,
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
    });
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
            stars.map((i, star) => {
                if (i > index) {
                    star.classList.remove('-color-yellow-dark');
                } else {
                    star.classList.add('-color-yellow-dark');
                }
            })
        })
    })
    const dotsAddress = $('.msk-address-dots');
    $('#msk-address-slider').slick({
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'msk-address-dot slick-dots',
        appendDots: dotsAddress,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1,
    })
})