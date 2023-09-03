import $ from '../script.js';

// Cards for Menu /
function cards(mainPizza, mainMenu) {
    axios.get('http://localhost:3000/menu')
    .then(data => createCard(data));

    function createCard(data) {
        data.data.forEach(({img, altimg, title, descr}) => {
            const element = document.createElement('div');
            element.classList.add(mainPizza)

            element.innerHTML = `
                <img src=${img} alt=${altimg}>
                <div class="main__menu_pizza-description">
                <h2 class="main__menu_pizza-description_title">${title}</h2>
                <p class="main__menu_pizza-description_text">${descr}</p>
                </div>
        `;

            $(mainMenu).append(element)
        });
    }
}

export default cards;