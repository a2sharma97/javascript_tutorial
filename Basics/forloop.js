for (let n = 5; n <= 10; n++) {
    console.log(n);
  }
  //for even
  for (let num = 10; num <= 40; num += 2) {
    console.log(num);
  }
  //for odd
  for (let num = 10; num <= 40; num++) {
    if (num & 1)
       console.log(num);
  }
  
  const myArray = ["c++", "c", "java", "python", "javascript"];
  
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }