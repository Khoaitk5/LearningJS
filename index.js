// STRING METHOD

let str = "     This is string    ";

str = str.trim();
/*
console.log(str.toUpperCase()); //THIS IS STRING
console.log(str.repeat(2)); //This is stringThis is string
console.log(str.charAt(3)); //s
console.log(str.indexOf('I'));//-1
console.log(str.length); //14
console.log(str.startsWith("T")); //true
console.log(str.includes(" ")); //true
console.log(str.replaceAll(" ", "-"))  //This-is-string
console.log(str.padStart(17, "/")); // ///This is string
*/

// STRING SLICING
console.log(str.slice(0,4));
console.log(str.slice(5));
console.log(str.slice(-3));