export function buildResponse(req, res) {
    res = res || {};

    /**
     * Send a response
     * @param  string|object body   The body you want to send
     * @param  integer contentType Content type: text/plain, application/json
     * @param  integer statusCode  HTTP status code
     * @return obj
     */
    res.send = function send(body, contentType, statusCode) {
        // Ensure charset is set.
        res.charset = res.charset || 'utf-8';
        res.statusCode = statusCode || res.statusCode || 200;
        res.body = body;
        res.headers = 'text/html';

        // Set the content type.
        if (contentType) {
            this.setHeader('Content-Type', contentType);
        } else {
            this.setHeader('Content-Type', 'text/html');
        }

        // Switch on the type of the body.
        switch (typeof body) {
            case 'string':
                if (!this.get('Content-Type')) {
                    this.setHeader('Content-Type', 'text/html');
                }
            break;

            case 'boolean':
            case 'number':
            case 'object':

                if (body === null) {
                    body = '';
                }
                // Stringify the body to valid JSON.
                body = JSON.stringify(body);

            break;
        }
        // Write and end..
        // res.statusCode = statusCode;
        res.write(body);
        res.end();
    };

    /**
     * Send json as response
     * @param  object  body   The body you want to send
     * @param  Integer code   The Statuscode of the response
     */
    res.json = function sendJson(body, code = 200) {
        res.send(body, 'application/json', code);
    };

    /**
     * Send plain text response
     * @param  object  body   The body you want to send
     * @param  Integer code   The Statuscode of the response
     */
    res.plain = function sendPlain(body, code = 200) {
        if (!this.get('Content-Type')) {
            this.setHeader('Content-Type', 'text/plain');
        }
        res.send(body, 'text/plain', code);
    }

    res.html = function sendHtml(body, code = 200) {
        if (!this.get('Content-Type')) {
            this.setHeader('Content-Type', 'text/html');
        }
        res.send(body, 'text/html', code);
    }

    /**
     * Shorthand getHeader function.
     * @param  string field
     * @return string
     */
    res.get = function(field) {
        return this.getHeader(field);
    };

    return res;
}
