

const myCar = {
    color: "Blue",
    hp: 4000,
    year: 1998,
    isElectric: false,
    "Active Regestration": true,
};
console.log(myCar);
console.log(myCar.year);
console.log(myCar.color);
console.log(myCar.hp);
console.log(myCar.isElectric);

console.log(typeof myCar.isElectric);
console.log(typeof myCar.color);
console.log(typeof myCar.hp);

// also access the value of the provided key
console.log(myCar["Active Regestration"]);
console.log(typeof myCar["Active Regestration"]);


// reassign the value of properties
myCar.color = "Black";
myCar.isElectric = true;

// add new properties
//   key = value
myCar.mpg = 20;
myCar.autoPilot = "Teslas Auto Software";

// deletes a property
delete myCar["Active Regestration"]

console.log(myCar);

// loopong inside an object, we access each 
for (const key in myCar) {
    // console.log(`${key}: ${myCar[key]}`);
    
    if (myCar[key] === 4000) {
        console.log(`HP is: ${myCar[key]}`);
        break;
    } else {
        console.log(myCar[key]);
    }
}


// returns an array of the object's value
const values = Object.values(myCar);
values.forEach((value) => console.log(value));

// create an array and loop over the array of values
for (let value of Object.values(myCar)) {
    console.log(value);
}


// Objects Methods
// add a new engine property
myCar.engine = {
    size: 3.1,
    cylinders: 6
}
console.log(myCar);
console.log(myCar.engine.cylinders); // console.log(myCar[engine][cylinders])


// makes a copy of an object using the spread operator
const myUserCar = {...myCar}; // making a copy
console.log(myUserCar);

console.log(myUserCar == myCar); // false
console.log(myUserCar.engine == myCar.engine); // true



