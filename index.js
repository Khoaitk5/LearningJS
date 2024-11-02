// Math LIB

console.log(Math.PI);
console.log(Math.E);
console.log(Math.floor(2.5));
console.log(Math.max(1,2,3));
console.log(Math.random()); // [0, 1]
// so many more

// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel")
const min = 1;
const max = 6;
let r;

myButton.onclick = function(){
    r = Math.floor(Math.random() * max + min);
    myLabel.textContent = r;
}
