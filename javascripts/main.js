$(window).load(function () {
    var i = 0;
    var images = ['images/bg0.jpg', 'images/bg.jpg'];
    var image = $('#header_wrap');
    setInterval(function () {
        image.fadeOut(1000, function () {
            image.css('background-image', 'url(' + images[i++] + ')');
            image.fadeIn(1000);
        });
        if (i == images.length)
            i = 0;
    }, 14000);
});