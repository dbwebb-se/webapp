(function() {
    "use strict";

    // Add shared header, footer as a toolbar.
    $("[data-role='header'], [data-role='footer']").toolbar();



    if (window.location.href.indexOf("index") > -1) {
        document.getElementById("middleSpan").innerHTML = "<h3>This text is passed from main.js. If you click the links, you can view some images.</h3>";
    } else if (window.location.href.indexOf("genie") > -1) {
        var genie = document.getElementById("genie");
        var img = document.createElement("img");
        var cap = document.createElement("figcaption");
        cap.innerHTML = "The Genie - served from main.js";
        img.src = "img/genie.jpg";
        genie.appendChild(img);
        genie.appendChild(cap);
    }
})();

$(document).on('pagecontainerchange', function() {

    // Each of the pages in this demo has a data-title attribute
    // which value is equal to the text of the nav button
    // For example, on first page: <div data-role="page" data-title="Me-sida">
    var current = $( ".ui-page-active" ).jqmData("title");

    // Change the heading
    $("[data-role='header'] h1").text(current);
    //Remove active class from nav buttons
    $("[data-role='navbar'] a.ui-btn-active").removeClass("ui-btn-active");
    //Add active class to current nav button
    $("[data-role='navbar'] a").each(function() {
        if ($(this).text() === current) {
            $(this).addClass( "ui-btn-active");
        }
    });
});
