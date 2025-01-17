// string

let myVar = 'Hello JS' .toLowerCase()
console.log(myVar);

let htmml = 'hello html';
console.log(htmml.toUpperCase());


let str1 = "Hello";
console.log(str1.length);


let str2 = "World!";
console.log(str2.length);

let message = str1 + " " + str2;
console.log(message);


let email = "user1@example.com";
let providedEmail = " User1@example.com ";

if (email.toLowerCase().trim === providedEmail.toLowerCase().trim) { // .trim is to ignore the spaces
    console.log(`hello ${email}`);
    
} else {
    console.log(`hello random user`);
    
}