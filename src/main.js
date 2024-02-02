const button = document.querySelector('.mobile-menu-open-icon');
const modalIcon = document.querySelector('.mobile-menu');
const closeBtnMenu = document.querySelector('.mobile-menu-btn-close')

button.addEventListener('click', () => {
    modalIcon.classList.add('is-open');
});

closeBtnMenu.addEventListener('click', () => {
    modalIcon.classList.remove('is-open')
});