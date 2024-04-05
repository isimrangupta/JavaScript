//Global Scope :-
let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);


//Block Scope :-
let d = 60
if (true) {
    let num1 = 20
    const num2 = 10
    var num3 = 40
}

// console.log(num1); 
// console.log(num2); 
console.log(num3);  



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one () {
    const userName = "Simran"

    function two() {
        const website = "youtube"
        console.log(userName);    
    }
    // console.log(website);    

    two()
}

one()




if (true) {
    const username = "Diksha"
    if (username === "Diksha") {
        const title = " Gupta"
        console.log(username + title);
    }
    // console.log(title);     
}

// console.log(username);      



// ++++++++++++++++++++++ intersting +++++++++++++++++++++++++++++++++++
// function can be written in 2 ways : -

console.log(addone(5));   
function addone(num) {
    return num + 1
}

// console.log(addone(5));     



//_____________________________________________________________

// console.log(addTwo(5));           
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));           




