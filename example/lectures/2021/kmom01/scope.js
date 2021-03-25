"use strict";

var elephant = "elephant";

function printElephant() {
    elephant = "giraffe";
    console.log(elephant);
}

console.log(elephant);
printElephant();
