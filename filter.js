//  const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( (item) => {
//     console.log(item);
// })

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);



// filter :-

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.filter( (num) => (num > 4))
// console.log(newNum);                             

              // or

// const newNum =  myNum.filter( (num) => {
//     return num > 4
// })  
// console.log(newNum);                           


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = []
myNum.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})
console.log(newNum);


//__________________________________________________________________________________

// const books = [
//     { title: 'Book one', genre: 'Fiction', Publish: '1981', edition: '2004'},
//     { title: 'Book two', genre: 'Non-Fiction', Publish: '1922', edition: '2008'},
//     { title: 'Book three', genre: 'History', Publish: '1999', edition: '2007'},
//     { title: 'Book four', genre: 'Non-Fiction', Publish: '1989', edition: '2010'},
//     { title: 'Book five', genre: 'Science', Publish: '2009', edition: '2014'},
//     { title: 'Book six', genre: 'Fiction', Publish: '1987', edition: '2010'},
//     { title: 'Book seven', genre: 'History', Publish: '1986', edition: '1996'},
//     { title: 'Book eight', genre: 'Science', Publish: '2011', edition: '2016'},
//     { title: 'Book nine', genre: 'Non-Fiction', Publish: '1981', edition: '1989'},
// ];

// const userBooks = books.filter( (bk) => (bk.genre === 'History'))
// console.log(userBooks);

// const userBooks = books.filter( (bk) => (bk.publish >= 2000))
// console.log(userBooks);  

 const books = [
    { title: 'Book one', genre: 'Fiction', Publish: '1981', edition: '2004'},
    { title: 'Book two', genre: 'Non-Fiction', Publish: '1922', edition: '2008'},
    { title: 'Book three', genre: 'History', Publish: '1999', edition: '2007'},
    { title: 'Book four', genre: 'Non-Fiction', Publish: '1989', edition: '2010'},
    { title: 'Book five', genre: 'Science', Publish: '2009', edition: '2014'},
    { title: 'Book six', genre: 'Fiction', Publish: '1987', edition: '2010'},
    { title: 'Book seven', genre: 'History', Publish: '1986', edition: '1996'},
    { title: 'Book eight', genre: 'Science', Publish: '2011', edition: '2016'},
    { title: 'Book nine', genre: 'Non-Fiction', Publish: '1981', edition: '1989'},
];

// const userBooks = books.filter( (bk) => {
//     return bk.Publish >= 1995 && bk.genre === "History"
// })
// console.log(userBooks);


const userBooks = books.filter( (bk) => {
    return bk.Publish >= 1999 && bk.genre === "Science" 
})
console.log(userBooks);








