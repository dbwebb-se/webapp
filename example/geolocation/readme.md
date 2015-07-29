# HTML5 Geolocation using Navigator.

```js

var el = document.getElementById('content');

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        el.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    });
} else {
    el.innerHTML = 'Geolocation not supported by your browser';
}
```
