let number = [1, 2, 3, 4, 5, 6,];
console.log(number);
console.log(number.length);  // 6

//if i want to change this (number) array then i can change it. because the arry is mutable and this is called mutability of Arrys.
arr = number;
console.log(arr);

console.log(arr[0]);   //Result = 0
console.log(arr[5]);   //Result = 6
console.log(arr[4]);   //Result = 5


// we can also change the value of the arry.
arr[4] = 23;
console.log(arr);       //Result = 1, 2, 3, 4, 23, 6

console.log(typeof arr);  // Result = object


console.log(arr.toString());

console.log(arr.join(" and "));  //Result = 1 and 2 and 3 and 4 and 23 and 6


//we can remove last element from the array.
arr.pop()
console.log(arr);  //Result = 1, 2, 3, 4, 23


//we can adds a new element at the end of the array.
arr.push("Simran")
console.log(arr);   //Result = 1, 2, 3, 4, 23, 'Simran'


//Remove first element and returns it
arr.shift()
console.log(arr);    // Result = 2, 3, 4, 23, 'Simran'


//adds element to the beginning. returns new array length
arr.unshift('Diksha')
console.log(arr);     // Result = 'Diksha', 2, 3, 4, 23, 'Simran'


//Array elements can be deleted using the delete operator.
let numberOne = [2, 4, 6, 8, 10, 12]
delete numberOne[4]
console.log(numberOne);  //Result = 2, 4, 6, 8, empty item, 12
console.log(numberOne.length); //Result = 6


// concat() used to joint arrays and also returns a new array but does not change existing arrays.
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
console.log(a1.concat(a2, a3)); //Result = 1, 2, 3, 4, 5, 6, 7, 8, 9

console.log(a1);   // Result = 1, 2, 3



//sort() method is used to sort an array alphabetically.
let c = [543, 321, 124, 18, 5, 3, 9,20]
console.log(c.sort());        // Result = 124, 18, 20, 3, 321, 5, 543, 9      


//reverse the elements in the source array.
console.log(c.reverse());     //Result = 9, 543,  5, 321, 3,  20, 18, 124




// splice can be used to add new items to an array.
let item = [3, 4, 6, 7, 9, 10]
// item.splice(0, 4)
// console.log(item);   //Result = 9, 10

item.splice(1, 3, 124, 125, 126, 127)
console.log(item);     //Result = 3, 124, 125, 126, 127, 9, 10













