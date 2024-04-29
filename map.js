// map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumbers.map( (num) => (num + 10))
// console.log(newNum);                   


//__________________________________________________________________________________


// const newNums = myNumbers.map( (num) => {
//     return num + 10
// })
// console.log(newNums);                    


// ______________________________________________________________________________________


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const values = myNumber.forEach( (num) => {
    console.log(num + 10);
     return num 
})
console.log(values);

                // OR

// const newNum = []
// myNumber.forEach( (num) => {
//    if(num > 0 ) {
//     newNum.push(num + 10)
//    } 
// })
// console.log(newNum);                     


//____________________________________________________________________________________

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNums
     .map( (num) => (num * 10))
     .map( (num) => (num + 1))
     .filter( (num) => (num >= 40))   

console.log(newNum);                  



    

