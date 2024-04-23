// (1) for of 
const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// map
const map = new Map ()
map.set('IN', "india")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const key of map) {
    console.log(key);          
}

for (const [key , value] of map) {
    console.log(key, ':-', value );
}




// const myObject = {
//     name : "Diksha",
//     Title : "Gupta",
//     Morther : "Sangita"
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);       
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// (2) for in

const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift of apple"
}

for (const key in myObject) {
    //  console.log(key);                 
    // console.log(myObject[key]);        
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}



 
const programming = ["Js", "rb" , "py" , "Java", "cpp"]

for (const key in programming) {
   console.log(key);                 
}

for (const key in programming) {
   console.log(programming[key]);   
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// (3) for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]
 
// coding.forEach( function (val){
//     console.log(val);
// })

     // or

// coding.forEach( (item) => {
//     // console.log(item);
// })     


      //or
      
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})



