$(window).load(function () {
    var i = 0;
    var bgs = ['images/bg0.jpg', 'images/bg.jpg'];
    var bg = $('#header_wrap');
    setInterval(function () {
        bg.fadeOut(393, function () {
            bg.css('background-image', 'url(' + bgs[i++] + ')');
            bg.fadeIn(393);
        });
        if (i == bgs.length)
            i = 0;
    }, 13939);
});