// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}ABC`
    }

    changUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changUsername());


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Behind the scene :----

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}ABC`
}

user.prototype.changUsername = function(){
    return `${this.username.toUpperCase()}`
}

const Tea = new user("chai or code", "chai@123.gmail.com", "245" )
console.log(Tea.encryptPassword());
console.log(Tea.changUsername());