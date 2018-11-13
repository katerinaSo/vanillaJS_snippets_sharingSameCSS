window.addEventListener('load', handler, false);

function handler(e) {
    if (!e) {
        e = window.event;
    };

    var thumbs = document.getElementsByClassName('small'),
        screen = document.getElementById('screen');


    for (var i = 0; i < thumbs.length; i = i + 1) {
        thumbs[i].addEventListener("click", openScreen, false);
    };


    function openScreen() {
        screen.src = (this.src).replace('smallerPicture', 'largerPicture');
        screen.style.visibility = "visible";
    };
};