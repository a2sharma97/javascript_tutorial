let point = 15;
if (point > 20) {
  point = point - 10;
}
console.log(point);

if (2 === "2") {
  console.log("executed");
}

const temperature = 41;
if (temperature === 41) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

const userloggedIn = true;
const debitcard = true;
if (userloggedIn && debitcard) {
  console.log("Allow to buy course");
}

/////Switch case//////
const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  default:
    console.log("wrong month number");
    break;
}

///// Truthy and falsy values /////
const userEmail = "A@abhishek.com";
if (userEmail) {
  console.log("Got user email"); //if userEmail is empty, it will not print this
} else {
  console.log("Don't have user email");
}

const userEmail2 = "";
if (userEmail2) {
  console.log("Got user email"); //this will not be executed
} else {
  console.log("Don't have user email");
}

const userEmail3 = [];
if (userEmail3) {
  console.log("Got user email"); //executed
} else {
  console.log("Don't have user email");
}

//Falsy values => false, 0, -0, 0n(BigInt), "", null, undefined, NaN

//Truthy values => true, "0", " ", [], {}, function(){}

//Nullish coalescing operator(??)
let val1;
val1 = 5 ?? 10;
console.log(val1); //5

let val2;
val2 = null ?? 10;
console.log(val2); //10

let val3;
val3 = undefined ?? 10;
console.log(val3); //10

let val4;
val4 = null ?? undefined ?? 10;
console.log(val4); //10

let val5;
val5 = null ?? 10 ?? 20;
console.log(val5); //10
