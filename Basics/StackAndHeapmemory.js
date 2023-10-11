"use strict"
let myName="abhishek"
let anotherName=myName //generates a copy in stack memory
anotherName="khushi" //chnge the value in the copy not in the original variable
console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne //both the buser points to the same reference in Heap memory
userTwo.email="abhishek@google.com" //also change in userOne email
console.log(userOne.email);
console.log(userTwo.email);