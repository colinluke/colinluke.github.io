const mainMenu = document.getElementsByClassName('main-menu')[0];
const menuTop = mainMenu.offsetTop;

window.onscroll = (event) => {
    if (window.pageYOffset >= menuTop) {
        if (!mainMenu.classList.contains('fixed-menu')) {
            mainMenu.classList.add('fixed-menu');
        }
    } else {
        mainMenu.classList.remove('fixed-menu');
    }
};