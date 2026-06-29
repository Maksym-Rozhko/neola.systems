import GraphModal from 'graph-modal';
const modal = new GraphModal();
window.modal = modal;

const closeModalElems = document.querySelectorAll('.graph-modal__close');

closeModalElems.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.parentElement.click();
        });
    }
});
