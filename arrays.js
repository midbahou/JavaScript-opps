
const names = ["John", "Adam", "Jerom"]; // lenght = 3
//     index:     0       1       2
const greetings = [];

console.log(names);
console.log(names.length);
console.log(typeof(names));
console.log(greetings);

for (let i = 0; i < names.length; i++) {
    greetings[i] = "Hello " + names[i] + "!";
    console.log(greetings[i]);   
}

console.log(greetings);


// using for of loop
for (let name of names) {
    console.log(name);
    
}


console.log("========== Movies ========================");

const movies = ['Caddyshack', 'Interstellar', 'Scarface'];
console.log(movies);
console.table(movies);

// reassigning the value of an element in the array
movies[0] = "Batman";
console.log(movies);

// assigning an element of the array to another varianble
let thisMovie = movies[0];
console.log(thisMovie);

// get the length of the array
console.log(movies.length);

// adds a new value to the end of the array
movies[movies.length] = "Transformers"
console.log(movies);

// add a new value to index 10 and will also add 6 empty indexes
movies[10] = "Shrek"

console.log(movies);
// movies[movies.length-1] = movies[-1]
// console.log(movies[-1]);

for (let i = 0; i < movies.length; i++) {
	console.log(movies[i]);
}


console.log("================ Array Methods ========================");

// concat two arrays
const yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
const myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

const ourMovies = yourMovies.concat(myMovies);

// create a copy
const ourMoviesCopy = ourMovies.concat()
console.log(ourMovies);
console.log(ourMoviesCopy);


// join Method: output a sting 
const moviesStr = ourMovies.join("--");
console.log(moviesStr.toUpperCase());


// push method: Adding to the end of the array
ourMoviesCopy.push('Trading Places', 'Antitrust');
console.log(ourMoviesCopy);

// unshift method: Adding to the begining of the array
ourMoviesCopy.unshift("Star Wars");


// Splice 
const topMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

let removeMovies = topMovies.splice(3, 1, "Spaceballs", "Alien");
// This starts at element 3 (Trading Places), removes 1 element, and adds Spaceballs and Alien.
// removedMovies => ['Trading Places']
// movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien']

removeMovies = topMovies.splice(0, 3);
// This starts at element 0 and removes 3 elements.
// removedMovies => ['Caddyshack', 'Interstellar', 'Scarface']
// movies => ['Spaceballs', 'Alien']

removeMovies = topMovies.splice(1, 0, "the Purge");
// This starts at element 1 and does not remove anything, but adds The Sting.
// removedMovies => []
// movies => ['Spaceballs', 'The Sting', 'Alien']



// Slice: Extract a Section of an Array
const oldMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

const favMovies = oldMovies.slice(1, 3); // start at index 1 and stop at 3, but it does not include index 3
console.log(favMovies);
console.log(oldMovies);



// at() - Access Elements using Relative Indexes
const currMovies = favMovies.at(1);
console.log(currMovies);



// flat() - Flatten Nested Arrays
const numArray = [1,2,3,4,5,6,7,8,9]