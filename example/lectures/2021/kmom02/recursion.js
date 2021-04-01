(function iife() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }

    function countdown(n) {
        console.log(n);

        return n > 1 ? countdown(n - 1) : 1;
    }

    countdown(10);
})();
