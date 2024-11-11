console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);//no change in value
//Reason
// const descriptor = Object.getOwnPropertyDescriptor(Math);
// console.log(descriptor);//undefined becoz we did not give the key to the property
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");//internal properties of PI is false i.e we cannot change its value
console.log(descriptor);

//make a object and change its internal property like Math.PI
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    chaiPrice : function() {
        console.log("chai is costly");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// for (let [key,value] of chai) {//object is not iterable using this for loop
//     console.log(`${key} : ${value}`);
// }
for (let [key,value] of Object.entries(chai)) {//object is iterable using this for loop
   if(typeof value != 'function') {
       console.log(`${key} : ${value}`);
   }
}

Object.defineProperty(chai, "name", {//we change the enumerable property to false to now we can't iterate name value
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {//name is not iterable 
    if(typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }
 }