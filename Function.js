function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " you are also good!");
}
nice("Simran")
nice("Vishal")




function sum(x, y) {
    console.log(x + y);
}
sum(3, 5)






function sum(a, b) {
    return a + b
}
result = sum(3, 5)
console.log("The sum of these number is: ", result);


// function sum(a, b) {
//     return a + b
// }
//  result1 = sum(3 ,5)
//  result2 = sum(3 ,8)
//  result3 = sum(7 ,5)
//  result4 = sum(3 ,4)
// console.log("The sum of these number is: ", result1);
// console.log("The sum of these number is: ", result2);
// console.log("The sum of these number is: ", result3);
// console.log("The sum of these number is: ", result4);


function sum(a, b, c = 3) {
    return a + b + c
}
result1 = sum(3, 5)
result2 = sum(3, 8)
result3 = sum(7, 5)
result4 = sum(3, 4, 2)
console.log("The sum of these number is: ", result1);
console.log("The sum of these number is: ", result2);
console.log("The sum of these number is: ", result3);
console.log("The sum of these number is: ", result4);


// Arrow Function......
const func1 = (a)=> {
    console.log("I am an arrow function", a)
}

func1(34);
func1(66);
func1(84);