
var routes = {};
//
function route (path, templateId, controller) {
    routes[path] = { templateId: templateId, controller: controller };
}
var el = null;

function router () {
    // Lazy load view element:
    el = el || document.getElementById('view');
    // Current route url (getting rid of '#' in hash as well):
    var url = location.hash.slice(1) || '/';
    // Get route by url:
    var route = routes[url];
    // Do we have both a view and a route?
    if (el && route.controller) {
        // Render route template with John Resig's template engine:
        //el.innerHTML = tmpl(route.templateId, new route.controller());

        // Mustache..
        el.innerHTML = Mustache.render(document.getElementById(route.templateId).innerHTML, new route.controller());
    }
}
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);
