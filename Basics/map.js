const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = numbers.map((num) => num + 2);
console.log(num);

num = numbers.map((num) => num * 2);
console.log(num);

//chaining
let Num = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 20);
console.log(Num);
