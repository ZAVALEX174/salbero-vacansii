
const modal = document.querySelector('.modal-form');
const openModalBtns = document.querySelectorAll('.openModal');
const closesModal = document.querySelector('.modal-form__close-btn');

const modalTwo = document.querySelector('.modal-form-zayavka');
const modalTwoOpenBtn = document.querySelector('.hero__entry-form-btn');

modalTwoOpenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalTwo.classList.add('modal-form__opened');
    document.body.classList.add('scroll-lock');
})


openModalBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal-form__opened');
        document.body.classList.add('scroll-lock');
    })
})

closesModal.addEventListener('click', (e) => {
    e.preventDefault();

    modal.classList.remove('modal-form__opened');
    modalTwo.classList.remove('modal-form__opened');
    document.body.classList.remove('scroll-lock');
})

document.addEventListener('keydown', event => {
    if (event.key === "Escape" || event.keyCode === 27) {
        modalTwo.classList.remove('modal-form__opened');
        modal.classList.remove('modal-form__opened');
        document.body.classList.remove('scroll-lock');
    }
});

document.addEventListener('click', (e) => {
    const overlay = document.querySelector('.modal-form-zayavka');
    const form = document.querySelector('.modal-form-zayavka');
    console.log(overlay, form);

    if (e.target == form) {
        modalTwo.classList.remove('modal-form__opened');
        modal.classList.remove('modal-form__opened');
        document.body.classList.remove('scroll-lock');

    }

})
