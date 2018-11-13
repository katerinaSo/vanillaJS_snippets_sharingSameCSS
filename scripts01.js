window.addEventListener('load', handler, false);

function handler(e) {
    if (!e) {
        e = window.event;
    };

    var screen = $('screen'),
        btnImg01 = $('image01'),
        btnImg02 = $('image02'),
        btnImg03 = $('image03'),
        squirrelAddress = 'largerPicture/squirrel.jpg',
        swanAddress = 'largerPicture/swan.jpg',
        catAddress = 'largerPicture/cat.jpg';


    btnImg01.addEventListener('click', function () {
        screen.src = squirrelAddress;
        show();
    }, false);


    btnImg02.addEventListener('click', function () {
        screen.src = swanAddress;
        show();
    }, false);


    btnImg03.addEventListener('click', function () {
        screen.src = catAddress;
        show();
    }, false);


    function $(id) {
        return document.getElementById(id);
    };

    function show() {
        screen.style.visibility = "visible";
    };
};