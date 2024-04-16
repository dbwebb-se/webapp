"use strict";

let fruits = ["Banana", "Melon", "Kiwi", "Lemon"];

let vegetables = fruits.slice();

console.log(fruits, vegetables);

vegetables[0] = "Carrot";

console.log(fruits, vegetables);
