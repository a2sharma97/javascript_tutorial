const object = {}; //object by literal
const object2 = new Object(); //object by constructor

const jsUser = {
  name: "Abhishek",
  age: 18,
  location: "India",
  email: "abhishek@gmail",
  isLoggedIn: false,
  LastloginDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
};

//accessing object properties
console.log(jsUser.name); //dot notation
console.log(jsUser["email"]); //bracket notation

//adding new properties
const mySym = Symbol("key1");
jsUser.mySym = "myKey1";
console.log(jsUser);
console.log(typeof jsUser["mySym"]);
console.log(jsUser);

//freezing object
// Object.freeze(jsUser); //it will freeze the object and it will not allow any changes in the object
jsUser.name = "Abhishek sharma";
console.log(jsUser);

//create new object
const sym = Symbol("key1");
const jsUser2 = {
  name: "abhi",
  fullName: "Abhishek Sharma",
  age: 18,
  [sym]: "key",
};
console.log(jsUser2);

//add function to object
jsUser2.greeting = function () {
  console.log("Hello jsUser2");
};
console.log(jsUser2.greeting());
jsUser2.greetingtwo = function () {
  console.log(`Hello jsUser2, ${this.name}`); //string intrpolation
};
console.log(jsUser2.greetingtwo());

//merge objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { obj1, obj2 };
console.log(obj3);
//better way of merging is
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);
//using spreed operator
const obj = { ...obj1, ...obj2};
console.log(obj);
