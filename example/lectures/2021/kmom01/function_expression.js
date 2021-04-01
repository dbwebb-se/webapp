// ** Before **

var cache = {};

function longComputationTime(number) {
    return number * number;
}

function getData(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i, cache);

        if (!Object.prototype.hasOwnProperty.call(cache, i)) {
            cache[i] = longComputationTime(i);
        }
    }
}

getData(6);
getData(10);

console.log(cache);

// ** After **
var data = (function() {
    var cache = {};

    function longComputationTime(number) {
        return number * number;
    }

    return function getData(limit) {
        for (let i = 1; i <= limit; i++) {
            console.log(i, cache);

            if (!Object.prototype.hasOwnProperty.call(cache, i)) {
                cache[i] = longComputationTime(i);
            }
        }
    };
})();

data(6);

data(10);
