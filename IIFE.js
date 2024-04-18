//Immediately Invoked Function Expressions (IIFE) 

// function chai() {
//     console.log(`DB CONNECTE`);
// }
// chai()                              


 (function chai() {
    console.log(`DB CONNECTE`);
})();                             


(() => {
console.log(`DB CONNECTE TWO`);
}) ();                                 



((name) => {
console.log(`DB CONNECTE TWO ${name}`);
}) ('Simran');                               




