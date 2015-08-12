# Use google api to place marks on the map

```javascript
// Creates a new map
var map = new google.maps.Map(/* Some values */);

//  Creates a set of latitude / longitude values
var latLngToMaps = new google.maps.LatLng(
    51,
    0
);

// Creates a new Marker through the google maps api
var marker = new google.maps.Marker({
    // Position where to place the marker on the map
    position: latLngToMaps,
    // And the title for the marker
    title: 'Some value'
});

// Binds the marker to the map.
marker.setMap(map);
```
