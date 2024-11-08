//In javaScript everything is object
function multiplyBy5 (num) {
    return num * 5;
}

multiplyBy5.power = 4;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);//function used as an object becoz object is parent of all.
console.log(multiplyBy5.prototype);//{}

//create own method
function createUser(username, price) {
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function() { //make your own method and use everywhere
    this.price++;//caller price increase
}

createUser.prototype.printMe = function() {
    console.log(`price is ${this.price}`);
}

// const chai = createUser("chai", 25);//without using new keyword gives error it will not read new added property
const chai = new createUser("chai", 25);//without using new keyword gives error
chai.printMe();
chai.increment();
chai.printMe();
const tea = new createUser("tea", 250);
tea.printMe();

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    gerSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Abhishek = function() {//make own method and add it to the parent(object) so it automatically adds to child(array,string,function)
    console.log(`Abhishek is present in all objects`);
}

heroPower.Abhishek();

let myHeros = ["thor", "spiderman"];
myHeros.Abhishek();//abhishek() add to parent so we can use this with child also

Array.prototype.heyAbhishek = function() {
    console.log(`hey from Abhishek`);
}

myHeros.heyAbhishek();
// heroPower.heyAbhishek();//gives error becoz heyAbhishek method add to child not to parent

let anotherUsername = "chaiAurCode    ";
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhishek ".trueLength();
" sharma".trueLength();
