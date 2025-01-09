// Global Scope

let lastName = "Bahou";
let firstName = "Mohamed";

{
    // Local Scope
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
//    console.log(fullName); // Reference Error


// var pollution = 'sucks';
let pollution = 'sucks';
console.log(window.pollution);
console.log(pollution);


// var
{
    var x = 1;
        {
        var x = 2;  // same variable!
        console.log(x);  // 2
        }
    console.log(x);  // 2
  }

  // let
  {
    let x = 1;
        {
        let x = 2;  // different variable
        console.log(x);  // 2
        }
    console.log(x);  // 1
  }


  // Control Flow and Conditionals
  let total = 10;

  if (total === 10) {
    console.log(`Total is equals to ${total}`);
  } else {
    console.log(`Total is not equal to 10`);
    
  }


  // "Truthy" and "Falsy"
  console.log("===================");

  if (NaN) {  // only "false, 0, -0, 0n, " ", null, undefined, NaN" all this values are falsy
    console.log("true");
  } else {
    console.log("falsy");
    
  }
  


  let userAge = prompt("enter your Age");

  // ages 13 and lower
  if (userAge <= 13 && userAge >= 6) {
    console.log("Kids Team");

// 14 to 17 years old
  } else if (userAge < 18){
    console.log("Teenagers Team");

// 18 y.o and up
}  else if (userAge >= 18){ 
    console.log("Adult Team");

    if (userAge > 59) {
        console.log("Senior Team");
    }


} else {
    console.log("Age is not valid");
}

console.log("End of Script");


// ========================= Exercise =======================
// Write a nested if...else statement.
// Declare a variable called num.
// Add an if...else statement that checks if num is positive & greater than 100.
// Add another statement that checks if num is positive but less than 100.
// Add a final statement to check if num is negative.

let num;

if (num > 0 && num > 100) {
    console.log();
    
}