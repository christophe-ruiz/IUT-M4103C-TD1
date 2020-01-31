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

        for (let i = 0; i < 8; ++i) {
            let bloc = $("<div>&nbsp;</div>").css({'width':'5vw', 'height':'5vw', 'background':'white', 'border':'solid 1px red'});
            $('#titre').append(bloc);
        }
    });
})();