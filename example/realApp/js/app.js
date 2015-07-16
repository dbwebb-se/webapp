/**
 * app.js
 */

var app = (function() {

    // Nav panel closes on a link click
    $('#nav ul li a').on('click', function() {
        $('#nav').panel('close');
    });

    // Stupid fix for / route.
    if (window.location.href.charAt(window.location.href.length - 1) === '/') {
        window.location.replace('#/');
    }

    var hello = function(name) {
        name = name || 'anonymous';

        renderTemplate('home', {
            name: name
        });
    };

    var author = function () { console.log("author"); };

    var books = function () { console.log("books"); };

    var viewBook = function (bookId) {
        console.log("viewBook: bookId is populated: " + bookId);
    };

    var getExampleNames = function() {
        // get view.
        $.get('views/examples.mustache', function(template) {
            console.log('Tepmlate', template);
            // get data.
            $.get('http://henrikolund.se:1337/api/v1/examples', function(data) {
                renderTemplate(template, {
                    list: data
                });
            }).fail(function(xhr, status, error) {
                $('#view').html("An AJAX error occured: " + status + "\nError: " + error);
            });
        }).fail(function(xhr, status, error) {
            $('#view').html("An AJAX error occured: " + status + "\nError: " + error);
        });
    };

    var examples = function(slug) {
        console.log(slug);
        //var url = "http://localhost:1337/api/v1/examples/" + slug + "?type=json";
        var url = "http://henrikolund.se:1337/api/v1/examples/" + slug + "?type=json";
        $.get(url, function (data) {
            console.log(data);

            $('#view').html(data.body);
        });
    };

    var routes = {
        '/': function() { // TODO: FIX THIS.
            renderTemplate('index', { title: 'Index page' }); // Not specifying what view, defaults to 'view'.
            //renderTemplate('view', 'index', { title: 'Index page' }); // Using templateId instead.
            //renderTemplate('view', '<h1>{{title}}</h1>', { title: 'Index page yolo' }); // The real way to write.
        },
        '/hello/?:name': hello,
        '/author': author,
        '/books': [ books, function() {
            var view = {
                heading: 'Books',
                dataBody: 'yolo',
            };
            renderTemplate('ajaxLoading', view);
        } ],
        '/books/view/:bookId': viewBook,
        '/examples': getExampleNames,
        '/examples/:slug': examples,
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
        element.innerHTML = Mustache.render(templateHTML, obj);
    };

    var options = {
        strict: false,
    };

    var router = new Router(routes).configure(options);
    router.init();

    var privates = {
        routes: routes,
    };

    return {};
})();
