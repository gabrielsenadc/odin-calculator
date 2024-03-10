const result = document.querySelector(".result");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");
const num0 = document.querySelector("#num0");
const divide = document.querySelector("#divide");
const mult = document.querySelector("#multiply");
const sub = document.querySelector("#subtract");
const add = document.querySelector("#add");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

let print = "";
let first = 0;
let second = 0;
let operation = "";
let n = 0;

function addNumberToPrint(number){
    print += number;
    result.textContent = print;
}

clear.addEventListener("click", () =>{
    result.textContent = "";
    print = "";
});

num1.addEventListener("click", () => {addNumberToPrint("1")});

num2.addEventListener("click", () => {addNumberToPrint("2")});

num3.addEventListener("click", () => {addNumberToPrint("3")});

num4.addEventListener("click", () => {addNumberToPrint("4")});

num5.addEventListener("click", () => {addNumberToPrint("5")});

num6.addEventListener("click", () => {addNumberToPrint("6")});

num7.addEventListener("click", () => {addNumberToPrint("7")});

num8.addEventListener("click", () => {addNumberToPrint("8")});

num9.addEventListener("click", () => {addNumberToPrint("9")});

num0.addEventListener("click", () => {addNumberToPrint("0")});

add.addEventListener("click", () =>{
    if(!n) first = Number(print);
    print += "+";
    result.textContent = print;
    console.log(first);
    operation = "add";
});




