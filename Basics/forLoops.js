const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  // console.log(greet);
}

const map = new Map();
map.set("name", "Abhishek");
map.set("age", 21);
map.set("gender", "male");
// console.log(map);

for (const [key, value] of map) {
  // console.log(value);
}

const obj = {
  game1: "NFS",
  game2: "GTA",
};
// for (const key of obj) {
//   // console.log(key); //this will not work because obj is not iterable
// }

for (const key of Object.keys(obj)) {
  // console.log(key); //this will work because Object.keys() returns an array
}

//forin
const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myObject) {
  console.log(key); //shows keys of object
}

for (const key in myObject) {
  console.log(`key is : ${key} and the value is:  ${myObject[key]}`);
}

const programming = ["js", "java", "python", "c++"];
for (const key in programming) {
  console.log(key); // shows keys
}
for (const key in programming) {
  console.log(programming[key]); // shows values
}

//foreach
const coding = ["js", "java", "python", "c++"];
// coding.forEach (function (value) {
//   console.log(value);
// })

// using arrow function
coding.forEach((value) => {
  console.log(value);
});

coding.forEach((value, index, arr) => {
  console.log(value, index, arr); //shows values, index and array
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

//array of object
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((value) => {
  console.log(value.languageName);
});
