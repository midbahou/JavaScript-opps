
// flat() - Flatten Nested Arrays
const numArray2 = [1,2,3,4,5,6,7,8,9];

console.log(numArray2[0]);
// console.table(numArray2);

// Nested Array
const nums = ["Max", 34, true, [100]]
console.log(nums);


const numbers = [
    [1, 2, 3], // index 0
    [4, 5, 6], // index 1
    [7, 8, 9] // index 2
//   0  1  2
];

console.log(numbers[2][1]); // log the index 1 inside the index array 2 = 8
const oneDim = numbers.flat();
console.log(oneDim);
// one Dim [1, 2, 3, 4, 5, 6, 7, 8, 9]



const numArray = [
    [1, 2, 3], // index 0
    [4, 5, 6], // index 1
    [ // index 2
        [7, 8, 9], 
        [10, 11, 12],
        [13, 14, 15]
    ]
];
console.log(numArray[2][1][0]); // 10

const twoDim = numArray.flat(2);
console.log(twoDim);
// twoDim [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]



// sort() - Sort an Array
let numArr = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
console.log(numArr.sort()); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8]
console.log(numArr.sort((a, b) => a - b)); //  [-14, 0, 1, 4, 8, 20, 22, 77, 1388] : Right Answer

// Sort a string : Alphabetic order
let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];
console.log(movies.sort()); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo']
console.log(movies.sort().reverse()); // ['The Count of Monte Cristo', 'Spaceballs', 'Shrek', 'Scarface', 'Interstellar', 'Caddyshack', 'Batman', 'Alien']


// indexOf() and lastIndexOf() - Search an Array
console.log(movies.indexOf("Batman")); // 6

// find the index of the element
let index = movies.indexOf("Batman")
console.log(index); // 6

// splice the element using the index
const deletedMovies = movies.splice(index, 1, "ToyStory");
console.log(deletedMovies); // ['Batman']

console.log(movies); // ['The Count of Monte Cristo', 'Spaceballs', 'Shrek', 'Scarface', 'Interstellar', 'Caddyshack', 'ToyStory', 'Alien']




// forEach() - Iterate Over All of the Elements in an Array

movies.forEach( (movie) => console.log(movie) );

numArray.forEach( (num) => console.log(num.flat()) );

// cannot break or continue
movies.forEach((movie, index)=> {
    console.log(index + ") " + movie);
});


for (let m of movies) {
    console.log(m);
    
    if (m === "ToyStory") {
        break
    }
}


// The Spread Operator can make a copy of any array
const moviesCopy = [...movies];

console.log(movies);
console.log(moviesCopy);

console.log(movies === moviesCopy);

const newMovies = ["Toy Story", ...movies, "TItanic"];
console.log(newMovies);

