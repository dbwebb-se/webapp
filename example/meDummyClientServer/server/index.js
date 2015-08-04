/**
 * Index.js
 */

import Router from './router/router';

var fs = require('fs');
var router = new Router();

router.get('/view', (req, res) => {
    fs.readdir('./view', (err, files) => {
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

router.get('/view/:name', (req, res) => {
    var path = './view/' + req.params.name;
    /*if (!req.params.name.includes('.json')) {
        path += '.json';
    }*/

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


require('http').createServer((req, res) => {
    router.route(req, res);
}).listen(1337);



