$(document).ready(function () {
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