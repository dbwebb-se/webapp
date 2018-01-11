/**
 * Response
 */
"use strict";

var url = require('url');

/**
 * @version 1.0
 */
export function buildRequest(req) {
    req = req || {};
    req.params = {};
    req.query = url.parse(req.url, true).query;
    req.queryParts = url.parse(req.url, true);

    req.rawBody  = '';
    // Takes care of any data that comes frome a post-request
    req.on('data', (chunk) => {
        req.rawBody += chunk;
    });

    return req;
}
