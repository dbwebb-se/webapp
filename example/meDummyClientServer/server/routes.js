import Router from './router/router';
var router = new Router();
var crypto = require('crypto');
var fs = require('fs');
var join = require('path').join;

var mongoose = require('mongoose');
var userModel = require('./models/user');
var User = mongoose.model('User');

function randomValueBase64(len) {
    return crypto.randomBytes(Math.ceil(len * 3 / 4))
        .toString('base64')
        .slice(0, len)
        .replace(/\+/g, '0')  // replace '+' with '0'
        .replace(/\//g, '0'); // replace '/' with '0'
}

function getGravatImage(email, args) {
    email = email || 'http://example.com/images/avatar.jpg';
    args = args || '';
    var baseUrl = 'http://www.gravatar.com/avatar/';
    return (baseUrl + md5(email) + args).trim();

}

function md5(str) {
    console.log(str);
    str = str.toLowerCase().trim();
    var hash = crypto.createHash('md5');
    hash.update(str);

    return hash.digest("hex");
}

router.group('/view', () => {
    router.get('/', (req, res) => {
        var path = join(__dirname, 'view');

        fs.readdir(path, (err, files) => {
            if (!err && files && files.length > 0) {
                // return only json files.
                files = files.filter((f) => f.includes('.json') || f.includes('.html'));
                res.json(files);
            } else if (err) {
                res.json({ err: err.message }, 500);
            } else {
                res.json({ err: 'No files found'}, 404);
            }
        });
    });

    router.get('/:name', (req, res) => {
        var path = join(__dirname, 'view', req.params.name);

        fs.readFile(path, (err, content) => {
            if (!err && content) {
                // Send the content and converts it to string from buffer.
                if (req.params.name.includes('.json')) {
                    res.json(content.toString());
                } else {
                    res.html(content.toString())
                }
            } else if (err) {
                res.json({ err: err.message}, 500);
            } else {
                res.json({ err: 'file not found'}, 404);
            }
        });
    });
});

router.get('/random', (req, res) => {

    var data = [];
    for (var i = 0; i < 10; i++) {
        data.push({
            names: randomValueBase64(12),
            numbers: Math.floor(Math.random() * (10000 - 10) + 10),
        });
    }

    res.json({
        title: 'Dynamic data',
        desc: 'Dynamic data in form of numbers and base64 randomBytes',
        data: data
    });
});

router.group('/users', () => {

    // GET /users
    router.get('/', (req, res) => {
        User.find((err, users) => {
            res.json(users);
        });
    });

    // POST /users
    router.post('/', (req, res) => {
        var user = new User({
            name: req.body.name,
            email: req.body.email,
            gravatar: getGravatImage(req.body.email)
        });

        user.save((err) => {
            if (err) {
                res.json({ err: err.message }, 400);
            } else {
                res.json(user);
            }
        });
    });
});





module.exports = router;