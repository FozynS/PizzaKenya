import $ from '../script.js';

// Animation Menu /
function menu(btnMenu, menu, menuHover, hide, show) {
    const buttonMenu = $(btnMenu),
    menuPizza = $(menu);

    menuPizza.on('mouseover mouseout', '.main__menu_pizza', (event) => {
        const targetPizza = event.target.closest('.main__menu_pizza');
        if (targetPizza) {
            $(targetPizza).toggleClass(menuHover);
        }
    });

    $(buttonMenu).on('click', () => {
        if(menuPizza.hasClass(hide)){
            menuPizza.removeClass(hide);
            menuPizza.addClass(show);
        } else {
            menuPizza.addClass(hide);
            menuPizza.removeClass(show);
        }
    });
}

export default menu;