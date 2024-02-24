const myArr=[0,1,2,3,true,"Abhishek"]
console.log(myArr);
const myAr=[0,1,2,3,4,5]
console.log(myAr[1]);
const myArr2=new Array(1,2,3,4)
console.log(myArr2);
// console.log(myArr2.length);
myAr.push(6)
// console.log(myAr);
myAr.push(7)
myAr.push(8)
// console.log(myAr);
myAr.pop()
// console.log(myAr);
myAr.pop()
// console.log(myAr);
myAr.unshift(9)//add in front
// console.log(myAr);
myAr.shift()//remove from front
// console.log(myAr);
// console.log(myAr.includes(4));//true means element present
// console.log(myAr.includes(9));//false not present
// console.log(myAr.indexOf(4));
// console.log(myAr.indexOf(9));//-1 means not present
// const newArr=myAr.join();
// console.log(newArr);
// console.log("A " ,myAr);

const myn1=myAr.slice(1,3)
// console.log(myn1);
// console.log("B " ,myAr);

const myn2=myAr.splice(1,3)
// console.log("C ",myAr);
// console.log(myn2);

const marvel_heroes=["thor","Ironman","spiderman",]
const dc_heroes=["superman","flash","batman"]
marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);


//------------spread operator----------//
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({key :"Abhishek"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

