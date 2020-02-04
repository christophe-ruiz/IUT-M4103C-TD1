(function () {
    $(document).ready(function () {
        let lines = [];
        let cssBlack =  {'width':'5vw', 'height':'5vw', 'background':'black', 'border':'solid 1px black', 'display':'flex'};
        let cssWhite = {'width':'5vw', 'height':'5vw', 'background':'white', 'border':'solid 1px black', 'display':'flex'};
        for (let i = 0; i < 8; ++i) {
            lines.push($("<div></div>").css({'width':'40vw', 'height':'5vw', 'display':'flex'}));
        }
        for (let i = 0; i < lines.length; ++i) {
            for (let j = 0; j < lines.length/2; j++) {
                if (i%2==0) {
                    $(lines[i])
                        .append($("<div>&nbsp;</div>").css(cssWhite))
                        .append($("<div>&nbsp;</div>").css(cssBlack));
                } else {
                    $(lines[i])
                        .append($("<div>&nbsp;</div>").css(cssBlack))
                        .append($("<div>&nbsp;</div>").css(cssWhite));
                }
            }
            $('body').append(lines[i]);
        }
    });
})();