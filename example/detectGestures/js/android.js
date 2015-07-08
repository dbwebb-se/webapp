$(document).ready(function() {

    $('html').on('swipe', function(event) {
        console.log('swipe');
    });

    $('html').on('swiperight', function(event) {
        $('#content').append('<p>Swipe right<p>');
        console.log('swipe right');
    });

    $('html').on('swipeleft', function(event) {
        console.log('swipe left');
        $('#content').append('<p>Swipe left<p>');
    });

    $('html').on('tap', function(event) {
        console.log('TAP');
        $('#content').append('<p>Tap<p>');
    });

});