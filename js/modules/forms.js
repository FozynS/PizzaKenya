import $ from '../script.js';
import { openModal, closeModal } from './modalDialog';
import { postData } from '../services/services.js';

// Forms BackEnd /
function forms(formSelector, modalDialog, modal) {
    const forms= $(formSelector);

    const message = {
        loading: '../images/spinner.svg',
        success: "Thank you! We'll be in contact with you soon",
        failure: 'Something went wrong...'
    };

    forms.each((index, item) => {
        bindPostData(item);
    });

    function bindPostData(form) {
        $(form).on('submit', (e) => {
            e.preventDefault();

            const statusMessage = $('<img>');
            statusMessage.src = message.loading;
            statusMessage.css(`
                display: block;
                margin: 0 auto;
            `);
            statusMessage.insertAfter(form);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                })
        });

        function showThanksModal(message) {
            const prevModaldialog = $(modalDialog);

            prevModaldialog.addClass('hide');
            openModal(modal);

            const thanksModal = $('<div></div>');
            thanksModal.addClass('.modal__dialog');
            thanksModal.html(`
                <div class="modal__content">
                    <div class="modal__close" data-close>x</div>
                    <div class="modal__title">${message}</div>
                </div>
            `);

            $(modal).append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                prevModaldialog.addClass('show');
                prevModaldialog.removeClass('hide');
                closeModal(modal);
            }, 2500);
        }

        fetch('http://localhost:3000/menu')
            .then(data => data.json())
            .then(res => console.log(res))
    };
}

export default forms;