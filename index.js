// ARRAY

let fruits = ["apple", "orange", "banana"];

fruits.push("coconut"); //push last
fruits.pop(); //pop last
fruits.unshift("mango"); //push first
fruits.shift(); //pop first

console.log(fruits);
console.log(fruits[0]);

console.log(fruits.length);
console.log(fruits.indexOf("banana"));

for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse(); //sorting & reverse

//SPREAD OPERATOR (...spread)
//spread operator = opening/unpacking the box/array

let numbers = [1, 2, 3, 4, 5];

console.log(Math.max(numbers)); // no spread
console.log(Math.max(...numbers)); // spread

let username = "hello world";
console.log([...username].join("-"));

let fruits2 = ["carrot", "strawberry"];
let foods = [...fruits, ...fruits2];
console.log(foods);

//REST PARAMETERS (...rest)
//rest = packing the box

function openBox(...items){
    console.log(items);
}

openBox("toy", "lego", "watch");