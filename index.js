// LOOP

while(true){
    console.log("while");
    break;
}

for(let i = 0; i < 5; i++){
    console.log(i);
}

// FUNCTION

function printHello(username){
    console.log(`Hello ${username}`);
    return 10;
}

console.log(printHello("Khoa"));

// VARIABLE SCOPE

let z = 8;

function func1(y){
    let x = 10;
    return x + y + z;
}

function func2(y){
    let x = 5.5;
    return x + y + z;
}

console.log(func1(2));
console.log(func2(5));