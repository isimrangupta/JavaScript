function multipleBy5(num) {
    return num * 5
}

multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);



function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("chai", 20)
const tea = new createUser("tea", 240)

chai.printMe()
tea.printMe()




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myName = "Simran   "
// let channel = "chai     "
// console.log(myName.truelength); 

let myHero = ["thir", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heySimran = function(){
    console.log(`Simran says hello`);
}

// heroPower.hitesh()
myHero.hitesh()
myHero.heySimran()
//heroPower.heySimran()



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Inheritance :-

const user = {
    name: "chai",
    email: "chai@gmail.com"
}

  const teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "js Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user



// Modern syntax :-------

Object.setPrototypeOf(TeachingSupport, teacher)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let anotherUsername = "chaiorcode       "

String.prototype.trueLength = function(){
    //console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()