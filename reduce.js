// reduce :-

// const myNum = [1, 2, 3]
// const myTotle = myNum.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotle);                                  

//________________________________________________________________________________


const myNums = [1, 2, 3]
const myTotle = myNums.reduce( (acc, currval) => (acc + currval), 0)
console.log(myTotle);                                 


//__________________________________________________________________________________

const shopingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

const priceToPays = shopingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(priceToPays);                                                   


