# Detect orientation changes through css3 and/or vanilla javascript

## CSS3

In css3 you can use the media query use the orientation flag to detect the different orientation. Here is an example on how you can do it.
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
orientation. You can use the `window.matchMedia`, see first example, or you can just simply add an event-listener on `window.resize`, see second example, and then check the innerWidth/innerHeight to see which viewport it is at the moment.

#### First example
```javascript
var mql = window.matchMedia('(orientation: portrait)');

// Add a media query change listener
mql.addListener(function(m) {
    if (m.matches) {
        // Changed to portrait
        console.info('Protrait!');
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
    if (window.innerWidth > window.innerHeight) {
        console.log('Landscape');
    } else {
        console.log('Protrait');
    }
}, false);
```

### JQuery mobile

```javascript
$(window).on("orientationchange", function(event) {
  $("#orientation").text( "This device is in "+ event.orientation + "mode!");
});

```
