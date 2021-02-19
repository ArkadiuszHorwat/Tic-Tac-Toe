const left = document.querySelector('.left');
const right = document.querySelector('.right');
const menuContainer = document.querySelector('.menu-container');

left.addEventListener('mouseenter', () => {
    menuContainer.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    menuContainer.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    menuContainer.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    menuContainer.classList.remove('hover-right');
}); 