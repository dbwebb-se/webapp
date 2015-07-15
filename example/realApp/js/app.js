/**
 * app.js
 */

var app = (function() {

    var home = function(name) {
        renderTemplate('home', { name: name || 'anonymous' });
    }
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
            $.get('http://localhost:1337/api/v1/examples', function(data) {
                renderTemplate(template, {
                    list: data
                });
            });
        });
    };

    var examples = function(slug) {
        console.log(slug);
        var url = "http://localhost:1337/api/v1/examples/" + slug;
        $.get(url, function (data) {
            console.log(data);
        });
    };

    var routes = {
        '/': home,
        '/author': author,
        '/books': [ books, function() {
            var view = {
                heading: 'hello',
                dataBody: 'yolo',
            };
            renderTemplateFromId('ajaxLoading', view);
        } ],
        '/books/view/:bookId': viewBook,
        '/examples': getExampleNames,
        '/examples/:slug': examples
    };

    /**
     * Render a mustache template
     * @param  String templateId Id of the template
     * @param  Object obj        The object
     */
    var renderTemplateFromId = function(templateId, obj) {
        var templateHTML = document.getElementById(templateId).innerHTML;
        var div = document.getElementById('view');

        div.innerHTML = Mustache.render(templateHTML, obj);
    };
    var renderTemplate = function(template, obj) {
        var div = document.getElementById('view');
        div.innerHTML = Mustache.render(template, obj);
    };

    var router = new Router(routes);
    router.init();
    var privates = {

    };

    return {};
})();





    // The routes for the app, a self invoking anon function..
    /*routes: (function() {

        route('/', 'home', function() {

            this.name = 'Anonymous';
            console.log('Home route');
        });

        route('/about', 'about', function() {
            console.log('About route');
            this.title = 'About';
            this.text = 'yoloasdasjdlkjaslkdjasl';
        });

        route('/ajax', 'ajaxLoading', function() {
            this.heading = 'ajax loading';
            this.dataBody = 'Loading....';

            var root = 'http://jsonplaceholder.typicode.com';
            // A real ajax call.
            $.ajax({
                url: root + '/posts/1',
                method: 'GET'
            }).done(function(data) {

                $('#view').html(Mustache.render($('#ajaxLoading').html(), {
                    heading: 'Ajax load',
                    dataBody: data.body
                }));

            }).fail(function() {
                alert("error loading json data");
            });
        });

        route('/examples', function() {
            // Load example template from file.
            var data = [ "a", "b", "c", "d" ];
            this.list = data;
            var view = $('#view');

            // get view.
            $.get('views/examples.mustache', function(template) {
                console.log('Tepmlate', template);
                // get data.
                $.get('http://localhost:1337/api/v1/examples', function(data) {
                    console.log('data', data);
                    var output = Mustache.render(template, {
                        list: data
                    });
                    view.html(output);
                });
            });
        });

        route('/examples/detectScreenSize', 'screensize', function () {
            var url = 'http://localhost:1337/api/v1/examples/detectScreenSize';
            $.get(url, function (data) {
                console.log(data);
                $('#view').html(data);
            });
        });

    })(),*/

