"use strict";

function findCake(name) {
    var cakes = [
        { name: "Princesstårta", price: 100 },
        { name: "Äppelpaj", price: 50 },
        { name: "Mandelkubb", price: 5 }
    ];

    return function outputPrice() {
        var cake = cakes.find(
            cake => cake.name === name
        );

        return `En ${cake.name} kostar ${cake.price} kr`;
    };
}

var cakes = [
    findCake("Äppelpaj"),
    findCake("Mandelkubb"),
];

console.log(cakes);

console.log(cakes[0].name);

console.log(cakes[0]());
console.log(cakes[1]());
