// IF STATEMENT

let isTrue = true;

if(isTrue){
    console.log("this is true");
} else {
    console.log("this is false");
}

isTrue ? console.log("is true") : console.log("is false");

// .checked (check box)

const myCheckBox = document.getElementById("myCheckBox");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const mySubmit = document.getElementById("mySubmit");
const subRs = document.getElementById("subRs");
const checkRs = document.getElementById("checkRs");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subRs.textContent = "check box checked";
    } else {
        subRs.textContent = "check box unchecked";
    }

    if(radio1.checked){
        checkRs.textContent = "Radio 1";
    } else if(radio2.checked){
        checkRs.textContent = "Radio 2";
    } else if(radio3.checked){
        checkRs.textContent = "Radio 3";
    } else {
        checkRs.textContent = "Radio null";
    }
}

let i = 1;
switch(i){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("default");
        break;
}