import $ from '../script.js';

// Map Animation /
function map(location, locationImg, mapSection) {
    const btnLocation = $(location),
        imgLocation = $(locationImg),
        map = $(mapSection);

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
}

export default map;