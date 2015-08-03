(function () {
    "use strict";
    // Add shared header as a toolbar.
    $("[data-role='header']").toolbar();

    // Add shared panel as a panel.
    $( "body>[data-role='panel']" ).panel();

})();
/*
$(document).on('pagecontainerchange', function () {

    // Each of the pages in this demo has a data-title attribute
    // which value is equal to the text of the nav button
    // For example, on first page: <div data-role="page" data-title="Me-sida">
    var current = $('.ui-page-active').jqmData('title');

    // Change the heading
    //$("[data-role='header'] h1").text(current);
    //Remove active class from nav buttons
    $("[data-role='navbar'] a.ui-btn-active").removeClass('ui-btn-active');
    //Add active class to current nav button
    $("[data-role='navbar'] a").each(function () {
        if ($(this).text() === current) {
            $(this).addClass('ui-btn-active');
        }
    });
});*/
