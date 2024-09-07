const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = myArr.filter((num) => num > 4);
console.log(newArr);

const newArr2 = myArr.filter((num) => num % 2 == 0);
console.log(newArr2); //even values

const newArr3 = myArr.filter((num) => num % 2 != 0);
console.log(newArr3); //odd values

const books = [
  {
    title: "Book one",
    genre: "fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book two",
    genre: "non-fiction",
    publish: 1992,
    edition: 2008,
  },
  {
    title: "Book three",
    genre: "science",
    publish: 1982,
    edition: 2000,
  },
  {
    title: "Book four",
    genre: "history",
    publish: 1989,
    edition: 2005,
  },
  {
    title: "Book five",
    genre: "fiction",
    publish: 1987,
    edition: 2010,
  },
];
let userBooks = books.filter((bk) => bk.genre === "history");
console.log(userBooks);
userBooks = books.filter((bk) => {
  return bk.publish >= 1987 && bk.genre === "fiction";
});
console.log(userBooks);
