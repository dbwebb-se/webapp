/**
 * Response
 */

var querystring = require('querystring');
var url = require('url');
export function buildRequest (req, res) {
    // stupid jshint gives error on res not being used..
    /*jshint unused:false*/
    req = req || {};


    req.params = {};
    req.query = url.parse(req.url, true).query;

    req.body = {};
    req.unParsedBody = '';

    req.on('data', (chunk) => {
        req.unParsedBody += chunk;
        // Too much POST data, kill the connection!
        if (req.unParsedBody.length > 1e6)
            request.connection.destroy();
    });

    req.on('end', () => {
        req.body = querystring.parse(req.unParsedBody);
    });

    return req;
}
