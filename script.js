(function () {
    'use strict';
    $(function () {
        let lines = [];
        let cssBlack =  {'width':'5vw', 'height':'5vw', 'background':'black', 'border':'solid 1px black', 'display':'flex'};
        let cssWhite = {'width':'5vw', 'height':'5vw', 'background':'white', 'border':'solid 1px black', 'display':'flex'};
        for (let i = 0; i < 8; ++i) {
            lines.push($("<div></div>").css({'width':'40vw', 'height':'5vw', 'display':'flex'}));
        }
        for (let i = 0; i < lines.length; ++i) {
            for (let j = 0; j < lines.length/2; j++) {
                $(lines[i])
                    .append($("<div>&nbsp;</div>").css(i%2==0 ? cssWhite : cssBlack).mouseenter(function () {
                        $(this).css('background', 'red');
                    }).mouseleave(function () {
                        $(this).css('background', i%2==0 ? 'white' : 'black');
                    }))
                    .append($("<div>&nbsp;</div>").css(i%2!=0 ? cssWhite : cssBlack).mouseenter(function () {
                        $(this).css('background', 'red');
                    }).mouseleave(function () {
                        $(this).css('background', i%2!=0 ? 'white' : 'black');
                    }))
            }
            $('body').append(lines[i]);
        }
    });
})();