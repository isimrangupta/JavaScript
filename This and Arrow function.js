const user = {
    username: "Diksha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// console.log(this);

user.welcomeMessage()        
user.username = "Simran"
user.welcomeMessage()      



// function chai() {
//     let username = "Simran"
//     console.log(this.username);   
// }
//  chai()




//  const chai = function () {
//     let username = "Simran"
//     console.log(this.username);  
//  }

//  chai()                             



    const chai = () => {
        let username = "Simran"
        console.log(this.username);    
        console.log(this);           
     }
    
     chai()  
     
     
     // Arrow function
     const addTwo = (num1, num2) => {
        return num1 + num2
     }
     
     console.log(addTwo(3, 4));           


    
    // const addOne = (num1, num2) => num1 + num2
    // console.log(addOne(6,9));     

                 //or

    // const addOne = (num1, num2) => ( num1 + num2 )
    // console.log(addOne(2, 4));           
    


    const addOne = (num1, num2) =>({username: "Diksha"})
    console.log(addOne(2, 4));     // { username: 'Diksha' }
                       