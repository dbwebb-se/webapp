# Geolocation with Google maps

## Full example with fixed latitude and longitude values

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Simple example</title>
    <style>
        html, body {
            height: 100%;
            padding: 0;
            margin: 0;
        }
        #map {
            height: 100%;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script>    
        var map;
        function initMap() {
            var whereToPlaceMap = document.getElementById('map');

            // Tells the api to place a new map on "whereToPlaceMap" 
            map = new google.maps.Map(whereToPlaceMap, {
                // Pass in which latitude / longitude to center the map on
                center: { 
                    lat: 56.1827058,
                    lng: 15.5904189 
                },
                // How close the new map should be zoomed in
                zoom: 8
            });
        }
    </script>
    <!-- Load the google maps api -->
    <script src="https://maps.googleapis.com/maps/api/js?callback=initMap" async defer></script>
</body>
</html>
```
It is **important** to always make sure that the div-container where the map 
should be placed has a height or otherwise the map won't load. The value can be 
100%, 300px, 3em or whatever value fits your web application. 

## Read more
[https://developers.google.com/maps/](https://developers.google.com/maps/)
