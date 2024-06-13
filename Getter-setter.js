class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Hitesh`
    }

    set password(value){
        this._password = value
    }
}

const Hitesh = new user("h@hitesh.ai", "abc")
// console.log(Hitesh.password);
console.log(Hitesh.email);





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Properties_get_setter :-

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })



    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);
console.log(chai.password);






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object_getter_setter :-


const username = {
    _email: 's@sg.com',
    _password: 'abcd',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this.email = value
    }
}

const tea = Object.create(username)
console.log(tea.email);



