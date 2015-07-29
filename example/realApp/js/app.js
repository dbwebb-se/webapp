/**
 * app.js
 */

var app = (function($, document, config) {
    // var apiUrl = 'http://henrikolund.se:1337/api/v1/examples'
    var apiUrl = 'http://localhost:1337/api/v1/examples/';

    config = config || {};
    config.googleApiKey = 'AIzaSyA3_KJy5tcyibc-JwYFQ4_660g2mEWsrps';

    // Nav panel closes on a link click
    $('#nav ul li a').on('click', function() {
        $('#nav').panel('close');
    });

    // Stupid fix for / route.
    if (window.location.href.charAt(window.location.href.length - 1) === '/') {
        window.location.replace('#/');
    }

    /**
     * The routes for the app.
     * @type {Object}
     */
    var routes = {

        hello: function(name) {
            name = name || 'anonymous';
            renderTemplate('home', {
                name: name
            });
        },

        author: function () {
            console.log("author");
        },

        books: function () {
            console.log("books");
        },

        viewBook: function (bookId) {
            console.log("viewBook: bookId is populated: " + bookId);
        },

        getExampleNames: function() {
            // get view.
            $.get('views/examples.mustache', function(template) {
                // get data.
                $.get(apiUrl, function(data) {
                    renderTemplate(template, {
                        list: data
                    });
                    //console.log(template);
                    //console.log({ list:data });
                    //console.log('Nya fina templaten', carl.compile(template, { list: data }));
                    //$('#view').html(carl.compile(template, { list: data }));

                }).fail(function(xhr, status, error) {
                    $('#view').html("An AJAX error occured: " + status + "\nError: " + error);
                });
            }).fail(function(xhr, status, error) {
                $('#view').html("An AJAX error occured: " + status + "\nError: " + error);
            });
        },

        examples: function(slug) {
            var url = apiUrl + slug + "?type=json";
            $.get(url, function (data) {
                if (data.code !== 200) {
                    $('#view').html(data.msg);
                } else {
                    data.style = data.style ? data.style.map(function(str) {
                        return str.substr(0, 6) + ' class="' + slug + '"' + str.substr(6);
                    }) : null;

                    data.externJavascript = data.externJavascript ? data.externJavascript.map(function(str) {
                        return str.substr(0, 6) + ' class="' + slug + '"' + str.substr(6);
                    }) : null;

                    $('head').append(data.style);
                    $('head').append(data.externJavascript);
                    $('.' + slug).remove();
                    $('#view').html(data.body).prepend('<div id="description">' + data.description + '</div>');
                }
            });
        },
    };

    /**
     * Routing table, match a route to a function (or write anon functions).
     * @type {Object}
     */
    var routingTable = {
        '/': function() {
            renderTemplate('index', { title: 'Index page' });
        },
        '/hello/?:name': 'hello',
        '/author': 'author',
        '/books': [ 'books', function() {
            var view = {
                heading: 'Books',
                dataBody: 'yolo',
            };
            renderTemplate('ajaxLoading', view);
        } ],
        '/books/view/:bookId': 'viewBook',
        '/examples': 'getExampleNames',
        '/examples/:slug': 'examples',
    };

    /**
     * Render mustache template to a view.
     * @param  string viewId   Optional parameter, can be set to the elements Id, defaults to 'view'
     * @param  string template A mustache template string or the ID of the mustache template.
     * @param  Object obj      The values you want to transform into the template.
     *
     * Usage:
     * renderTemplate('index', { title: 'Index page' }); // Not specifying what view, defaults to 'view'.
     * renderTemplate('view', 'index', { title: 'Index page' }); // Using templateId instead.
     * renderTemplate('view', '<h1>{{title}}</h1>', { title: 'Index page' }); // The real way to write, specifying all.
     */
    var renderTemplate = function (viewId, template, obj) {

        // Not specifiying view, sets it to 'view'
        if (typeof obj === 'undefined') {
            obj = template;
            template = viewId;
            viewId = 'view';
        }

        var templateHTML = '';
        if (document.getElementById(template)) {
            // Template is an ID. we must fetch the template from its id.
            templateHTML = document.getElementById(template).innerHTML;
        } else {
            //template is a real template and we can use it directly
            templateHTML = template;
        }

        var element = document.getElementById(viewId);
        // Set element html to the rendered mustache template.
        //element.innerHTML = Mustache.render(templateHTML, obj);
        viewId = "#" + viewId;
        $(viewId).html(Mustache.render(templateHTML, obj)).enhanceWithin();
    };


    // Use the router.
    var options = {
        strict: false,
        resource: routes,
    };
    var router = new Router(routingTable).configure(options).init();

    return {
        router: router,
        routingTable: routingTable,
        routes: routes,
        config: config
    };
})(jQuery, document);
