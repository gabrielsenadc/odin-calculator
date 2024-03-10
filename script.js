const result = document.querySelector(".result");
const num = [];
const divide = document.querySelector("#divide");
const mult = document.querySelector("#multiply");
const sub = document.querySelector("#subtract");
const add = document.querySelector("#add");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

let print = "";
let first = 0;
let second = 0;
let n = 0;
let operation = "";

clear.addEventListener("click", () =>{
    result.textContent = "";
    print = "";
});

let id = ""
for(let i = 0; i < 10; i++){
    id = "#num" + i
    num[i] = document.querySelector(id);
    num[i].addEventListener("click", () => {
        print += i;
        result.textContent = print;
    });
}

function addOperation(op){
    if(!n) {
        first = Number(print);
        n++;
    } else{
        Operation();
        first = Number(print);
    }
    print += " " + op + " ";
    result.textContent = print;
    operation = op;
}

add.addEventListener("click", () =>{addOperation("+")});
mult.addEventListener("click", () =>{addOperation("*")});
divide.addEventListener("click", () =>{addOperation("/")});
sub.addEventListener("click", () =>{addOperation("-")});

function Operation(){
    if(operation === "+"){
        pos = print.indexOf("+");
        second = Number(print.slice(pos + 1));
        console.log(second);
        print = String(first + second);
        result.textContent = print;
    }

    if(operation === "-"){
        pos = print.indexOf("-");
        second = Number(print.slice(pos + 1));
        console.log(second);
        print = String(first - second);
        result.textContent = print;
    }

    if(operation === "/"){
        pos = print.indexOf("/");
        second = Number(print.slice(pos + 1));
        console.log(second);
        print = String(first / second);
        result.textContent = print;
    }

    if(operation === "*"){
        pos = print.indexOf("*");
        second = Number(print.slice(pos + 1));
        console.log(second);
        print = String(first * second);
        result.textContent = print;
    }
}

let pos = 0;
equal.addEventListener("click", () => {
    Operation();
    n--;
});







