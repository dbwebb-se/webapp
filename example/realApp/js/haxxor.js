/**
 * Sometimes you need a little
 * to make the world a better place
 */
var haxxor = (function () {
    /**
     * This method should remove everything that
     * has to do with google
     */
    return function() {
        $('script').not('.save').remove();
        // Removes everything
        $('#google-maps').remove();
        $('iframe').remove();
        // "removes" google api
        google = undefined;
    }
})();
