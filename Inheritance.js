class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A New Course was added by ${this.username}`);
    }
}

const chai = new teacher("chai", "chai.com", "345")
chai.logMe()

const MasalaChai = new User("masalaChai")
MasalaChai.logMe()

console.log(chai instanceof User);