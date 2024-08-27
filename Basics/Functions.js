function sayMyName() {
    console.log("Abhishek");
  }
  console.log(sayMyName); //function refernce
  sayMyName(); //function call
  
  function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
  }
  
  addTwoNumbers(3, 5);
  
  // function loginUserMessage(username) {
  //   return `${username} just logged in`;
  // }
  
  // console.log(loginUserMessage()); //sends undefined as an argument
  
  // console.log(loginUserMessage("Abhishek"));
  
  //to check the username is undefined
  function loginUserMessage(username) {
    if (username === undefined) {
      console.log("Please enter a username");
      return;
    }
    return `${username} just logged in`;
  }
  
  console.log(loginUserMessage());
  
  //if we want the the value will never be undefined
  
  function loginUserMessage(username = "Abhishek") {
    if (!username) {
      console.log("Please enter a username");
      return;
    }
    return `${username} just logged in`;
  }
  console.log(loginUserMessage());
  
  //rest operatore
  function calculateCartPrice(...num1) {
    return num1;
  }
  console.log(calculateCartPrice(200, 400, 500)); //returns array
  
  function calculateCartPrice(val1, val2, ...num1) {
    return num1; //store the rest of the values in array
  }
  console.log(calculateCartPrice(200, 400, 500)); //returns array
  
  //passing object to function
  
  const user = {
    username: "Abhishek",
    price: 299,
  };
  
  function handleObject(anyobject) {
    console.log(
      `username is ${anyobject.username} and price is ${anyobject.price}`,
    );
  }
  handleObject(user);
  
  handleObject({ username: "shine", price: 100 }); //passing object as an argument
  
  //passing array to function
  const myNewArray = [200, 400, 500, 600];
  
  function returnSecondValue(getArray) {
    return getArray[1];
  }
  console.log(returnSecondValue(myNewArray)); //passing array name or reference
  
  console.log(returnSecondValue([200, 400, 500, 600])); //passing array as an argument
  