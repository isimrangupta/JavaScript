// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is compelete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// //___________________________________________________________________________________

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Asunc task Two");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async Two resoved");
// })

//______________________________________________________________________________________

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "chai", Email: "chai@mail.com"})
//     },2000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

//______________________________________________________________________________________

const promiseFour = new Promise(function(resolve, reject){
    setInterval(function(){
        let error = true
        if (!error) {
            resolve({username: "Simran", Password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((myUsername) => {
    console.log(myUsername);
})
.catch(function(error){ 
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
})

//___________________________________________________________________________________

const promiseFive = new Promise(function(resolve, reject){
    setInterval(function(){
        let error = true
        if (!error) {
            resolve({username: "Simran", Password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
        const response = await promiseFive
        console.log(response);
   } catch (error) {
        console.log(error);
   }
}

consumePromiseFive()


//__________________________________________________________________________________

// async function getAllUsers(){
//    try {
//        const response = await fetch('https://api.github.com/users/isimrangupta')
       
//        const data = await  response.json()
//        console.log(data);
//    } catch (error) {
//         console.log("E:", error);
//    }
// }
// getAllUsers()




               // 0r


fetch('https://api.github.com/users/isimrangupta')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})

               