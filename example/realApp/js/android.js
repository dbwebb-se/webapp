$(document).ready(function() {
    if (window.innerWidth && window.innerWidth <= 480) {
        /*
        $('#header ul').addClass('hide');
        $('#header').prepend('<a href="#" class="ui-btn ui-corner-all ui-shadow ui-icon-bars ui-btn-icon-notext leftButton"></a>');
        */

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


    var connection = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
    console.log(connection);
    /*navigator.connection.addEventListener('change', function() {

    });*/

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


    $('#footer-summary').on('click', function(event) {
        ajaxStuff(1);
    });

    $('#footer-favs').on('click', function(event) {
        ajaxStuff(2);
    });

    $('#footer-gear').on('click', function(event) {
        ajaxStuff(3);
    });

    function ajaxStuff(id) {
        var root = 'http://jsonplaceholder.typicode.com';

        $.ajax({
            url: root + '/posts/' + id,
            method: 'GET'
        }).then(function(data) {
            console.log(data);
            $('#content').html('<h1>' + data.title + '</h1>' + '<p>' + data.body + '</p>');
        });
    }

});


