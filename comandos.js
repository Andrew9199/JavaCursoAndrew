const h1 = document.querySelector("#h1");
var input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

var input1num = Number(input1.value);
var input2num = Number(input2.value);

console.log(input1num);

function onClick() {
    sumainputs = (input1.value + input2.value);
    resultado.innerText = "Resultado: " + sumainputs;
    console.log(input1num);
}