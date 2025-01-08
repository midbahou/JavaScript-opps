// console logs are used for debug our code
console.log("Hello from External Script")

// Variables
var myVariable = "My First Variable";
let username = "user123";
let loggedIn = true;
let password = null;
console.log(password)

// constant variable
const PI = 3.14;
console.log(PI);

// Variable declaration rules
let x = 10; // this is a global scope
console.log("Global: ", x);

{
    let x = 2; // local/ block scope
    console.log("Block: ", x);
}

console.log("Result: ", x);

// Check data type of literals and variables
console.log(typeof x);
console.log(typeof password);
console.log(typeof loggedIn);
console.log(typeof username);