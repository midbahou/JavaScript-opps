

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

// if(purchaseValid) {
//     alert("Thanks for your purchase!")
// }

console.log(purchaseValid);


// String Concatenation
console.log("Hello " + "world");
console.log("Hello ", "world");


console.log("a" < "b");

console.log("hey" === "hey"); // true
console.log("Hey" === "Hey"); // true

console.log("Hey" == "hey"); // false

// let password = "Password123$"; // on the db
// let userPassword = prompt("Enter your password")

// if (password === userPassword) {
//     console.log("Welcome");
// } else {
//     console.log("Wrong password!");
// }


console.log("Hey" < "hey"); // true


const frost =
	"Nature’s first green is gold, " +
	"Her hardest hue to hold. " +
	"Her early leaf’s a flower; " +
	"But only so an hour. " +
	"Then leaf subsides to leaf. " +
	"So Eden sank to grief, " +
	"So dawn goes down to day. " +
	"Nothing gold can stay. ";

console.log(frost);

// Template Literals
const frost2 =
	`Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost2);



const x = 5;
const y = 10;
console.log("'x' is assigned x value of \"" + x + ",\" and 'y' is assigned x value of \"" + y + ".\"\n" +
"Therefore, 'x' plus 'y' is equal to " + (x + y) + ".");
// 'x' is assigned x value of "5," and 'y' is assigned x value of "10."
// Therefore, 'x' plus 'y' is equal to 15.


const a = 5;
const b = 10;
console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
Therefore, 'a' plus 'b' is equal to ${a + b}.`);
// 'a' is assigned a value of "5," and 'b' is assigned a value of "10."
// Therefore, 'a' plus 'b' is equal to 15.


