
// const providedName = prompt("Enter your Name:");

// sayHello(providedName);


// ===================== Function definition \ Function Declaration ==========
function sayHello(userName) {
    console.log("Hello " + userName + "!");
}

// function call
sayHello ("Colton"); // hoisted: you can call it anywhere in the script


// ============== Function Expresion ===============================
let sayBye = function(userName) {
    console.log("See you later " + userName + '!');
}

sayBye("Tom") // don't get hoisted to the top of the script



// ============== Arrow Function ===============================
const add = (a, b) => console.log(a + b);
//             X  f(x)= a + b 

// function call
add(3, 5) // Not hoisted!


const addFive = (num) => {
    console.log(num + 5);
}

addFive(6); // 11


// using function with a function or method: Callback function
const nums = [4, 6, 29];

nums.forEach((num) => console.log(num));

nums.forEach(function (num) {
    console.log(num);
});


// functions with return keyword
function addTen(a) {
    // console.log(a + 10);
    return a + 10; // return the value outside the fumctiom
}

const results = addTen(6);

console.log(results);



// Exercise:

function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2); 
}

const isEvenResult = areBothEven(4, 8);

console.log(isEvenResult);

console.log(!(4 % 2)); // in this case only convert it to a booliean


// Practice Activity 1: Write a Function Declaration

//*TODO: Write a function named computeArea using the function declaration approach.

    //* It will have two parameters: width & height.
    //* It will compute the area of a rectangle (width multiplied by height) and return a string in the following form:

    //* The area of a rectangle with a width of _ and a height of _ is ___ square units.

    //* Invoke the function to test it

    
function computeArea2(width, height) {
    return width * height;
}
 
let areaResult = computeArea2(5, 10);
console.log(`The area of a rectangle with a width of 5 and a height of 10 is ${areaResult} square units.`);


// Other way to do it
function computeArea(width, height) {
    let area = width * height;
    return(`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`);  
    // return(area);  // saving the results 
}
const areaResults = computeArea(5, 6);
console.log(areaResults);
// computeArea(3, 6);



// Practice Activity 2: Write a Function Expression
//*TODO: Write a function named planetHasWater using the function expression syntax.

    //* It will have one parameter: planet.
    //* Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
    //* Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).
    //* Invoke the function a couple of times to test it!



let planetHasWater = function(planet){
    if (!(planet == "Earth" || planet == "Mars")) {
        return !(planet.toLowerCase == "Earth" || planet.toLowerCase == "Mars")
    } else {
        return ("Not defined")
    }
}
console.log(planetHasWater("earsth"))



console.log("============================");

// hidden "arguments" variable
function getDevObject(name){
    console.log(name);
    console.log(arguments);
}

let maria = getDevObject("Maria", "HTML", "JS")

// f(x) name of f(x) parametres
function getDevObject(name){
    const skills = [];
    
    for (let i = 0; i < arguments.length; i++) {
       skills.push(arguments[i]);  
    }

    return {
        devName: name,
        devSkill: skills
    }
}

let maria2 = getDevObject("Maria", "HTML", "JS", "NodeJS", "React");
console.log(maria2);


// Rest Parameters
function devObjectRest(name, age, ...skills){
    console.log(name);
    console.log(skills);
    return {
        devname: name,
        devAge: age,
        devSkills: skills
    }
}

let max = devObjectRest("Max", 30, "JS", "CSS", "HTML");
console.log(max);



// Default Parameters

function setColor(bicycle, color) {
    console.log(color);
    bicycle.color = color || "purple"
}

const myBike = {};

setColor(myBike, "Black");

console.log(myBike);


function setWheels(bike, wheels = 4) {
    bike.wheels = wheels
}

setWheels(myBike, 5);
console.log(myBike);



// functions can be pass as arguments to other functions
function myForEach(arr, func) {
    for (let item of arr){
        func(item)
    }
}

const colors = ["red", "blue", "green"]

myForEach(colors, (element) => {
    console.log(element.toUpperCase());
});

myForEach(colors, function(elem){
    console.log(elem.toUpperCase());
});


// IIFE annonmous function
(function(){
    console.log("IIFE---s");
    return
})()