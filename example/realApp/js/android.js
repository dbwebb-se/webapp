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

    $('html').on('swipe', function(event) {
        console.log('swipe');
    });

    $('html').on('swiperight', function(event) {
        $('#content').html('Swipe right');
        console.log('swipe right');
    });

    $('html').on('swipeleft', function(event) {
        console.log('swipe left');
        $('#content').html('Swipe left');
    });

    // Offline/online
    window.addEventListener('load', function() {
        var status = document.getElementById("status");

        function updateOnlineStatus(event) {
            var condition = navigator.onLine ? "online" : "offline";

            status.className = condition;
            status.innerHTML = condition.toUpperCase();

            log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
        }

        window.addEventListener('online',  updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    });
});