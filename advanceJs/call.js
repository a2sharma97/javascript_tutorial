//call method passes the current execution context to another function or caller function
function setUsername(username) { // when the working of this fns is complete then its internal var is also delete
    //complex DB calls
    // console.log(this);
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    setUsername(username);//fns is called but after its working all destroy so username is not show.
    setUsername.call(this,username);//means store username to caller fns this.
    this.email = email;
    this.password = password;
}

const chai = new createUser("Abhishek", "abhi@google.com", "abhish");
console.log(chai);