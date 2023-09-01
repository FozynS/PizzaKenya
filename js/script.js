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
// $(btnCall).on('click', () => {
//     closeModal();
// });
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
//**Pizza spinner */
// let toRadians = (deg) => deg * Math.PI / 180;
// let card = (val, a1, a2, b1, b2) => b1 + (val - a1) * (b2 - b1) / (a2 - a1);
// class Pizza {
//     constructor(id) {
//         this.canvas = document.getElementById(id)
//         this.ctx = this.canvas.getContext('2d')

//         this.sliceCount = 6
//         this.sliceSize = 60

//         this.width = this.height = this.canvas.height = this.canvas.width = this.sliceSize * 2 + 50
//         this.center = this.height / 2 | 0

//         this.sliceDegree = 360 / this.sliceCount
//         this.sliceRadians = toRadians(this.sliceDegree)
//         this.progress = 0
//         this.cooldown = 10
//     }
//     update() {
//         let ctx = this.ctx
//         ctx.clearRect(0, 0, this.width, this.height)

//         if (--this.cooldown < 0) this.progress += this.sliceRadians*0.01 + this.progress * 0.07

//         ctx.save()
//         ctx.translate(this.center, this.center)
        
//         for (let i = this.sliceCount - 1; i > 0; i--) {
//             let rad
//             if (i === this.sliceCount - 1) {
//                 let ii = this.sliceCount - 1

//                 rad = this.sliceRadians * i + this.progress

//                 ctx.strokeStyle = '#FBC02D'
//                 cheese(ctx, rad, .9, ii, this.sliceSize, this.sliceDegree)
//                 cheese(ctx, rad, .6, ii, this.sliceSize, this.sliceDegree)
//                 cheese(ctx, rad, .5, ii, this.sliceSize, this.sliceDegree)
//                 cheese(ctx, rad, .3, ii, this.sliceSize, this.sliceDegree)
//         } else rad = this.sliceRadians * i
//             // border
//             ctx.beginPath()
//             ctx.lineCap = 'butt'
//             ctx.lineWidth = 11
//             ctx.arc(0, 0, this.sliceSize, rad, rad + this.sliceRadians)
//             ctx.strokeStyle = '#F57F17'
//             ctx.stroke()

//             // slice
//             let startX = this.sliceSize * Math.cos(rad)
//             let startY = this.sliceSize * Math.sin(rad)
//             let endX = this.sliceSize * Math.cos(rad + this.sliceRadians)
//             let endY = this.sliceSize * Math.sin(rad + this.sliceRadians)
//             let varriation = [0.9,0.7,1.1,1.2]
//             ctx.fillStyle = '#FBC02D'
//             ctx.beginPath()
//             ctx.moveTo(0, 0)
//             ctx.lineTo(startX, startY)
//             ctx.arc(0, 0, this.sliceSize, rad, rad + this.sliceRadians)
//             ctx.lineTo(0, 0)
//             ctx.closePath()
//             ctx.fill()
//             ctx.lineWidth = .3
//             ctx.stroke()

//             // meat
//             let x = this.sliceSize * .65 * Math.cos(rad + this.sliceRadians / 2)
//             let y = this.sliceSize * .65 * Math.sin(rad + this.sliceRadians / 2)
//             ctx.beginPath()
//             ctx.arc(x, y, this.sliceDegree / 6, 0, 2 * Math.PI)
//             ctx.fillStyle = '#D84315'
//             ctx.fill()
//         }
//         ctx.restore()

//         if (this.progress > this.sliceRadians) {
//         ctx.translate(this.center, this.center)
//         ctx.rotate(-this.sliceDegree * Math.PI / 180)
//         ctx.translate(-this.center, -this.center)

