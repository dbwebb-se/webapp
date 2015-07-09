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
    console.log('Connection', connection);
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


    app.addPage(spots);
    app.addPage(spot);
    app.init();

});


var spots = {
    init: function(){
        // add handlers;
        $("#spots li a").on("click", function(e){
            e.preventDefault();
            spot.load($(e.target).attr("data-id"));
        });
    },

    load: function() {
        //showSpinner();
        $.ajax({
            url: "http://jsonplaceholder.typicode.com/posts/1",
            complete: function() {
                //hideSpinner();
                transition("#spots", "fade");
            }
        });
    },
};

function transition(toPage, type, reverse) {
    var toPage = $(toPage),
    fromPage = $("#pages .current"),
    reverse = reverse ? "reverse" : "";

    if (toPage.hasClass("current") || toPage === fromPage) {
        return;
    };

    toPage
        .addClass("current " + type + " in " + reverse)
        .one("webkitAnimationEnd", function(){
            fromPage.removeClass("current " + type + " out " + reverse);
            toPage.removeClass(type + " in " + reverse);
        });

    fromPage.addClass(type + " out " + reverse);
}




var spot = {
    init: function() {
        $("#spot-back").click(function() {
            transition("#spots", "push", true);
        });
    },

    load: function(id) {
        $.ajax({
            url: "/http://jsonplaceholder.typicode.com/posts/" + id,
            complete: function(){
                // Set the header
                $("#spot .page-header h1").text(id);
                transition("#spot", "push");
            }
        });
    }
};

var app = {

    pages: [],

    data: [
        { title: 'Test', body: 'Are you ready?' },
        { title: 'Test2', body: 'Another' },
    ],

    postTemplate: {},
    blogTemplate: {},
    twitterTemplate: {},

    init: function() {
        console.log('Init app');

        $('#blog-list li a').on('click', function(event) {
            var id = this.href.slice(-1);
            app.postBeforeShow(event, id);
        });

        // Compile with handlebars
        this.postTemplate = Handlebars.compile($('#post-template').html());
        this.blogTemplate = Handlebars.compile($('#blog-list-template').html());
        this.twitterTemplate = Handlebars.compile($('#twitter-list-template').html());


        $('#examples').on('click', function() {
            app.homeBeforeCreate();
        });


        // From the book
        $.each(this.pages, function() {
            this.init && this.init();
        });

        if (this.pages.length) {
            this.pages[0].load();
        }
    },

    addPage: function(page) {
        this.pages.push(page);
    },
    loadPage: function(page, data) {
        page.load(data);
    },

    // fungerar inte.
    /*loadTwitter: function() {
        var twitQuery = "celeb+spotting",
            twitUrl = "http://search.twitter.com/search.json?q=";

        var url = 'http://jsonplaceholder.typicode.com/posts/2';
        $.getJSON(url, function(data){
            console.log(data);
            $('twitter-list').html(this.twitterTemplate);
        });
    },*/

    homeBeforeCreate: function(event, args) {
        this.getApiData();
    },

    getApiData: function() {
        var that = this;
        $.get('https://app-o-mat.com/videofeed/', function(data) {

            // Parse xml bullshit.
            that.data = $(data).find("item").map(function(i, item) {
                return {
                    title: $(item).find("title").text(),
                    body: $(item).find("description").text(),
                };
            }).toArray();

            $('#content').html(that.blogTemplate(that.data));
            $('#content').enhanceWithin();
        });
    },

    postBeforeShow: function(event, args) {
        var post = app.data[args];
        $('#content').html(this.postTemplate(post));
    },

    // "#post[?](\\d+)$" -> handler postBeforeShow.
};
