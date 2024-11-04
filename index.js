// TEMPERATURE CONVERSION PROGRAM

const input = document.getElementById("input");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
const result = document.getElementById("result");

function convert(){
    if(ctof.checked){
        let tem = Number(input.value);
        tem = tem * 9 / 5 + 32;
        result.textContent = tem.toFixed(1) + "°F";
    } else if(ftoc.checked){
        let tem = Number(input.value);
        tem = (tem - 32) * (5 / 9);
        result.textContent = tem.toFixed(1) + "°C";
    } else{
        result.textContent = "select a unit";
    }
}