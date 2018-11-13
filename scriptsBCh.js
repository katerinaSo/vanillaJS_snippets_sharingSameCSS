window.addEventListener('load', handler(), false);

function handler(e) {
    if (!e) {
        e = window.event;
    };

    var dataInput = document.getElementById('dataInput'),
        btnDraw = document.getElementById('btnDraw');

    dataInput.addEventListener('change', makeData, true);
    btnDraw.addEventListener('click', draw, true);


    function makeData() {
        dt = (this.value).split(',');
        for (var i = 0; i < dt.length; i = i + 1) {
            dt[i] = parseInt(dt[i]);
        };
        return dt;
    };


    function draw() {
        createChart('forChart', dt,
            300, 300, 'sienna');
    };


    function createChart(canvas, data, width, height, color) {
        if (typeof canvas == 'string') canvas = document.getElementById(canvas);
        canvas.width = width;
        canvas.height = height;
        var context = canvas.getContext('2d');

        //maximum in data
        var max = Number.NEGATIVE_INFINITY;
        for (var i = 0; i < data.length; i = i + 1) {
            if (max < data[i]) max = data[i];
        };

        //scale
        var scale = (height / max),
            barwidth = Math.round(width / data.length);

        //each bar
        for (var i = 0; i < data.length; i = i + 1) {
            var barHeight = data[i] * scale,
                x = barwidth * i,
                y = height - barHeight;
            context.fillStyle = color;
            context.fillRect(x, y, barwidth - 6, barHeight);
        };
    };
};