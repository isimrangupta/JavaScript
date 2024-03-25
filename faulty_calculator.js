let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if(random>0.1){
    //Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    //Perform wrong calculation
    c = obj[c]
}