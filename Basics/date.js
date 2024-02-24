let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());//change date into string
console.log(mydate.getDate());//current date deta h
console.log(mydate.getDay());//day number deta h
console.log(mydate.getFullYear());//current year deta h
console.log(mydate.getTimezoneOffset());
console.log(mydate.toDateString());//Sat Feb 24 2024
console.log(mydate.toLocaleString());//2/24/2024, 4:46:38 AM
console.log(mydate.toLocaleDateString());//provides only date 2/24/2024
console.log(mydate.toLocaleTimeString());//provides only time 4:48:28 AM
console.log(mydate.toISOString());//2024-02-24T04:51:36.498Z
console.log(mydate.toJSON());//2024-02-24T04:51:36.498Z
let myCreatedate=new Date(2024,1,24)//0==jan,1==feb 
console.log(myCreatedate.toDateString());//0 s start hote h months Sat Feb 24 2024
console.log(myCreatedate.toDateString());//0 s start hote h months Sat Feb 24 2024
let myCreatedate2=new Date(2024,1,24,10,32)//10 and 32 are timings
console.log(myCreatedate2.toLocaleString());//2/24/2024, 10:32:00 AM
let myCreatedate3=new Date("2024-02-24")
console.log(myCreatedate3.toLocaleString());//2/24/2024, 12:00:00 AM
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(mydate.getTime());//current time millisecond m aata h
console.log(Math.floor(Date.now()/1000));
mydate.toLocaleString('default',{
    weekday:"long",
})