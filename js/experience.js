$(document).ready(function () {
    const dotsCustomer = $('.msk-customer-dots');
    $('.msk-photo-client-experience').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'msk-customer-dot slick-dots',
        appendDots: dotsCustomer,
        centerMode: true,
        variableWidth: true,
        initialSlide: 0,
    });
})