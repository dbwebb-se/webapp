/**
 * app.js
 */

var app = (function() {

    var hello = function(name) {
        name = name || 'anonymous';

        renderTemplateFromId('home', {
            name: name
        });
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

            $('#view').html(data);
        });
    };

    var routes = {
        '/': function() { // TODO: FIX THIS.
            renderTemplateFromId('about', { title: 'Home', text: 'lorem' });
        },
        '/hello/?:name': hello,
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
        '/examples/:slug': examples,
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

    var options = {
        strict: false,
    }
    var router = new Router(routes).configure(options);
    router.init();
    var privates = {

    };

    return {};
})();

