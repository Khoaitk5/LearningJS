//CALL BACK
// call another function right after finish current function
hello(bye);

function hello(callback){
    console.log("Hello");
    callback();
}

function bye(){
    console.log("Bye");
}

//FOR EACH
//array.forEach(callback)

let numbers = [1, 2, 3, 4, 5];
//numbers.forEach(display);

function display(elements){
    console.log(elements);
}

//.map()
//accept a callback and applies this function

let squares = numbers.map(square);
//squares.forEach(display);

function square(element){
    return Math.pow(element, 2);
}

//.filter()
//filtering

let evenNumbers = numbers.filter(isEven);
evenNumbers.forEach(display);

function isEven(element){
    return element % 2 == 0;
}

//.reduce()
//reduce all array to single value

let sumOfNumbers = numbers.reduce(sum);
console.log(sumOfNumbers);

function sum(accumulator, element){
    return accumulator + element;
}