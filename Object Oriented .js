//----------------- Object Literal :--------------

const user = {
    username: "Simran",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user Details form database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }


}

console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);




//----------------- Constructor function :-----------------

function User (username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this
}

const userOne = new User('Simran', 12, true)
const userTwo = new User('chai', 20, false)
console.log(userOne);
console.log(userTwo);



