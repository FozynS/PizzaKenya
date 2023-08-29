import $ from 'jquery';

// Site Animation /

// Modal Dialog /
const buttonOpen = $('#button-order'),
        btnContact = $('#contact'),
        buttonClose = $('.modal__close'),
        modal = $('.modal'),
        btnCall = $('.btn');

function openModal() {
    modal.removeClass('hide');
    modal.addClass('show');
}
function closeModal() {
    modal.addClass('hide');
    modal.removeClass('show');
};
$(btnContact).on('click', () => {
    openModal();
})
$(buttonOpen).on('click', () => {
    openModal();
});
$(buttonClose).on('click', () => {
    closeModal();
});
$(btnCall).on('click', () => {
    closeModal();
})
$(document).on('keydown', (e) => {
    if(e.key === 'Escape' && modal.hasClass('show')) {
        closeModal();
    }
});
$(document).on('click', (e) => {
    if (modal.is(e.target) && modal.has(e.target).length === 0) {
        closeModal();
    }
});

//! Forms BackEnd /
const forms= $('form');

const message = {
    loading: 'images/spinner.svg',
    success: "Thank you! We'll be in contact with you soon",
    failure: 'Something went wrong...'
};

forms.each(item => {
    postData(item);
})

function postData(form) {
    $(forms).on('submit', (e) => {
        e.preventDefault();

        const statusMessage = $('div');
        statusMessage.addClass('modal-response');
        statusMessage.text($(message.loading));
        form.append($(statusMessage));

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-type', 'multipart/form-data');
        const formData = new FormData(form);

        request.send(formData);

        $(request).on('load', () => {
            if(request.status === 200) {
                console.log(request.response);
                statusMessage.text($(message.success));
            } else {
                statusMessage.text($(message.failure));
            }
        });
    });
};


// Animation Header /
const headerList = $('.header__nav_list-item');
headerList.each((index, items) => {
    const item = $(items);
    $(item).on( "mouseenter", () =>{
        item.addClass('hover')
    }).on( "mouseleave", () =>{
        item.removeClass('hover')
    })
});

// Animation Menu /
const buttonMenu = $('#menu'),
        menuPizza = $('.main__menu'),
        pizzas = $('.main__menu_pizza');

pizzas.each((index, items) => {
    const item = $(items);
    $(item).on( "mouseenter", () =>{
        item.addClass('hover-menu')
    }).on( "mouseleave", () =>{
        item.removeClass('hover-menu')
    })
});

$(buttonMenu).on('click', () => {
    if(menuPizza.hasClass('animation-hide')){
        menuPizza.removeClass('animation-hide');
        menuPizza.addClass('animation-show');
    } else {
        menuPizza.addClass('animation-hide');
        menuPizza.removeClass('animation-show');
    }
})

// Map Animation /
const btnLocation = $('#location'),
        imgLocation = $('.location'),
        map = $('.map');

function openMap() {
    map.removeClass('hide');
    map.addClass('show');
}
function closeMap() {
    map.addClass('hide');
    map.removeClass('show');
};
btnLocation.on('click', () => {
    openMap()
})
imgLocation.on('click', () => {
    openMap()
})
$(document).on('click', (e) => {
    if (map.is(e.target) && map.has(e.target).length === 0) {
        closeMap();
    }
});

