"use strict";

window.checkSizeAndOrientation = function() {
    var width = window.screen.width,
        height = window.screen.height,
        isPortrait = width < height,
        text = "",
        element = document.getElementById("orientationContent");

    text  = "<p>Skärmens storlek är (w x h):<br>" + width + " x " + height;
    text += "<p>Orienteringen är : " + (isPortrait ? "Porträtt" : "Landskap");

    element.innerHTML = text;
};

window.onresize = function() {
    window.checkSizeAndOrientation();
};

window.checkSizeAndOrientation();
