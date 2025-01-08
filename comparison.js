

let isEqual = 3 == 3; // true
console.log(isEqual);

let isEqual2 = 3 == "2"; // false
console.log(isEqual2);

let isEqual3 = "3" == "3"; // true
console.log(isEqual3);

console.log(5 < 7); // true
console.log(5 > 7); // false

console.log(3 <= 4); // true
console.log(3 >= 4); // false

// ===========================================
// (==) type conversion
console.log(5 == "7"); // false
console.log(5 == "5"); // true

// (===) No type conversion (Check for value and data type)
console.log(3 === "3"); // false
console.log(3 === 3); // true

// (!=) type conversion
console.log(10 != 100); // true
console.log(3 != 3); // false
console.log(3 != "3"); // false

// (!==) No type conversion
console.log(10 !== "10"); // true

console.log(3 + "3"); // 33
console.log(3 + 3); // 6

// ================================
// Logical Operators
// The && (logical AND) operator compares two or more conditions’ results and returns true when all conditions are true.
console.log(3 > 2 && 6 == 6); // true
console.log(3 > 2 && 6 == 7); // false

// The || (logical OR) operator compares two or more conditions’ results and returns true when at least one is true.
console.log(3 > 2 || 6 == 6); // true
console.log(3 > 2 || 6 == 7); // true
console.log(3 < 2 || 6 == 7); // false

// The ! (logical NOT) operator negates a given result.
console.log(!(3 > 2 && 6 == 6)); // false
console.log(!(3 > 2 || 6 == 7)); // false
console.log(!(3 < 2 || 6 == 7)); // true

let thisLogic = 3 > 2 || 6 === 7;
console.log("this logic is:", thisLogic);

// Recap
// && And
// || Or
// ! Negates (opposite)

let accountBalance = 100;
let price = 100;
let purchaseValid = price <= accountBalance;

if(purchaseValid) {
    alert("Thanks for your purchase!")
}

console.log(purchaseValid);
