"use strict";

// Primitiva
let kenneth = "Kenneth 40 år";
let marie = kenneth;

console.log(kenneth, marie);

marie = "Marie .. år";

console.log(kenneth, marie);



// Objekt
let emil = {
    name: "Emil",
    age: 37,
    adress: {
        street: "Valfridas väg 13",
        zip: 37164
    }
};

let andreas = JSON.parse(JSON.stringify(emil));

console.log(emil, andreas);

emil.name = "Emil Folino";
emil.adress.zip = 3400;

console.log(emil, andreas);
