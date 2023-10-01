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
    
})