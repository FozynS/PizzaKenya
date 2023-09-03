import $ from '../script.js';

// Modal Dialog /
function openModal(modalSelector) {
    const modal = $(modalSelector)
    modal.removeClass('hide');
    modal.addClass('show');
};
function closeModal(modalSelector) {
    const modal = $(modalSelector)
    modal.addClass('hide');
    modal.removeClass('show');
};
function modalDialog (btnOrder, contact, modalClose, modalSelector, call) {
    const buttonOpen = $(btnOrder),
        btnContact = $(contact),
        buttonClose = $(modalClose),
        modal = $(modalSelector),
        btnCall = $(call);

    $(btnContact).on('click', () => {
        openModal(modal);
    })
    $(buttonOpen).on('click', () => {
        openModal(modal);
    });
    $(buttonClose).on('click', () => {
        closeModal(modal);
    });
    $(btnCall).on('click', () => {
        closeModal(modal);
    });
    $(document).on('keydown', (e) => {
        if(e.key === 'Escape' && modal.hasClass('show')) {
            closeModal(modal);
        }
    });
    $(document).on('click', (e) => {
        if (modal.is(e.target) && modal.has(e.target).length === 0) {
            closeModal(modal);
        }
    });
}

export default modalDialog;
export {openModal};
export {closeModal};