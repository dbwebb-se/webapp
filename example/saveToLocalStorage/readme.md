Save and load using window.localStorage

## Javascript

```javascript
// Check for compatability
if(typeof(Storage) !== "undefined") {
    // Code for localStorage
} else {
    // Sorry! No Web Storage support..
}

// Set item ex 1
window.localStorage.setItem("myKey", "myValue");

// Set item ex 2
window.localStorage.myKey = "myValue";

// Get item ex 1
window.localStorage.getItem("myKey");

// Get item ex 2
window.localStorage.myKey;

// Remove item
window.localStorage.removeItem("myKey");
```
