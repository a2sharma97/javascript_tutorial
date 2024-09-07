const myNum = [1, 2, 3];
let myTotal = myNum.reduce(function (acc, curr) {
  return acc + curr;
}, 0); //0 is initial value
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 1999,
  },
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
