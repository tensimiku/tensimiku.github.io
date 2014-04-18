$(window).load(function () {
    
    var i = 0;
    var bgs = ['images/bg0.jpg', 'images/bg.jpg'];
    var bg = $('#header_wrap');
    $("#header_wrap").click(function () {
        bg.fadeOut(393, function () {
            if (i >= 2)
            i = 0;
            bg.css('background-image', 'url(' + bgs[i++] + ')');
        });
        bg.fadeIn(393);
    }
    );
    /*
    setInterval(function () {

        bg.fadeOut(393, function () {
            if (i >= bgs.length)
            i = 0;
            bg.css('background-image', 'url(' + bgs[i++] + ')');
            bg.fadeIn(393);
        });

    }, 13939);
    */
});