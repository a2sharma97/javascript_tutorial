"use strict"
/*************CONVERT INTO NUMBER***************/
//let marks=45 //convert number to number == number will come
//let marks="35ak" //convert stringnumber with character to number == NaN will come
//let marks=null //convert null into number == 0 will come
// let marks=undefined //convert undefined into number == NaN will come
// let marks=true //convert boolean to number == 1 will come
// let marks="Abhishek" //convert string into number == NaN will come
let marks="" //convert empty string into number == 0 will come
// console.log(typeof marks)
// let changeToInteger=Number(marks);
// console.log(typeof changeToInteger)
// console.log(changeToInteger);

/************CONVERT INTO BOOLEAN********************/

// let isLoggedIn=0 //convert number to boolean==if value is 0 then false will come otherwise true is come
//let isLoggedIn=""   //convert empty string into boolean ==false will come
// let isLoggedIn="Abhishek" //convert string into boolean == true will come
// let isLoggedIn=null   //convert null(object) into boolean ==false will come
let isLoggedIn=undefined //convert undefined into boolean == false will come
// console.log(typeof isLoggedIn)
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn);

/****************CONVERT INTO STRING*******************/

// let someNumber=33 //convert number into string == number will come
// let someNumber=null //convert null(object) into string == null will come
// let someNumber=true //convert boolean into string == true will come
// let someNumber=undefined //convert undefined into string == undefined will come
let someNumber="" //convert empty string into string == string will come
console.log(typeof someNumber)
let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber);