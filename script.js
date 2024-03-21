const result = document.querySelector(".result");
const divide = document.querySelector("#divide");
const mult = document.querySelector("#multiply");
const sub = document.querySelector("#subtract");
const add = document.querySelector("#add");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const dot = document.querySelector("#dot");
const erase = document.querySelector("#erase");
const sign = document.querySelector("#sign");

//o que vai aparecer no visor
let print = "";

//primeiro e  segundo numero da operacao
let firstNum = 0;
let secondNum = 0;

//0 se ainda precisar pegar o firstNum dos inputs
//1 se precisar pegar so o secondNum dos inputs
let n = 0;

//qual operacao
let operation = "";

//se o numero tem decimal
let temDot = 0;

erase.addEventListener("click", () => {
    //retirar um espaco
    if(print[print.length - 1] === " ") print = print.slice(0, print.length-1);

    //apagar um operador
    if(operation != "")
        if(print[print.length - 1] === operation){
            operation = "";
            n = 0;
        }
    print = print.slice(0, print.length-1);
    result.textContent = print;

    //nao tiver mais o que ser tirado
    if(print === ""){
        secondNum = 0;
        firstNum = 0;
        operation = "";
        n = 0;
    }
});

//mudar o sinal dos numeros
sign.addEventListener("click", () =>{
    if(!n){  //primeiro numero
        if(print.slice(0,1) == "-") print = print.slice(1); 
        else print = "-" + print;
        result.textContent = print;
    } else {  //segundo numero
        let posOp = print.indexOf(operation);

        //caso o primeiro numero seja negativo, pega o endereco do segundo "-""
        if(firstNum < 0) posOp = print.indexOf(operation, 2); 

        console.log(print.at(posOp));
        if(print.at(posOp + 2) == "-") print = print.slice(0, posOp + 2) + print.slice(posOp + 3);
        else print = print.slice(0, posOp + 2) + "-" + print.slice(posOp + 2);
        result.textContent = print;
    }
    
});

clear.addEventListener("click", () =>{
    result.textContent = "";
    print = "";
    secondNum = 0;
    firstNum = 0;
    operation = "";
    n = 0;
});

dot.addEventListener("click", () => {
    if(!temDot){
        if(print == "") print = "0";
        else if (operation != "" && print.slice(print.indexOf(operation) + 1) == " ") print += "0";
        print += ".";
        result.textContent = print;
        temDot++;
    }
});

//adicionar EventListener para todos os numeros
const num = Array.from(document.querySelectorAll(".num"));
num.map((n, i) => {
    n.addEventListener("click", () => {
        if(i+1 === 10) i = -1;  //0 esta na posicao 9 entao precisa ser ajustado
        print += i+1;
        result.textContent = print;
    });
})


function addOperation(op){
    if(!n) {
        firstNum = Number(print);
        n++;
    } else{    //realizar a primeira operacao caso dois operadores tenham sido digitados
        Operation();
        firstNum = Number(print);
    }
    print += " " + op + " ";
    result.textContent = print;
    operation = op;
    temDot = 0;
}

add.addEventListener("click", () =>{addOperation("+")});
mult.addEventListener("click", () =>{addOperation("*")});
divide.addEventListener("click", () =>{addOperation("/")});
sub.addEventListener("click", () =>{addOperation("-")});

function Operation(){
    if(operation === "+"){
        pos = print.indexOf("+");
        secondNum = Number(print.slice(pos + 1));
        console.log(secondNum);
        print = String(firstNum + secondNum);
    }

    if(operation === "-"){
        pos = print.indexOf("-");
        if(firstNum < 0) pos = print.indexOf("-", 2);
        secondNum = Number(print.slice(pos + 1));
        console.log(secondNum);
        print = String(firstNum - secondNum);
    }

    if(operation === "/"){
        pos = print.indexOf("/");
        secondNum = Number(print.slice(pos + 1));
        console.log(secondNum);
        print = String(firstNum / secondNum);
    }

    if(operation === "*"){
        pos = print.indexOf("*");
        secondNum = Number(print.slice(pos + 1));
        console.log(secondNum);
        print = String(firstNum * secondNum);
    }

    //arredondar erros de aproximacao
    if(print.includes("."))
        if((print.slice(print.indexOf(".") + 1)).length > 15) print = String(Number(print).toFixed(2));
    
    result.textContent = print;
    secondNum = 0;
    temDot = 0;
    operation = "";
}

let pos = 0;
equal.addEventListener("click", () => {
    Operation();
    n = 0;
});







