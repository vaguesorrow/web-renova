document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu-main');
    const btnmenu = document.querySelector('.textbox-main-1-2');
    const btnclosemenu=document.querySelector('.close-menu')

    btnmenu.addEventListener('click', function () {
        menu.style.display = 'flex';
        menu.classList.add('fullscreen');
    });

    btnclosemenu.addEventListener('click', function () {
        menu.style.display = 'none';
    });
});