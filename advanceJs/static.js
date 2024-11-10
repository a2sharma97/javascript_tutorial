class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
    static createId() {//by using static function become private
        return '123';
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const obj = new Teacher("khushi", "khushi@sbi.com");
obj.logMe();
// console.log(obj.createId());//private fn not used by any one

console.log(Teacher.createId());//access static mehod using direct class name