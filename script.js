(function () {
    $(document).ready(function () {
        /*
        console.log('DEBUT');
        for (let i = 0; i < 10; ++i) {
            $("#element").fadeOut(1000,
                function () {
                    console.log('out fini')
                });
            $("#element").fadeIn(1000,
                function () {
                    console.log('in fini')
                });
        }
        console.log('FIN');


        */

        let lines = []
        for (let j = 0; j < 8; ++j) {
            lines.push($("<div></div>").css({'width':'40vw', 'height':'5vw', 'display':'flex'}));
        }
        for (let j = 0; j < lines.length; ++j) {
            if (j%2==0) {
                for (let i = 0; i < lines.length/2; i++) {
                    $(lines[j]).append($("<div>&nbsp;</div>").css({'width':'5vw', 'height':'5vw', 'background':'white', 'border':'solid 1px black', 'display':'flex'}))
                    $(lines[j]).append($("<div>&nbsp;</div>").css({'width':'5vw', 'height':'5vw', 'background':'black', 'border':'solid 1px black', 'display':'flex'}))
                }
            } else {
                for (let i = 0; i < lines.length/2; i++) {
                    $(lines[j]).append($("<div>&nbsp;</div>").css({'width':'5vw', 'height':'5vw', 'background':'black', 'border':'solid 1px black', 'display':'flex'}))
                    $(lines[j]).append($("<div>&nbsp;</div>").css({'width':'5vw', 'height':'5vw', 'background':'white', 'border':'solid 1px black', 'display':'flex'}))
                }
            }
            $('body').append(lines[j]);
        }
    });
})();