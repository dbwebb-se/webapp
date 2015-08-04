/**
 * Utilities, just functions to help.
 */


/**
 * Render mustache template to a view.
 * @param  string viewId   Optional parameter, can be set to the elements Id, defaults to 'view'
 * @param  string template A mustache template string or the ID of the mustache template.
 * @param  Object obj      The values you want to transform into the template.
 *
 * Usage:
 * renderTemplate('index', { title: 'Index page' }); // Not specifying what view, defaults to 'view'.
 * renderTemplate('view', 'index', { title: 'Index page' }); // Using templateId instead.
 * renderTemplate('view', '<h1>{{title}}</h1>', { title: 'Index page' }); // The real way to write, specifying all.
 */
var renderTemplate = function (viewId, template, obj) {

    // Not specifiying view, sets it to 'view'
    if (typeof obj === 'undefined') {
        obj = template;
        template = viewId;
        viewId = 'view';
    }

    var templateHTML = '';
    if (document.getElementById(template)) {
        // Template is an ID. we must fetch the template from its id.
        templateHTML = document.getElementById(template).innerHTML;
    } else {
        //template is a real template and we can use it directly
        templateHTML = template;
    }

    var element = document.getElementById(viewId);
    // Set element html to the rendered mustache template.
    //element.innerHTML = Mustache.render(templateHTML, obj);
    viewId = "#" + viewId;
    $(viewId).html(Mustache.render(templateHTML, obj)).enhanceWithin();
};