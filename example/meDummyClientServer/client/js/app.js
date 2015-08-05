/**
 * Main.js
 */


var app = (function(router) {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

    var init = function() {
        console.log('App init');
    };



    return {
        init: init
    }
})(router.getInstance());


/*
    3 html svar.


 */