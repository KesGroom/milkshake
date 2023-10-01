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
    })
})