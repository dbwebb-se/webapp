/**
 * Index.js
 */

import Router from './router/router';

var fs = require('fs');
var router = new Router();

router.get('/pages', (req, res) => {
    fs.readdir('./pages', (err, files) => {
        if (!err && files && files.length > 0) {
            // return only json files.
            files = files.filter((f) => f.includes('.json'));
            res.json(files);
        } else if (err) {
            res.json({ err: err.message }, 500);
        } else {
            res.json({ err: 'No files found'}, 404);
        }
    });
});

router.get('/pages/:page', (req, res) => {
    var path = './pages/' + req.params.page;
    if (!req.params.page.includes('.json')) {
        path += '.json';
    }

    fs.readFile(path, (err, content) => {
        if (!err && content) {
            // Send the content and converts it to string from buffer.
            res.json(content.toString());
        } else if (err) {
            res.json({ err: err.message}, 500);
        } else {
            res.json({ err: 'file not found'}, 404);
        }
    });
});


require('http').createServer((req, res) => {
    router.route(req, res);
}).listen(1337);



