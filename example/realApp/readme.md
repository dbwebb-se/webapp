Detect the screen size

### Viewport
```html
<meta name="viewport" content="minimal-ui, user-scalable=no, width=device-width" />
```

### Homescreen app icon
```html
<link rel="apple-touch-icon-precomposed" href="myCustomIcon.png" />
```



### Fullscreen capable
```html
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
```




### window.screen
```javascript
var width = window.screen.width;
var height = window.screen.height;

document.getElementById('content').innerHTML = 'Width: ' + width + ' height: ' + height;

// Prints out
Width: 414 height: 736 for Apple iPhone 6 plus.

```