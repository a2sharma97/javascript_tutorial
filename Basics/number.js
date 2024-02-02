const score=100
console.log(score);
const balance=new Number(200)//isme hm explicitly btate h ek number type ka variable bna rhe h
console.log(balance)
console.log(balance.toString());//y number ko string m convert krta h
console.log(balance.toString().length);//ek bar number string m convert ho gya to hm uspe string  k properties lga skte h
console.log(balance.toFixed(2))//isme jitni value pass karte h utne last m point k baad 0 aate h
const num1=23.8966
const num2=123.8966
const num3=1123.8966
const num5=1.1238966
// is method m jitni value pass krege km s km utni digit s km ya equal tk point hona h chaiye
console.log(num1.toPrecision(3));//23.9
console.log(num2.toPrecision(3));//124
console.log(num2.toPrecision(4));//123.9
console.log(num3.toPrecision(2));//1.1e+3
console.log(num3.toPrecision(3));//1.12e+3
console.log(num3.toPrecision(4));//1124
console.log(num3.toPrecision(5));//1123.9
console.log(num5.toPrecision(3));//1.12

const hundreds=100000
console.log(hundreds.toLocaleString());//put commas
console.log(hundreds.toLocaleString('en-IN'));//change into indian style
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
