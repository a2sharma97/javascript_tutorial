const user = {
    username: "abhishek",
    loginCount: 10,
    signedIn: true,
    getUserDetails: function() {
        console.log(`username: ${this.username}`);//access current object or caller
        console.log(this);//current object
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// console.log(this) {} differnet for browser

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`welcome ${this.username}`);
    }
    return this;
}

const userOne = new User("Abhishek" , 10, true);
const userTwo = new User("chai", 11, false);
console.log(userOne);
console.log(userTwo);
console.log(userTwo.greeting());
console.log(userOne.constructor);//gives reference of object