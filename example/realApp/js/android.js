$(document).ready(function() {
    if (window.innerWidth && window.innerWidth <= 480) {

        /*$('#header ul').addClass('hide');
        $('#header').append('<div class="leftButton">Menu</div>');*/
    }

    // Print online/offline
    document.getElementById('content').innerHTML = navigator.onLine ? 'You are online!!' : 'You are offline......';

    function toggleMenu() {
        $('#header ul').toggleClass('hide');
        $('#header .leftButton').toggleClass('pressed');
    }

    $('.leftButton').on('click', toggleMenu);
});