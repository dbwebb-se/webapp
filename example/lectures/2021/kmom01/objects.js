"use strict";

var emil = {
    name: "Emil",
    age: 34,
};

var andreas = emil; // Borde använda Object.assig({}, emil);

console.log(emil, andreas);

emil.name = "Emil Folino";

console.log(emil, andreas);
