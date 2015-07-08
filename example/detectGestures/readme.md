Detect several gestures and print them out.



## Jquery

```js
$('html').on('swipe', function(event) {
    console.log('swipe');
});

$('html').on('swiperight', function(event) {
    $('#content').append('<p>Swipe right<p>');
    console.log('swipe right');
});

$('html').on('swipeleft', function(event) {
    console.log('swipe left');
    $('#content').append('<p>Swipe left<p>');
});

$('html').on('tap', function(event) {
    console.log('TAP');
    $('#content').append('<p>Tap<p>');
});

```


## Vanilla JS

```javascript

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(event) {
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = event.touches[0].clientX;
    var yUp = event.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            // Left swipe
            console.log('LEFT SWIPE');
            $('#content').append('<p>Swipe left<p>');

        } else {
            // Right swipe
            console.log('RIGHT SWIPE');
            $('#content').append('<p>Swipe right<p>');
        }
    } else {
        if (yDiff > 0) {
            // Up swipe
            console.log('UP SWIPE');
            $('#content').append('<p>Swipe up<p>');

        } else {
            // Down swipe
            console.log('DOWN SWIPE');
            $('#content').append('<p>Swipe down<p>');
        }
    }

    xDown = null;
    yDown = null;
}
```
