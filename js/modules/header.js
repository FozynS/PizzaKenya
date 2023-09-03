import $ from '../script.js';

// Animation Header /
function header(headerListItem) {
    const headerList = $(headerListItem);

    headerList.each((index, items) => {
        const item = $(items);
        $(item).on( "mouseenter", () =>{
            item.addClass('hover')
        }).on( "mouseleave", () =>{
            item.removeClass('hover')
        })
    });
}

export default header;