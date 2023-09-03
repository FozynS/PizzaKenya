require('es6-promise').polyfill();
import $ from 'jquery';
import 'nodelist-foreach-polyfill';

import siteAnimation from './modules/siteAnimation';
import modalDialog from './modules/modalDialog';
import cards from './modules/cards';
import forms from './modules/forms';
import header from './modules/header';
import menu from './modules/menu';
import map from './modules/map';

window.addEventListener('DOMContentLoaded', () => {
    siteAnimation('header', '.main__section', 'footer', 'header-loading-hide', 'header-loading-show',
    'main-section-hide', 'main-section-show',
    'footer-hide', 'footer-show');
    modalDialog('#button-order', '#contact', '.modal__close', '.modal', '.btn');
    cards('main__menu_pizza', '.main__menu');
    forms('form', '.modal__dialog', '.modal');
    header('.header__nav_list-item');
    menu('#menu', '.main__menu', 'hover-menu', 'animation-hide', 'animation-show');
    map('#location', '.location', '.map');
})

export default $;



