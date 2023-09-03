import $ from 'jquery';

// Site Animation /
function siteAnimation (header, mainsection, footer, headerHide, headerShow, mainHide, mainShow, footerHide, footerShow) {
        const headerSection = $(header),
                mainSection = $(mainsection),
                footerSection = $(footer);
    
        function showElement(element, firstClass, secondClass, time) {
            setTimeout(() => {
                element.removeClass(firstClass);
                element.addClass(secondClass);
            }, time)
        };
    
        showElement(headerSection, headerHide, headerShow, 1000);
        showElement(mainSection, mainHide, mainShow, 1200);
        showElement(footerSection, footerHide, footerShow, 1400);
}

export default siteAnimation;