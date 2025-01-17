// For Loops:

// counts up to 10
for (let i = 0; i <= 10; i++) {
    console.log(`The value of i is: ${i}`);
}

// counts down from 10 to 1
for (let x = 10; x > 0; x--) {
    console.log(x);
}

console.log("=====count from 5 to 15========");

// counts from 5 to 15
for (let x = 5; x <= 15; x++) {
    console.log(x);
}

console.log("=====output odd numbers from 1 to 10========");
// output odd numbers from 1 to 10
for (x = 1; x <= 10; x += 2) {
    console.log(x);
}

console.log("Same Thing using if statement");
for (let i = 1; i <=10; i++){
    // check if the reminder is not equals to 0
    if (i % 2 !== 0) {
        console.log(i)
    }
}


console.log("=====output even numbers from 1 to 10========");
for (i = 0; i <= 10; i += 2) {
    console.log(i); 
}


console.log("Output multiples of 3, starting at 6 and ending at 60.");
for (i = 6; i <= 60; i += 3) {
    console.log(i); 
}


console.log("Output an increasing number of # symbols, from 1 to 7, as shown below.");
for (i = 1; i <= 7; i++) {
    console.log("#".repeat(i)); 
}

console.log("Another to do it");
let hashhtag = '';
for (let i = 1; i <= 7; i++) {
    hashhtag += "#"
    console.log(hashhtag);
}



console.log("======= Loop over a String ===========");

let strg = "Hello World!";

console.log(strg[0]); // access a char by the index
console.log(strg.length); // access the length of the string

for (let i = 0; i < strg.length; i++) {
    console.log(strg[i]);
    // console.log(`The character ${strg[i]} is at index ${i}`);
}


console.log("====== For in Loop =============");
// For in Loops is normally used with objects and they return the index oor the property name.
for (const i in strg) {
    console.log(strg[i]);
}

// Looping over object will return the property name
let myObject = {name: "Max"};
for (const i in myObject){
    console.log(i);
}


console.log("===== For of Loop =====");
// For of Loop return the values of a iterable
for (const i of strg) {
    console.log(i);
}

// Loop over an array and access each value in the array
let myArray = ["Hello", "world", "JS", "HTML"]

for (const word of myArray) {
    console.log(word);
}


console.log("=== COntinue (Control Flow) ======");

for (let i=0; i < strg.length; i++) {
    if (strg[i] === 'l') {
        continue // skips the current iteration
        // break // exit the loop
    }
    console.log(strg[i]);       
}


console.log("=== COntinue (In) (Control Flow) ======");
for (const i in strg) {
    if (strg[i] == "l") {
        continue;
	}
    
	console.log(strg[i]);
}

console.log("=== COntinue (For) (Control Flow) ======");
for (const c of strg) {
	if (c == "l") {
		continue;
	}

	console.log(c);
}




console.log("=========== While Loop ============");

let value = 30;

while (value > 0) {
    if (value === 20) {
        value--;
        continue
    }
    
    if (value === 15) {
        break;
    }
    
    value--;
    console.log(value);
}
