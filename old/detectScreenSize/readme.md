# Detect the screen size.

Example on how to detect the screen size with javascript.

```javascript
(function() {
    // Takes the outer screen width and height
    var width = window.screen.width;
    var height = window.screen.height;
    var html = '<h1>Screen size</h1>' +
               '<p>Width: ' + width + 
               ' height: ' + height + '</p>';
    // Prints the html to the #content
    document.getElementById('content').innerHTML = html;
})();

```
