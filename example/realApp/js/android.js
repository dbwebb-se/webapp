$(document).ready(function() {
    if (window.innerWidth && window.innerWidth <= 480) {

        $('#header ul').addClass('hide');
        $('#header').append('<div class="leftButton">Menu</div>');

    }

    // Print online/offline
    var node = document.createElement('h4');
    node.innerHTML = 'Internet status: ' + (navigator.onLine ? 'online!!' : 'offline');
    document.getElementById('internetStatus').appendChild(node);

    function toggleMenu() {
        $('#header ul').toggleClass('hide');
        $('#header .leftButton').toggleClass('pressed');
    }

    $('.leftButton').on('click', toggleMenu);
    $('.leftButton').on('swiperight', toggleMenu);
    $('#nav').on('swipeleft', toggleMenu);



    // Offline/online
    /*window.addEventListener('load', function() {
        var status = document.getElementById("status");

        function updateOnlineStatus(event) {
            var condition = navigator.onLine ? "online" : "offline";

            status.className = condition;
            status.innerHTML = condition.toUpperCase();

            log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
        }

        window.addEventListener('online',  updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    });*/
});