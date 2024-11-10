class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User { //teacher class inherit User class
    constructor(username, email, password) {
        super(username)//works as call method
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const obj = new Teacher("chai", "chai@teacher.com", "123");
obj.addCourse();

const masalaChai = new User("masalaChai");

// masalaChai.addCourse();//error becoz obj of user so access for child

obj.logMe();

console.log(obj === masalaChai);//false not exact same
console.log(obj === Teacher);//false
console.log(User === Teacher)//false
console.log(obj instanceof Teacher);//true
console.log(Teacher instanceof User);//false
console.log(User instanceof Teacher);//false
console.log(masalaChai instanceof User);//true