//         this.progress = 0
//         this.cooldown = 20
//         }
//     }
// }
//     function cheese(ctx, rad, multi, ii, sliceSize, sliceDegree) {
//         let x1 = sliceSize * multi * Math.cos(toRadians(ii * sliceDegree) - .2)
//         let y1 = sliceSize * multi * Math.sin(toRadians(ii * sliceDegree) - .2)
//         let x2 = sliceSize * multi * Math.cos(rad + .2)
//         let y2 = sliceSize * multi * Math.sin(rad + .2)

//         let csx = sliceSize * Math.cos(rad)
//         let csy = sliceSize * Math.sin(rad)

//         var d = Math.sqrt((x1 - csx) * (x1 - csx) + (y1 - csy) * (y1 - csy))
//         ctx.beginPath()
//         ctx.lineCap = 'round'

//         let percentage = card(d, 15, 70, 1.2, 0.2)

//         let tx = x1 + (x2 - x1) * percentage
//         let ty = y1 + (y2 - y1) * percentage
//         ctx.moveTo(x1, y1)
//         ctx.lineTo(tx, ty)

//         tx = x2 + (x1 - x2) * percentage
//         ty = y2 + (y1 - y2) * percentage
//         ctx.moveTo(x2, y2)
//         ctx.lineTo(tx, ty)

//         ctx.lineWidth = card(d, 0, 100, 20, 2)
//         ctx.stroke()
//     }

//     let pizza = new Pizza('pizza');
//     (function update() {
//         requestAnimationFrame(update)
//         pizza.update()

//     }())

//! Card for Menu /
// class MenuCard {
//     constructor(src, alt, title, description, parentSelector, ...classes) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = description;
//         this.classes = classes;
//         this.parent = document.querySelector(parentSelector);
//     }

//     render() {
//         const element = $('<div></div>');

//         if (this.classes.length === 0) {
//             this.element = 'menu__item';
//             element.addClass(this.element);   
//         } else {
//             this.classes.forEach(className => element.addClass(className));
//         }

//         element.innerHTML = `
//             <div class="main__menu_pizza">
//                 <img src=${this.src} alt=${this.alt}>
//                 <div class="main__menu_pizza-description">
//                 <h2 class="main__menu_pizza-description_title">${this.title}</h2>
//                 <p class="main__menu_pizza-description_text">${this.descr}</p>
//                 </div>
//             </div>
//         `;
//         this.parent.append(element);
//     }
// }

const getResource = async (url) => {
    const result = await fetch(url);

    if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
};

getResource('http://localhost:3000/menu')
    .then(data => createCard(data));

    function createCard(data) {
        data.forEach(({img, altimg, title, descr}) => {
            const element = document.createElement('div');
            element.classList.add('main__menu_pizza')

            element.innerHTML = `
                <img src=${img} alt=${altimg}>
                <div class="main__menu_pizza-description">
                <h2 class="main__menu_pizza-description_title">${title}</h2>
                <p class="main__menu_pizza-description_text">${descr}</p>
                </div>
        `;

            $('.main__menu').append(element)
        });
    }
    // .then(data => {
    //     data.forEach(({img, altimg, title, descr}) => {
    //         new MenuCard(img, altimg, title, descr, '.main__menu').render();
    //     });
    // });

//! Forms BackEnd /
const forms= $('form');

const message = {
    loading: '../images/spinner.svg',
    success: "Thank you! We'll be in contact with you soon",
    failure: 'Something went wrong...'
};

forms.each((index, item) => {
    bindPostData(item);
});

const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await result.json();
};

function bindPostData(form) {
    $(form).on('submit', (e) => {
        e.preventDefault();

        const statusMessage = $('img');
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
        const prevModaldialog = $('.modal__dialog');

        prevModaldialog.addClass('hide');
        openModal();

        const thanksModal = $('<div></div>');
        thanksModal.addClass('.modal__dialog');
        thanksModal.html(`
            <div class="modal__content">
                <div class="modal__close" data-close>x</div>
                <div class="modal__title">${message}</div>
            </div>
        `);

        $('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModaldialog.addClass('show');
            prevModaldialog.removeClass('hide');
            closeModal();
        }, 2500);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res))
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

