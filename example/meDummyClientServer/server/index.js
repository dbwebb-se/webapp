/**
 * Index.js
 */


var fs = require('fs');
var router = require('./routes'); // Idk about the name here....
var mongoose = require('mongoose');
var join = require('path').join;

// Require models.
fs.readdirSync(join(__dirname, '/models')).forEach((file) => {
    if (file.indexOf('.js') != -1) {
        require(join(__dirname, '/models', file));
    }
});

var User = mongoose.model('User');

// Connect to mongodb.
var connect = function() {
    var options = {
        server: {
            socketOption: {
                keepAlive: 1
            },
        },
    };

    mongoose.connect('mongodb://localhost/webapp', options);
}
connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Insert a user.
// var user = new User({
//     name: 'Test',
//     email: 'test@test.com'
// });

// // Save the user to the db..
// user.save();
// console.log('saved user to db');


// Start the HTTP server
require('http').createServer((req, res) => {
    router.route(req, res);
}).listen(1337);
