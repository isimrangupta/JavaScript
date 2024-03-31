// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    [mySym]: "MyKey1",
    name: "Diksha", 
    "Full name": "Diksha Gupta",
    age: 18,
    location: "Jaipur",
    email: "Dikshagupta123@.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);  

console.log(JsUser["email"]);    

console.log(JsUser["Full name"]);     

console.log(JsUser[mySym]);  


JsUser.email = "Simran1254@.com"
console.log(JsUser["email"]);  

// Object.freeze(JsUser)
// JsUser.name = "Simran"
console.log(JsUser["name"]);   
console.log(JsUser);





// Function
JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting); 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting());    
console.log(JsUser.greetingTwo());




