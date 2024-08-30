const user = {
    username: "Abhishek",
    price: 199,
    welcomeMessage: function () {
      //if we use arrow function here, it will not work becuase this will refer to the global object aka window object
  
      // console.log(`${username}, welcome to website`); //username is not defined
      console.log(`${this.username}, welcome to website`);
      console.log(this);
    },
  };
  // console.log(user);
  // user.welcomeMessage();
  
  // function chai() {
  //   console.log(this); //shows window object
  // }
  
  // function chai() {
  //   let username = "Abhishek";
  //   console.log(this.username); //shows undefined becuase this is not defined
  // }
  
  const Chai = function () {
    let username = "Abhishek";
    console.log(this.username); //shows undefined becuase this is not defined
  };
  Chai();
  
  ////////////Arrow function////////////
  
  //Syntax () => { }
  
  const chai = () => {
    let username = "Abhishek";
    console.log(this); //{} empty object
  };
  chai();
  
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  console.log(addTwo(2, 5));
  
  //Implicit return
  
  const addTwo2 = (num1, num2) => num1 + num2;
  console.log(addTwo(2, 5));
  //returning object
  
  const obj = () => ({ username: "Abhishek" });
  console.log(obj());
  //returning array
  const arr = () => [1, 2];
  console.log(arr());
  