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
})