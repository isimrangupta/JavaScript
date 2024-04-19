// comparison operator :- >(Less than), <(Greater than), >= , <= , == (equal), !=(Not equal), ===(if you want to check type also), !== 

// if

const temperature = 40
if(temperature === 50){
    console.log("Less than 50");
} else{
    console.log("temperature is greater than 50");
}

console.log("Execute");


//Block Scope :-
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power:${power}`);
}
// console.log(`user power:${power}`);


// Not readable code :-
// const balance = 2000
// if(balance > 500) console.log("Test");   



// How to check Multiple conditions :-
const balance = 1000
if(balance < 500){
    console.log("Less than 500");
} else if (balance < 750){
    console.log("Less than 750");
} 
else if (balance <900){
    console.log("Less than 900");
}
 else{
    console.log("Less than 1200");
}


// Logical Operator :-

//(1) All value is true then you can use 'And' && :-
// const userLoggedIn = true
// const debitCart = true
//  if(userLoggedIn && debitCart){
//      console.log("Allow to buy course");           
//   } else{
//     console.log("Not Allow to buy course");     
// }



// const userLoggedIn = true
// const debitCart = true
// const userLoggedInFromGoogle = false
// if(userLoggedIn && debitCart && userLoggedInFromGoogle){
//     console.log("Allow to buy course");
// } else{
//     console.log("Not Allow to buy course");     
// }


// (2) Either one is true then you can use 'OR' || :-
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true
if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("User logged in");                       
}


// (3) Nullish Coalescing Operator (??) : null undefind

let val1;
val1 = 5 ?? 10
console.log(val1 );             

val1 = null ?? 10
console.log(val1 );             

val1 = undefined ?? 15
console.log(val1 );            

val1 = undefined ?? 10 ?? 20
console.log(val1);            




// (4) Terniary Operator :-
    // condition ? true : false
const age = 20
age >= 18 ? console.log("You can drive") : console.log("You can't drive") 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Switch case condition :-

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");                 
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}


const months = "March"
switch (months) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("February");
        break;
    case "March":
        console.log("March");                  
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}


// Truthy value and Falsy value concept :-
 
// const userEmail = "Diksha@.com"
// if(userEmail){
//     console.log("Got user Email");              
// } else{
//     console.log("Dont't have user Email");
// }

// const userEmail = ""
// if(userEmail){
//     console.log("Got user Email");              
// } else{
//     console.log("Dont't have user Email");   
// }


// const userEmail = []
// if(userEmail){
//     console.log("Got user Email");             
// } else{
//     console.log("Dont't have user Email");     
// }

// (1) Truthy value:-
    // "0" , 'false' / "false" , " " , [] , {} , function(){}

// (2) Falsy value:-
    // false, 0, -0, BigInt 0n, "" , null , undefind , NaN ,   




//How to check Arrays :-
const userEmail = []
if (userEmail.length === 0){
    console.log("Array is empty");      
}


const emptyObj = {}
if (Object.keys(emptyObj).length ===0) {
    console.log("object is empty");          
}










