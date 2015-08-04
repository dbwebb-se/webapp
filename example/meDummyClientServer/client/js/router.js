/**
 * Routes.js
 */


var router = (function() {

    var instance;

    var options = {
        strict: false,
    };

    function init() {
        var routes = {
            // Index route
            '/': function IndexRoute() {

                /*renderTemplate('index', {
                    title: 'a',
                    body: 'index route from template'
                });*/



                console.log('index:D');
            },

            // About
            '/about': function() {
                renderTemplate('test', { body: 'about route from template'});
            },

            // Reports
            '/reports': function BooksRoute() {
                renderTemplate('reports', { body: 'reports route from template'})
            },
        };

        return new Router(routes).configure(options).init();
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();


