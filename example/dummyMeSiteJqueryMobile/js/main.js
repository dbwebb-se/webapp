(function () {
    'use strict';
    // Add shared panel as a panel.
    $('#menu').panel().enhanceWithin();
    // Add shared header as a toolbar.
    $("[data-role='header']").toolbar().enhanceWithin();
})();

