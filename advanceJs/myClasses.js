// class User { //syntax of class
//     constructor(username, email, password) {
//         this.username = username;//store username to caller 
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() { //when we make fns in class, we don't need to use function keyword
//         return `${this.password}khushi`;
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const obj = new User("abhishek", "abhi@goolge.com", "123");
// console.log(obj.encryptPassword());
// console.log(obj.changeUsername());

//internal working of class

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abhi`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const obj = new User("khushi", "khushi@sbi.com", "khushi");

console.log(obj.encryptPassword());
console.log(obj.changeUsername());