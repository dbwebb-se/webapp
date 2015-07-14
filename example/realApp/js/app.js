

var app = {

    init: function() {
        console.log('Init app');
        this.routes();
    },

    routes: function() {
        route('/', 'home', function () {

        });

        route('/lol/kalle', 'template55', function() {
            this.heading = 'Temp';
            this.dataBody = 'Loading....';

            var that = this;
            console.log(this);

            var root = 'http://jsonplaceholder.typicode.com';
            // A real ajax call.
            $.ajax({
                url: root + '/posts/1',
                method: 'GET'
            }).done(function(data) {

                $('#view').html(tmpl('template55', {
                    heading: 'funkar',
                    dataBody: data.body
                }))

            }).fail(function() {
                alert("error loading json data");
            });

            console.log(this);

        });

        route('/page1', 'template1', function () {
          this.greeting = 'Hello world!';
          this.moreText = 'Loading...';

          // Simulating an Ajax call which take 0.5 s
          setTimeout(function () {
            this.moreText = 'Bacon ipsum...';
          }.bind(this), 500);
        });

        route('/page2', 'template2', function () {
          this.heading = 'I\'m page two!';
        });
    }
};

$(document).ready(function() {
    app.init();
});

