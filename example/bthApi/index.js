import Router from './router/router';
var path = require('path');
var fs   = require('fs');

// Imports the main router
var router = new Router();

router.group('/api', () => {
    router.group('/v1', () => {
        router.get('/', (req, res) => {
            res.plain(fs.readFileSync(path.join(__dirname, 'readme.md'), 'utf8'));
        });

        router.group('/examples', () => {
            router.get('/', (req, res) => {
                fs.readdir(path.join(__dirname, '../'), (err, dir) => {
                    dir = dir.filter((name) => {
                        return !name.includes('.');
                    });
                    res.json(dir, 200);
                });
            });

            router.get('/:exampleName', (req, res) => {
                var ext = path.extname(req.params.exampleName).replace('.', '');
                var fileContent;
                var fileToLoad = path.join(__dirname, '../', req.params.exampleName, 'index.html');
                try {
                    fileContent = fs.readFileSync(fileToLoad, 'utf-8');
                    res.html(fileContent);
                } catch (e) {
                    res.json({
                        code: 500,
                        msg: e.message,
                    });
                }
            });
        });

        router.group('/views', () => {
            router.get('/:filename', (req, res) => {
                var ext = path.extname(req.params.filename).replace('.', '');
                var fileContent;
                var fileToLoad = path.join(__dirname, 'views', req.params.filename);
                try {
                    fileContent = fs.readFileSync(fileToLoad, 'utf-8');
                    if (res[ext]) {
                        res[ext](fileContent);
                    } else {
                        res.json({
                            code: 501,
                            msg: 'Given extention is not yet supported.'
                        }, 501);
                    }
                } catch (e) {
                    res.json({
                        code: 500,
                        msg: e.message,
                    });
                }
            });
        })
    });
});

require('http').createServer((req, res) => {
    router.route(req, res);
}).listen(1337);
console.log('Listening on port 1337');
