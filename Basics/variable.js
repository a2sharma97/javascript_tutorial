const accountId=812645
let accountEmail="abhishek@google.com"
var accountPassword="554466"
accountCity="Haridwar"// not good practice
let accountState;
// var accountPassword=4986 //if we make same name variable using var keyword it will overwrite its value but in case of let it gives an error.
// accountId=12345 //Error becoz this variable is constant
// console.log(accountPassword)
console.table([accountId ,accountEmail ,accountPassword ,accountCity]);
accountEmail="ab@ab.com"
accountPassword="78945"
accountCity="Dehradun"
console.table([accountId ,accountEmail ,accountPassword ,accountCity ,accountState]);