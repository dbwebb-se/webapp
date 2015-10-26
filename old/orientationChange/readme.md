# Detect orientation changes through css3 and/or vanilla javascript

## CSS3

In css3 you can use the media query using the orientation flag to detect the different orientation. Here is an example on how you can do it.
```css 
@media screen and (orientation:portrait) {
    /* portrait-specific styles */
}

@media screen and (orientation:landscape) {
    /* landscape-specific styles */
}
```

## Javascript

In vanilla javascript there are some different ways to detect the changes in 
orientation. You can use the `window.matchMedia`, see first example, or you can 
just simply add an event-listener on `window.resize`, see second example, and 
then check the innerWidth/innerHeight to see which viewport it is at the moment.

#### First example
```javascript
var mql = window.matchMedia('(orientation: portrait)');

// Add a media query change listener
mql.addListener(function(m) {
    if (m.matches) {
        // Changed to portrait
        console.info('Portrait!');
    } else {
        // Changed to landscape
        console.info('Landscape!');
    }
}, false);

```

#### Second example
```javascript
// Listen for resize changes
window.addEventListener("resize", function() {
    // Detects if its landscape or portrait 
    if (window.innerWidth > window.innerHeight) {
        console.log('Landscape');
    } else {
        console.log('Portrait');
    }
}, false);
```

### jQuery mobile

If you want to use jQuery mobile there is a way for you too. Here is an small 
example on how to use jQuery mobiles `orientationchange` event.

```javascript
$(window).on("orientationchange", function(event) {
  $("#orientation").text( "This device is in "+ event.orientation + "mode!");
});
```

### Read more

[Mozilla API docs on matchMedia.](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)   
[jQuery mobile](https://api.jquerymobile.com/orientationchange/)       
[Stackoverflow discussion. ](http://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad)
