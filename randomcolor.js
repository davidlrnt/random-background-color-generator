(function ( $ ) {
    function randomize(base, settings) {
        var num1 = 1 + Math.floor(Math.random() * 255);
        var num2 = 1 + Math.floor(Math.random() * 255);
        var num3 = 1 + Math.floor(Math.random() * 255);
        base.animate({"background-color":"rgb("+num1+","+num2+","+num3+")"}, settings.timing);
    }
    function randomInit(base) {
        var num1 = 1 + Math.floor(Math.random() * 255);
        var num2 = 1 + Math.floor(Math.random() * 255);
        var num3 = 1 + Math.floor(Math.random() * 255);
        base.css({"background-color":"rgb("+num1+","+num2+","+num3+")"});
    }
    $.fn.randomColor = function( options ) {
        var settings = $.extend({
            timing: 5000
        }, options );

        var base = this;

        if(this.attr('data-randcol')){
            clearInterval(this.attr('data-randcol'));
            this.attr('data-randcol',-1);
        }

        randomInit(base);

        timerid = setInterval(function(){
            randomize(base, settings);
        }, settings.timing);

        this.attr('data-randcol',timerid);

        return this;
    };
    $.fn.randomColour = function( options ){
        this.randomColor(options);
    }
}( jQuery ));