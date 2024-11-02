// METHOD CHAINING

let username = "     dang KHOA      ";

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username)

// LOGICAL OPERATOR

if (!true && true || true){
    // false
} else {
    console.log("true");
}

// STRICT EQUALITY

let x = 1;
let y = "1";

if(x == y){
    console.log("equal value");
} else {
    console.log("not equal value");
}

if(x === y){
    console.log("equal value & data type");
} else {
    console.log("not equal value & data type")
}