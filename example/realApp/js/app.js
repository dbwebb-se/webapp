

var app = {

    init: function() {
        console.log('Init app');
        //this.routes();
    },

    // The routes for the app, a self invoking anon function..
    routes: (function() {

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

        route('/examples', 'examples', function() {
            // Load example template from file.
            var data = [ "a", "b", "c", "d" ];
            this.list = data;
            var view = $('#view');

            // get view.
            $.get('views/examples.mustache', function(template) {
                // get data.
                $.get('http://localhost:1337/api/v1/examples', function(data) {
                    var output = Mustache.render(template, {
                        list: data
                    });
                    view.html(output);
                });
            });
        });

        route('/examples?name', 'examples', function() {
            console.log('Yolo');
        });

    })(),

};

$(document).ready(function() {
    app.init();
});

