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
    console.log("falsy"); // it's gonna log falsy because NaN is false so it will log else condition
    
  }
  


//   let userAge = prompt("enter your Age");
 let userAge = 13;
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

console.log("End of Script=========================================");




// ====================================== Exercise1 =================================================
// Write a nested if...else statement.
// Declare a variable called num.
// Add an if...else statement that checks if num is positive & greater than 100.
// Add another statement that checks if num is positive but less than 100.
// Add a final statement to check if num is negative.

let num = prompt ("Enter a number:")
// let num = 100;

// num is positive & greater than 100.
if (num >= 0 && num > 100) {
    console.log("Number is Greater than 100");

// num is positive but less than 100.
} else if (num > 0 && num < 100) {
    console.log("Number is Positive and less than 100");

// num is negative.    
} else if (num < 0){
  console.log("Number is Negative (-)");

} else {
    console.log("Not Valid");
}

// ================================= Exercise2 ==================================================
// Write an if..else statement for the following requirements:
// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")

let learnerGrade = 120;

// 90 or higher
if (learnerGrade >= 90 && learnerGrade < 100) {
    console.log("A");

// 80 or higher
} else if (learnerGrade >= 80 && learnerGrade < 100) {
    console.log("B");

// 70 or higher
}else if (learnerGrade >= 70 && learnerGrade < 100 ) {
    console.log("C");

// 55 or higher
} else if (learnerGrade >= 55 && learnerGrade < 100) {
    console.log("D");

// Lower than 55
} else if(learnerGrade < 55 && learnerGrade >=0) {
    console.log("F");
}

else {
    console.log(" Not Valid"); 
}

console.log("=============== End of Script ==================");



// Switch Statements
let statusCode = 201;

switch (statusCode) {
    case 200:
        console.log("Request was successful");
        break;
    case 201:
        console.log("Success and created");
        break;
    case 404:
        console.log("No found!");
        break;
    case 500:
        console.log("Server Error!");
        break
    default:
        console.log("Invalid Status Code");
}


// ======= Ternary Op ============
let isAuthenticated = false;

let authorized = isAuthenticated ? "Granted" : "Denied";

console.log(authorized);

// ======= if else ============
let auth;

if (isAuthenticated) {
    auth = "Granted"
} else {
    auth = "Denied"
}


//   Errors, Throw keyword
let orderAmount = 100;

try {
    // any errors will be pass to the catch block
    if (orderAmount < 0) {
        console.log("Try Again!");
    } else {
        throw "Error with payment" // <----
    }
    
} catch (error) {
    // access the error in the "error" variable
    console.log(error); // <--- 

    alert(`Amount ${orderAmount} not valid`)
}


console.log("Does this log?");



let w = -10;
let isEven;
try {
	if (w > 0) {
		isEven = (w % 2 == 10) ? true : false;
	} else if (w <= 0) {
		throw "Error - Value of 0 or below.";
	}

	console.log(isEven);
} catch (err) {
	console.log(err);
} finally {
	console.log(w);
}